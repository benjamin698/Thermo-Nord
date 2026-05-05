import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

/**
 * Indexation toggle.
 *
 * - `NEXT_PUBLIC_ALLOW_INDEXING=true` → index, follow (production réelle)
 * - sinon → noindex, nofollow (par défaut, évite que Google indexe la
 *   preview *.vercel.app avant que le domaine définitif soit branché)
 *
 * À activer dans Vercel (Settings → Environment Variables) UNIQUEMENT
 * quand le domaine custom (ex: thermo-nord.fr) est branché.
 */
const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Chauffagiste à Villeneuve-Saint-Georges (94)`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Chauffagiste à Villeneuve-Saint-Georges (94)`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Chauffagiste à Villeneuve-Saint-Georges (94)`,
    description: siteConfig.description,
    images: ["/og-default.png"],
  },
  robots: allowIndexing
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : {
        index: false,
        follow: false,
        nocache: true,
        googleBot: { index: false, follow: false },
      },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.language}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        {children}
        <JsonLd data={[localBusinessJsonLd(), websiteJsonLd()]} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
