"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState, useTransition } from "react";

const LOCALES = ["it", "en", "de", "es", "fr"] as const;
type LocaleCode = (typeof LOCALES)[number];

const LANG_NAMES: Record<LocaleCode, string> = {
  it: "Italiano",
  en: "English",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
};

function FlagIT({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden>
      <rect width="8" height="16" fill="#009246" />
      <rect x="8" width="8" height="16" fill="#F1F2F1" />
      <rect x="16" width="8" height="16" fill="#CE2B37" />
    </svg>
  );
}

function FlagEN({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden>
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0 L24 16 M24 0 L0 16" stroke="#FFFFFF" strokeWidth="2.4" />
      <path d="M0 0 L24 16" stroke="#C8102E" strokeWidth="1.2" />
      <path d="M24 0 L0 16" stroke="#C8102E" strokeWidth="1.2" />
      <path d="M12 0 V16 M0 8 H24" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M12 0 V16 M0 8 H24" stroke="#C8102E" strokeWidth="2.4" />
    </svg>
  );
}

function FlagDE({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 15" className={className} aria-hidden>
      <rect width="24" height="5" fill="#000000" />
      <rect y="5" width="24" height="5" fill="#DD0000" />
      <rect y="10" width="24" height="5" fill="#FFCE00" />
    </svg>
  );
}

function FlagES({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden>
      <rect width="24" height="4" fill="#AA151B" />
      <rect y="4" width="24" height="8" fill="#F1BF00" />
      <rect y="12" width="24" height="4" fill="#AA151B" />
    </svg>
  );
}

function FlagFR({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden>
      <rect width="8" height="16" fill="#0055A4" />
      <rect x="8" width="8" height="16" fill="#FFFFFF" />
      <rect x="16" width="8" height="16" fill="#EF4135" />
    </svg>
  );
}

function Flag({ locale, className }: { locale: LocaleCode; className?: string }) {
  switch (locale) {
    case "it":
      return <FlagIT className={className} />;
    case "en":
      return <FlagEN className={className} />;
    case "de":
      return <FlagDE className={className} />;
    case "es":
      return <FlagES className={className} />;
    case "fr":
      return <FlagFR className={className} />;
  }
}

type Props = {
  align?: "right" | "left";
  openUpward?: boolean;
  onSwitchStart?: () => void;
};

export default function LanguageDropdown({
  align = "right",
  openUpward = false,
  onSwitchStart,
}: Props) {
  const locale = useLocale() as LocaleCode;
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const switchLocale = (next: LocaleCode) => {
    setOpen(false);
    if (next === locale || pending) return;
    onSwitchStart?.();
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${LANG_NAMES[locale]} — ${open ? "close" : "open"} language menu`}
        disabled={pending}
        className={`flex items-center gap-2.5 text-[11px] uppercase tracking-[0.28em] transition-opacity duration-300 ${
          pending ? "opacity-50" : "opacity-100"
        } ${
          open
            ? "text-binova-gold"
            : "text-binova-bone/75 hover:text-binova-bone"
        }`}
      >
        <Flag locale={locale} className="h-3 w-[18px] shrink-0 rounded-[2px]" />
        <span>{locale.toUpperCase()}</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div
        role="listbox"
        aria-hidden={!open}
        className={`absolute z-[60] ${
          openUpward ? "bottom-full mb-3" : "top-full mt-3"
        } ${
          align === "right" ? "right-0" : "left-0"
        } w-[200px] border border-white/[0.08] bg-binova-stone/95 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : `pointer-events-none opacity-0 ${
                openUpward ? "translate-y-2" : "-translate-y-2"
              }`
        }`}
      >
        <ul className="py-2">
          {LOCALES.map((code, i) => {
            const isCurrent = code === locale;
            const animationDelay = open ? `${60 + i * 45}ms` : "0ms";
            return (
              <li key={code}>
                <button
                  role="option"
                  aria-selected={isCurrent}
                  type="button"
                  onClick={() => switchLocale(code)}
                  className={`group flex w-full items-center gap-3 px-4 py-2.5 text-left transition-all duration-300 ease-out ${
                    isCurrent
                      ? "text-binova-gold"
                      : "text-binova-bone/75 hover:bg-white/[0.04] hover:text-binova-bone"
                  } ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-2 opacity-0"
                  }`}
                  style={{ transitionDelay: animationDelay }}
                >
                  <Flag
                    locale={code}
                    className="h-3.5 w-[21px] shrink-0 rounded-[2px]"
                  />
                  <span className="flex-1 font-display text-[15px] tracking-tight">
                    {LANG_NAMES[code]}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-binova-bone/40">
                    {code.toUpperCase()}
                  </span>
                  {isCurrent && (
                    <span
                      className="ml-1 inline-block h-1 w-1 rounded-full bg-binova-gold"
                      aria-hidden
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
