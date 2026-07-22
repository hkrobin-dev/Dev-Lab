import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import RoomCard from "@/components/RoomCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Button from "@/components/Button";
import {
  hotelInfo,
  rooms,
  services,
  amenities,
  diningVenues,
  spaTreatments,
  testimonials,
} from "@/lib/hotel-data";
import { Waves, Dumbbell, Coffee, Shield } from "lucide-react";

const amenityIcons: Record<string, React.ElementType> = {
  waves: Waves,
  dumbbell: Dumbbell,
  coffee: Coffee,
  shield: Shield,
};

export default function Home() {
  const featuredRooms = rooms.filter((r) => r.featured);

  return (
    <>
      <Hero
        title="HKS Hotel"
        subtitle="Five Star Luxury"
        description={hotelInfo.tagline}
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
      />

      {/* About */}
      <section className="section-padding bg-cream text-background">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Welcome"
            title="A Sanctuary of Refined Luxury"
            description={hotelInfo.description}
            light
          />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-80 overflow-hidden lg:h-[450px]">
              <Image
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
                alt="HKS Hotel lobby"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="mb-6 flex gap-2">
                {Array.from({ length: hotelInfo.rating }).map((_, i) => (
                  <span key={i} className="text-gold-light text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="leading-relaxed text-background/80">
                Since our founding, HKS Hotel has been the destination of choice for royalty,
                celebrities, and discerning travelers. Every corner of our property reflects
                our commitment to excellence — from hand-selected art to personalized service
                that anticipates your every need.
              </p>
              <ul className="mt-6 space-y-2">
                {hotelInfo.awards.map((award) => (
                  <li key={award} className="flex items-center gap-2 text-sm text-background/70">
                    <span className="text-gold-light">◆</span> {award}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Accommodations"
            title="Featured Rooms & Suites"
            description="Each room is a masterpiece of design, comfort, and sophistication."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/rooms" variant="outline">
              View All Rooms
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-charcoal">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Our Services"
            title="Exceptional Service, Every Moment"
            description="From arrival to departure, our dedicated team ensures an flawless experience."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Dining Preview */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Culinary Excellence"
            title="World-Class Dining"
            description="Savor exceptional cuisine crafted by award-winning chefs."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {diningVenues.slice(0, 2).map((venue) => (
              <Link key={venue.id} href="/dining" className="luxury-card group overflow-hidden">
                <div className="relative h-56">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs tracking-widest uppercase text-gold">{venue.type}</p>
                  <h3 className="mt-2 font-serif text-2xl">{venue.name}</h3>
                  <p className="mt-2 text-sm text-muted">{venue.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/dining" variant="outline">
              Explore Dining
            </Button>
          </div>
        </div>
      </section>

      {/* Spa Preview */}
      <section className="section-padding bg-charcoal">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Spa & Wellness"
            title="Rejuvenate Your Senses"
            description="Indulge in transformative treatments at our world-class spa."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {spaTreatments.map((treatment) => (
              <div key={treatment.name} className="luxury-card overflow-hidden">
                <div className="relative h-40">
                  <Image src={treatment.image} alt={treatment.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg">{treatment.name}</h3>
                  <p className="mt-1 text-xs text-gold">
                    {treatment.duration} · ${treatment.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/spa" variant="outline">
              View Spa Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Amenities"
            title="Premium Facilities"
            description="Everything you need for a perfect stay, all under one roof."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((amenity) => {
              const Icon = amenityIcons[amenity.icon];
              return (
                <div key={amenity.title} className="luxury-card p-6 text-center">
                  {Icon && (
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30">
                      <Icon size={24} className="text-gold" />
                    </div>
                  )}
                  <h3 className="font-serif text-xl">{amenity.title}</h3>
                  <p className="mt-2 text-sm text-muted">{amenity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-cream text-background">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Guest Reviews"
            title="What Our Guests Say"
            light
          />
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative flex items-center justify-center py-32">
        <Image
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80"
          alt="Pool at sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl">Begin Your Luxury Journey</h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/80">
            Reserve your stay at HKS Hotel and discover why we are the city&apos;s most celebrated destination.
          </p>
          <Button href="/contact" className="mt-8">
            Book Your Stay
          </Button>
        </div>
      </section>
    </>
  );
}
