import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Butterfly, Wordmark } from "@/components/brand/Butterfly";
import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/data/site";
import { ARCHETYPE_ORDER, ARCHETYPES } from "@/data/vibes";

const STEPS = [
  {
    title: "Answer nine things",
    body: "About your morning, your drink, your evening. Not about perfume. You don't need to know anything about scent for this.",
  },
  {
    title: "Meet the girl you are today",
    body: "One of three. Plus your energy split, your mood, your palette and your one thing to do today.",
  },
  {
    title: "Post her, then meet her scent",
    body: "A card built for your story. And underneath it, the Pink In Sweet that was made for her.",
  },
];

export default function HomePage() {
  const girls = ARCHETYPE_ORDER.map((id) => ARCHETYPES[id]);

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-16">
      {/* ── Header ───────────────────────────────────────────── */}
      <header className="flex items-center justify-between pt-safe py-4 animate-rise">
        <Wordmark />
        <span className="text-[0.72rem] font-semibold tracking-[0.14em] text-ink/35 uppercase">
          Nº1 — Nº3
        </span>
      </header>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-6">
        {/* Display type carries the whole page — this is the 2026 look. */}
        <p
          className="animate-rise text-[0.7rem] font-semibold tracking-[0.24em] text-rose uppercase"
          style={{ animationDelay: "60ms" }}
        >
          Nine questions · sixty seconds
        </p>

        <h1
          className="animate-rise mt-3 text-[3.1rem] leading-[0.92] font-semibold text-balance"
          style={{ animationDelay: "120ms" }}
        >
          Which girl
          <br />
          are you <span className="text-rose italic">today?</span>
        </h1>

        <p
          className="animate-rise mt-5 text-[1rem] leading-relaxed text-ink/65"
          style={{ animationDelay: "180ms" }}
        >
          Not which perfume you want — which girl you <em>are</em>. Right now, this morning, on this
          particular day. We&apos;ll tell you who she is. Then we&apos;ll tell you what she smells
          like.
        </p>

        <div className="animate-rise mt-7" style={{ animationDelay: "240ms" }}>
          <ButtonLink href="/quiz" className="w-full">
            <Sparkles className="h-5 w-5" strokeWidth={2} />
            Find my girl
          </ButtonLink>
          <p className="mt-3 text-center text-[0.78rem] text-ink/40">
            No sign-up. No email. Just nine taps.
          </p>
        </div>
      </section>

      {/* ── Three girls. You're one of them. ──────────────────── */}
      <section className="mt-14" aria-labelledby="girls-heading">
        <h2 id="girls-heading" className="animate-rise text-[1.6rem] font-semibold">
          Three girls. You&apos;re one of them.
        </h2>

        <div className="mt-5 flex flex-col gap-3">
          {girls.map((girl, i) => (
            <div
              key={girl.id}
              className="animate-rise flex items-center gap-4 rounded-3xl border border-ink/8 bg-white p-4"
              style={{ animationDelay: `${300 + i * 80}ms` }}
            >
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl"
                style={{ backgroundColor: girl.palette.soft }}
                aria-hidden="true"
              >
                {girl.emoji}
              </span>
              <div className="min-w-0">
                <p className="font-display text-[1.15rem] leading-tight font-semibold">
                  {girl.name}
                </p>
                <p className="mt-0.5 text-[0.8rem] text-ink/50">{girl.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="mt-14" aria-labelledby="how-heading">
        <h2 id="how-heading" className="animate-rise text-[1.6rem] font-semibold">
          How it works
        </h2>

        <ol className="mt-5 flex flex-col gap-5">
          {STEPS.map((step, i) => (
            <li key={step.title} className="animate-rise flex gap-4" style={{ animationDelay: `${i * 80}ms` }}>
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose/10 font-display text-[0.85rem] font-semibold text-rose"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div>
                <p className="font-semibold">{step.title}</p>
                <p className="mt-1 text-[0.875rem] leading-relaxed text-ink/60">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── The three scents ─────────────────────────────────── */}
      <section className="mt-14" aria-labelledby="scents-heading">
        <h2 id="scents-heading" className="animate-rise text-[1.6rem] font-semibold">
          And three scents
        </h2>
        <p className="animate-rise mt-2 text-[0.9rem] leading-relaxed text-ink/60">
          Each girl has one. You&apos;ll meet yours at the end — after you know who she is.
        </p>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {girls.map((girl, i) => (
            <figure key={girl.id} className="animate-rise" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white ring-1 ring-ink/8">
                <Image
                  src={girl.image}
                  alt={`${girl.scent.productName} eau de parfum`}
                  fill
                  sizes="(max-width: 448px) 33vw, 150px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2">
                <p className="text-[0.78rem] leading-tight font-semibold">{girl.scent.productName}</p>
                <p className="mt-0.5 text-[0.68rem] leading-tight text-ink/45">
                  {girl.scent.notes.slice(0, 2).join(" · ")}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="mt-14">
        <div className="relative overflow-hidden rounded-[2rem] border border-ink/8 bg-white p-7 text-center">
          <div
            className="pointer-events-none absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, #FFD7E7 0%, transparent 70%)" }}
            aria-hidden="true"
          />

          <div className="relative">
            <div className="animate-float mx-auto mb-4 w-fit text-rose">
              <Butterfly className="h-10 w-10" />
            </div>

            <h2 className="text-[1.9rem] leading-[1.05] font-semibold text-balance">
              She&apos;s waiting. Sixty seconds.
            </h2>

            <p className="mt-3 text-[0.9rem] text-ink/60">
              Some days you&apos;re the sweet one. Some days you&apos;re the spark. Take it again
              tomorrow and see.
            </p>

            <ButtonLink href="/quiz" className="mt-6 w-full">
              Find my girl
            </ButtonLink>
          </div>
        </div>
      </section>

      <footer className="mt-12 text-center">
        <Wordmark className="text-ink/40" />
        <p className="mt-3 text-[0.72rem] text-ink/35">
          {SITE.name} · {SITE.tagline}
        </p>
      </footer>
    </div>
  );
}
