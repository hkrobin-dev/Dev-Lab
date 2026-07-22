import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { spaTreatments, spaFacilities } from "@/lib/hotel-data";

export const metadata: Metadata = {
  title: "Spa & Wellness | HKS Hotel",
  description: "Rejuvenate at the HKS Hotel spa with signature massages, facials, hammam rituals, and wellness facilities.",
};

export default function SpaPage() {
  return (
    <>
      <Hero
        title="Spa & Wellness"
        subtitle="Rejuvenation"
        description="Escape to a world of tranquility and transformative wellness experiences."
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80"
        showCta={false}
        compact
      />

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Treatments"
            title="Signature Spa Menu"
            description="Each treatment is designed to restore balance, beauty, and inner peace."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {spaTreatments.map((treatment) => (
              <div key={treatment.name} className="luxury-card overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-48 md:h-auto">
                    <Image src={treatment.image} alt={treatment.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl">{treatment.name}</h3>
                    <p className="mt-2 text-sm text-gold">
                      {treatment.duration} · ${treatment.price}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{treatment.description}</p>
                    <Button href="/contact" variant="ghost" className="mt-4 px-0">
                      Book Treatment →
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Facilities"
            title="Wellness Amenities"
            description="Beyond treatments, enjoy our complete wellness ecosystem."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {spaFacilities.map((facility) => (
              <div key={facility.title} className="luxury-card p-6 text-center">
                <h3 className="font-serif text-xl">{facility.title}</h3>
                <p className="mt-3 text-sm text-muted">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
