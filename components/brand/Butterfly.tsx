import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * The brand symbol. The hand-drawn butterfly from the MVP board, extracted
 * onto transparency (public/brand/butterfly.png). Recolourable per variant
 * via `color` — CSS filters tint the pink artwork without extra assets.
 */
export function Butterfly({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) {
  // Pink source (#F52B83 ≈ hue 331°). Shifts: orange ≈ +23°, brown ≈ +27°
  // with a darken, identity for pink. A non-hex `color` (e.g. the theme
  // token `var(--color-rose)`) can't be hue-matched, so it stays untinted.
  const filter =
    color === "#F4732B"
      ? "hue-rotate(23deg) saturate(1.1)"
      : color === "#8A5A3B"
        ? "hue-rotate(27deg) saturate(0.55) brightness(0.72)"
        : undefined;

  return (
    <span
      className={cn("relative inline-block", className)}
      style={{ color }}
      aria-hidden="true"
    >
      <Image
        src="/brand/butterfly.png"
        alt=""
        fill
        sizes="64px"
        className="object-contain"
        style={{ filter }}
        priority={false}
      />
    </span>
  );
}

/**
 * Wordmark: iconic butterfly accompanied by live text styled with the playful bubble font.
 */
export function Wordmark({
  className,
  dark = false,
  size = "md",
}: {
  className?: string;
  dark?: boolean;
  size?: "md" | "lg";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2 group cursor-pointer select-none", className)}>
      <Butterfly
        className={cn(
          "transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 drop-shadow-sm",
          size === "lg" ? "h-8 w-8" : "h-7 w-7"
        )}
        color="var(--color-rose)"
      />
      <span
        style={{ fontFamily: "var(--font-dynapuff), cursive, sans-serif" }}
        className={cn(
          "font-bold tracking-tight lowercase first-letter:uppercase transition-colors duration-500",
          size === "lg" ? "text-[1.65rem] leading-none" : "text-[1.35rem] leading-none",
          dark ? "text-white" : "text-rose"
        )}
      >
        Wingwoman
      </span>
    </span>
  );
}
