"use client";

import { useEffect, useRef } from "react";

/**
 * Premium gold cursor: a small filled dot that tracks the pointer 1:1,
 * plus a larger outlined ring that follows with smooth lag. Mounts only
 * on devices with fine pointer + hover (desktop / mouse). On touch
 * devices the component returns null and the native cursor stays.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFine = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (!isFine) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("has-custom-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;
    let visible = false;

    const reveal = () => {
      if (visible) return;
      visible = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onMove = (e: PointerEvent) => {
      reveal();
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        'a, button, [role="button"], input, textarea, select, label'
      );
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${
        interactive ? 1.8 : 1
      })`;
      ring.dataset.over = interactive ? "1" : "0";
    };

    const tick = () => {
      // Lerp the ring towards the mouse for a smooth lag
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      const over = ring.dataset.over === "1";
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${
        over ? 1.8 : 1
      })`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    document.addEventListener("pointerleave", onLeave);
    tick();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerleave", onLeave);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[300] hidden h-9 w-9 rounded-full border border-binova-gold/60 mix-blend-difference transition-transform duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:block"
        style={{ opacity: 0 }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[301] hidden h-1.5 w-1.5 rounded-full bg-binova-gold mix-blend-difference [@media(hover:hover)_and_(pointer:fine)]:block"
        style={{ opacity: 0 }}
      />
    </>
  );
}
