"use client";

import { useId, useState } from "react";

export default function AccordionItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <li className="border-b border-white/[0.06] first:border-t">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`acc-panel-${id}`}
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-binova-gold-soft"
      >
        <span className="font-display text-[clamp(1rem,1.4vw,1.15rem)] text-binova-bone group-hover:text-binova-gold-soft transition-colors">
          {title}
        </span>
        <span
          aria-hidden
          className={`relative grid h-6 w-6 shrink-0 place-items-center text-binova-bone/40 transition-all duration-500 group-hover:text-binova-gold ${
            open ? "rotate-45 text-binova-gold" : ""
          }`}
        >
          <span className="absolute h-px w-3 bg-current" />
          <span className="absolute h-3 w-px bg-current" />
        </span>
      </button>

      {/* Animated panel via grid-template-rows 0fr → 1fr (no JS height calc) */}
      <div
        id={`acc-panel-${id}`}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 pr-12 text-[14px] leading-relaxed text-binova-bone/65 max-md:pr-2">
            {children}
          </div>
        </div>
      </div>
    </li>
  );
}
