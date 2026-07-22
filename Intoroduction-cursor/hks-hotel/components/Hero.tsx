import Image from "next/image";
import Button from "./Button";

type HeroProps = {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  showCta?: boolean;
  ctaText?: string;
  ctaHref?: string;
  overlay?: boolean;
  compact?: boolean;
};

export default function Hero({
  title,
  subtitle,
  description,
  image,
  showCta = true,
  ctaText = "Book Your Stay",
  ctaHref = "/contact",
  overlay = true,
  compact = false,
}: HeroProps) {
  return (
    <section className={`relative flex items-center justify-center overflow-hidden ${compact ? "h-[50vh] min-h-[400px]" : "h-screen min-h-[700px]"}`}>
      <Image src={image} alt={title} fill priority className="object-cover" />
      {overlay && <div className="absolute inset-0 bg-black/55" />}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center animate-fade-in-up">
        {subtitle && (
          <p className="mb-4 text-sm tracking-[0.4em] uppercase text-gold">{subtitle}</p>
        )}
        <h1 className="font-serif text-5xl leading-tight md:text-6xl lg:text-7xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            {description}
          </p>
        )}
        {showCta && (
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={ctaHref}>{ctaText}</Button>
            <Button href="/rooms" variant="outline">
              View Rooms
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
