"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "wingwoman:daily_vibe";

export interface DailyVibeStore {
  /** The vibe she locked in today. */
  mood: string;
  /** Local YYYY-MM-DD of her last check-in. */
  date: string;
  streak: number;
  /** Every check-in date, newest first. */
  history: string[];
}

const EMPTY: DailyVibeStore = { mood: "", date: "", streak: 0, history: [] };

export function dayKey(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function shiftDay(key: string, delta: number): string {
  const [y, m, d] = key.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() + delta);
  return dayKey(date);
}

/** The Monday of the week `key` falls in — the strip always reads Mon → Sun. */
function mondayOf(key: string): string {
  const [y, m, d] = key.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  const daysSinceMonday = (date.getDay() + 6) % 7;
  date.setDate(date.getDate() - daysSinceMonday);
  return dayKey(date);
}

export interface WeekDay {
  key: string;
  done: boolean;
  isToday: boolean;
}

/**
 * The streak is computed from real dates rather than incremented blindly, so
 * a girl who misses a day sees the flame reset instead of quietly lying to her
 * — which is exactly what makes a streak worth anything.
 */
export function useDailyVibe() {
  const [store, setStore] = useState<DailyVibeStore>(EMPTY);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<DailyVibeStore>;
        setStore({
          mood: parsed.mood ?? "",
          date: parsed.date ?? "",
          streak: typeof parsed.streak === "number" ? parsed.streak : 0,
          history: Array.isArray(parsed.history) ? parsed.history : [],
        });
      }
    } catch {
      // ignore
    }
    setReady(true);
  }, []);

  const today = dayKey();
  const checkedInToday = ready && store.date === today;

  /** A streak only counts if today or yesterday was checked in. */
  const streak = useMemo(() => {
    if (!ready) return 0;
    if (store.date === today || store.date === shiftDay(today, -1)) return store.streak;
    return 0;
  }, [ready, store.date, store.streak, today]);

  const checkIn = useCallback((mood: string) => {
    setStore((prev) => {
      const now = dayKey();
      // Already checked in? Just let her swap today's mood, streak untouched.
      if (prev.date === now) return { ...prev, mood };

      const continuing = prev.date === shiftDay(now, -1);
      const history = [now, ...prev.history.filter((d) => d !== now)].slice(0, 120);
      return {
        mood,
        date: now,
        streak: continuing ? prev.streak + 1 : 1,
        history,
      };
    });
  }, []);

  // Persist after hydration so we never clobber storage with the empty default.
  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch {
      // ignore
    }
  }, [ready, store]);

  /** Current calendar week, Monday through Sunday — never a rolling window. */
  const week = useMemo<WeekDay[]>(() => {
    const done = new Set(store.history);
    if (store.date) done.add(store.date);
    const weekStart = mondayOf(today);
    return Array.from({ length: 7 }, (_, i) => {
      const key = shiftDay(weekStart, i);
      return { key, done: done.has(key), isToday: key === today };
    });
  }, [store.date, store.history, today]);

  return { mood: store.mood, streak, checkedInToday, week, ready, checkIn };
}
