"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Crown,
  Gift,
  MapPin,
  MessageCircle,
  Quote,
  RotateCcw,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import { Butterfly } from "@/components/brand/Butterfly";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { useLang } from "@/lib/i18n";
import {
  CONFIG,
  instagramUrl,
  orderMessage,
  variantColors,
  variantImage,
  variantName,
  variantPrice,
  whatsappOrderUrl,
} from "@/data/config";
import { ARCHETYPES, ARCHETYPE_ORDER } from "@/data/vibes";
import { usePersona } from "@/lib/usePersona";
import type { ArchetypeId } from "@/types";

const PERK_ICONS = { gift: Gift, truck: Truck, badge: BadgeCheck } as const;

const VARIANT_BUTTON_STYLES: Record<ArchetypeId, { bg: string; shadow: string }> = {
  pink: {
    bg: "linear-gradient(135deg, #F52B83 0%, #FF60A8 50%, #FF8FBD 100%)",
    shadow: "0 14px 34px -8px rgba(245, 43, 131, 0.6)",
  },
  orange: {
    bg: "linear-gradient(135deg, #F4732B 0%, #FF8D4D 50%, #FFA768 100%)",
    shadow: "0 14px 34px -8px rgba(244, 115, 43, 0.6)",
  },
  brown: {
    bg: "linear-gradient(135deg, #8A5A3B 0%, #A8724F 50%, #C99672 100%)",
    shadow: "0 14px 34px -8px rgba(138, 90, 59, 0.6)",
  },
};

export function ShopView() {
  const { t, pick, lang } = useLang();
  const reduced = useReducedMotion();

  const [variant, setVariant] = useState<ArchetypeId>("pink");
  const { persona, update: updatePersona } = usePersona();

  // ── Automated Testimonials Carousel State ─────────────────────────
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [testimonialsPaused, setTestimonialsPaused] = useState(false);
  const testimonials = CONFIG.testimonials;

  useEffect(() => {
    if (testimonialsPaused || reduced) return;
    const timer = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [reduced, testimonials.length, testimonialsPaused]);

  const girl = ARCHETYPES[variant];
  const name = variantName(variant, lang);
  const price = variantPrice(variant);
  const btnStyle = VARIANT_BUTTON_STYLES[variant];

  const message = useMemo(
    () =>
      orderMessage({
        girlName: pick(girl.name),
        productName: name,
        emoji: girl.emoji,
        persona,
        lang,
      }),
    [girl, name, persona, lang, pick]
  );

  const currentTestimonial = testimonials[testimonialIdx];

  return (
    <motion.div
      className="relative mx-auto w-full max-w-lg px-4 sm:px-6 pt-2 pb-40 overflow-x-hidden min-h-dvh"
      animate={{ backgroundColor: girl.palette.wash }}
      transition={{ duration: reduced ? 0 : 0.6 }}
    >
      {/* ── Luxury Grain Texture Overlay ───────────────────────── */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40 grain-overlay"
        aria-hidden="true"
      />

      {/* Ambient gradient aura following variant */}
      <motion.div
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[460px]"
        animate={{
          background: `radial-gradient(65% 100% at 50% 0%, ${girl.palette.soft} 0%, transparent 75%)`,
        }}
        transition={{ duration: reduced ? 0 : 0.6 }}
        aria-hidden="true"
      />

      {/* ── Heading ─────────────────────────────────────────────── */}
      <header className="relative z-10 pt-2 text-center">
        <motion.div
          key={variant}
          initial={reduced ? false : { scale: 0.6, rotate: -12, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 280, damping: 20 }}
          className="mx-auto mb-3 w-fit rounded-full px-4 py-1.5 shadow-sm backdrop-blur-md"
          style={{ backgroundColor: `${girl.palette.accent}1e`, color: girl.palette.accent }}
        >
          <span className="flex items-center gap-1.5 text-[0.72rem] font-bold tracking-[0.2em] uppercase">
            <Crown className="h-3.5 w-3.5" />
            {pick(CONFIG.product.collectionTitle)}
          </span>
        </motion.div>

        <h1 className="text-[2.4rem] leading-[1] font-semibold">{t("shop.title")}</h1>
        <p className="mx-auto mt-2.5 max-w-[32ch] text-[0.92rem] leading-relaxed text-ink/65 font-medium">
          {t("shop.subtitle")}
        </p>
      </header>

      {/* ── The product stage ───────────────────────────────────── */}
      <section className="relative z-10 mt-6" aria-label={name}>
        <motion.div
          className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/80 backdrop-blur-md shadow-2xl"
          animate={{
            boxShadow: `0 32px 75px -25px ${girl.palette.accent}55`,
          }}
          transition={{ duration: reduced ? 0 : 0.6 }}
        >
          {/* Variant image crossfade */}
          <div className="relative aspect-square w-full overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={variant}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: reduced ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={variantImage(variant)}
                  alt={name}
                  fill
                  sizes="(max-width: 448px) 100vw, 448px"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient shadow at bottom of image */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3"
              style={{
                background: `linear-gradient(180deg, transparent 0%, ${girl.palette.soft}66 100%)`,
              }}
            />

            {/* Discount Badge */}
            <div
              className="absolute top-4 start-4 rounded-full px-3.5 py-1.5 text-[0.7rem] font-black tracking-wide text-white shadow-lg"
              style={{ backgroundColor: girl.palette.accent }}
            >
              {pick(CONFIG.product.badge)}
            </div>

            {/* Floating Butterfly Tinted Per Variant */}
            <motion.div
              className="absolute top-4 end-4"
              animate={reduced ? undefined : { y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Butterfly className="h-11 w-11 drop-shadow-md" color={girl.palette.accent} />
            </motion.div>
          </div>

          {/* Price & Name Header */}
          <div className="flex items-end justify-between p-6 pb-0">
            <div>
              <p
                className="text-[0.7rem] font-bold tracking-[0.16em] uppercase"
                style={{ color: girl.palette.accent }}
              >
                {t("result.matchedToYou")} · {pick(girl.era)}
              </p>
              <h2
                className="mt-1 text-[2.1rem] leading-none font-semibold"
                style={{ color: girl.palette.ink }}
              >
                {name}
              </h2>
            </div>
            <div className="text-end">
              <p
                className="text-[1.45rem] leading-none font-black"
                style={{ color: girl.palette.ink }}
              >
                {price}
              </p>
              <p className="mt-1 text-[0.8rem] font-medium text-ink/40 line-through">
                {CONFIG.product.compareAt.display}
              </p>
            </div>
          </div>

          <div className="p-6 pt-3">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="flex text-[0.85rem]" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span className="text-[0.8rem] font-bold text-ink/70">
                {CONFIG.product.rating.score} · {pick(CONFIG.product.rating.count)}
              </span>
            </div>

            {/* Scent Notes */}
            <p className="mt-4 text-[0.7rem] font-bold tracking-[0.16em] text-ink/45 uppercase">
              {t("shop.notes")}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {girl.scent.notes.map((note) => (
                <span
                  key={note.en}
                  className="rounded-full border border-white/80 bg-white/70 px-3.5 py-1 text-[0.8rem] font-bold backdrop-blur shadow-sm"
                  style={{ color: girl.palette.ink }}
                >
                  {pick(note)}
                </span>
              ))}
            </div>

            <p className="mt-4 text-[0.92rem] leading-relaxed text-ink/70 font-medium">
              {pick(girl.scent.description)}
            </p>

            {/* Variant Switcher */}
            <p className="mt-6 text-[0.7rem] font-bold tracking-[0.16em] text-ink/45 uppercase">
              {t("shop.choose")}
            </p>
            <div className="mt-2.5 grid grid-cols-3 gap-2.5">
              {ARCHETYPE_ORDER.map((id) => {
                const active = id === variant;
                const g = ARCHETYPES[id];
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setVariant(id)}
                    aria-pressed={active}
                    className="group relative flex flex-col items-center gap-2 rounded-3xl border p-2.5 pb-3 transition-all duration-300"
                    style={{
                      borderColor: active ? g.palette.accent : "rgba(21,19,26,0.08)",
                      backgroundColor: active ? `${g.palette.accent}14` : "rgba(255,255,255,0.7)",
                      transform: active ? "translateY(-3px)" : undefined,
                      boxShadow: active ? `0 14px 30px -12px ${g.palette.accent}88` : undefined,
                    }}
                  >
                    <span
                      className="relative h-12 w-12 overflow-hidden rounded-2xl"
                      style={{ backgroundColor: g.palette.soft }}
                    >
                      <Image src={g.image} alt="" fill sizes="48px" className="object-cover" />
                    </span>
                    <span
                      className="text-[0.72rem] leading-tight font-extrabold"
                      style={{ color: active ? g.palette.accent : "rgba(21,19,26,0.6)" }}
                    >
                      {variantName(id, lang)}
                    </span>
                    {active && (
                      <motion.span
                        layoutId="variant-check"
                        className="absolute -top-1.5 -end-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[0.65rem] font-bold text-white shadow"
                        style={{ backgroundColor: g.palette.accent }}
                      >
                        ✓
                      </motion.span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* ── Personalization ── */}
            <div className="mt-6 rounded-3xl border border-white/80 bg-white/70 p-4.5 backdrop-blur-md shadow-sm">
              <p
                className="flex items-center gap-1.5 text-[0.82rem] font-bold"
                style={{ color: girl.palette.ink }}
              >
                <Sparkles className="h-4 w-4" style={{ color: girl.palette.accent }} />
                {t("personal.title")}
              </p>
              <p className="mt-1 text-[0.76rem] text-ink/55 font-medium">{t("personal.subtitle")}</p>

              <div className="mt-3.5">
                <label className="flex flex-col gap-1">
                  <span className="text-[0.68rem] font-bold text-ink/50 uppercase">
                    {t("personal.name")}
                  </span>
                  <input
                    value={persona.name ?? ""}
                    onChange={(e) => updatePersona({ name: e.target.value })}
                    placeholder={t("personal.namePlaceholder")}
                    className="h-11 w-full rounded-2xl border border-ink/10 bg-white px-3.5 text-[0.92rem] outline-none transition focus:border-rose/50"
                  />
                </label>
              </div>

              {/* Gift Toggle */}
              <div className="mt-3.5 flex items-center justify-between gap-2">
                <span className="text-[0.68rem] font-bold text-ink/50 uppercase">
                  {t("personal.for")}
                </span>
                <div className="flex rounded-full bg-ink/5 p-1" role="group">
                  {[
                    { id: "me", label: t("personal.forMe") },
                    { id: "gift", label: t("personal.gift") },
                  ].map((opt) => {
                    const active = opt.id === "me" ? !persona.isGift : persona.isGift;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => updatePersona({ isGift: opt.id === "gift" })}
                        aria-pressed={active}
                        className={`flex h-8 items-center gap-1.5 rounded-full px-3.5 text-[0.75rem] font-bold transition ${
                          active ? "bg-white text-ink shadow-sm" : "text-ink/50"
                        }`}
                      >
                        {opt.id === "gift" && <Gift className="h-3.5 w-3.5" />}
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence initial={false}>
                {persona.isGift && (
                  <motion.label
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: reduced ? 0 : 0.3 }}
                    className="mt-3 flex flex-col gap-1 overflow-hidden"
                  >
                    <span className="text-[0.68rem] font-bold text-ink/50 uppercase">
                      {t("personal.giftFor")}
                    </span>
                    <input
                      value={persona.recipient ?? ""}
                      onChange={(e) => updatePersona({ recipient: e.target.value })}
                      placeholder={t("personal.giftPlaceholder")}
                      className="h-11 rounded-2xl border border-ink/10 bg-white px-3.5 text-[0.92rem] outline-none transition focus:border-rose/50"
                    />
                  </motion.label>
                )}
              </AnimatePresence>
            </div>

            {/* ── Dynamic Variant-Adaptive Action Buttons ── */}
            <div className="mt-6 flex flex-col gap-3">
              <ButtonAnchor
                href={whatsappOrderUrl(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-white font-bold transition-all duration-300 [&>span]:w-full [&>span]:justify-center"
                style={{
                  background: btnStyle.bg,
                  boxShadow: btnStyle.shadow,
                }}
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
                {t("shop.order")} · {price}
              </ButtonAnchor>

              {CONFIG.contact.showInstagram && (
                <ButtonAnchor
                  variant="secondary"
                  size="md"
                  href={instagramUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full font-bold hover:shadow-sm"
                  style={{
                    borderColor: `${girl.palette.accent}40`,
                  }}
                >
                  <span style={{ color: girl.palette.accent }}>{t("shop.dm")}</span>
                </ButtonAnchor>
              )}
            </div>

            {/* Perks */}
            <ul className="mt-5 grid grid-cols-3 gap-2">
              {CONFIG.product.perks.map((perk) => {
                const Icon = PERK_ICONS[perk.icon as keyof typeof PERK_ICONS] ?? BadgeCheck;
                return (
                  <li
                    key={perk.icon}
                    className="flex flex-col items-center gap-1.5 rounded-2xl bg-white/70 p-2.5 text-center shadow-xs border border-white/60"
                  >
                    <Icon className="h-4.5 w-4.5" style={{ color: girl.palette.accent }} strokeWidth={2} />
                    <span className="text-[0.64rem] leading-tight font-bold text-ink/65">
                      {pick(perk.label)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* ── Automated Changing Testimonials (Moroccan Gen-Z) ─────── */}
      <section
        className="relative z-10 mt-10"
        aria-labelledby="reviews-heading"
        onMouseEnter={() => setTestimonialsPaused(true)}
        onMouseLeave={() => setTestimonialsPaused(false)}
      >
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-1.5">
            <Quote className="h-4 w-4" style={{ color: girl.palette.accent }} />
            <h2 id="reviews-heading" className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-ink/50">
              Moroccan Girl Reviews
            </h2>
          </div>

          {/* Testimonial Nav Arrows */}
          <div className="flex items-center gap-1">
            <button
              onClick={() =>
                setTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)
              }
              aria-label="Previous review"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/70 text-ink/60 hover:text-ink transition"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setTestimonialIdx((prev) => (prev + 1) % testimonials.length)}
              aria-label="Next review"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/70 text-ink/60 hover:text-ink transition"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/80 bg-white/85 p-6 shadow-md backdrop-blur-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: reduced ? 0 : 0.35, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between">
                <span className="flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: currentTestimonial.stars }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </span>
                <span className="flex items-center gap-1 text-[0.68rem] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <BadgeCheck className="h-3 w-3" /> Verified Buyer
                </span>
              </div>

              <p className="mt-3 font-display text-[1.12rem] leading-snug italic text-ink/85">
                “{pick(currentTestimonial.quote)}”
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-ink/6 pt-3">
                <div>
                  <p className="text-[0.84rem] font-bold text-ink">{currentTestimonial.author}</p>
                  <p className="flex items-center gap-1 text-[0.72rem] text-ink/50 font-medium">
                    <MapPin className="h-3 w-3 text-rose/70" />
                    {currentTestimonial.city}
                  </p>
                </div>

                <span
                  className="rounded-full px-2.5 py-1 text-[0.68rem] font-extrabold uppercase"
                  style={{
                    backgroundColor: `${girl.palette.accent}1c`,
                    color: girl.palette.accent,
                  }}
                >
                  {variantName(currentTestimonial.variant, lang)}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial dot indicators */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {testimonials.map((tItem, idx) => (
              <button
                key={tItem.id}
                onClick={() => setTestimonialIdx(idx)}
                aria-label={`Go to review ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === testimonialIdx ? "w-6 bg-rose" : "w-1.5 bg-ink/15 hover:bg-ink/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Quiz cross-link ─────────────────────────────────────── */}
      <section className="relative z-10 mt-8">
        <div
          className="relative overflow-hidden rounded-[2.25rem] border border-white/70 p-6 text-center shadow-lg"
          style={{ backgroundColor: girl.palette.soft }}
        >
          <Butterfly className="animate-float mx-auto h-10 w-10" color={girl.palette.accent} />
          <h2
            className="mt-3 text-[1.5rem] leading-tight font-semibold"
            style={{ color: girl.palette.ink }}
          >
            {t("shop.discover")}
          </h2>
          <ButtonLink
            href="/quiz"
            className="mt-4 w-full font-bold shadow-md [&>span]:w-full [&>span]:justify-center"
            style={{
              background: btnStyle.bg,
              boxShadow: btnStyle.shadow,
            }}
          >
            {t("shop.quizCta")}
          </ButtonLink>
          <p className="mt-3 text-[0.72rem] font-medium text-ink/50">
            <RotateCcw className="me-1 inline h-3 w-3" />
            {CONFIG.brand.name} · {pick(CONFIG.brand.tagline)}
          </p>
        </div>
      </section>
    </motion.div>
  );
}
