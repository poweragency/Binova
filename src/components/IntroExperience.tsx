"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "playing" | "revealing" | "done";

const INTRO_SEEN_KEY = "binova-intro-seen";

export default function IntroExperience({
  children,
}: {
  children: React.ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  // On mount: skip intro if already seen this session OR if URL has a hash
  // (user navigated from another page targeting a specific section)
  useEffect(() => {
    const hasHash = window.location.hash.length > 1;
    const seenIntro = sessionStorage.getItem(INTRO_SEEN_KEY) === "1";
    if (hasHash || seenIntro) {
      setPhase("done");
      if (hasHash) {
        // Defer hash scroll until layout settles
        requestAnimationFrame(() => {
          setTimeout(() => {
            const el = document.querySelector(window.location.hash);
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 80);
        });
      }
    }
  }, []);

  // Persist that the intro was completed for this session
  useEffect(() => {
    if (phase === "done") {
      sessionStorage.setItem(INTRO_SEEN_KEY, "1");
    }
  }, [phase]);

  useEffect(() => {
    document.body.style.overflow = phase === "done" ? "" : "hidden";
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
    setPhase("revealing");
    setTimeout(() => setPhase("done"), 1400);
  };

  const handleSkip = () => {
    setPhase("done");
  };

  return (
    <>
      {phase !== "done" && (
        <div className="fixed inset-0 z-[100] bg-black">
          {/* High-res poster image — sharp idle state */}
          <Image
            src="/intro-poster.png"
            alt="Showroom Binova Milano"
            fill
            priority
            quality={95}
            sizes="100vw"
            className={`object-cover transition-opacity duration-500 ${
              phase === "idle" ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Video — only visible during playback and reveal */}
          <video
            ref={videoRef}
            src="/intro.mp4"
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              phase === "idle" ? "opacity-0" : "opacity-100"
            } ${phase === "revealing" ? "scale-110" : "scale-100"}`}
          />

          {/* Idle UI — door CTA */}
          {phase === "idle" && (
            <button
              onClick={handleEnter}
              className="group absolute inset-0 focus:outline-none"
              aria-label="Entra nello showroom Binova"
            >
              {/* Pulsing door hotspot — positioned on actual door */}
              <span
                className="pointer-events-none absolute left-1/2 top-[75%] -translate-x-1/2 -translate-y-1/2"
                aria-hidden
              >
                <span className="block h-20 w-20 rounded-full border border-binova-gold/50 animate-[breathe_3s_ease-in-out_infinite]" />
                <span className="absolute inset-0 m-auto block h-1.5 w-1.5 rounded-full bg-binova-gold shadow-[0_0_20px_rgba(201,179,120,0.8)]" />
              </span>

              {/* ENTER label — bottom center */}
              <span
                className="pointer-events-none absolute inset-x-0 bottom-[12vh] flex flex-col items-center gap-3 max-md:bottom-[10vh] max-md:gap-2 max-md:px-6 max-md:text-center"
                style={{
                  paddingBottom: "env(safe-area-inset-bottom)",
                }}
              >
                <span className="h-[1px] w-12 bg-binova-gold/80 transition-all duration-700 group-hover:w-24" />
                <span className="font-display text-[clamp(1.1rem,1.6vw,1.4rem)] tracking-[0.32em] uppercase text-binova-bone transition-colors duration-500 group-hover:text-binova-gold">
                  Entra
                </span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-binova-bone/55">
                  Showroom Milano · Via Durini 17
                </span>
              </span>
            </button>
          )}

          {phase === "playing" && (
            <button
              onClick={handleSkip}
              className="absolute right-6 top-6 z-10 text-[11px] uppercase tracking-[0.32em] text-binova-bone/60 transition-colors hover:text-binova-bone max-md:right-4 max-md:top-4 max-md:rounded-full max-md:border max-md:border-binova-bone/30 max-md:bg-black/40 max-md:px-4 max-md:py-2 max-md:backdrop-blur-sm"
              style={{
                marginTop: "env(safe-area-inset-top)",
              }}
            >
              Salta intro →
            </button>
          )}

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
