"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Lang } from "@/data/i18n";

const OPTIONS: { id: Lang; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "ar", label: "ع" },
];

/**
 * The language switch. It only lives in the home header — the quiz and the
 * result are about her, not about chrome, so we keep those screens clean.
 */
export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLang();
  const reduced = useReducedMotion();

  return (
    <div
      role="group"
      aria-label={t("lang.aria")}
      className={cn(
        "relative flex items-center gap-0.5 rounded-full border border-rose/15 bg-white/70 p-1 backdrop-blur-md",
        "shadow-[0_6px_18px_-10px_var(--glow)]",
        className
      )}
    >
      {OPTIONS.map((option) => {
        const active = lang === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => setLang(option.id)}
            aria-pressed={active}
            className={cn(
              "relative flex h-7 min-w-8 items-center justify-center rounded-full px-2 text-[0.74rem] font-bold transition",
              active ? "text-white" : "text-ink/45 hover:text-ink"
            )}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-rose to-petal shadow-sm"
                transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 480, damping: 38 }}
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
