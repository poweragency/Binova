import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";
import RevealOnScroll from "@/components/RevealOnScroll";
import SmoothAnchors from "@/components/SmoothAnchors";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "Binova — Cucine d'autore dal 1958",
  description:
    "Cucine moderne di lusso, artigianato italiano dal 1958. Showroom Milano, Via Durini 17.",
  metadataBase: new URL("https://binova.local"),
  openGraph: {
    title: "Binova — Cucine d'autore dal 1958",
    description: "Cucine moderne di lusso, artigianato italiano dal 1958.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <PageLoader />
        <SmoothAnchors />
        <RevealOnScroll />
        <CustomCursor />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
