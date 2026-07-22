"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <div className="relative mx-auto max-w-3xl text-center">
      <div className="mb-6 flex justify-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-gold text-gold" />
        ))}
      </div>
      <blockquote className="font-serif text-2xl leading-relaxed md:text-3xl">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mt-8">
        <p className="text-lg font-medium">{testimonial.name}</p>
        <p className="text-sm text-muted">{testimonial.role}</p>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center border border-gold/30 text-gold transition-colors hover:border-gold hover:bg-gold hover:text-background"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center border border-gold/30 text-gold transition-colors hover:border-gold hover:bg-gold hover:text-background"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
