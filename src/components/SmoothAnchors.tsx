"use client";

import { useEffect } from "react";

/**
 * Global click-intercept that turns *pure* in-page anchor jumps
 * (href="#section") into a smooth scroll. Links that carry a path —
 * "/heritage", "/#collections", "/privacy", etc. — are NOT intercepted
 * and keep the default browser/Next.js navigation (instant cross-page
 * route change, no smooth-scroll animation when landing).
 *
 * Respects prefers-reduced-motion: returns to default instant behaviour
 * for users who opted into reduced motion at the OS level.
 */
export default function SmoothAnchors() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const handleClick = (e: MouseEvent) => {
      // Only plain left-click, no modifier (let users open new tabs etc.)
      if (
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const target = e.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link) return;

      // External links: ignore
      if (link.target === "_blank") return;
      const rel = link.getAttribute("rel") ?? "";
      if (rel.includes("external")) return;

      const href = link.getAttribute("href");
      // Only pure hash anchors ("#section") on the current page
      if (!href || !href.startsWith("#") || href.length < 2) return;

      const el = document.querySelector(href);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Reflect the hash in the URL without triggering another scroll
      if (window.location.hash !== href) {
        history.replaceState(null, "", href);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
