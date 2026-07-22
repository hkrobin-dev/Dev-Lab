import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  href,
  variant = "primary",
  className,
  children,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300";

  const variants = {
    primary: "gold-gradient text-background hover:opacity-90 hover:shadow-lg hover:shadow-gold/20",
    outline: "border border-gold text-gold hover:bg-gold hover:text-background",
    ghost: "text-gold hover:text-gold-light",
  };

  const classes = cn(base, variants[variant], disabled && "opacity-50 cursor-not-allowed", className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
