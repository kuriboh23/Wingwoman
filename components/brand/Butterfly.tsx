import { cn } from "@/lib/utils";

/**
 * The brand symbol, as vector so it can be recoloured per girl and animated.
 * The PRD calls the butterfly the main visual symbol; we keep it as a motif
 * even after the rename to Pink In Sweet.
 */
export function Butterfly({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      <ellipse cx="60" cy="62" rx="3.4" ry="25" fill="currentColor" />
      <ellipse
        cx="35"
        cy="43"
        rx="21"
        ry="15.5"
        transform="rotate(-30 35 43)"
        fill="currentColor"
        opacity="0.95"
      />
      <ellipse
        cx="85"
        cy="43"
        rx="21"
        ry="15.5"
        transform="rotate(30 85 43)"
        fill="currentColor"
        opacity="0.95"
      />
      <ellipse
        cx="40"
        cy="76"
        rx="14.5"
        ry="11"
        transform="rotate(24 40 76)"
        fill="currentColor"
        opacity="0.68"
      />
      <ellipse
        cx="80"
        cy="76"
        rx="14.5"
        ry="11"
        transform="rotate(-24 80 76)"
        fill="currentColor"
        opacity="0.68"
      />
      <path
        d="M58 40c-4-11-9-17-14-20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M62 40c4-11 9-17 14-20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Wordmark. Fraunces does the work; the butterfly is the signature. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Butterfly className="h-5 w-5 text-rose" />
      <span className="font-display text-[1.05rem] font-semibold tracking-tight">
        Pink In Sweet
      </span>
    </span>
  );
}
