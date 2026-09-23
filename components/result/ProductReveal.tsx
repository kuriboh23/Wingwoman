"use client";

import Image from "next/image";
import { AtSign, MessageCircle } from "lucide-react";
import { ButtonAnchor } from "@/components/ui/Button";
import { SITE, instagramUrl, orderMessage, whatsappOrderUrl } from "@/data/site";
import type { Archetype } from "@/data/vibes";

/**
 * The product is revealed AFTER the identity, never before. Selling first
 * turns a gift into an ad and kills the whole point of the experience.
 */
export function ProductReveal({ girl, moodLabel }: { girl: Archetype; moodLabel: string }) {
  const message = orderMessage(girl.name, girl.scent.productName, girl.emoji);

  return (
    <section aria-labelledby="product-heading">
      <h2
        id="product-heading"
        className="font-sans text-[0.72rem] font-semibold tracking-[0.14em] text-ink/45 uppercase"
      >
        Her scent
      </h2>

      <div className="mt-3 overflow-hidden rounded-[2rem] border border-ink/8 bg-white">
        <div className="relative aspect-[4/5] w-full bg-cream">
          <Image
            src={girl.image}
            alt={`${girl.scent.productName} by ${SITE.name}`}
            fill
            sizes="(max-width: 448px) 100vw, 448px"
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <p className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase" style={{ color: girl.palette.accent }}>
            {girl.emoji} Matched to you
          </p>

          <h3 className="mt-1.5 text-[1.6rem] font-semibold">{girl.scent.productName}</h3>

          <p className="mt-1 text-[0.8rem] text-ink/45">
            {girl.scent.notes.join(" · ")}
          </p>

          <p className="mt-3 text-[0.925rem] leading-relaxed text-ink/70">
            {girl.scent.description}
          </p>

          <p className="mt-4 rounded-2xl bg-cream p-3.5 text-[0.85rem] leading-relaxed text-ink/60">
            You came out as <strong className="font-semibold text-ink">{girl.name}</strong> with{" "}
            <strong className="font-semibold text-ink">{moodLabel.toLowerCase()}</strong> energy today
            — this is the one built for her.
          </p>

          <div className="mt-5 flex flex-col gap-2.5">
            <ButtonAnchor
              href={whatsappOrderUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2} />
              Order on WhatsApp
            </ButtonAnchor>

            {SITE.showInstagram && (
              <ButtonAnchor
                variant="secondary"
                size="md"
                href={instagramUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <AtSign className="h-4 w-4" strokeWidth={2} />
                Or DM us on Instagram
              </ButtonAnchor>
            )}
          </div>

          <p className="mt-3 text-center text-[0.72rem] text-ink/35">
            Your message already tells us which girl you are — so we know what you want.
          </p>
        </div>
      </div>
    </section>
  );
}
