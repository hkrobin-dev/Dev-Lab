"use client";

import { useActionState } from "react";
import { submitBooking, type BookingFormState } from "@/app/actions/booking";
import { roomTypeOptions } from "@/lib/hotel-data";
import Button from "./Button";

const initialState: BookingFormState = {
  success: false,
  message: "",
};

type BookingFormProps = {
  defaultRoom?: string;
};

export default function BookingForm({ defaultRoom }: BookingFormProps) {
  const [state, formAction, pending] = useActionState(submitBooking, initialState);

  if (state.success) {
    return (
      <div className="luxury-card border-gold/40 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold">
          <span className="text-2xl text-gold">✓</span>
        </div>
        <h3 className="font-serif text-2xl text-gold">Booking Request Sent</h3>
        <p className="mt-4 text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.message && !state.success && (
        <div className="border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
          {state.message}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="checkIn">Check-in Date</label>
          <input type="date" id="checkIn" name="checkIn" required />
          {state.errors?.checkIn && (
            <p className="mt-1 text-xs text-red-400">{state.errors.checkIn[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="checkOut">Check-out Date</label>
          <input type="date" id="checkOut" name="checkOut" required />
          {state.errors?.checkOut && (
            <p className="mt-1 text-xs text-red-400">{state.errors.checkOut[0]}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="roomType">Room Type</label>
        <select id="roomType" name="roomType" defaultValue={defaultRoom || ""} required>
          <option value="">Select a room</option>
          {roomTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {state.errors?.roomType && (
          <p className="mt-1 text-xs text-red-400">{state.errors.roomType[0]}</p>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="adults">Adults</label>
          <input type="number" id="adults" name="adults" min={1} max={10} defaultValue={2} required />
          {state.errors?.adults && (
            <p className="mt-1 text-xs text-red-400">{state.errors.adults[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="children">Children</label>
          <input type="number" id="children" name="children" min={0} max={10} defaultValue={0} />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="John Doe" required />
          {state.errors?.name && (
            <p className="mt-1 text-xs text-red-400">{state.errors.name[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="john@example.com" required />
          {state.errors?.email && (
            <p className="mt-1 text-xs text-red-400">{state.errors.email[0]}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" required />
        {state.errors?.phone && (
          <p className="mt-1 text-xs text-red-400">{state.errors.phone[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="requests">Special Requests (Optional)</label>
        <textarea id="requests" name="requests" rows={4} placeholder="Early check-in, dietary requirements, celebrations..." />
      </div>

      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Submitting..." : "Submit Booking Request"}
      </Button>
    </form>
  );
}
