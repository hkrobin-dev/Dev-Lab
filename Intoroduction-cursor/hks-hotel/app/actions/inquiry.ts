"use server";

import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InquiryFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitInquiry(
  _prevState: InquiryFormState,
  formData: FormData
): Promise<InquiryFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const result = inquirySchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  console.log("New inquiry received:", result.data);

  return {
    success: true,
    message: `Thank you, ${result.data.name}! We have received your message and will respond to ${result.data.email} shortly.`,
  };
}
