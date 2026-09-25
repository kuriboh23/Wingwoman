"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { House, ShoppingBag, Sparkles } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Floating bottom navigation — renders on EVERY page via app/layout.tsx.
 *
 * The whole bar stays inside one centered 80% shell, so:
 *  - the pill keeps a 16px gutter on phones and 24px on tablets,
 *  - nothing can ever be pushed off-screen or clipped on a wide device,
 *  - the bar is a true fixed element that always clears the home bar.
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
      className="fixed inset-x-0 bottom-0 z-50"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/85 to-transparent" />

      <div className="relative mx-auto w-[80%] max-w-lg px-4 sm:px-6 pb-safe">
        <div
          className={cn(
            "grid grid-cols-3 gap-0.5 rounded-full border border-white/60 bg-white/80 p-1",
            "shadow-[0_14px_38px_-14px_rgba(21,19,26,0.35)] backdrop-blur-xl"
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
                  "group relative flex h-11 min-w-0 items-center justify-center gap-1.5 rounded-full px-2",
                  "transition-colors duration-200",
                  active ? "text-white" : "text-ink/55 hover:text-ink",
                  featured && !active && "text-rose"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-bubble"
                    className={cn(
                      "absolute inset-0 rounded-full bg-gradient-to-r shadow-md",
                      featured
                        ? "from-rose via-petal to-blush shadow-rose/40"
                        : "from-ink to-[#3a3444] shadow-ink/30"
                    )}
                    transition={{ type: "spring", stiffness: 480, damping: 40 }}
                  />
                )}

                <motion.span
                  className="relative z-10 flex shrink-0"
                  whileTap={reduced ? undefined : { scale: 0.82, rotate: -6 }}
                  transition={{ type: "spring", stiffness: 500, damping: 18 }}
                >
                  <Icon
                    className={cn(
                      "h-[1.05rem] w-[1.05rem] sm:h-[1.15rem] sm:w-[1.15rem]",
                      featured && "drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
                    )}
                    strokeWidth={active ? 2.4 : 2}
                  />
                </motion.span>

                <span className="relative z-10 truncate text-[0.7rem] leading-none font-bold tracking-wide whitespace-nowrap sm:text-[0.72rem]">
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
