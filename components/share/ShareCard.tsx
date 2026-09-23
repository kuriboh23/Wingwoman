import type { CSSProperties, Ref } from "react";
import { ARCHETYPE_ORDER, ARCHETYPES, type Archetype } from "@/data/vibes";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import type { ScoreMap } from "@/types";

export type CardFormat = "story" | "square";

/**
 * Instagram Story is 1080x1920; square is for WhatsApp / feed. Both are the
 * same layout at different sizes, so the card always looks like the same
 * object no matter where it lands.
 *
 * Everything here is fixed-pixel on purpose: this node is rasterised to a PNG,
 * so there is no such thing as "responsive" — there is only the canvas.
 */
const CANVAS = {
  story: {
    width: 1080,
    height: 1920,
    pad: 104,
    safeTop: 150,
    safeBottom: 190,
    brandSize: 34,
    eyebrowSize: 30,
    nameSize: 132,
    eraSize: 36,
    moodSize: 38,
    taglineSize: 40,
    barHeight: 22,
    legendSize: 28,
    ctaSize: 32,
    urlSize: 28,
  },
  square: {
    width: 1080,
    height: 1080,
    pad: 84,
    safeTop: 0,
    safeBottom: 0,
    brandSize: 30,
    eyebrowSize: 26,
    nameSize: 104,
    eraSize: 32,
    moodSize: 34,
    taglineSize: 34,
    barHeight: 20,
    legendSize: 25,
    ctaSize: 28,
    urlSize: 25,
  },
} as const;

function ButterflyGlyph({ size, color }: { size: number; color: string }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} fill="none" aria-hidden="true">
      <ellipse cx="60" cy="62" rx="3.4" ry="25" fill={color} />
      <ellipse cx="35" cy="43" rx="21" ry="15.5" transform="rotate(-30 35 43)" fill={color} opacity="0.95" />
      <ellipse cx="85" cy="43" rx="21" ry="15.5" transform="rotate(30 85 43)" fill={color} opacity="0.95" />
      <ellipse cx="40" cy="76" rx="14.5" ry="11" transform="rotate(24 40 76)" fill={color} opacity="0.68" />
      <ellipse cx="80" cy="76" rx="14.5" ry="11" transform="rotate(-24 80 76)" fill={color} opacity="0.68" />
      <path d="M58 40c-4-11-9-17-14-20" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M62 40c4-11 9-17 14-20" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export interface ShareCardProps {
  girl: Archetype;
  moodLabel: string;
  moodEmoji: string;
  percents: ScoreMap;
  format: CardFormat;
  innerRef?: Ref<HTMLDivElement>;
  className?: string;
}

export function ShareCard({
  girl,
  moodLabel,
  moodEmoji,
  percents,
  format,
  innerRef,
  className,
}: ShareCardProps) {
  const c = CANVAS[format];
  const ranked = [...ARCHETYPE_ORDER].sort((a, b) => percents[b] - percents[a]);

  const root: CSSProperties = {
    width: c.width,
    height: c.height,
    paddingTop: c.pad + c.safeTop,
    paddingBottom: c.pad + c.safeBottom,
    paddingInline: c.pad,
    backgroundColor: girl.palette.wash,
    color: girl.palette.ink,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
    boxSizing: "border-box",
    fontFamily: "var(--font-jakarta), system-ui, sans-serif",
  };

  return (
    <div ref={innerRef} style={root} className={cn(className)}>
      {/* Soft light so the card has depth instead of looking like a flat PNG. */}
      <div
        style={{
          position: "absolute",
          top: -c.height * 0.18,
          right: -c.width * 0.22,
          width: c.width * 0.85,
          height: c.width * 0.85,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${girl.palette.soft} 0%, transparent 68%)`,
          opacity: 0.95,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -c.height * 0.12,
          left: -c.width * 0.26,
          width: c.width * 0.8,
          height: c.width * 0.8,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${girl.palette.accent}22 0%, transparent 70%)`,
        }}
      />

      <div style={{ position: "relative", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* ── Brand signature — small. The card is about her, not about us. ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <ButterflyGlyph size={c.brandSize} color={girl.palette.accent} />
          <span
            style={{
              fontSize: c.brandSize,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              opacity: 0.55,
            }}
          >
            {SITE.name}
          </span>
        </div>

        {/* ── The identity ── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <p
            style={{
              fontSize: c.eyebrowSize,
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              opacity: 0.45,
              margin: 0,
            }}
          >
            Today I&apos;m
          </p>

          <h1
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: c.nameSize,
              fontWeight: 600,
              lineHeight: 0.94,
              letterSpacing: "-0.025em",
              margin: 0,
            }}
          >
            {girl.name}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: c.eraSize,
              fontStyle: "italic",
              opacity: 0.5,
              margin: 0,
            }}
          >
            {girl.era}
          </p>

          {/* Mood pill — the "today" layer. */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
              alignSelf: "flex-start",
              marginTop: 8,
              paddingBlock: 18,
              paddingInline: 34,
              borderRadius: 999,
              backgroundColor: `${girl.palette.accent}1f`,
              color: girl.palette.ink,
            }}
          >
            <span style={{ fontSize: c.moodSize }}>{moodEmoji}</span>
            <span
              style={{
                fontSize: c.moodSize,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {moodLabel}
            </span>
          </div>
        </div>

        {/* ── Energy split ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              height: c.barHeight,
              borderRadius: 999,
              overflow: "hidden",
              backgroundColor: "#00000010",
            }}
          >
            {ranked.map((id) => (
              <div
                key={id}
                style={{
                  width: `${percents[id]}%`,
                  height: "100%",
                  backgroundColor: ARCHETYPES[id].palette.accent,
                }}
              />
            ))}
          </div>

          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            {ranked.map((id) => (
              <div key={id} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 999,
                    backgroundColor: ARCHETYPES[id].palette.accent,
                    display: "inline-block",
                  }}
                />
                <span style={{ fontSize: c.legendSize, opacity: 0.6 }}>{ARCHETYPES[id].name}</span>
                <span style={{ fontSize: c.legendSize, fontWeight: 700 }}>
                  {percents[id]}%
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: c.taglineSize,
              lineHeight: 1.25,
              fontStyle: "italic",
              opacity: 0.75,
              margin: 0,
              maxWidth: "82%",
            }}
          >
            {girl.tagline}
          </p>
        </div>

        {/* ── The prompt IS the ad. Every card recruits the next player. ── */}
        <div
          style={{
            marginTop: 56,
            paddingTop: 40,
            borderTop: `2px solid ${girl.palette.accent}26`,
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <span style={{ fontSize: c.ctaSize, fontWeight: 700 }}>{SITE.tagline}</span>
          <span style={{ fontSize: c.urlSize, opacity: 0.45 }}>
            {SITE.url.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </div>
    </div>
  );
}
