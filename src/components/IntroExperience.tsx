"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "playing" | "done";

const INTRO_SEEN_COOKIE = "binova-intro-seen";
const MOBILE_QUERY = "(max-width: 767px)";

const DESKTOP_VIDEO = "/intro.mp4";
const DESKTOP_POSTER = "/intro-poster.webp";
const MOBILE_VIDEO = "/intro-mobile.mp4";
const MOBILE_POSTER = "/intro-poster-mobile.jpg";

export default function IntroExperience({
  initialSeen = false,
  children,
}: {
  initialSeen?: boolean;
  children: React.ReactNode;
}) {
  const t = useTranslations("intro");
  const tCommon = useTranslations("common");
  const videoRef = useRef<HTMLVideoElement>(null);
  // initialSeen is read from a cookie on the server. When true, the overlay
  // is hidden from the very first paint — including across locale switches.
  const [phase, setPhase] = useState<Phase>(initialSeen ? "done" : "idle");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (phase === "done") return;
    if (window.location.hash.length > 1) {
      setPhase("done");
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.querySelector(window.location.hash);
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      });
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "done") {
      // Session cookie (no Max-Age) so it expires when the browser closes
      document.cookie = `${INTRO_SEEN_COOKIE}=1; path=/; SameSite=Lax`;
      videoRef.current?.pause();
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
      setPhase("done");
    }
  };

  const handleVideoEnd = () => {
    setPhase("done");
  };

  const handleSkip = () => {
    setPhase("done");
  };

  const videoSrc = isMobile ? MOBILE_VIDEO : DESKTOP_VIDEO;
  const posterSrc = isMobile ? MOBILE_POSTER : DESKTOP_POSTER;

  // When the intro was already seen we don't render the overlay at all.
  // This eliminates the flash on locale switch and on intra-session
  // navigation back to the home page.
  if (initialSeen && phase === "done") {
    return <>{children}</>;
  }

  return (
    <>
      {children}

      <div
        aria-hidden={phase === "done"}
        className={`fixed inset-0 z-[100] bg-binova-black transition-opacity duration-500 ease-out ${
          phase === "done"
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <Image
          key={posterSrc}
          src={posterSrc}
          alt="Showroom Binova Milano"
          fill
          priority
          quality={95}
          sizes="100vw"
          className={`object-cover transition-opacity duration-300 ${
            phase === "idle" ? "opacity-100" : "opacity-0"
          }`}
        />

        <video
          key={videoSrc}
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            phase === "idle" ? "opacity-0" : "opacity-100"
          }`}
        />

        {phase === "idle" && (
          <button
            onClick={handleEnter}
            className="group absolute inset-0 focus:outline-none"
            aria-label={t("ariaLabel")}
          >
            <span
              className={`pointer-events-none absolute left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                isMobile ? "top-[68%]" : "top-[75%]"
              }`}
              aria-hidden
            >
              <span className="block h-20 w-20 rounded-full border border-binova-gold/50 animate-[breathe_3s_ease-in-out_infinite]" />
              <span className="absolute inset-0 m-auto block h-1.5 w-1.5 rounded-full bg-binova-gold shadow-[0_0_20px_rgba(201,179,120,0.8)]" />
            </span>

            <span
              className="pointer-events-none absolute inset-x-0 bottom-[12vh] flex flex-col items-center gap-3 max-md:bottom-[10vh] max-md:gap-2 max-md:px-6 max-md:text-center"
              style={{
                paddingBottom: "env(safe-area-inset-bottom)",
              }}
            >
              <span className="h-[1px] w-12 bg-binova-gold/80 transition-all duration-700 group-hover:w-24" />
              <span className="font-display text-[clamp(1.1rem,1.6vw,1.4rem)] tracking-[0.32em] uppercase text-binova-bone transition-colors duration-500 group-hover:text-binova-gold">
                {t("enter")}
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-binova-bone/55">
                {t("subtitle")}
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
            {tCommon("skipIntro")} →
          </button>
        )}
      </div>
    </>
  );
}
