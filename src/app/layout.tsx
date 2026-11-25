import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import Script from "next/script";
import { SITE_CONFIG, SITE_URL } from "@/config/site";
import { getGaMeasurementId } from "@/lib/analytics/gtag";
import { AnalyticsRouteTracker } from "@/components/analytics/AnalyticsRouteTracker";
import { ClientToaster } from "@/components/layout/ClientToaster";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Newsreader({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_CONFIG.defaultTitle,
    template: "%s | dieVekter",
  },
  description: SITE_CONFIG.defaultDescription,
  applicationName: SITE_CONFIG.brandName,
  authors: [{ name: SITE_CONFIG.brandName, url: `${SITE_URL}/` }],
  creator: SITE_CONFIG.brandName,
  publisher: SITE_CONFIG.legalName,
  icons: {
    icon: "/favicon.ico.png",
    apple: "/favicon.ico.png",
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    siteName: SITE_CONFIG.brandName,
    url: `${SITE_URL}/`,
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
    images: [
      {
        url: SITE_CONFIG.defaultOgImage,
        alt: "dieVekter — Technology Solutions & Study Abroad Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
    images: [SITE_CONFIG.defaultOgImage],
  },
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? {
          other: {
            "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION,
          },
        }
      : {}),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = getGaMeasurementId();
  const jotformId =
    process.env.NEXT_PUBLIC_JOTFORM_AGENT_ID?.trim() ||
    "01977c9728aa7bd786fd0916cebd6b1ca44e";

  return (
    <html lang="en-IN" className={`${sansFont.variable} ${serifFont.variable} light`}>
      <body className="min-h-screen bg-white text-[#141210] antialiased">
        {children}
        <AnalyticsRouteTracker />
        <ClientToaster />

        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="dv-ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
        </Script>

        {/* Jotform Assistant Widget (deferred cleanly for performance) */}
        <Script
          src={`https://cdn.jotfor.ms/agent/embedjs/${jotformId}/embed.js?skipWelcome=1&maximizable=1`}
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
