/**
 * ⚠️ PLACEHOLDER CONTACT DATA
 * Replace the WhatsApp number and Instagram handle with the real ones before
 * launching. The WhatsApp number must be in full international format,
 * digits only, no "+" and no spaces. Example: 971500000000
 */
export const SITE = {
  name: "Pink In Sweet",
  tagline: "Which girl are you today?",
  description:
    "A 60-second quiz that tells you which girl you are today, and which of the three Pink In Sweet perfumes belongs to her.",
  url: "https://pink-in-sweet.vercel.app",

  /** digits only, international format, no + */
  whatsapp: "971500000000",
  instagram: "pinkinsweet",

  /** Set to false to hide the Instagram button (e.g. if there's no account yet). */
  showInstagram: true,
} as const;

export function whatsappOrderUrl(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function instagramUrl(): string {
  return `https://instagram.com/${SITE.instagram}`;
}

/**
 * The order message deliberately carries her archetype. That way the WhatsApp
 * thread itself tells you which girl converts — real funnel data with no
 * analytics stack wired up.
 */
export function orderMessage(girlName: string, productName: string, emoji: string): string {
  return `Hi Pink In Sweet! ${emoji} I did the quiz and I'm "${girlName}" — I'd like to order ${productName}. (from the quiz)`;
}

export function shareText(girlName: string, moodLabel: string): string {
  return `I'm ${girlName} today — ${moodLabel.toLowerCase()} energy 🩷 Which girl are you?`;
}
