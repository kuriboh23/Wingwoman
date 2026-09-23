import type { Metadata, Viewport } from "next";
import { DynaPuff, Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { BottomNav } from "@/components/shared/BottomNav";
import { Header } from "@/components/shared/Header";
import { LangProvider } from "@/lib/i18n";
import { ResultThemeProvider } from "@/lib/result-theme";
import { themeBootstrapScript } from "@/lib/variant-theme";
import { CONFIG } from "@/data/config";
import "./globals.css";

const dynapuff = DynaPuff({
  subsets: ["latin"],
  variable: "--font-dynapuff",
  display: "swap",
  weight: ["500", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.brand.url),
  title: {
    default: `${CONFIG.brand.name} — ${CONFIG.brand.tagline.en}`,
    template: `%s · ${CONFIG.brand.name}`,
  },
  description: CONFIG.brand.description.en,
  openGraph: {
    title: `${CONFIG.brand.name} — ${CONFIG.brand.tagline.en}`,
    description: CONFIG.brand.description.en,
    siteName: CONFIG.brand.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${CONFIG.brand.name} — ${CONFIG.brand.tagline.en}`,
    description: CONFIG.brand.description.en,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: CONFIG.brand.themeColor,
  // Required for env(safe-area-inset-*) to report real values on iOS.
  viewportFit: "cover",
};

/** Runs pre-paint: a saved result recolours the very first frame. */
const resultThemeBootstrap = themeBootstrapScript();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${dynapuff.variable} ${fraunces.variable} ${jakarta.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: resultThemeBootstrap }} />
      </head>
      <body className="min-h-dvh bg-cream text-ink antialiased">
        <LangProvider>
          <ResultThemeProvider>
            <Header />
            {children}
            <BottomNav />
          </ResultThemeProvider>
        </LangProvider>
      </body>
    </html>
  );
}
