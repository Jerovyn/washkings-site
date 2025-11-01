"use client";

import { useState, useEffect, useRef } from "react";

export default function AudioToggle() {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Check localStorage for saved preference
    const savedPreference = localStorage.getItem("audio_enabled_v1");
    if (savedPreference === "true") {
      setIsMuted(false);
    }

    // Show toggle if audio file exists
    const audio = new Audio();
    audio.src = "/audio/merry-christmas-happy-holiday-music-427692.mp3";
    
    audio.addEventListener("loadeddata", () => {
      setIsVisible(true);
    });

    audio.addEventListener("error", () => {
      setIsVisible(false);
    });
  }, []);

  // Track user interaction
  useEffect(() => {
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
    // Handle reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches || audioRef.current === null) {
      return;
    }

    // Set volume to 0.3 (30%)
    audioRef.current.volume = 0.3;

    if (isMuted) {
      audioRef.current.pause();
    } else if (hasInteracted) {
      audioRef.current.play().catch(() => {
        // Auto-play blocked
      });
    }
  }, [isMuted, hasInteracted]);

  const handleToggle = () => {
    setIsMuted(!isMuted);
    localStorage.setItem("audio_enabled_v1", String(!isMuted));
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/merry-christmas-happy-holiday-music-427692.mp3"
        loop
        preload="metadata"
      />
      <button
        onClick={handleToggle}
        className="fixed bottom-6 left-6 z-50 bg-black/60 backdrop-blur-md border border-white/30 text-white w-12 h-12 rounded-full shadow-xl hover:bg-black/80 transition-all duration-300 hover:scale-110 flex items-center justify-center safe-area-inset-bottom md:bottom-8 md:left-8"
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

