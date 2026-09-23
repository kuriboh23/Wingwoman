"use client";

import { Coffee, Droplet, Gem, Moon, Shirt, Sparkles, Sun } from "lucide-react";
import type { LucideIcon } from "lucide-react";
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
  return (
    <section aria-labelledby="style-heading">
      <h2
        id="style-heading"
        className="font-sans text-[0.72rem] font-semibold tracking-[0.14em] text-ink/45 uppercase"
      >
        Her style
      </h2>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {/* Palette — the most shareable piece of a personal style guide. */}
        <div className="col-span-2 rounded-3xl border border-ink/8 bg-white p-4">
          <p className="text-[0.78rem] font-medium text-ink/50">Your palette today</p>
          <div className="mt-3 flex gap-2">
            {girl.swatches.map((hex) => (
              <div key={hex} className="flex-1">
                <div
                  className="h-12 w-full rounded-2xl ring-1 ring-ink/6 ring-inset"
                  style={{ backgroundColor: hex }}
                />
                <p className="mt-1.5 text-center text-[0.6rem] tracking-wide text-ink/40 uppercase">
                  {hex.replace("#", "")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {girl.chips.map((chip) => {
          const Icon = ICONS[chip.icon] ?? Sparkles;
          return (
            <div
              key={chip.label}
              className="flex flex-col gap-2 rounded-3xl border border-ink/8 bg-white p-4"
            >
              <Icon
                className="h-5 w-5"
                strokeWidth={1.5}
                style={{ color: girl.palette.accent }}
                aria-hidden="true"
              />
              <p className="text-[0.875rem] leading-tight font-medium">{chip.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
