import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export const viewport: Viewport = {
  themeColor: "#050B16",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

const siteName = "CHA Associates PC";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chaassociatespc.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Professional Financial Advisory for the AI Era`,
    template: `%s — ${siteName}`
  },
  description:
    "Real-time financial intelligence, operational visibility, and trusted AI guidance for modern business. Practical enterprise intelligence with governance, oversight, and measurable outcomes.",
  applicationName: siteName,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }]
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} — Professional Financial Advisory for the AI Era`,
    description:
      "Real-time financial intelligence, operational visibility, and trusted AI guidance for modern business.",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "CHA Associates PC" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Professional Financial Advisory for the AI Era`,
    description:
      "Real-time financial intelligence, operational visibility, and trusted AI guidance for modern business.",
    images: ["/og.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <div className="min-h-dvh">
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

