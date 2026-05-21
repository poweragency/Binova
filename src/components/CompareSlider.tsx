"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  before: { src: string; label: string };
  after: { src: string; label: string };
  alt?: string;
};

/**
 * Draggable image comparison: two images stacked, a divider line lets
 * the user reveal more or less of each side. Supports mouse, touch and
 * keyboard (arrows).
 */
export default function CompareSlider({ before, after, alt = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      updateFromClientX(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
      document.body.style.userSelect = "";
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [updateFromClientX]);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    document.body.style.userSelect = "none";
    updateFromClientX(e.clientX);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p) => Math.max(0, p - 4));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p) => Math.min(100, p + 4));
    } else if (e.key === "Home") {
      setPos(0);
    } else if (e.key === "End") {
      setPos(100);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/9] w-full overflow-hidden border border-white/[0.06] bg-binova-stone select-none max-md:aspect-[4/3]"
      onPointerDown={onPointerDown}
    >
      {/* Before — full underlay (right side stays visible by default) */}
      <Image
        src={before.src}
        alt={alt || before.label}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        quality={92}
        className="object-cover pointer-events-none"
      />

      {/* After — clipped to the left of the divider */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={after.src}
          alt={alt || after.label}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={92}
          className="object-cover"
        />
      </div>

      {/* Side labels */}
      <span className="pointer-events-none absolute left-5 top-5 text-[10px] uppercase tracking-[0.32em] text-binova-bone/90 max-md:left-3 max-md:top-3">
        · {after.label}
      </span>
      <span className="pointer-events-none absolute right-5 top-5 text-[10px] uppercase tracking-[0.32em] text-binova-bone/90 max-md:right-3 max-md:top-3">
        {before.label} ·
      </span>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-px bg-binova-gold shadow-[0_0_12px_rgba(201,179,120,0.6)]"
        style={{ left: `${pos}%` }}
      >
        <button
          type="button"
          aria-label="Trascina per confrontare"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={onKeyDown}
          className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border border-binova-gold/80 bg-binova-black/80 text-binova-gold backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-binova-gold focus:outline-none focus:ring-2 focus:ring-binova-gold focus:ring-offset-2 focus:ring-offset-binova-black"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M6 4L2 8l4 4M10 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
