"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/brand/Butterfly";

/**
 * The global chrome.
 *
 * Same 80% centered shell for every screen: a fixed top-bar that lives only
 * inside the content block, a 16px gutter around it, and a wordmark that can
 * never be pushed off-screen by a wider phone.
 */
export function Header() {
  return (
    <header className="animate-rise">
      <div className="mx-auto w-[80%] max-w-lg px-4 pt-safe pb-safe sm:px-6">
        <Link href="/" aria-label="Wingwoman home" className="flex items-center justify-center">
          <Wordmark size="md" />
        </Link>
      </div>
    </header>
  );
}
