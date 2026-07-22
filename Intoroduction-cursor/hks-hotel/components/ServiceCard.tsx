import {
  ConciergeBell,
  Car,
  Plane,
  Bell,
  Shirt,
  Wifi,
  Baby,
  Briefcase,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  concierge: ConciergeBell,
  car: Car,
  plane: Plane,
  bell: Bell,
  shirt: Shirt,
  wifi: Wifi,
  baby: Baby,
  briefcase: Briefcase,
};

type Service = {
  icon: string;
  title: string;
  description: string;
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || ConciergeBell;

  return (
    <div className="luxury-card p-6 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30">
        <Icon size={24} className="text-gold" />
      </div>
      <h3 className="font-serif text-xl">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
    </div>
  );
}
