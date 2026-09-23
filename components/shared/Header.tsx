"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Wordmark } from "@/components/brand/Butterfly";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Header() {
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
