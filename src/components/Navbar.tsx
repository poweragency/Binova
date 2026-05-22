"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

function isActive(href: string, pathname: string): boolean {
  if (href === "/") {
    return pathname === "/" || pathname.startsWith("/cucine");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const previousPath = useRef(pathname);

  const links = [
    { label: t("kitchens"), href: "/" },
    { label: t("heritage"), href: "/heritage" },
    { label: t("showroom"), href: "/showroom" },
    { label: t("design"), href: "/progettazione" },
    { label: t("contract"), href: "/contract" },
  ];

  useEffect(() => {
    if (previousPath.current !== "/" && pathname === "/") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    previousPath.current = pathname;
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const close = () => setMobileOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const switchLocale = (next: "it" | "en") => {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? "backdrop-blur-xl bg-binova-black/70 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 lg:px-12">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setMobileOpen(false)}
          >
            <span className="grid h-7 w-7 place-items-center border border-binova-bone/80">
              <span className="h-2.5 w-2.5 bg-binova-bone" />
            </span>
            <span className="font-display text-xl tracking-tight text-binova-bone">
              Binova
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
            {links.map((link) => {
              const active = isActive(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={(e) => {
                    if (link.href === "/" && pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`group relative text-[11px] uppercase tracking-[0.28em] transition-colors ${
                    active
                      ? "text-binova-gold"
                      : "text-binova-bone/70 hover:text-binova-bone"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-binova-gold transition-all duration-500 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em]">
              <button
                type="button"
                onClick={() => switchLocale("it")}
                className={
                  locale === "it"
                    ? "text-binova-gold"
                    : "text-binova-bone/55 hover:text-binova-bone transition-colors"
                }
              >
                IT
              </button>
              <span className="text-binova-bone/30">/</span>
              <button
                type="button"
                onClick={() => switchLocale("en")}
                className={
                  locale === "en"
                    ? "text-binova-gold"
                    : "text-binova-bone/55 hover:text-binova-bone transition-colors"
                }
              >
                EN
              </button>
            </div>

            <Link
              href="#contact"
              className="group flex items-center gap-3 text-binova-bone/80 hover:text-binova-gold transition-colors"
            >
              <span className="hidden text-[11px] uppercase tracking-[0.28em] sm:inline">
                {tCommon("bookVisit")}
              </span>
              <span className="grid h-9 w-9 place-items-center border border-binova-bone/30 transition-all duration-500 group-hover:border-binova-gold group-hover:rotate-45">
                <span className="h-1.5 w-1.5 bg-binova-bone group-hover:bg-binova-gold transition-colors" />
              </span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
            className="grid h-11 w-11 place-items-center border border-binova-bone/30 transition-colors hover:border-binova-bone/60 lg:hidden"
          >
            <span className="relative block h-3 w-5" aria-hidden>
              <span
                className={`absolute left-0 right-0 top-0 h-px bg-binova-bone transition-all duration-300 ${
                  mobileOpen ? "top-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-1.5 h-px bg-binova-bone transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 right-0 bottom-0 h-px bg-binova-bone transition-all duration-300 ${
                  mobileOpen ? "bottom-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-drawer"
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 z-40 transition-[opacity,visibility] duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 bg-binova-black/80 backdrop-blur-md"
        />

        <nav
          className={`relative flex h-full flex-col bg-binova-black px-6 pt-24 pb-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{
            paddingBottom: "calc(env(safe-area-inset-bottom) + 2.5rem)",
          }}
        >
          <div className="flex-1">
            <span className="text-[10px] uppercase tracking-[0.4em] text-binova-gold/80">
              · {t("menu")}
            </span>
            <ul className="mt-8 flex flex-col gap-1">
              {links.map((link, i) => {
                const active = isActive(link.href, pathname);
                return (
                  <li
                    key={link.href}
                    className={`overflow-hidden border-b border-white/[0.06] transition-all duration-700 ${
                      mobileOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: mobileOpen ? `${100 + i * 70}ms` : "0ms",
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        if (link.href === "/" && pathname === "/") {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                        setMobileOpen(false);
                      }}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between py-5 font-display text-3xl transition-colors ${
                        active
                          ? "text-binova-gold"
                          : "text-binova-bone hover:text-binova-gold-soft"
                      }`}
                    >
                      <span>{link.label}</span>
                      <span
                        className={
                          active ? "text-binova-gold" : "text-binova-bone/30"
                        }
                        aria-hidden
                      >
                        <svg
                          width="22"
                          height="10"
                          viewBox="0 0 22 10"
                          fill="none"
                        >
                          <path
                            d="M0 5h20m0 0L16 1m4 4l-4 4"
                            stroke="currentColor"
                            strokeWidth="1"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className={`mt-10 flex flex-col gap-4 transition-all duration-700 ${
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: mobileOpen
                ? `${100 + links.length * 70}ms`
                : "0ms",
            }}
          >
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="group flex w-full items-center justify-between border border-binova-bone/30 px-6 py-5 text-[11px] uppercase tracking-[0.32em] text-binova-bone transition-colors hover:border-binova-gold hover:text-binova-gold"
            >
              {tCommon("bookVisitFull")}
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <div className="flex items-center justify-between gap-4 pt-2 text-[10px] uppercase tracking-[0.32em]">
              <div className="flex flex-col gap-1 text-binova-bone/40">
                <span>Showroom Milano</span>
                <span>Via Durini 17 · 20122</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => switchLocale("it")}
                  className={
                    locale === "it"
                      ? "text-binova-gold"
                      : "text-binova-bone/55 hover:text-binova-bone transition-colors"
                  }
                >
                  IT
                </button>
                <span className="text-binova-bone/30">/</span>
                <button
                  type="button"
                  onClick={() => switchLocale("en")}
                  className={
                    locale === "en"
                      ? "text-binova-gold"
                      : "text-binova-bone/55 hover:text-binova-bone transition-colors"
                  }
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
