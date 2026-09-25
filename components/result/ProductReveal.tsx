"use client";

import { useMemo } from "react";
import Image from "next/image";
import { Check, MessageCircle, ShieldCheck, Sparkles, Star, Truck } from "lucide-react";
import { ButtonAnchor } from "@/components/ui/Button";
import { useLang } from "@/lib/i18n";
import {
  CONFIG,
  orderMessage,
  variantImage,
  variantName,
  variantPrice,
  whatsappOrderUrl,
} from "@/data/config";
import type { Archetype } from "@/data/vibes";
import { usePersona } from "@/lib/usePersona";

/**
 * "Her scent" — the moment the quiz turns into a sale, so it has to LOOK like
 * it. Big tinted header, price inside the CTA, guarantee + delivery proof,
 * and one single action: order on WhatsApp. The Instagram detour lives on the
 * shop page only — here every extra choice costs orders.
 */
export function ProductReveal({ girl, moodLabel }: { girl: Archetype; moodLabel: string }) {
  const { t, pick, lang } = useLang();

  // The personalisation form (share section / shop) persists the persona so
  // the WhatsApp message can include her name / gift info.
  const { persona } = usePersona();

  const name = variantName(girl.id, lang);
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

  return (
    <section aria-labelledby="product-heading">
      {/* ── Header: tinted chip + real sentence, not a tiny grey label ── */}
      <div className="flex items-center gap-2.5">
        <span
          className="flex h-8 w-8 items-center justify-center rounded-2xl text-[0.95rem]"
          style={{ backgroundColor: `${girl.palette.accent}1c` }}
          aria-hidden="true"
        >
          {girl.emoji}
        </span>
        <h2
          id="product-heading"
          className="text-[1.05rem] leading-none font-extrabold"
          style={{ color: girl.palette.ink }}
        >
          {t("result.herScent")} · {name}
        </h2>
      </div>

      <p
        className="mt-2 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.78rem] font-extrabold"
        style={{ backgroundColor: `${girl.palette.accent}14`, color: girl.palette.accent }}
      >
        <Sparkles className="h-3.5 w-3.5" strokeWidth={2.2} />
        {girl.emoji} {t("result.matchedToYou")}
      </p>

      {/* ── The product card ── */}
      <div
        className="mt-3 overflow-hidden rounded-[2rem] border bg-white shadow-[0_28px_70px_-30px_rgba(21,19,26,0.4)]"
        style={{ borderColor: `${girl.palette.accent}30` }}
      >
        <div className="relative aspect-[4/5] w-full bg-cream">
          <Image
            src={variantImage(girl.id)}
            alt={`${name} by ${CONFIG.brand.name}`}
            fill
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover"
          />
          {/* Discount sticker floating on the image */}
          <div
            className="absolute top-4 start-4 rounded-full px-3.5 py-1.5 text-[0.72rem] font-black text-white shadow-lg"
            style={{ backgroundColor: girl.palette.accent }}
          >
            {pick(CONFIG.product.badge)}
          </div>
          <div
            className="absolute inset-x-0 bottom-0 h-1/4"
            style={{
              background: `linear-gradient(180deg, transparent, ${girl.palette.soft}66)`,
            }}
          />
        </div>

        <div className="p-5">
          {/* Name + price line */}
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="min-w-0 text-[1.6rem] leading-none font-semibold" style={{ color: girl.palette.ink }}>
              {name}
            </h3>
            <p className="flex shrink-0 items-baseline gap-1.5">
              <span
                className="text-[1.35rem] leading-none font-black tabular-nums"
                style={{ color: girl.palette.accent }}
              >
                {variantPrice(girl.id)}
              </span>
              <span className="text-[0.8rem] font-medium text-ink/40 line-through tabular-nums">
                {CONFIG.product.compareAt.display}
              </span>
            </p>
          </div>

          {/* Notes as tinted chips */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {girl.scent.notes.map((note) => (
              <span
                key={note.en}
                className="rounded-full px-3 py-1 text-[0.76rem] font-bold"
                style={{ backgroundColor: `${girl.palette.accent}12`, color: girl.palette.ink }}
              >
                {pick(note)}
              </span>
            ))}
          </div>

          <p className="mt-3 text-[0.925rem] leading-relaxed text-ink/70">
            {pick(girl.scent.description)}
          </p>

          <p
            className="mt-4 rounded-2xl p-3.5 text-[0.88rem] leading-relaxed"
            style={{ backgroundColor: `${girl.palette.accent}0d`, color: girl.palette.ink }}
          >
            {t("result.matchedBody")
              .replace("{girl}", pick(girl.name))
              .replace("{mood}", moodLabel.toLowerCase())}
          </p>

          {/* ── One CTA. Price lives inside it so the decision is one tap. ── */}
          <div className="mt-5">
            <ButtonAnchor
              href={whatsappOrderUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              className="w-full text-white [&>span]:w-full [&>span]:justify-center [&>span]:gap-2 [&>span]:px-3"
              style={{
                background: `linear-gradient(135deg, ${girl.palette.accent}, ${girl.palette.soft})`,
                boxShadow: `0 12px 30px -10px ${girl.palette.accent}99`,
              }}
            >
              <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={2.2} />
              <span className="truncate whitespace-nowrap">{t("result.order")}</span>
              <span className="shrink-0 rounded-full bg-white/25 px-2.5 py-0.5 text-[0.78rem] font-extrabold tabular-nums">
                {variantPrice(girl.id)}
              </span>
            </ButtonAnchor>

            <p className="mt-2.5 text-center text-[0.72rem] text-ink/40">{t("result.orderNote")}</p>
          </div>

          {/* ── Proof strip: the three things a Moroccan buyer checks ── */}
          <ul className="mt-4 grid grid-cols-3 gap-2 border-t pt-4" style={{ borderColor: `${girl.palette.accent}1a` }}>
            {[
              { Icon: Star, label: "4.7 ★" },
              { Icon: Truck, label: t("shop.trustFast") },
              { Icon: ShieldCheck, label: t("shop.trustOriginal") },
            ].map(({ Icon, label }) => (
              <li key={label} className="flex flex-col items-center gap-1 text-center">
                <Icon
                  className="h-4 w-4"
                  strokeWidth={2}
                  style={{ color: girl.palette.accent }}
                  aria-hidden="true"
                />
                <span className="text-[0.62rem] leading-tight font-bold text-ink/60">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
