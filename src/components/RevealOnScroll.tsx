"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scans the document for [data-reveal] elements and toggles
 * data-revealed="true" once each enters the viewport. CSS handles the
 * actual fade+rise. Re-scans on every route change.
 */
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    // Small delay so the new page DOM is settled after a route change
    const t = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])")
        .forEach((el) => io.observe(el));
    }, 30);

    return () => {
      window.clearTimeout(t);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
