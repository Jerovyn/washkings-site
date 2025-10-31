"use client";

import { useState, useEffect, useRef } from "react";
import siteConfig from "@/config/site_config.json";

export default function ThemeAudioToggle() {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const theme = siteConfig.seasonalTheme || "default";
  const themeConfig = siteConfig.themes[theme as keyof typeof siteConfig.themes];
  const audioSrc = themeConfig?.audio;

  useEffect(() => {
    // Only show audio toggle if theme has audio configured
    if (audioSrc) {
      setIsVisible(true);
    }
  }, [audioSrc]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // 30% volume
      audioRef.current.loop = true;
      
      if (!isMuted && isVisible) {
        audioRef.current.play().catch(() => {
          // Auto-play blocked, user will need to click to play
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted, isVisible]);

  // Load mute state from localStorage on mount
  useEffect(() => {
    const savedMuteState = localStorage.getItem("audioMuted");
    if (savedMuteState !== null) {
      setIsMuted(savedMuteState === "true");
    }
  }, []);

  // Save mute state to localStorage
  const toggleMute = () => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    localStorage.setItem("audioMuted", String(newMuteState));
  };

  if (!isVisible || !audioSrc) {
    return null;
  }

  return (
    <>
      <audio ref={audioRef} src={audioSrc} preload="auto" />
      <button
        onClick={toggleMute}
        className="fixed bottom-6 left-6 z-50 bg-white/20 backdrop-blur-md border border-white/30 text-white w-12 h-12 rounded-full shadow-xl hover:bg-white/30 transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
      >
        {isMuted ? (
          <span className="text-xl">🔇</span>
        ) : (
          <span className="text-xl">🔊</span>
        )}
      </button>
    </>
  );
}

