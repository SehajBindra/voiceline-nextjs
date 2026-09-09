import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const siteUrl = "https://voiceline.in"
const siteName = "Voiceline Studio"
const siteDescription =
  "Book Voiceline Studio in Shahpur Jat, Delhi NCR for voiceover, podcast, music production, mixing & dubbing — with Hudson Voice Technique training."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Voiceline Studio — Recording Studio in Delhi NCR",
    template: "%s | Voiceline Studio",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  keywords: [
    "recording studio Delhi",
    "recording studio Shahpur Jat",
    "voiceover studio Delhi",
    "podcast recording Delhi",
    "music production Delhi",
    "mixing and mastering Delhi",
    "dubbing studio Delhi",
    "Hudson Voice Technique",
    "voice training Delhi",
    "Voiceline Studio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName,
    title: "Voiceline Studio — Recording Studio in Delhi NCR",
    description: siteDescription,
    images: [
      {
        url: "/hero/studio-hero.webp",
        width: 1200,
        height: 630,
        alt: "Voiceline Studio recording session in Shahpur Jat, Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voiceline Studio — Recording Studio in Delhi NCR",
    description: siteDescription,
    images: ["/hero/studio-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "music",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#081d3b" },
  ],
  colorScheme: "light dark",
}

const studioJsonLd = {
  "@context": "https://schema.org",
  "@type": "RecordingStudio",
  "@id": `${siteUrl}/#studio`,
  name: siteName,
  alternateName: "Voiceline Training & Studio",
  description: siteDescription,
  url: siteUrl,
  email: "info@voiceline.in",
  telephone: "+91-9667002480",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Shahpur Jat",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  founder: [
    { "@type": "Person", name: "Rakesh Jagtiani" },
    { "@type": "Person", name: "Uma Sharma" },
  ],
}

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(studioJsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
