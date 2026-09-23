"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/brand/Butterfly";

/**
 * The global chrome.
 *
 * - `/quiz` gets no header at all. The quiz has its own immersive progress
 *   header, and a second bar on top of it just ate 60px of a phone screen.
 * - Language is English-only now, so the header carries just the wordmark.
 */
export function Header() {
  const pathname = usePathname();

  if (pathname === "/quiz") return null;

  return (
    <header className="animate-rise w-full">
      <div className="mx-auto flex w-full max-w-lg items-center justify-center px-4 pt-safe py-3.5">
        <Link href="/" aria-label="Wingwoman home" className="flex items-center justify-center">
          <Wordmark size="md" />
        </Link>
      </div>
    </header>
  );
}
