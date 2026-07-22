"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryFormState } from "@/app/actions/inquiry";
import Button from "./Button";

const initialState: InquiryFormState = {
  success: false,
  message: "",
};

export default function InquiryForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);

  if (state.success) {
    return (
      <div className="luxury-card border-gold/40 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold">
          <span className="text-2xl text-gold">✓</span>
        </div>
        <h3 className="font-serif text-2xl text-gold">Message Sent</h3>
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
          <label htmlFor="inquiry-name">Full Name</label>
          <input type="text" id="inquiry-name" name="name" placeholder="John Doe" required />
          {state.errors?.name && (
            <p className="mt-1 text-xs text-red-400">{state.errors.name[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="inquiry-email">Email</label>
          <input type="email" id="inquiry-email" name="email" placeholder="john@example.com" required />
          {state.errors?.email && (
            <p className="mt-1 text-xs text-red-400">{state.errors.email[0]}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Event inquiry, general question..." required />
        {state.errors?.subject && (
          <p className="mt-1 text-xs text-red-400">{state.errors.subject[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us how we can assist you..."
          required
        />
        {state.errors?.message && (
          <p className="mt-1 text-xs text-red-400">{state.errors.message[0]}</p>
        )}
      </div>

      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
