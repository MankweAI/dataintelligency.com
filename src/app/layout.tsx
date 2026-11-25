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
  title: "DataIntelligency — Brand Protection Intelligence & Clone Takedowns",
  description:
    "Authorized DMCA enforcement and 24/7 monitoring to shut down unauthorized clone storefronts, lookalike domains, and stolen-photo listings for DTC brands.",
  openGraph: {
    type: "website",
    url: "https://dataintelligency.com",
    siteName: "DataIntelligency",
    title: "DataIntelligency — Brand Protection Intelligence & Clone Takedowns",
    description:
      "Done-for-you takedowns across hosts, registrars, search indexes, and payment gateways—backed by 24/7 clone respawn monitoring for DTC brands.",
    images: [
      {
        url: "/hero-telemetry.jpg",
        width: 1408,
        height: 768,
        alt: "DataIntelligency — Brand Protection Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DataIntelligency — Brand Protection Intelligence",
    description:
      "Shut down unauthorized clone storefronts selling your products and monitor for new spawns 24/7.",
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
