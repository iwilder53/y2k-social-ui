"use client";

import { useState } from "react";
import {
  Marquee,
  MusicPlayer,
  ProfileCard,
  RetroBadge,
  RetroButton,
  RetroCard,
  RetroWindow,
} from "y2k-social-ui";

const themes = ["myspace", "cyber", "chrome"] as const;
type Theme = (typeof themes)[number];

export default function HomePage() {
  const [theme, setTheme] = useState<Theme>("myspace");
  const [guestbook, setGuestbook] = useState<string[]>([
    "first!! love the layout ☆",
    "blink-182 forever",
  ]);
  const [message, setMessage] = useState("");

  function signGuestbook() {
    const value = message.trim();
    if (!value) return;
    setGuestbook((items) => [value, ...items].slice(0, 5));
    setMessage("");
  }

  return (
    <main
      data-rs-theme={theme}
      className="rs-theme min-h-screen px-4 py-6 sm:px-8"
    >
      <div className="mx-auto max-w-5xl space-y-5">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.25em] opacity-70">
              personal homepage / est. 2004
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
              YASH.EXE <span className="text-[var(--rs-pink)]">✦</span>
            </h1>
          </div>
          <div className="flex gap-2" aria-label="Choose theme">
            {themes.map((item) => (
              <RetroButton
                key={item}
                size="sm"
                variant={theme === item ? "primary" : "ghost"}
                onClick={() => setTheme(item)}
              >
                {item}
              </RetroButton>
            ))}
          </div>
        </header>

        <Marquee>
          WELCOME TO MY PAGE ✦ BEST VIEWED WITH YOUR FAVORITE BROWSER ✦ LEAVE A
          COMMENT ✦ MUSIC ON REPEAT ✦
        </Marquee>

        <div className="grid gap-5 md:grid-cols-[280px_1fr]">
          <aside className="space-y-5">
            <ProfileCard
              name="Yash"
              handle="pixel_overload"
              mood="♫ listening to the old internet"
              status="ONLINE / 24-7"
            >
              <div className="flex flex-wrap gap-1.5">
                <RetroBadge tone="pink">music nerd</RetroBadge>
                <RetroBadge tone="lime">code goblin</RetroBadge>
                <RetroBadge tone="purple">night owl</RetroBadge>
              </div>
            </ProfileCard>

            <RetroWindow title="NOW PLAYING" icon="♫">
              <MusicPlayer
                title="Demo track"
                artist="Your audio file goes here"
                src="/demo-track.mp3"
              />
              <p className="mt-2 text-xs opacity-70">
                Add a licensed MP3 at public/demo-track.mp3 to enable playback.
              </p>
            </RetroWindow>

            <RetroCard title="ABOUT ME">
              <p className="text-sm leading-6">
                Building things, collecting sounds, and customizing every pixel.
                This is my corner of the web.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <RetroBadge tone="blue">next.js</RetroBadge>
                <RetroBadge tone="pink">Y2K</RetroBadge>
                <RetroBadge tone="neutral">DIY</RetroBadge>
              </div>
            </RetroCard>
          </aside>

          <section className="space-y-5">
            <RetroWindow title="welcome_to_my_profile.html" icon="✿">
              <div className="space-y-4">
                <div className="rounded-lg border border-[var(--rs-border)] bg-[var(--rs-surface-raised)] p-4">
                  <p className="font-mono text-xs opacity-70">
                    ★ PROFILE STATUS ★
                  </p>
                  <h2 className="mt-2 text-2xl font-bold">
                    You found my page!
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-6 opacity-80">
                    A customizable retro UI starter for Next.js. Swap themes,
                    add your own media, and make it feel like the early social
                    web.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <RetroButton
                    onClick={() =>
                      document
                        .getElementById("guestbook")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Sign guestbook ↓
                  </RetroButton>
                  <RetroButton
                    variant="secondary"
                    onClick={() =>
                      setTheme(theme === "cyber" ? "myspace" : "cyber")
                    }
                  >
                    Change my vibe ✦
                  </RetroButton>
                </div>
              </div>
            </RetroWindow>

            <div className="grid gap-4 sm:grid-cols-2">
              <RetroCard title="MY INTERESTS" accent>
                <ul className="space-y-2 text-sm">
                  <li>✦ Guitar and loud guitars</li>
                  <li>✦ Weird web experiments</li>
                  <li>✦ Retro hardware</li>
                  <li>✦ Customizing everything</li>
                </ul>
              </RetroCard>
              <RetroCard title="FRIEND SPACE">
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  {["☆", "✿", "♫"].map((symbol, index) => (
                    <div
                      key={symbol}
                      className="rounded-md border border-[var(--rs-border)] bg-[var(--rs-surface-raised)] p-3"
                    >
                      <div className="text-2xl">{symbol}</div>
                      <div className="mt-1">friend_{index + 1}</div>
                    </div>
                  ))}
                </div>
              </RetroCard>
            </div>

            <div id="guestbook">
              <RetroWindow title="guestbook.txt" icon="✎">
                <form
                  className="flex flex-col gap-2 sm:flex-row"
                  onSubmit={(event) => {
                    event.preventDefault();
                    signGuestbook();
                  }}
                >
                  <label className="sr-only" htmlFor="guest-message">
                    Guestbook message
                  </label>
                  <input
                    id="guest-message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    maxLength={120}
                    placeholder="leave a little message..."
                    className="min-h-10 min-w-0 flex-1 rounded-md border border-[var(--rs-border)] bg-[var(--rs-surface)] px-3 text-sm outline-none focus:ring-2 focus:ring-[var(--rs-focus)]"
                  />
                  <RetroButton type="submit">Sign it ✦</RetroButton>
                </form>
                <ul className="mt-4 space-y-2">
                  {guestbook.map((item, index) => (
                    <li
                      key={`${item}-${index}`}
                      className="rounded-md border border-dashed border-[var(--rs-border)] p-3 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </RetroWindow>
            </div>
          </section>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--rs-border)] pt-4 font-mono text-[10px] uppercase tracking-widest opacity-70">
          <span>made with ✦ and too much caffeine</span>
          <span>© 2004–2026</span>
          <span>you are visitor #000042</span>
        </footer>
      </div>
    </main>
  );
}
