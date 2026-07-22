import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/lib/hotel-data";

export const metadata: Metadata = {
  title: "Rooms & Suites | HKS Hotel",
  description: "Explore our luxurious rooms and suites at HKS Hotel, from Deluxe Rooms to the Presidential Suite.",
};

export default function RoomsPage() {
  return (
    <>
      <Hero
        title="Rooms & Suites"
        subtitle="Accommodations"
        description="Discover accommodations designed for the most discerning travelers."
        image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80"
        showCta={false}
        compact
      />
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Our Collection"
            title="Every Room, A Masterpiece"
            description="Choose from our curated selection of rooms and suites, each offering unique luxury and comfort."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
