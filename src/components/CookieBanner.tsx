"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "binova-cookie-consent";

type Choice = "accepted" | "rejected" | null;

export default function CookieBanner() {
  const [choice, setChoice] = useState<Choice>("accepted"); // start hidden until we know

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Choice;
    setChoice(stored);
  }, []);

  const decide = (value: Exclude<Choice, null>) => {
    localStorage.setItem(STORAGE_KEY, value);
    setChoice(value);
    // Notify any analytics integration listening for the consent state
    window.dispatchEvent(
      new CustomEvent("binova-consent", { detail: value })
    );
  };

  if (choice !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Avviso cookie"
      aria-describedby="cookie-banner-text"
      className="fixed inset-x-4 bottom-4 z-[180] mx-auto max-w-3xl"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="border border-white/[0.08] bg-binova-stone/95 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl max-md:p-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
          <div className="flex-1">
            <span className="text-[10px] uppercase tracking-[0.32em] text-binova-gold/80">
              · Cookie
            </span>
            <p
              id="cookie-banner-text"
              className="mt-2 text-sm leading-relaxed text-binova-bone/75"
            >
              Usiamo cookie tecnici per il funzionamento del sito e, previo
              tuo consenso, cookie statistici per capire come viene
              utilizzato.{" "}
              <Link
                href="/cookie"
                className="text-binova-gold-soft hover:text-binova-gold underline underline-offset-4 transition-colors"
              >
                Cookie Policy
              </Link>
            </p>
          </div>

          <div className="flex flex-shrink-0 items-center gap-3 max-md:flex-col max-md:items-stretch">
            <button
              type="button"
              onClick={() => decide("rejected")}
              className="px-6 py-3 text-[11px] uppercase tracking-[0.32em] text-binova-bone/70 transition-colors hover:text-binova-bone max-md:border max-md:border-binova-bone/20"
            >
              Rifiuta
            </button>
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="group flex items-center justify-between gap-3 border border-binova-bone/40 bg-binova-black/40 px-6 py-3 text-[11px] uppercase tracking-[0.32em] text-binova-bone transition-all duration-500 hover:border-binova-gold hover:text-binova-gold"
            >
              Accetta
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
