"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, hotelInfo } from "@/lib/hotel-data";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group">
          <span className="font-serif text-2xl tracking-wider text-foreground">
            HKS<span className="text-gold">.</span>
          </span>
          <span className="ml-1 hidden text-xs tracking-[0.2em] uppercase text-muted sm:inline">
            Hotel
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wider text-foreground/80 uppercase transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" variant="outline" className="px-6 py-2 text-xs">
            Book Now
          </Button>
        </div>

        <button
          className="text-foreground lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gold/20 bg-background/98 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-sm tracking-wider text-foreground/80 uppercase transition-colors hover:text-gold"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-4 w-full">
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
