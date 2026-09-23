"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { House, ShoppingBag, Sparkles } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Floating bottom navigation — the app-like chrome the brand deserves.
 * Glassy pill, safe-area aware, with a springy indicator behind the active
 * tab. "Find my girl" is the featured middle action, styled like a CTA.
 */
export function BottomNav() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const { t } = useLang();

  const items = [
    { href: "/", label: t("nav.home"), Icon: House, featured: false },
    { href: "/quiz", label: t("nav.findGirl"), Icon: Sparkles, featured: true },
    { href: "/shop", label: t("nav.shop"), Icon: ShoppingBag, featured: false },
  ];

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/85 to-transparent" />

      <div className="relative mx-4 mb-[calc(0.75rem+env(safe-area-inset-bottom))] w-full max-w-sm">
        <div
          className={cn(
            "grid grid-cols-3 gap-1 rounded-[1.75rem] border border-white/60 bg-white/80 p-1.5",
            "shadow-[0_18px_50px_-12px_rgba(21,19,26,0.35)] backdrop-blur-xl"
          )}
        >
          {items.map(({ href, label, Icon, featured }) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative flex min-h-14 flex-col items-center justify-center gap-0.5 rounded-2xl px-2 py-1.5",
                  "transition-colors duration-200",
                  active ? "text-white" : "text-ink/55 hover:text-ink",
                  featured && !active && "text-rose"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-bubble"
                    className={cn(
                      "absolute inset-0 rounded-2xl bg-gradient-to-r shadow-lg",
                      featured
                        ? "from-rose via-petal to-blush shadow-rose/40"
                        : "from-ink to-[#3a3444] shadow-ink/30"
                    )}
                    transition={{ type: "spring", stiffness: 480, damping: 40 }}
                  />
                )}

                <motion.span
                  className="relative z-10"
                  whileTap={reduced ? undefined : { scale: 0.82, rotate: -6 }}
                  transition={{ type: "spring", stiffness: 500, damping: 18 }}
                >
                  <Icon
                    className={cn("h-5 w-5", featured && "drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]")}
                    strokeWidth={active ? 2.4 : 2}
                  />
                </motion.span>

                <span className="relative z-10 text-[0.66rem] leading-none font-bold tracking-wide">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
