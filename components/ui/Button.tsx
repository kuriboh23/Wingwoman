import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "lg" | "md" | "sm";

/**
 * Buttons that feel alive: gradient fill, a light sheen that sweeps across on
 * hover, a coloured glow underneath, and a springy press. No more flat 2005
 * rectangles.
 */
const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden font-semibold rounded-full transition " +
  "active:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none select-none touch-manipulation";

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-gradient-to-r from-[#F52B83] via-[#FF4D9D] to-[#FF7A9E] " +
    "shadow-[0_12px_32px_-10px_rgba(245,43,131,0.55)] " +
    "hover:shadow-[0_16px_40px_-10px_rgba(245,43,131,0.7)] hover:brightness-105",
  secondary:
    "bg-white text-ink border border-ink/10 shadow-[0_6px_20px_-10px_rgba(21,19,26,0.25)] " +
    "hover:border-rose/40 hover:text-rose",
  ghost: "bg-transparent text-ink/70 hover:text-ink",
};

// 44px minimum tap target everywhere — this is mobile-first or it's nothing.
const sizes: Record<Size, string> = {
  lg: "h-14 px-7 text-[1.0625rem]",
  md: "h-12 px-5 text-[0.95rem]",
  sm: "h-11 px-4 text-[0.875rem]",
};

/** The animated sheen — a skewed light bar that glides across on hover. */
function Sheen() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
    >
      <span
        className="absolute -top-2 bottom-0 w-0 -skew-x-12 bg-white/30 blur-md transition-all duration-700 ease-out group-hover:left-[110%] group-hover:w-16"
        style={{ left: "-30%" }}
      />
    </span>
  );
}

function decorate(children: ReactNode) {
  return (
    <>
      <Sheen />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );
}

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "lg",
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {decorate(children)}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "lg",
  className,
  children,
  href,
  ...rest
}: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {decorate(children)}
    </Link>
  );
}

/** For external destinations (WhatsApp, Instagram). */
export function ButtonAnchor({
  variant = "primary",
  size = "lg",
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"a">) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {decorate(children)}
    </a>
  );
}
