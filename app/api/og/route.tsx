import { ImageResponse } from "next/og";
import { MOODS } from "@/data/moods";
import { SITE } from "@/data/site";
import { ARCHETYPE_ORDER, ARCHETYPES } from "@/data/vibes";
import { ANSWERS_PARAM, decodeAnswers } from "@/lib/result-params";
import { isComplete, scoreQuiz } from "@/lib/scoring";

/**
 * Server-rendered Open Graph image. The share *sheet* handles images on mobile;
 * this handles the case where she pastes the raw link into a chat and it needs
 * to unfurl into something beautiful.
 *
 * Rendered with Satori, which only supports a flexbox subset of CSS — so this
 * is deliberately plain: no gradients on text, no shadows, explicit flex.
 */
export const runtime = "nodejs";
export const revalidate = 86400;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const answers = decodeAnswers(searchParams.get(ANSWERS_PARAM));

  const complete = isComplete(answers);
  const result = scoreQuiz(answers);
  const girl = ARCHETYPES[complete ? result.winner : "pink"];
  const mood = MOODS[complete ? result.mood : "dreamy"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: girl.palette.wash,
          color: girl.palette.ink,
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              backgroundColor: girl.palette.accent,
            }}
          />
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: "uppercase",
              opacity: 0.55,
            }}
          >
            {SITE.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 28, opacity: 0.5, letterSpacing: 4 }}>
            {complete ? "TODAY I'M" : "WHICH GIRL ARE YOU TODAY?"}
          </div>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.02 }}>
            {complete ? girl.name : "Find out in 60 seconds"}
          </div>
          {complete && (
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 4 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: `${girl.palette.accent}22`,
                  borderRadius: 999,
                  padding: "10px 26px",
                  fontSize: 28,
                  fontWeight: 700,
                  letterSpacing: 2,
                }}
              >
                {mood.label.toUpperCase()}
              </div>
              <div style={{ fontSize: 26, opacity: 0.6 }}>{girl.era}</div>
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              height: 18,
              borderRadius: 999,
              overflow: "hidden",
              backgroundColor: "#00000012",
            }}
          >
            {[...ARCHETYPE_ORDER]
              .sort((a, b) => result.percents[b] - result.percents[a])
              .map((id) => (
                <div
                  key={id}
                  style={{
                    width: `${complete ? result.percents[id] : 33}%`,
                    height: "100%",
                    backgroundColor: ARCHETYPES[id].palette.accent,
                  }}
                />
              ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
            <div style={{ display: "flex", opacity: 0.6 }}>{girl.scent.productName}</div>
            <div style={{ display: "flex", opacity: 0.45 }}>
              {SITE.url.replace(/^https?:\/\//, "")}
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
