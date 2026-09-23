import type { Metadata } from "next";
import { ShopView } from "@/components/shop/ShopView";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "One perfume, three girls. Pick her variant, make it personal, order on WhatsApp.",
};

export default function ShopPage() {
  return <ShopView />;
}
