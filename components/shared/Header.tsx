"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/brand/Butterfly";
import { LangToggle } from "@/components/shared/LangToggle";
import { cn } from "@/lib/utils";

/**
 * The global chrome.
 *
 * - `/quiz` gets no header at all. The quiz has its own immersive progress
 *   header, and a second bar on top of it just ate 60px of a phone screen.
 * - The language toggle lives on the home screen only, so nobody is switching
 *   language by accident mid-game.
 */
export function Header() {
  const pathname = usePathname();

  if (pathname === "/quiz") return null;

  const showLangToggle = pathname === "/";

  return (
    <header className="animate-rise w-full">
      <div
        className={cn(
          "mx-auto flex w-full max-w-lg items-center px-4 pt-safe py-3.5",
          showLangToggle ? "justify-between" : "justify-center"
        )}
      >
        <Link href="/" aria-label="Wingwoman home" className="flex items-center justify-center">
          <Wordmark size="md" />
        </Link>

        {showLangToggle && <LangToggle />}
      </div>
    </header>
  );
}
