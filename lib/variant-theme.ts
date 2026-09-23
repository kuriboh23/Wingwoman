import { ARCHETYPES, ARCHETYPE_ORDER } from "@/data/vibes";
import type { ArchetypeId } from "@/types";

/**
 * ═══════════════════════════════════════════════════════════════════
 *  RESULT-VARIANT THEME
 *  Once she sees her result, the whole site wears her girl's colours —
 *  until she takes the quiz again and lands on someone else.
 *
 *  We do this by overwriting the Tailwind theme tokens that every
 *  component already reads (`bg-rose`, `text-petal`, `bg-cream`, ...) on
 *  <html>. That means zero component changes needed to re-skin a page,
 *  and no duplicated colour logic.
 *
 *  The shop is deliberately excluded: that page has its own variant
 *  switcher and should never be hijacked by a saved result.
 * ═══════════════════════════════════════════════════════════════════
 */

export const THEME_STORAGE_KEY = "wingwoman:result-theme";

export interface ResultTheme {
  variant: ArchetypeId;
  /** Relative link back to the saved result, for the "today you're" chip. */
  href?: string;
}

/** Routes that keep their own palette and must ignore the saved result. */
export const THEME_EXEMPT_PREFIXES = ["/shop"];

function clamp(n: number): number {
  return Math.max(0, Math.min(255, Math.round(n)));
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16),
  };
}

export function rgba(hex: string, alpha: number): string {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** Blend `hex` toward `target` by `amount` (0–1). */
export function mix(hex: string, target: string, amount: number): string {
  const a = hexToRgb(hex);
  const b = hexToRgb(target);
  const channel = (x: number, y: number) => clamp(x + (y - x) * amount).toString(16).padStart(2, "0");
  return `#${channel(a.r, b.r)}${channel(a.g, b.g)}${channel(a.b, b.b)}`;
}

/** The CSS custom properties that re-skin the site for one variant.
 *  Written to the --rw-* layer; the Tailwind tokens (--color-rose etc.) read
 *  through it, so every brand-coloured element follows the girl. */
export function themeVars(id: ArchetypeId): Record<string, string> {
  const { palette } = ARCHETYPES[id];
  return {
    "--rw-rose": palette.accent,
    "--rw-petal": mix(palette.accent, "#ffffff", 0.42),
    "--rw-blush": palette.soft,
    "--rw-cream": palette.wash,
    "--glow": rgba(palette.accent, 0.5),
    "--glow-strong": rgba(palette.accent, 0.62),
  };
}

/** Every property the theme owns — used for a clean reset. */
export function themeVarKeys(): string[] {
  return Object.keys(themeVars("pink"));
}

export function isThemedPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  return !THEME_EXEMPT_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

/**
 * Pre-paint bootstrap. Runs from <head> so a saved result colours the very
 * first frame instead of flashing pink first — the same trick the language
 * bootstrap uses for RTL.
 */
export function themeBootstrapScript(): string {
  const map = ARCHETYPE_ORDER.reduce<Record<string, Record<string, string>>>((acc, id) => {
    acc[id] = themeVars(id);
    return acc;
  }, {});

  return `(function(){try{
var path=location.pathname||"";
if(path.indexOf("/shop")===0)return;
var raw=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
if(!raw)return;
var saved=JSON.parse(raw);
var id=saved&&saved.variant;
var vars=${JSON.stringify(map)}[id];
if(!vars)return;
var root=document.documentElement;
for(var key in vars){root.style.setProperty(key,vars[key]);}
root.setAttribute("data-girl",id);
}catch(e){}})();`;
}
