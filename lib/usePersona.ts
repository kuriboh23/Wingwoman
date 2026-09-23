"use client";

import { useCallback, useEffect, useState } from "react";
import type { Persona } from "@/data/config";

const PERSONA_KEY = "wingwoman:persona";

/**
 * The personalisation the girl can attach to herself / her gift: her name,
 * her Instagram handle, and whether the perfume is for her or a gift.
 * Persisted in sessionStorage so the result page, the share card and the
 * WhatsApp order message all tell the same story.
 */
export function usePersona() {
  const [persona, setPersona] = useState<Persona>({ isGift: false });

  // Hydrate once from storage (another section may have set it already).
  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem(PERSONA_KEY);
      if (raw) setPersona(JSON.parse(raw) as Persona);
    } catch {
      // ignore
    }
  }, []);

  const update = useCallback((patch: Partial<Persona>) => {
    setPersona((prev) => {
      const next = { ...prev, ...patch };
      try {
        window.sessionStorage.setItem(PERSONA_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  return { persona, update };
}
