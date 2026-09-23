"use client";

import { Coffee, Droplet, Gem, Moon, Shirt, Sparkles, Sun } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLang } from "@/lib/i18n";
import type { Archetype } from "@/data/vibes";

/** Icon keys come from data/vibes.ts so the copy stays data-only. */
const ICONS: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  droplet: Droplet,
  shirt: Shirt,
  gem: Gem,
  coffee: Coffee,
  sun: Sun,
  moon: Moon,
};

export function StyleBento({ girl }: { girl: Archetype }) {
  const { t, pick } = useLang();

  return (
    <section aria-labelledby="style-heading">
      <h2
        id="style-heading"
        className="text-[0.72rem] font-semibold tracking-[0.14em] text-ink/45 uppercase"
      >
        {t("result.style")}
      </h2>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {/* Palette — the most shareable piece of a personal style guide. */}
        <div className="col-span-2 overflow-hidden rounded-3xl border border-ink/8 bg-white p-4">
          <p className="text-[0.78rem] font-medium text-ink/50">{t("result.palette")}</p>
          <div className="mt-3 flex gap-2">
            {girl.swatches.map((hex, i) => (
              <div key={hex} className="flex-1">
                <div
                  className="h-14 w-full rounded-2xl shadow-inner ring-1 ring-ink/6 ring-inset transition-transform duration-300 hover:scale-105"
                  style={{ backgroundColor: hex, animationDelay: `${i * 60}ms` }}
                />
                <p className="mt-1.5 text-center text-[0.6rem] tracking-wide text-ink/40 uppercase">
                  {hex.replace("#", "")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {girl.chips.map((chip, i) => {
          const Icon = ICONS[chip.icon] ?? Sparkles;
          // Last chip (index 2) gets full width
          const isLast = i === girl.chips.length - 1;
          return (
            <div
              key={chip.icon + chip.label.en}
              className={`group flex flex-col gap-2 rounded-3xl border border-ink/8 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/25 hover:shadow-[0_12px_28px_-18px_rgba(245,43,131,0.45)] ${
                isLast ? "col-span-2 flex-row items-center" : ""
              }`}
            >
              <span
                className={`flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                  isLast ? "h-10 w-10 shrink-0" : "h-9 w-9"
                }`}
                style={{ backgroundColor: `${girl.palette.accent}14` }}
              >
                <Icon
                  className="h-4.5 w-4.5"
                  strokeWidth={1.6}
                  style={{ color: girl.palette.accent }}
                  aria-hidden="true"
                />
              </span>
              <div className={isLast ? "flex-1" : ""}>
                <p className="text-[0.875rem] leading-tight font-medium">{pick(chip.label)}</p>
                {isLast && (
                  <p className="mt-0.5 text-[0.72rem] text-ink/45 font-normal">
                    {girl.emoji} {pick(girl.scent.productName)}
                  </p>
                )}
              </div>
              {isLast && (
                <span
                  className="ms-auto text-[0.72rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{ backgroundColor: `${girl.palette.accent}18`, color: girl.palette.accent }}
                >
                  {pick(girl.era)}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
