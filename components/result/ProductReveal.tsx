"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AtSign, MessageCircle } from "lucide-react";
import { ButtonAnchor } from "@/components/ui/Button";
import { useLang } from "@/lib/i18n";
import {
  CONFIG,
  instagramUrl,
  orderMessage,
  variantImage,
  variantName,
  variantPrice,
  whatsappOrderUrl,
} from "@/data/config";
import type { Archetype } from "@/data/vibes";
import { usePersona } from "@/lib/usePersona";

/**
 * The product is revealed AFTER the identity, never before. Selling first
 * turns a gift into an ad and kills the whole point of the experience.
 * The persona (name / gift) is stored by the share section and picked up
 * from sessionStorage so the order message can carry it.
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
      <h2
        id="product-heading"
        className="text-[0.72rem] font-semibold tracking-[0.14em] text-ink/45 uppercase"
      >
        {t("result.herScent")}
      </h2>

      <div className="mt-3 overflow-hidden rounded-[2rem] border border-ink/8 bg-white">
        <div className="relative aspect-[4/5] w-full bg-cream">
          <Image
            src={variantImage(girl.id)}
            alt={`${name} by ${CONFIG.brand.name}`}
            fill
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between">
            <p
              className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase"
              style={{ color: girl.palette.accent }}
            >
              {girl.emoji} {t("result.matchedToYou")}
            </p>
            <p className="text-[1.05rem] font-extrabold" style={{ color: girl.palette.ink }}>
              {variantPrice(girl.id)}
            </p>
          </div>

          <h3 className="mt-1.5 text-[1.6rem] font-semibold">{name}</h3>

          <p className="mt-1 text-[0.8rem] text-ink/45">
            {girl.scent.notes.map(pick).join(" · ")}
          </p>

          <p className="mt-3 text-[0.925rem] leading-relaxed text-ink/70">
            {pick(girl.scent.description)}
          </p>

          <p className="mt-4 rounded-2xl bg-cream p-3.5 text-[0.85rem] leading-relaxed text-ink/60">
            {t("result.matchedBody")
              .replace("{girl}", pick(girl.name))
              .replace("{mood}", moodLabel.toLowerCase())}
          </p>

          <div className="mt-5 flex flex-col gap-2.5">
            <ButtonAnchor
              href={whatsappOrderUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full [&>span]:w-full [&>span]:justify-center"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2} />
              {t("result.order")}
            </ButtonAnchor>

            {CONFIG.contact.showInstagram && (
              <ButtonAnchor
                variant="secondary"
                size="md"
                href={instagramUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <AtSign className="h-4 w-4" strokeWidth={2} />
                {t("result.orDm")}
              </ButtonAnchor>
            )}
          </div>

          <p className="mt-3 text-center text-[0.72rem] text-ink/35">{t("result.orderNote")}</p>
        </div>
      </div>
    </section>
  );
}
