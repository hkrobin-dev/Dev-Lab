"use server";

import { z } from "zod";

const bookingSchema = z.object({
  checkIn: z.string().min(1, "Check-in date is required"),
  checkOut: z.string().min(1, "Check-out date is required"),
  roomType: z.string().min(1, "Please select a room type"),
  adults: z.coerce.number().min(1, "At least 1 adult required"),
  children: z.coerce.number().min(0),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(7, "Valid phone number is required"),
  requests: z.string().optional(),
});

export type BookingFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitBooking(
  _prevState: BookingFormState,
  formData: FormData
): Promise<BookingFormState> {
  const raw = {
    checkIn: formData.get("checkIn"),
    checkOut: formData.get("checkOut"),
    roomType: formData.get("roomType"),
    adults: formData.get("adults"),
    children: formData.get("children"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    requests: formData.get("requests") || "",
  };

  const result = bookingSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { checkIn, checkOut } = result.data;
  if (new Date(checkOut) <= new Date(checkIn)) {
    return {
      success: false,
      message: "Check-out must be after check-in.",
      errors: { checkOut: ["Check-out must be after check-in."] },
    };
  }

  console.log("New booking received:", result.data);

  return {
    success: true,
    message: `Thank you, ${result.data.name}! Your booking request has been received. Our team will confirm your reservation at ${result.data.email} within 24 hours.`,
  };
}
