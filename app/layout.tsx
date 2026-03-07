import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "ExploitCraft",
  description: "Security tool builder. Self-taught developer from Bangladesh.",
  openGraph: {
    title: "ExploitCraft",
    description: "Security tool builder. Self-taught developer from Bangladesh.",
    url: "https://exploitcraft.vercel.app",
    siteName: "ExploitCraft",
  },
  twitter: {
    card: "summary",
    site: "@Emon452432",
    creator: "@Emon452432",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
