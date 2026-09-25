"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { DICT } from "@/data/i18n";

/**
 * The site is one language: Moroccan Gen-Z Darija in Latin script, mixed with
 * generic English + simple French (the way girls actually type). The `ar`
 * halves of content strings are kept only as legacy data — `pick()` always
 * serves the Latin-script copy, so Google Translate never gets an Arabic
 * page to "helpfully" convert.
 *
 * The t()/pick()/dir API stays so every component reads exactly the same way
 * — and a second language can be reintroduced later without touching the
 * components again.
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
