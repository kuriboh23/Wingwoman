import type { CSSProperties, Ref } from "react";
import { ARCHETYPE_ORDER, ARCHETYPES, type Archetype } from "@/data/vibes";
import { CONFIG, type Persona } from "@/data/config";
import { useLang } from "@/lib/i18n";
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
 *
 * The persona (name / instagram / gift) arrives as a prop, never read from
 * storage here: this component also renders on the server.
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
    personaNameSize: 34,
    personaSubSize: 27,
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
    personaNameSize: 30,
    personaSubSize: 24,
  },
} as const;

/**
 * The butterfly logo raster (transparent pink PNG). A plain <img> (not
 * next/image) keeps html-to-image captures pixel-perfect — the file is
 * same-origin so the canvas stays untainted.
 */
function ButterflyGlyph({ size }: { size: number }) {
  return (      <img
        src={CONFIG.brand.logo}
        alt=""
        width={size}
        height={size}
        style={{
          width: size,
          height: size,
          objectFit: "contain",
          display: "block",
        }}
      />
  );
}

export interface ShareCardProps {
  girl: Archetype;
  moodLabel: string;
  moodEmoji: string;
  percents: ScoreMap;
  format: CardFormat;
  persona?: Persona;
  innerRef?: Ref<HTMLDivElement>;
  className?: string;
}

export function ShareCard({
  girl,
  moodLabel,
  moodEmoji,
  percents,
  format,
  persona,
  innerRef,
  className,
}: ShareCardProps) {
  const { t, pick, dir } = useLang();
  const c = CANVAS[format];
  const ranked = [...ARCHETYPE_ORDER].sort((a, b) => percents[b] - percents[a]);

  const name = persona?.name?.trim() ?? "";
  const handle = persona?.instagram?.trim().replace(/^@/, "") ?? "";
  const hasPersona = Boolean(name || handle);

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
    fontFamily:
      dir === "rtl" ? "var(--font-kufi), system-ui, sans-serif" : "var(--font-jakarta), system-ui, sans-serif",
    direction: dir,
  };

  const displayFont =
    dir === "rtl" ? "var(--font-kufi), Georgia, serif" : "var(--font-fraunces), Georgia, serif";

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
          <ButterflyGlyph size={c.brandSize + 8} />
          <span
            style={{
              fontSize: c.brandSize,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              opacity: 0.55,
            }}
          >
            {CONFIG.brand.name}
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
            {t("card.todayIm")}
          </p>

          <h1
            style={{
              fontFamily: displayFont,
              fontSize: c.nameSize,
              fontWeight: 600,
              lineHeight: dir === "rtl" ? 1.2 : 0.94,
              letterSpacing: dir === "rtl" ? "0" : "-0.025em",
              margin: 0,
            }}
          >
            {pick(girl.name)}
          </h1>

          <p
            style={{
              fontFamily: displayFont,
              fontSize: c.eraSize,
              fontStyle: dir === "rtl" ? "normal" : "italic",
              opacity: 0.5,
              margin: 0,
            }}
          >
            {pick(girl.era)}
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
                <span style={{ fontSize: c.legendSize, opacity: 0.6 }}>{pick(ARCHETYPES[id].name)}</span>
                <span style={{ fontSize: c.legendSize, fontWeight: 700 }}>{percents[id]}%</span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: displayFont,
              fontSize: c.taglineSize,
              lineHeight: 1.25,
              fontStyle: dir === "rtl" ? "normal" : "italic",
              opacity: 0.75,
              margin: 0,
              maxWidth: "82%",
            }}
          >
            {pick(girl.tagline)}
          </p>
        </div>

        {/* ── Persona — her name & optional gift ── */}
        {hasPersona && (
          <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 18 }}>
            <span
              style={{
                width: 56,
                height: 56,
                borderRadius: 999,
                backgroundColor: `${girl.palette.accent}26`,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                fontWeight: 800,
                color: girl.palette.accent,
                flexShrink: 0,
              }}
            >
              {(name || "✦").charAt(0).toUpperCase()}
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: c.personaNameSize, fontWeight: 800, color: girl.palette.ink }}>
                {name}
              </span>
              {persona?.isGift && persona?.recipient ? (
                <span style={{ fontSize: c.personaSubSize, fontWeight: 600, opacity: 0.6 }}>
                  🎁 {t("card.aGiftFor")} {persona.recipient}
                </span>
              ) : null}
            </span>
          </div>
        )}

        {/* ── Brand Reference — Our brand Instagram & tagline ── */}
        <div
          style={{
            marginTop: hasPersona ? 34 : 54,
            paddingTop: 36,
            borderTop: `2px solid ${girl.palette.accent}26`,
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <span style={{ fontSize: c.ctaSize, fontWeight: 700 }}>{pick(CONFIG.brand.tagline)}</span>
          <span style={{ fontSize: c.urlSize + 4, fontWeight: 800, color: girl.palette.accent, letterSpacing: "0.04em" }}>
            {CONFIG.contact.instagramHandle}
          </span>
        </div>
      </div>
    </div>
  );
}
