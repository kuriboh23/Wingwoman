"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useLang } from "@/lib/i18n";
import { ARCHETYPE_ORDER, ARCHETYPES } from "@/data/vibes";
import type { ArchetypeId, ScoreMap } from "@/types";

/** Counts a number up so the percentages feel earned rather than printed. */
function useCountUp(target: number, active: boolean, duration = 900) {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setValue(target);
      return;
    }

    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutCubic — fast then settling, reads as "counting".
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [active, duration, reduced, target]);

  return value;
}

function Row({ id, percent, delay }: { id: ArchetypeId; percent: number; delay: number }) {
  const girl = ARCHETYPES[id];
  const { pick } = useLang();
  const shown = useCountUp(percent, true);

  return (
    <li className="flex items-center gap-3">
      <span
        className="h-2.5 w-2.5 shrink-0 rounded-full"
        style={{ backgroundColor: girl.palette.accent }}
        aria-hidden="true"
      />
      <span className="flex-1 truncate text-[0.9rem] font-medium">{pick(girl.name)}</span>
      <motion.span
        className="font-display text-[1.05rem] font-semibold tabular-nums"
        style={{ color: girl.palette.accent }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay }}
      >
        {shown}%
      </motion.span>
    </li>
  );
}

export function EnergyBar({ percents }: { percents: ScoreMap }) {
  const reduced = useReducedMotion();
  const { t, pick } = useLang();

  const ranked = [...ARCHETYPE_ORDER].sort((a, b) => percents[b] - percents[a]);

  return (
    <section aria-labelledby="energy-heading">
      <h2
        id="energy-heading"
        className="text-[0.72rem] font-semibold tracking-[0.14em] text-ink/45 uppercase"
      >
        {t("result.energy")}
      </h2>

      {/* The stacked bar — the same shape appears on the share card, so the
          card feels like a photograph of this moment. */}
      <div
        className="mt-3 flex h-3 w-full overflow-hidden rounded-full bg-ink/6"
        role="img"
        aria-label={ranked
          .map((id) => `${pick(ARCHETYPES[id].name)} ${percents[id]}%`)
          .join(", ")}
      >
        {ranked.map((id, i) => (
          <motion.div
            key={id}
            className="h-full first:rounded-s-full last:rounded-e-full"
            style={{ backgroundColor: ARCHETYPES[id].palette.accent }}
            initial={{ width: 0 }}
            animate={{ width: `${percents[id]}%` }}
            transition={{
              duration: reduced ? 0 : 0.9,
              delay: reduced ? 0 : 0.15 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </div>

      <ul className="mt-4 flex flex-col gap-2.5">
        {ranked.map((id, i) => (
          <Row key={id} id={id} percent={percents[id]} delay={reduced ? 0 : 0.2 + i * 0.08} />
        ))}
      </ul>
    </section>
  );
}
