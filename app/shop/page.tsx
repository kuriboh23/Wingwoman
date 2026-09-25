import type { Metadata } from "next";
import { ShopView } from "@/components/shop/ShopView";
import { ARCHETYPES } from "@/data/vibes";
import type { ArchetypeId } from "@/types";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Parfum wa7d, 3 dyal l'banat. Khtari la version dyalha, khelliha b smitek, w commandi f WhatsApp.",
};

const VARIANTS = new Set(Object.keys(ARCHETYPES));

function readVariant(value: string | string[] | undefined): ArchetypeId {
  const raw = typeof value === "string" ? value : undefined;
  // Anything unexpected quietly falls back to the first girl.
  return raw && VARIANTS.has(raw) ? (raw as ArchetypeId) : "pink";
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  return <ShopView initialVariant={readVariant(params.variant)} />;
}
