import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cookies } from "next/headers";
import { messages } from "@/lib/messages";
import { THEME_COOKIE, parseTheme, themeAttribute } from "@/lib/theme";
import "./globals.css";

// Self-hosted by Next at build time, so the CSP keeps font-src 'self'.
const sans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
  display: "swap",
});

const description =
  "Painel self-hosted de automação para Instagram: comentário para DM, seguir para liberar, fluxos interativos, chat com I.A. e insights em tempo real.";

export const metadata: Metadata = {
  title: {
    default: `${messages.appName} · Automação de Instagram`,
    template: `%s · ${messages.appName}`,
  },
  description,
  applicationName: messages.appName,
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: messages.appName,
  },
  formatDetection: { telephone: false },
  openGraph: {
    title: `${messages.appName} · Automação de Instagram`,
    description,
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1014" },
  ],
};

// Every page carries a per-request CSP nonce (proxy.ts), so none can be prerendered.
export const dynamic = "force-dynamic";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // The theme comes from a cookie, so the server paints the right one from the first byte.
  const theme = parseTheme((await cookies()).get(THEME_COOKIE)?.value);
  return (
    <html lang="pt-BR" className={sans.variable} data-theme={themeAttribute(theme)}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
