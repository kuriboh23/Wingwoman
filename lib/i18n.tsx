"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { DICT } from "@/data/i18n";

/**
 * The site is one language: Moroccan Gen-Z Darija written in Latin script
 * (the way Moroccan girls actually type), mixed with generic English
 * (Disney style) and a pinch of simple French (les notes, Livraison,
 * Vérifié…).
 *
 * Every UI string is written in English here. The `ar` half of content
 * strings (girls, questions, moods) lives in the data files and is kept
 * only as legacy metadata — `pick()` always serves the Latin-script copy.
 */
type Lang = "en";

interface LangContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  /** Translate a UI key: t("home.cta") */
  t: (key: string) => string;
  /** Pick the right half of a bilingual content string. */
  pick: (value: { en: string; ar: string }) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const value = useMemo<LangContextValue>(
    () => ({
      lang: "en",
      dir: "ltr",
      t: (key: string) => DICT.en[key] ?? key,
      pick: (v) => v.en,
    }),
    []
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
