import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "lg" | "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition " +
  "active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none " +
  "select-none touch-manipulation";

const variants: Record<Variant, string> = {
  primary: "bg-rose text-white shadow-[0_10px_30px_-10px_rgba(245,43,131,0.65)] hover:bg-[#e01f74]",
  secondary: "bg-white text-ink border border-ink/10 hover:border-ink/25",
  ghost: "bg-transparent text-ink/70 hover:text-ink",
};

// 44px minimum tap target everywhere — this is mobile-first or it's nothing.
const sizes: Record<Size, string> = {
  lg: "h-14 px-7 text-[1.0625rem]",
  md: "h-12 px-5 text-[0.95rem]",
  sm: "h-11 px-4 text-[0.875rem]",
};

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
      {children}
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
      {children}
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
      {children}
    </a>
  );
}
