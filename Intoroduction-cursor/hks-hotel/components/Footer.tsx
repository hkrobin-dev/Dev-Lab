import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { hotelInfo, navLinks } from "@/lib/hotel-data";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-charcoal">
      <div className="mx-auto max-w-7xl section-padding !py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="font-serif text-3xl tracking-wider">
              HKS<span className="text-gold">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">{hotelInfo.description}</p>
            <div className="mt-6 flex gap-4">
              <a href={hotelInfo.social.instagram} className="text-muted transition-colors hover:text-gold" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href={hotelInfo.social.facebook} className="text-muted transition-colors hover:text-gold" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href={hotelInfo.social.twitter} className="text-muted transition-colors hover:text-gold" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm tracking-[0.2em] uppercase text-gold">Explore</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm tracking-[0.2em] uppercase text-gold">Contact</h3>
            <ul className="space-y-4 text-sm text-muted">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                {hotelInfo.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-gold" />
                {hotelInfo.phone}
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-gold" />
                {hotelInfo.email}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm tracking-[0.2em] uppercase text-gold">Hours</h3>
            <p className="text-sm leading-relaxed text-muted">{hotelInfo.hours}</p>
            <div className="mt-6">
              <p className="text-sm text-muted">Awards</p>
              <ul className="mt-2 space-y-1">
                {hotelInfo.awards.map((award) => (
                  <li key={award} className="text-sm text-gold">
                    ★ {award}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gold/10 pt-8 text-center text-sm text-muted">
          © {new Date().getFullYear()} {hotelInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
