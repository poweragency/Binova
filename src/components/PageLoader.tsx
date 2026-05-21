"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Thin gold progress bar at the top of the viewport that animates during
 * route transitions. Listens for clicks on internal links to begin the
 * indeterminate ramp, then completes when usePathname() reports the new
 * route. No fade applied to the page content — the bar gives the
 * "loading" affordance without making the destination invisible.
 */
export default function PageLoader() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<"idle" | "loading" | "finishing">("idle");
  const [progress, setProgress] = useState(0);
  const lastPath = useRef(pathname);
  const finishTimer = useRef<number | null>(null);
  const hideTimer = useRef<number | null>(null);

  // Start the bar when an internal link is clicked
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const target = e.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link) return;
      if (link.target === "_blank") return;
      const rel = link.getAttribute("rel") ?? "";
      if (rel.includes("external")) return;

      const href = link.getAttribute("href");
      if (!href) return;

      // Skip pure hash anchors (SmoothAnchors handles them)
      if (href.startsWith("#")) return;

      // Skip external/protocol links (mailto:, tel:, http://other-site)
      if (
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:") ||
        /^https?:\/\//i.test(href)
      ) {
        return;
      }

      // Resolve the URL to compare paths
      let nextPath: string;
      try {
        nextPath = new URL(href, window.location.origin).pathname;
      } catch {
        return;
      }

      // Same path → no navigation, no loader
      if (nextPath === window.location.pathname) return;

      // Clear any leftover timers
      if (finishTimer.current) {
        window.clearTimeout(finishTimer.current);
        finishTimer.current = null;
      }
      if (hideTimer.current) {
        window.clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }

      // Kick off the indeterminate ramp
      setPhase("loading");
      setProgress(0);
      // Schedule the ramp to 70% on the next frame so the transition can pick it up
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setProgress(70));
      });
    };

    window.addEventListener("click", handleClick, { capture: true });
    return () => {
      window.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  // Complete the bar when pathname actually changes
  useEffect(() => {
    if (pathname === lastPath.current) return;
    lastPath.current = pathname;

    setPhase("finishing");
    setProgress(100);

    // Hold at 100% briefly so the user perceives a clean "done"
    if (finishTimer.current) window.clearTimeout(finishTimer.current);
    finishTimer.current = window.setTimeout(() => {
      // Fade out by switching to idle (CSS handles opacity)
      setPhase("idle");
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => setProgress(0), 200);
    }, 180);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (finishTimer.current) window.clearTimeout(finishTimer.current);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    };
  }, []);

  const visible = phase !== "idle";

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[200] h-[2px]"
    >
      <div
        className="h-full bg-binova-gold shadow-[0_0_8px_rgba(201,179,120,0.6)]"
        style={{
          width: `${progress}%`,
          opacity: visible ? 1 : 0,
          transition: visible
            ? "width 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 0ms"
            : "width 0ms, opacity 250ms ease-out",
        }}
      />
    </div>
  );
}
