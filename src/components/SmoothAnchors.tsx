"use client";

import { useEffect } from "react";

const NAVBAR_OFFSET = 96;
const DURATION = 500;

// Fast start, decelerating finish — feels snappy from the first frame
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function SmoothAnchors() {
  useEffect(() => {
    let rafId: number | null = null;

    const cancelRaf = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Allow modifiers (ctrl/cmd open in new tab etc.) and middle-click to pass through
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (e.button !== undefined && e.button !== 0) return;

      const target = e.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link) return;

      if (link.target === "_blank") return;
      const rel = link.getAttribute("rel") ?? "";
      if (rel.includes("external")) return;

      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#") || href.length < 2) return;

      let el: Element | null = null;
      try {
        el = document.querySelector(href);
      } catch {
        return;
      }
      if (!el) return;

      // We're handling this — prevent both the native anchor jump and any
      // bubble-phase handler from also running.
      e.preventDefault();
      e.stopPropagation();

      cancelRaf();

      const startY = window.scrollY;
      const rect = el.getBoundingClientRect();
      const targetY = startY + rect.top - NAVBAR_OFFSET;
      const distance = targetY - startY;

      if (Math.abs(distance) < 2) {
        // behavior:"instant" overrides the CSS scroll-behavior:smooth that
        // is set on html as a fallback. Without it every scrollTo call
        // queues a native smooth scroll on top of our RAF animation.
        window.scrollTo({ top: targetY, left: 0, behavior: "instant" });
        return;
      }

      const startTime = performance.now();
      const step = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / DURATION, 1);
        const eased = easeOutCubic(t);
        window.scrollTo({
          top: startY + distance * eased,
          left: 0,
          behavior: "instant",
        });
        if (t < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          rafId = null;
        }
      };
      rafId = requestAnimationFrame(step);

      if (window.location.hash !== href) {
        history.replaceState(null, "", href);
      }
    };

    // Capture phase, on window — runs before any bubble-phase handler the
    // browser or React might install
    window.addEventListener("click", handleClick, { capture: true });
    return () => {
      window.removeEventListener("click", handleClick, { capture: true });
      cancelRaf();
    };
  }, []);

  return null;
}
