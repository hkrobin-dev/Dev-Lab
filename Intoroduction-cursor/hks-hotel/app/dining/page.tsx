import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { diningVenues } from "@/lib/hotel-data";
import { Clock, Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "Dining | HKS Hotel",
  description: "Experience world-class dining at HKS Hotel — fine dining, rooftop bar, garden café, and 24/7 room service.",
};

export default function DiningPage() {
  return (
    <>
      <Hero
        title="Culinary Excellence"
        subtitle="Dining"
        description="From Michelin-inspired cuisine to artisan cocktails with skyline views."
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
        showCta={false}
        compact
      />
      <section className="section-padding">
        <div className="mx-auto max-w-7xl space-y-16">
          {diningVenues.map((venue, index) => (
            <div
              key={venue.id}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`relative h-72 overflow-hidden lg:h-96 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image src={venue.image} alt={venue.name} fill className="object-cover" />
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-sm tracking-[0.3em] uppercase text-gold">{venue.type}</p>
                <h2 className="mt-2 font-serif text-3xl md:text-4xl">{venue.name}</h2>
                <p className="mt-4 leading-relaxed text-muted">{venue.description}</p>
                <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted">
                  <span className="flex items-center gap-2">
                    <Utensils size={16} className="text-gold" /> {venue.cuisine}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} className="text-gold" /> {venue.hours}
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {venue.highlights.map((h) => (
                    <span key={h} className="border border-gold/20 px-3 py-1 text-xs text-gold">
                      {h}
                    </span>
                  ))}
                </div>
                <Button href="/contact" variant="outline" className="mt-8">
                  Reserve a Table
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
