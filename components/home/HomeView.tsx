"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ChevronRight,
  Crown,
  Flame,
  Heart,
  Sparkles,
  Star,
  Wand2,
  Zap,
} from "lucide-react";
import { Butterfly } from "@/components/brand/Butterfly";
import { ButtonLink } from "@/components/ui/Button";
import { DailyVibeCheck } from "@/components/home/DailyVibeCheck";
import { useLang } from "@/lib/i18n";
import { useResultTheme } from "@/lib/result-theme";
import { ARCHETYPES } from "@/data/vibes";
import { CONFIG, instagramUrl, variantName } from "@/data/config";

const STEP_ICONS = [Wand2, Crown, Sparkles];

/** After she taps a girl herself, we stop the carousel for a beat so the
 *  card she chose is the card she actually sees. */
const MANUAL_HOLD_MS = 12000;

export function HomeView() {
  const { t, pick, lang } = useLang();
  const reduced = useReducedMotion();
  const { theme } = useResultTheme();
  const girls = Object.values(ARCHETYPES);

  const themedGirl = theme ? ARCHETYPES[theme.variant] : null;

  // ── Trio carousel: auto-advances until she touches it ──────────────
  const [activeTrioIndex, setActiveTrioIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const manualHoldRef = useRef(0);

  useEffect(() => {
    if (isHovered || reduced) return;
    const interval = setInterval(() => {
      // Respect her choice: no auto-snap right after a tap.
      if (Date.now() - manualHoldRef.current < MANUAL_HOLD_MS) return;
      setActiveTrioIndex((prev) => (prev + 1) % girls.length);
    }, 3600);
    return () => clearInterval(interval);
  }, [girls.length, isHovered, reduced]);

  const selectTrio = (index: number) => {
    manualHoldRef.current = Date.now();
    setActiveTrioIndex(index);
  };

  const activeGirl = girls[activeTrioIndex];

  const reveal = {
    hidden: { opacity: 0, y: reduced ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 sm:px-6 pb-36">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-2 text-center sm:text-start">
        {/* Soft feminine ambient glow */}
        <div
          className="pointer-events-none absolute -top-16 -left-16 h-72 w-72 rounded-full opacity-60 blur-3xl transition-colors duration-700"
          style={{ background: `radial-gradient(circle, var(--color-blush) 0%, transparent 70%)` }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-36 -right-16 h-72 w-72 rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-petal)55 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        {/* Floating accent ornaments */}
        <div className="animate-float pointer-events-none absolute top-2 end-2 text-2xl select-none opacity-60" style={{ animationDelay: "0.5s" }} aria-hidden="true">🌸</div>
        <div className="animate-float pointer-events-none absolute top-20 end-8 text-lg select-none opacity-40" style={{ animationDelay: "1.8s" }} aria-hidden="true">✦</div>

        <div className="animate-rise inline-flex items-center gap-2 rounded-full bg-rose/10 px-3.5 py-1 text-rose border border-rose/15">
          <Sparkles className="h-3.5 w-3.5 animate-pulse" />
          <p className="text-[0.72rem] font-bold tracking-[0.2em] uppercase">
            {t("home.eyebrow")}
          </p>
        </div>

        <h1
          className="animate-rise mt-4 text-[3.2rem] sm:text-[3.7rem] leading-[0.92] font-semibold text-balance"
          style={{ animationDelay: "100ms" }}
        >
          {t("home.titleLines.0")}
          <br />
          {t("home.titleLines.1")}{" "}
          <span className="relative inline-block text-rose italic drop-shadow-xs">
            {t("home.titleLines.2")}
            <svg
              className="absolute -bottom-2 start-0 w-full text-petal/80"
              viewBox="0 0 200 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 9C40 3 120 2 197 7"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p
          className="animate-rise mt-5 text-[1.05rem] leading-relaxed text-ink/70 font-medium max-w-[36ch] mx-auto sm:mx-0"
          style={{ animationDelay: "160ms" }}
        >
          {t("home.body")}
        </p>

        <div
          className="animate-rise mt-7 flex flex-col gap-3"
          style={{ animationDelay: "220ms" }}
        >
          <ButtonLink href="/quiz" className="w-full">
            <Sparkles className="h-5 w-5" strokeWidth={2.2} />
            {t("home.cta")}
            <ArrowRight className="h-4 w-4 opacity-80 transition-transform group-hover:translate-x-1.5 rtl:rotate-180 rtl:group-hover:-translate-x-1.5" />
          </ButtonLink>

          <ButtonLink href="/shop" variant="secondary" size="md" className="w-full">
            {t("home.secondaryCta")}
          </ButtonLink>

          <p className="text-center text-[0.8rem] text-ink/45 font-medium">{t("home.ctaNote")}</p>
        </div>

        {/* ── Today's girl: the site is already wearing her colours, so tell
            her why. This is the thread that pulls her back the next day. ── */}
        {themedGirl && (
          <Link
            href={theme?.href ?? "/quiz"}
            className="animate-rise mt-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-[0.82rem] font-bold transition hover:scale-[1.02]"
            style={{
              borderColor: `${themedGirl.palette.accent}40`,
              backgroundColor: `${themedGirl.palette.accent}12`,
              color: themedGirl.palette.ink,
              boxShadow: `0 12px 30px -16px ${themedGirl.palette.accent}`,
            }}
          >
            <span className="text-base leading-none">{themedGirl.emoji}</span>
            <span>
              {t("home.todayResult").replace("{name}", pick(themedGirl.name))}
            </span>
            <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
          </Link>
        )}
      </section>

      {/* ── Daily Vibe Check & Streak (the everyday reason to come back) ── */}
      <DailyVibeCheck />

      {/* ── Redesigned Archetype Cards ────────────────────────── */}
      <section className="mt-14" aria-labelledby="girls-heading">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose/15 text-rose">
              <Heart className="h-3 w-3 fill-rose text-rose" />
            </span>
            <motion.p
              variants={reveal}
              className="text-[0.72rem] font-bold tracking-[0.24em] text-rose uppercase"
            >
              {t("girls.eyebrow")}
            </motion.p>
          </div>

          <motion.h2
            variants={reveal}
            className="mt-2 text-[2.2rem] leading-[1.02] font-semibold"
          >
            {t("girls.title")}
          </motion.h2>
          <motion.p variants={reveal} className="mt-2 text-[0.94rem] leading-relaxed text-ink/65">
            {t("girls.body")}
          </motion.p>

          <div className="mt-6 flex flex-col gap-5">
            {girls.map((girl, i) => (
              <motion.div key={girl.id} variants={reveal}>
                {/* Each card opens THE girl's shop variant, not the default
                    pink one — that was the whole "always shows the first
                    variant" bug. */}
                <Link
                  href={`/shop?variant=${girl.id}`}
                  className="group relative block overflow-hidden rounded-[2.5rem] transition-all duration-300 hover:-translate-y-1.5"
                  style={{
                    boxShadow: `0 24px 50px -20px ${girl.palette.accent}50`,
                    border: `1px solid ${girl.palette.accent}20`,
                  }}
                >
                  {/* Full-bleed gradient background based on girl palette */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `linear-gradient(135deg, ${girl.palette.soft} 0%, ${girl.palette.accent}30 100%)`,
                    }}
                  />

                  {/* Photo Hero with Radial Glow */}
                  <div className="relative h-56 w-full overflow-hidden bg-white">
                    <Image
                      src={girl.image}
                      alt={pick(girl.name)}
                      fill
                      sizes="(max-width: 512px) 100vw, 512px"
                      className="object-cover transition-transform duration-700 group-hover:scale-106"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(180deg, rgba(21,19,26,0.05) 0%, transparent 40%, ${girl.palette.wash} 100%)`,
                      }}
                    />

                    {/* Floating Era Sticker */}
                    <div
                      className="animate-float absolute top-4 end-4 flex items-center gap-1.5 rounded-full border border-white/80 bg-white/92 px-3 py-1.5 shadow-md backdrop-blur-md"
                      style={{ animationDelay: `${i * 0.8}s` }}
                    >
                      <span className="text-lg leading-none">{girl.emoji}</span>
                      <span className="text-[0.72rem] font-bold" style={{ color: girl.palette.ink }}>
                        {pick(girl.era).split(" ")[0]}
                      </span>
                    </div>

                    <span
                      className="absolute bottom-3 start-5 rounded-full px-3.5 py-1.5 text-[0.68rem] font-extrabold tracking-[0.16em] uppercase shadow-xs backdrop-blur-md border border-white/60"
                      style={{
                        backgroundColor: `${girl.palette.accent}24`,
                        color: girl.palette.accent,
                      }}
                    >
                      {pick(girl.era)}
                    </span>
                  </div>

                  {/* Card Content & Action Bar */}
                  <div
                    className="relative p-6 pt-1"
                    style={{ backgroundColor: `${girl.palette.wash}f0` }}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <h3
                        className="text-[1.8rem] leading-tight font-semibold"
                        style={{ color: girl.palette.ink }}
                      >
                        {pick(girl.name)}
                      </h3>
                      <span
                        className="text-[0.8rem] font-bold uppercase tracking-wider"
                        style={{ color: girl.palette.accent }}
                      >
                        {pick(girl.scent.productName)}
                      </span>
                    </div>

                    <p className="mt-1.5 text-[0.92rem] leading-snug text-ink/65 font-normal">
                      {pick(girl.tagline)}
                    </p>

                    {/* Scent Notes Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {girl.scent.notes.map((note) => (
                        <span
                          key={note.en}
                          className="rounded-full px-3 py-1 text-[0.76rem] font-semibold border"
                          style={{
                            backgroundColor: `${girl.palette.accent}12`,
                            color: girl.palette.ink,
                            borderColor: `${girl.palette.accent}20`,
                          }}
                        >
                          {pick(note)}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Bottom Bar */}
                    <div className="mt-5 flex items-center justify-between border-t pt-4" style={{ borderColor: `${girl.palette.accent}15` }}>
                      <span className="inline-flex items-center gap-1.5 text-[0.84rem] font-bold text-ink/75 transition-colors group-hover:text-rose">
                        <span>{t("scents.shopThis")}</span>
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
                      </span>

                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-2xl text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                        style={{ backgroundColor: girl.palette.accent }}
                        aria-hidden="true"
                      >
                        <Flame className="h-4.5 w-4.5" strokeWidth={2.4} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="mt-16" aria-labelledby="how-heading">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose/15 text-rose">
            <Zap className="h-3 w-3 fill-rose text-rose" />
          </span>
          <p className="text-[0.72rem] font-bold tracking-[0.24em] text-rose uppercase">
            {t("how.eyebrow")}
          </p>
        </div>

        <h2 className="mt-2 text-[2.2rem] leading-[1.02] font-semibold">{t("how.title")}</h2>

        <ol className="mt-6 flex flex-col gap-3.5">
          {(["step1", "step2", "step3"] as const).map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <li
                key={step}
                className="group relative flex items-start gap-4 overflow-hidden rounded-3xl border border-ink/8 bg-white/90 p-4.5 transition-all duration-300 hover:border-rose/30 hover:shadow-[0_14px_32px_-16px_var(--glow)]"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose/15 via-petal/25 to-blush/40 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5 text-rose" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <p className="text-[1rem] font-bold text-ink">{t(`how.${step}.title`)}</p>
                  <p className="mt-1 text-[0.88rem] leading-relaxed text-ink/65 font-medium">
                    {t(`how.${step}.body`)}
                  </p>
                </div>
                <span
                  className="absolute -bottom-3 -end-2 font-display text-[4.5rem] leading-none font-bold text-ink/4 select-none"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
              </li>
            );
          })}
        </ol>
      </section>

      {/* ── The Trio: Big Selected Item, Small Side Items ─────── */}
      <section
        className="mt-16"
        aria-labelledby="scents-heading"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose/15 text-rose">
            <Crown className="h-3 w-3 fill-rose text-rose" />
          </span>
          <p className="text-[0.72rem] font-bold tracking-[0.24em] text-rose uppercase">
            {t("scents.eyebrow")}
          </p>
        </div>

        <h2 className="mt-2 text-[2.2rem] leading-[1.02] font-semibold">{t("scents.title")}</h2>
        <p className="mt-2 text-[0.94rem] leading-relaxed text-ink/65">{t("scents.body")}</p>

        {/* Dynamic 3-Variant Scroller with Clear Hierarchy */}
        <div className="relative mt-8 py-2 flex items-center justify-center gap-3 sm:gap-5">
          {girls.map((girl, i) => {
            const isActive = i === activeTrioIndex;
            return (
              <button
                key={girl.id}
                type="button"
                onClick={() => selectTrio(i)}
                aria-pressed={isActive}
                aria-label={pick(girl.name)}
                className={`transition-all duration-500 cursor-pointer overflow-hidden rounded-[2.25rem] ${
                  isActive
                    ? "w-44 sm:w-52 aspect-[3/4] z-20 scale-100"
                    : "w-24 sm:w-28 aspect-[3/4] z-10 scale-90 opacity-60 hover:opacity-85"
                }`}
                style={{
                  backgroundColor: girl.palette.soft,
                  boxShadow: isActive
                    ? `0 0 0 3px ${girl.palette.accent}, 0 20px 45px -12px ${girl.palette.accent}99`
                    : undefined,
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-[2.25rem]">
                  <Image
                    src={girl.image}
                    alt={pick(girl.scent.productName)}
                    fill
                    sizes={isActive ? "220px" : "120px"}
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/2"
                    style={{
                      background: `linear-gradient(180deg, transparent, ${girl.palette.ink}dd)`,
                    }}
                  />

                  {isActive && (
                    <span
                      className="absolute top-3 start-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[0.6rem] font-black uppercase tracking-wider shadow-sm"
                      style={{ color: girl.palette.accent }}
                    >
                      {girl.emoji} {t("scents.shopThis")}
                    </span>
                  )}

                  <div className="absolute bottom-3 inset-x-2 text-center">
                    <p className={`leading-tight font-extrabold text-white drop-shadow ${isActive ? "text-[0.88rem]" : "text-[0.68rem]"}`}>
                      {variantName(girl.id, lang)}
                    </p>
                    {isActive && (
                      <p className="text-[0.6rem] font-medium text-white/80 uppercase tracking-widest mt-0.5">
                        {pick(girl.scent.notes[0])} · {pick(girl.scent.notes[1])}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Carousel indicators */}
        <div className="mt-5 flex items-center justify-center gap-2">
          {girls.map((g, idx) => (
            <button
              key={g.id}
              onClick={() => selectTrio(idx)}
              aria-label={`Select ${pick(g.name)}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeTrioIndex ? "w-6 bg-rose" : "w-2 bg-ink/15 hover:bg-ink/30"
              }`}
            />
          ))}
        </div>

        {/* The trio link follows whichever girl is in front — no more landing
            on pink after tapping the cocoa one. */}
        <div className="mt-4 text-center">
          <Link
            href={`/shop?variant=${activeGirl.id}`}
            className="inline-flex items-center gap-1.5 text-[0.86rem] font-bold text-rose hover:underline"
          >
            <span>
              {t("scents.shopThis")} · {pick(activeGirl.scent.productName)}
            </span>
            <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
          </Link>
        </div>
      </section>

      {/* ── Final Moroccan CTA ─────────────────────────────────── */}
      <section className="mt-16">
        <div
          className="relative overflow-hidden rounded-[2.5rem] p-8 text-center"
          style={{
            background: `linear-gradient(135deg, var(--color-cream) 0%, var(--color-blush) 50%, var(--color-cream) 100%)`,
            border: "1px solid color-mix(in srgb, var(--color-rose) 15%, transparent)",
            boxShadow: "0 20px 60px -20px var(--glow)",
          }}
        >
          {/* Decorative floating particles */}
          <div className="pointer-events-none absolute top-4 start-6 text-2xl animate-float opacity-40 select-none" style={{ animationDelay: "0s" }} aria-hidden="true">✦</div>
          <div className="pointer-events-none absolute top-8 end-8 text-xl animate-float opacity-30 select-none" style={{ animationDelay: "1.2s" }} aria-hidden="true">🌸</div>
          <div className="pointer-events-none absolute bottom-6 start-10 text-lg animate-float opacity-25 select-none" style={{ animationDelay: "2.1s" }} aria-hidden="true">✿</div>

          <div className="relative">
            <div className="animate-float mx-auto mb-4 w-fit">
              <Butterfly className="h-12 w-12" color={themedGirl?.palette.accent} />
            </div>

            <h2 className="text-[2.2rem] leading-[1.05] font-semibold text-balance">
              {t("final.title")}
            </h2>

            <p className="mt-3 text-[0.94rem] leading-relaxed text-ink/65">{t("final.body")}</p>

            <ButtonLink href="/quiz" className="mt-6 w-full">
              <Sparkles className="h-4.5 w-4.5" />
              {t("final.cta")}
            </ButtonLink>

            <a
              href={instagramUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-[0.86rem] font-bold text-ink/50 transition hover:text-rose"
            >
              <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
              {CONFIG.contact.instagramHandle}
            </a>
          </div>
        </div>
      </section>

      <footer className="mt-12 text-center">
        <Butterfly className="mx-auto h-8 w-8 opacity-40" color="#15131a" />
        <p className="mt-3 text-[0.76rem] leading-relaxed text-ink/40 font-medium">
          {CONFIG.brand.name} · {t("footer.line")}
        </p>
      </footer>
    </div>
  );
}
