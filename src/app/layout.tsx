import type { Metadata, Viewport } from "next";
import { EB_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { siteMetadata, siteViewport } from "@/constants/metadata";
import { Providers } from "@/providers";
import { ChapterRail } from "@/components/navigation/ChapterRail";
import { Footer } from "@/components/navigation/Footer";
import { PageTransition } from "@/components/navigation/PageTransition";

const ebGaramond = EB_Garamond({
  variable: "--font-display-family",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-body-family",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${ebGaramond.variable} ${hankenGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-mist-100 text-bark-900 selection:bg-moss-300/30 selection:text-bark-900">
        <Providers>
          <ChapterRail />
          <PageTransition>
            <div className="flex-1 flex flex-col">
              {children}
              <Footer />
            </div>
          </PageTransition>
        </Providers>
      </body>
    </html>
  );
}
