"use client";

import { useEffect } from "react";

/**
 * Global click-intercept that turns *pure* in-page anchor jumps
 * (href="#section") into a smooth scroll. Links that carry a path —
 * "/heritage", "/#collections", "/privacy", etc. — are NOT intercepted
 * and keep the default browser/Next.js navigation (instant cross-page
 * route change, no smooth-scroll animation when landing).
 *
 * Uses a custom requestAnimationFrame loop with a fixed 800ms easing
 * instead of the native `scrollIntoView({ behavior: "smooth" })` to
 * guarantee the animation is long enough to be perceived as a slide
 * regardless of distance, and to compensate for the sticky navbar
 * (80px) so the target section lands below it.
 *
 * Respects prefers-reduced-motion: returns to default instant behaviour
 * for users who opted into reduced motion at the OS level.
 */
const NAVBAR_OFFSET = 80;
const DURATION = 800; // ms

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(targetY: number) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  // If we're already there (within 2px), no-op
  if (Math.abs(distance) < 2) return;

  const startTime = performance.now();

  function step(now: number) {
    const elapsed = now - startTime;
    const t = Math.min(elapsed / DURATION, 1);
    const eased = easeInOutCubic(t);
    window.scrollTo(0, startY + distance * eased);
    if (t < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function SmoothAnchors() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const handleClick = (e: MouseEvent) => {
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

      if (link.target === "_blank") return;
      const rel = link.getAttribute("rel") ?? "";
      if (rel.includes("external")) return;

      const href = link.getAttribute("href");
      // Only pure hash anchors ("#section") on the current page
      if (!href || !href.startsWith("#") || href.length < 2) return;

      let el: Element | null = null;
      try {
        el = document.querySelector(href);
      } catch {
        return; // invalid selector
      }
      if (!el) return;

      e.preventDefault();

      // Compute absolute target Y, accounting for the sticky navbar
      const rect = el.getBoundingClientRect();
      const targetY = window.scrollY + rect.top - NAVBAR_OFFSET;

      if (prefersReduced) {
        window.scrollTo(0, targetY);
      } else {
        smoothScrollTo(targetY);
      }

      // Reflect the hash in the URL without re-triggering scroll
      if (window.location.hash !== href) {
        history.replaceState(null, "", href);
      }
    };

    // Capture phase so we run BEFORE any other handler that might
    // call stopPropagation or trigger navigation
    document.addEventListener("click", handleClick, { capture: true });
    return () =>
      document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
