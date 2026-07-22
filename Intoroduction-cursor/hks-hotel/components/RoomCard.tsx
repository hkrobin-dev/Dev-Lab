import Image from "next/image";
import { Users, Maximize, BedDouble } from "lucide-react";
import Button from "./Button";

type Room = {
  id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  bed: string;
  guests: number;
  image: string;
  amenities: string[];
};

export default function RoomCard({ room }: { room: Room }) {
  return (
    <article className="luxury-card group overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 gold-gradient px-3 py-1 text-xs font-medium tracking-wider text-background uppercase">
          From ${room.price}/night
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl">{room.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{room.description}</p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
          <span className="flex items-center gap-1">
            <Maximize size={14} className="text-gold" /> {room.size}
          </span>
          <span className="flex items-center gap-1">
            <BedDouble size={14} className="text-gold" /> {room.bed}
          </span>
          <span className="flex items-center gap-1">
            <Users size={14} className="text-gold" /> {room.guests} Guests
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {room.amenities.slice(0, 4).map((amenity) => (
            <span key={amenity} className="border border-gold/20 px-2 py-1 text-xs text-gold">
              {amenity}
            </span>
          ))}
        </div>
        <Button href={`/contact?room=${room.id}`} variant="outline" className="mt-6 w-full">
          Book Now
        </Button>
      </div>
    </article>
  );
}
