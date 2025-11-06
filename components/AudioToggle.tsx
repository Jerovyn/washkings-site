"use client";

import { useState, useEffect, useRef } from "react";
import { seasonConfig, getCurrentSeason } from "@/lib/season";

export default function AudioToggle() {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioSrc, setAudioSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Get current season and its audio config
    const currentSeason = getCurrentSeason();
    const config = seasonConfig[currentSeason];
    
    // Check if audio is available for current season
    if (!config.audio) {
      setIsVisible(false);
      setAudioSrc(undefined);
      return;
    }

    setAudioSrc(config.audio);

    // Check localStorage for saved preference
    const savedPreference = localStorage.getItem("extco_audio_v1");
    if (savedPreference === "true") {
      setIsMuted(false);
    }

    // Check if audio file exists (use config.audio directly since state hasn't updated yet)
    if (!config.audio) return;
    
    const audio = new Audio();
    audio.src = config.audio;
    
    audio.addEventListener("loadeddata", () => {
      setIsVisible(true);
    });

    audio.addEventListener("error", () => {
      setIsVisible(false);
    });

    // Track user interaction
    const handleInteraction = () => {
      setHasInteracted(true);
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
    
    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  useEffect(() => {
    // Update audio source when it changes
    if (audioRef.current && audioSrc) {
      audioRef.current.src = audioSrc;
      audioRef.current.load();
    }
  }, [audioSrc]);

  useEffect(() => {
    // Handle reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches || audioRef.current === null || !audioSrc) {
      return;
    }

    // Set volume to 0.15 (15% - low volume)
    audioRef.current.volume = 0.15;

    if (isMuted) {
      audioRef.current.pause();
    } else if (hasInteracted) {
      audioRef.current.play().catch(() => {
        // Auto-play blocked
      });
    }
  }, [isMuted, hasInteracted, audioSrc]);

  const handleToggle = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    localStorage.setItem("extco_audio_v1", String(!newMuted));
    if (typeof window !== 'undefined') {
      const { analytics } = require('@/lib/analytics');
      analytics.audioToggle(!newMuted);
    }
  };

  if (!isVisible || !audioSrc) {
    return null;
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="metadata"
      />
      <button
        onClick={handleToggle}
        className="fixed bottom-6 left-6 z-50 bg-black/60 backdrop-blur-md border border-white/30 text-white w-12 h-12 rounded-full shadow-xl hover:bg-black/80 transition-all duration-300 hover:scale-110 flex items-center justify-center safe-area-inset-bottom md:bottom-8 md:left-8 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label={isMuted ? "Enable background music" : "Disable background music"}
      >
        {isMuted ? (
          <span className="text-2xl">🔇</span>
        ) : (
          <span className="text-2xl">🔊</span>
        )}
      </button>
    </>
  );
}
