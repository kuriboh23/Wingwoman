import type { CSSProperties, Ref } from "react";
import { ARCHETYPES } from "@/data/vibes";
import { CONFIG } from "@/data/config";
import type { DailyVibe } from "@/data/dailyVibes";
import type { WeekDay } from "@/lib/useDailyVibe";
import { useLang } from "@/lib/i18n";

export const VIBE_CARD_SIZE = 1080;

/**
 * The daily vibe card — a proper 1080×1080 image, not a paragraph of text she
 * has to screenshot. Fixed-pixel on purpose: this node gets rasterised to a
 * PNG, so there is no responsive layout, only a canvas.
 *
 * Uses a plain <img> for the logo (not next/image) so html-to-image captures
 * it pixel-perfect from the same origin.
 */
export function VibeCard({
  vibe,
  streak,
  week,
  innerRef,
}: {
  vibe: DailyVibe;
  streak: number;
  week: WeekDay[];
  innerRef?: Ref<HTMLDivElement>;
}) {
  const { t, pick, lang, dir } = useLang();
  const palette = ARCHETYPES[vibe.tone].palette;

  const displayFont =
    dir === "rtl" ? "var(--font-kufi), Georgia, serif" : "var(--font-fraunces), Georgia, serif";

  const dayLabels = week.map((day) => {
    const [y, m, d] = day.key.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString(lang === "ar" ? "ar-MA" : "en-GB", {
      weekday: "narrow",
    });
  });

  const todayLabel = new Date().toLocaleDateString(lang === "ar" ? "ar-MA" : "en-GB", {
    day: "numeric",
    month: "long",
  });

  const root: CSSProperties = {
    width: VIBE_CARD_SIZE,
    height: VIBE_CARD_SIZE,
    padding: 84,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    overflow: "hidden",
    boxSizing: "border-box",
    background: `linear-gradient(150deg, ${palette.wash} 0%, ${palette.soft} 100%)`,
    color: palette.ink,
    fontFamily:
      dir === "rtl"
        ? "var(--font-kufi), system-ui, sans-serif"
        : "var(--font-jakarta), system-ui, sans-serif",
    direction: dir,
  };

  return (
    <div ref={innerRef} style={root}>
      {/* Depth glows so the card isn't a flat rectangle of colour. */}
      <div
        style={{
          position: "absolute",
          top: -260,
          right: -220,
          width: 760,
          height: 760,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${palette.accent}33 0%, transparent 68%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -280,
          left: -240,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${palette.accent}1f 0%, transparent 70%)`,
        }}
      />

      <div style={{ position: "relative", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* ── Brand + streak ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img
              src={CONFIG.brand.logo}
              alt=""
              width={40}
              height={40}
              style={{ width: 40, height: 40, objectFit: "contain", display: "block" }}
            />
            <span
              style={{
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                opacity: 0.55,
              }}
            >
              {CONFIG.brand.name}
            </span>
          </div>

          {streak > 0 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                paddingBlock: 14,
                paddingInline: 26,
                borderRadius: 999,
                backgroundColor: `${palette.accent}1f`,
                color: palette.accent,
                fontSize: 28,
                fontWeight: 800,
              }}
            >
              🔥 {streak}
            </div>
          )}
        </div>

        {/* ── The vibe ── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 18,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              opacity: 0.45,
            }}
          >
            {t("daily.cardTitle")}
          </p>

          <div style={{ fontSize: 132, lineHeight: 1 }}>{vibe.emoji}</div>

          <h1
            style={{
              margin: 0,
              fontFamily: displayFont,
              fontSize: 92,
              fontWeight: 600,
              lineHeight: dir === "rtl" ? 1.2 : 1,
              letterSpacing: dir === "rtl" ? "0" : "-0.02em",
              wordBreak: "break-word",
            }}
          >
            {pick(vibe.label)}
          </h1>

          <p
            style={{
              margin: 0,
              maxWidth: "84%",
              fontFamily: displayFont,
              fontSize: 38,
              lineHeight: 1.35,
              fontStyle: dir === "rtl" ? "normal" : "italic",
              opacity: 0.7,
            }}
          >
            {pick(vibe.cheer)}
          </p>
        </div>

        {/* ── Week strip ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <div style={{ display: "flex", gap: 22 }}>
            {week.map((day, i) => (
              <div
                key={day.key}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: 78,
                    borderRadius: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: day.done ? palette.accent : `${palette.accent}1a`,
                    color: day.done ? "#ffffff" : palette.ink,
                    fontSize: 26,
                    fontWeight: 800,
                    opacity: day.done ? 1 : 0.5,
                    border: day.isToday ? `3px solid ${palette.accent}` : "3px solid transparent",
                  }}
                >
                  {day.done ? "🔥" : dayLabels[i]}
                </div>
                <span style={{ fontSize: 22, fontWeight: 700, opacity: day.isToday ? 0.9 : 0.45 }}>
                  {dayLabels[i]}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              paddingTop: 30,
              borderTop: `2px solid ${palette.accent}26`,
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 24,
            }}
          >
            <span style={{ fontSize: 30, fontWeight: 700 }}>{todayLabel}</span>
            <span
              style={{
                fontSize: 30,
                fontWeight: 800,
                letterSpacing: "0.04em",
                color: palette.accent,
              }}
            >
              {CONFIG.contact.instagramHandle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
