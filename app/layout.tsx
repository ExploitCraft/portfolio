import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { portfolioConfig } from "@/config/portfolio.config";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolioConfig.seo.url),
  title: portfolioConfig.seo.title,
  description: portfolioConfig.seo.description,
  openGraph: {
    title: portfolioConfig.seo.title,
    description: portfolioConfig.seo.description,
    url: portfolioConfig.seo.url,
    siteName: portfolioConfig.handle,
    images: [
      {
        url: portfolioConfig.seo.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioConfig.seo.title,
    description: portfolioConfig.seo.description,
    images: [portfolioConfig.seo.ogImage],
    creator: `@${portfolioConfig.handle}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} font-mono antialiased bg-bg-base text-text-primary selection:bg-accent-green/30 selection:text-accent-green`}
      >
        {children}
      </body>
    </html>
  );
}
