type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
};

export default function SectionHeading({
  label,
  title,
  description,
  light = false,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <p className={`mb-3 text-sm tracking-[0.3em] uppercase ${light ? "text-gold" : "text-gold"}`}>
        {label}
      </p>
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl ${
          light ? "text-background" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed ${
            light ? "text-background/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
      <div className={`mt-6 h-px w-16 bg-gold ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
