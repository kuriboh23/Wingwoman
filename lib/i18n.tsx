"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { DICT, type Lang } from "@/data/i18n";

interface LangContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (lang: Lang) => void;
  /** Translate a UI key: t("home.cta") */
  t: (key: string) => string;
  /** Pick the right half of a bilingual content string. */
  pick: (value: { en: string; ar: string }) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "wingwoman:lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore her choice. The inline script in layout.tsx already set <html
  // dir/lang> pre-hydration, so there is no flash of wrong direction.
  useEffect(() => {
    let stored: Lang | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    } catch {
      // private mode etc.
    }
    if (stored === "en" || stored === "ar") setLangState(stored);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo<LangContextValue>(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    return {
      lang,
      dir,
      setLang,
      t: (key: string) => DICT[lang][key] ?? DICT.en[key] ?? key,
      pick: (v) => v[lang],
    };
  }, [lang, setLang]);

  // Keep the document element in sync (lang attr + direction).
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
