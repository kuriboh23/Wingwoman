import { toBlob } from "html-to-image";

/**
 * Shared image-export helpers for every shareable card (vibe card, result
 * card). One place so every capture path behaves the same: fonts warmed up
 * before rasterising, an automatic retry when the first pass races the
 * browser, and a download fallback that survives in-app browsers.
 */

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  // Give the browser a beat to start the download before revoking.
  window.setTimeout(() => URL.revokeObjectURL(url), 4000);
}

/** Web fonts load lazily — capturing before they land produces fallback-font PNGs. */
async function warmUpFonts(): Promise<void> {
  try {
    await document.fonts.ready;
  } catch {
    // Older browsers: nothing to warm up.
  }
}

const wait = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));

export interface CardRenderOptions {
  width: number;
  height: number;
  backgroundColor?: string;
}

export async function renderCardBlob(
  node: HTMLElement,
  options: CardRenderOptions
): Promise<Blob | null> {
  await warmUpFonts();

  const base = {
    width: options.width,
    height: options.height,
    pixelRatio: 1,
    cacheBust: true,
    backgroundColor: options.backgroundColor,
  };

  // 1st try: full fidelity. Some webviews refuse to read the font stylesheet —
  // a card with fallback fonts still beats no card at all.
  try {
    return await toBlob(node, base);
  } catch {
    // fall through
  }

  try {
    return await toBlob(node, { ...base, skipFonts: true });
  } catch {
    // fall through
  }

  // Last shot: the node may simply not have been laid out yet.
  await wait(350);
  try {
    return await toBlob(node, base);
  } catch {
    return null;
  }
}
