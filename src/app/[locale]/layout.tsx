import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import CookieBanner from "@/components/CookieBanner";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";
import RevealOnScroll from "@/components/RevealOnScroll";
import SmoothAnchors from "@/components/SmoothAnchors";
import "../globals.css";

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
  metadataBase: new URL("https://binova-git-main-poweragency.vercel.app"),
  openGraph: {
    title: "Binova — Cucine d'autore dal 1958",
    description: "Cucine moderne di lusso, artigianato italiano dal 1958.",
    type: "website",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <NextIntlClientProvider>
          <PageLoader />
          <SmoothAnchors />
          <RevealOnScroll />
          <CustomCursor />
          {children}
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
