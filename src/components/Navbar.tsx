"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Cucine", href: "#collections" },
  { label: "Living", href: "#living" },
  { label: "Bath", href: "#bath" },
  { label: "Heritage", href: "#heritage" },
  { label: "Showroom", href: "#showroom" },
  { label: "Contract", href: "#contract" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-binova-black/70 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 lg:px-12">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center border border-binova-bone/80">
            <span className="h-2.5 w-2.5 bg-binova-bone" />
          </span>
          <span className="font-display text-xl tracking-tight text-binova-bone">
            Binova
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[11px] uppercase tracking-[0.28em] text-binova-bone/70 transition-colors hover:text-binova-bone"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-binova-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-binova-bone/80 hover:text-binova-gold transition-colors"
        >
          <span className="hidden sm:inline">Prenota visita</span>
          <span className="grid h-9 w-9 place-items-center border border-binova-bone/30 transition-all duration-500 group-hover:border-binova-gold group-hover:rotate-45">
            <span className="h-1.5 w-1.5 bg-binova-bone group-hover:bg-binova-gold transition-colors" />
          </span>
        </a>
      </div>
    </header>
  );
}
