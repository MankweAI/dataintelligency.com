import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HumanAnalytics } from "@/components/HumanAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dataintelligency.com"),
  title: "DataIntelligency — Affiliate Attribution & Coupon-Ring Intelligence",
  description:
    "External verification of disguised affiliate accounts, rotating coupon bridge sites, and last-click attribution leakage for DTC brands.",
  openGraph: {
    type: "website",
    url: "https://dataintelligency.com",
    siteName: "DataIntelligency",
    title: "DataIntelligency — Affiliate Attribution & Coupon-Ring Intelligence",
    description:
      "Stop paying commissions on traffic you already own. External mapping of disguised coupon rings and bridge domains for DTC brands.",
    images: [
      {
        url: "/hero-telemetry.jpg",
        width: 1408,
        height: 768,
        alt: "DataIntelligency — Brand Protection & Affiliate Attribution Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DataIntelligency — Affiliate Attribution & Coupon-Ring Intelligence",
    description:
      "External mapping of disguised coupon-hijacking rings and rotating bridge domains for DTC brands.",
    images: ["/hero-telemetry.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <HumanAnalytics />
      </body>
    </html>
  );
}
