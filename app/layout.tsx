import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ThreeDBackground from "@/components/ThreeDBackground"
import ErrorBoundary from "@/components/ErrorBoundary"
import { ThemeProvider } from "@/components/ThemeProvider"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: {
    default: "LaLoona - Fashion Model Agency",
    template: "%s | LaLoona",
  },
  description:
    "Professional modeling agency connecting top talent with leading brands for fashion shows, photo shoots, and events.",
  keywords: ["fashion", "models", "agency", "talent", "brands", "runway", "photo shoots", "events"],
  authors: [{ name: "LaLoona", url: "https://www.laloona.co" }],
  creator: "LaLoona",
  publisher: "LaLoona Fashion Model Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.laloona.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.laloona.co/",
    siteName: "LaLoona Fashion Model Agency",
    title: "LaLoona - Fashion Model Agency",
    description:
      "Professional modeling agency connecting top talent with leading brands for fashion shows, photo shoots, and events.",
    images: [
      {
        url: "https://www.laloona.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LaLoona Fashion Model Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaLoona - Fashion Model Agency",
    description:
      "Professional modeling agency connecting top talent with leading brands for fashion shows, photo shoots, and events.",
    images: ["https://www.laloona.co/twitter-image.jpg"],
    creator: "@LaLoonaAgency",
    site: "@LaLoonaAgency",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "Fashion",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`} suppressHydrationWarning>
      <body className={lato.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThreeDBackground />
          <ErrorBoundary>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'