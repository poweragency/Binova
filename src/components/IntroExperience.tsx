"use client";

import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "playing" | "revealing" | "done";

export default function IntroExperience({
  children,
}: {
  children: React.ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  // Lock scroll while intro is active
  useEffect(() => {
    if (phase === "done") {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  const handleEnter = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      video.currentTime = 0;
      await video.play();
      setPhase("playing");
    } catch {
      setPhase("revealing");
      setTimeout(() => setPhase("done"), 1200);
    }
  };

  const handleVideoEnd = () => {
    // Freeze on last frame, then reveal site
    setPhase("revealing");
    setTimeout(() => setPhase("done"), 1400);
  };

  const handleSkip = () => {
    setPhase("done");
  };

  return (
    <>
      {/* Intro overlay — always mounted but hidden once done */}
      {phase !== "done" && (
        <div className="fixed inset-0 z-[100] bg-black">
          <video
            ref={videoRef}
            src="/intro.mp4"
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
            className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              phase === "revealing" ? "scale-110" : "scale-100"
            }`}
          />

          {/* Idle state — exterior with ENTER CTA */}
          {phase === "idle" && (
            <button
              onClick={handleEnter}
              className="group absolute inset-0 flex items-end justify-center pb-[18vh] focus:outline-none"
              aria-label="Entra nello showroom Binova"
            >
              <span className="pointer-events-none flex flex-col items-center gap-3">
                <span
                  className="h-[1px] w-12 bg-binova-gold/80 transition-all duration-700 group-hover:w-24"
                  aria-hidden
                />
                <span className="font-display text-[clamp(1.1rem,1.6vw,1.4rem)] tracking-[0.32em] uppercase text-binova-bone/95 transition-colors duration-500 group-hover:text-binova-gold">
                  Entra
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-binova-bone/45">
                  Showroom Milano · Via Durini 17
                </span>
              </span>
              {/* Pulsing door hotspot */}
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                aria-hidden
              >
                <span className="block h-20 w-20 rounded-full border border-binova-gold/40 animate-[breathe_3s_ease-in-out_infinite]" />
                <span className="absolute inset-0 m-auto block h-2 w-2 rounded-full bg-binova-gold" />
              </span>
            </button>
          )}

          {/* Skip button during playback */}
          {phase === "playing" && (
            <button
              onClick={handleSkip}
              className="absolute right-6 top-6 z-10 text-[11px] uppercase tracking-[0.32em] text-binova-bone/60 transition-colors hover:text-binova-bone"
            >
              Salta intro →
            </button>
          )}

          {/* Vignette boot effect during reveal */}
          {phase === "revealing" && (
            <div className="pointer-events-none absolute inset-0 bg-black opacity-0 animate-[shimmer_1.4s_ease-in-out_forwards]" />
          )}
        </div>
      )}

      {/* Site — fades in as intro completes */}
      <div
        className={`transition-opacity duration-1000 ease-out ${
          phase === "done"
            ? "opacity-100"
            : phase === "revealing"
            ? "opacity-100"
            : "opacity-0"
        } ${phase !== "done" ? "pointer-events-none" : ""}`}
        style={{
          position: phase === "done" ? "relative" : "fixed",
          inset: phase === "done" ? undefined : 0,
          zIndex: phase === "done" ? 1 : 90,
        }}
      >
        {children}
      </div>
    </>
  );
}
