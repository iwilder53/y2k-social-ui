"use client";

import { useRef, useState } from "react";
import type { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { cn } from "./cn";

export interface MusicPlayerProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  artist: string;
  src: string;
  cover?: string;
  autoPlay?: boolean;
}

export function MusicPlayer({ title, artist, src, cover, autoPlay = false, className, ...props }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try { await audio.play(); setPlaying(true); } catch { setPlaying(false); }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };
  return (
    <div className={cn("rs-player", className)} {...props}>
      <audio ref={audioRef} src={src} autoPlay={autoPlay} onEnded={() => setPlaying(false)} onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} />
      <div className="rs-player__cover">
        {cover ? <img src={cover} alt="" /> : <span aria-hidden="true">♫</span>}
      </div>
      <div className="rs-player__meta">
        <strong>{title}</strong>
        <span>{artist}</span>
        <div className="rs-player__equalizer" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      </div>
      <button className="rs-player__toggle" type="button" onClick={toggle} aria-label={playing ? "Pause track" : "Play track"}>
        {playing ? "Ⅱ" : "▶"}
      </button>
    </div>
  );
}
