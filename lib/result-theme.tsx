"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import {
  THEME_STORAGE_KEY,
  isThemedPath,
  themeVarKeys,
  themeVars,
  type ResultTheme,
} from "@/lib/variant-theme";

interface ResultThemeContextValue {
  theme: ResultTheme | null;
  /** Called by the result/share screens once we know who she is. */
  setTheme: (theme: ResultTheme) => void;
  clearTheme: () => void;
}

const ResultThemeContext = createContext<ResultThemeContextValue | null>(null);

/** useLayoutEffect warns during SSR; the applying happens before paint on the
 * client, which is exactly what we want to kill the pink flash. */
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function paint(theme: ResultTheme | null, enabled: boolean) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const keys = themeVarKeys();

  if (!theme || !enabled) {
    for (const key of keys) root.style.removeProperty(key);
    root.removeAttribute("data-girl");
    return;
  }

  const vars = themeVars(theme.variant);
  for (const [key, value] of Object.entries(vars)) root.style.setProperty(key, value);
  root.setAttribute("data-girl", theme.variant);
}

export function ResultThemeProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [theme, setThemeState] = useState<ResultTheme | null>(null);
  const [hydrated, setHydrated] = useState(false);

  // Pick up whichever result she last looked at.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as ResultTheme;
        if (saved?.variant) setThemeState(saved);
      }
    } catch {
      // private mode / corrupt value — stay default
    }
    setHydrated(true);
  }, []);

  const enabled = isThemedPath(pathname);

  useIsomorphicLayoutEffect(() => {
    paint(theme, enabled);
  }, [theme, enabled]);

  const setTheme = useCallback((next: ResultTheme) => {
    setThemeState(next);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }, []);

  const clearTheme = useCallback(() => {
    setThemeState(null);
    try {
      window.localStorage.removeItem(THEME_STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo<ResultThemeContextValue>(
    () => ({ theme: hydrated ? theme : null, setTheme, clearTheme }),
    [clearTheme, hydrated, setTheme, theme]
  );

  return <ResultThemeContext.Provider value={value}>{children}</ResultThemeContext.Provider>;
}

export function useResultTheme(): ResultThemeContextValue {
  const ctx = useContext(ResultThemeContext);
  if (!ctx) throw new Error("useResultTheme must be used inside <ResultThemeProvider>");
  return ctx;
}
