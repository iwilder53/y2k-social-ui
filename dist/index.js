// src/components/cn.ts
function cn(...values) {
  return values.filter(Boolean).join(" ");
}

// src/components/retro-window.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function RetroWindow({
  title,
  children,
  icon,
  controls = true,
  variant = "classic",
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: cn("rs-window", `rs-window--${variant}`, className),
      ...props,
      children: [
        /* @__PURE__ */ jsxs("header", { className: "rs-window__titlebar", children: [
          /* @__PURE__ */ jsxs("span", { className: "rs-window__title", children: [
            icon ? /* @__PURE__ */ jsx("span", { className: "rs-window__icon", children: icon }) : null,
            title
          ] }),
          controls ? /* @__PURE__ */ jsxs("span", { className: "rs-window__controls", "aria-hidden": "true", children: [
            /* @__PURE__ */ jsx("span", { children: "_" }),
            /* @__PURE__ */ jsx("span", { children: "\u25A1" }),
            /* @__PURE__ */ jsx("span", { children: "\xD7" })
          ] }) : null
        ] }),
        /* @__PURE__ */ jsx("div", { className: "rs-window__body", children })
      ]
    }
  );
}

// src/components/retro-button.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function RetroButton({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    "button",
    {
      type,
      className: cn("rs-button", `rs-button--${variant}`, `rs-button--${size}`, className),
      ...props
    }
  );
}

// src/components/retro-card.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function RetroCard({ title, children, accent = false, className, ...props }) {
  return /* @__PURE__ */ jsxs2("div", { className: cn("rs-card", accent && "rs-card--accent", className), ...props, children: [
    title ? /* @__PURE__ */ jsx3("div", { className: "rs-card__heading", children: title }) : null,
    /* @__PURE__ */ jsx3("div", { className: "rs-card__content", children })
  ] });
}

// src/components/retro-badge.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function RetroBadge({ tone = "pink", className, ...props }) {
  return /* @__PURE__ */ jsx4("span", { className: cn("rs-badge", `rs-badge--${tone}`, className), ...props });
}

// src/components/marquee.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function Marquee({ children, speed = "normal", separator = " \u2726 ", className, ...props }) {
  return /* @__PURE__ */ jsxs3("div", { className: cn("rs-marquee", `rs-marquee--${speed}`, className), "aria-label": typeof children === "string" ? children : void 0, ...props, children: [
    /* @__PURE__ */ jsxs3("div", { className: "rs-marquee__track", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsxs3("span", { children: [
        children,
        separator
      ] }),
      /* @__PURE__ */ jsxs3("span", { children: [
        children,
        separator
      ] })
    ] }),
    /* @__PURE__ */ jsx5("span", { className: "rs-sr-only", children })
  ] });
}

// src/components/profile-card.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
function ProfileCard({ name, handle, avatar, status = "ONLINE NOW", mood = "currently listening to music", children, className, ...props }) {
  return /* @__PURE__ */ jsxs4("div", { className: cn("rs-profile", className), ...props, children: [
    /* @__PURE__ */ jsxs4("div", { className: "rs-profile__top", children: [
      avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        /* @__PURE__ */ jsx6("img", { className: "rs-profile__avatar", src: avatar, alt: `${name}'s avatar` })
      ) : /* @__PURE__ */ jsx6("div", { className: "rs-profile__avatar rs-profile__avatar--placeholder", "aria-hidden": "true", children: "\u273F" }),
      /* @__PURE__ */ jsxs4("div", { className: "rs-profile__identity", children: [
        /* @__PURE__ */ jsx6("h2", { children: name }),
        /* @__PURE__ */ jsxs4("p", { children: [
          "@",
          handle
        ] }),
        /* @__PURE__ */ jsxs4("span", { className: "rs-status", children: [
          /* @__PURE__ */ jsx6("i", {}),
          status
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx6("div", { className: "rs-profile__mood", children: mood }),
    children ? /* @__PURE__ */ jsx6("div", { className: "rs-profile__extra", children }) : null
  ] });
}

// src/components/music-player.tsx
import { useRef, useState } from "react";
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
function MusicPlayer({ title, artist, src, cover, autoPlay = false, className, ...props }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };
  return /* @__PURE__ */ jsxs5("div", { className: cn("rs-player", className), ...props, children: [
    /* @__PURE__ */ jsx7("audio", { ref: audioRef, src, autoPlay, onEnded: () => setPlaying(false), onPause: () => setPlaying(false), onPlay: () => setPlaying(true) }),
    /* @__PURE__ */ jsx7("div", { className: "rs-player__cover", children: cover ? /* @__PURE__ */ jsx7("img", { src: cover, alt: "" }) : /* @__PURE__ */ jsx7("span", { "aria-hidden": "true", children: "\u266B" }) }),
    /* @__PURE__ */ jsxs5("div", { className: "rs-player__meta", children: [
      /* @__PURE__ */ jsx7("strong", { children: title }),
      /* @__PURE__ */ jsx7("span", { children: artist }),
      /* @__PURE__ */ jsxs5("div", { className: "rs-player__equalizer", "aria-hidden": "true", children: [
        /* @__PURE__ */ jsx7("i", {}),
        /* @__PURE__ */ jsx7("i", {}),
        /* @__PURE__ */ jsx7("i", {}),
        /* @__PURE__ */ jsx7("i", {}),
        /* @__PURE__ */ jsx7("i", {})
      ] })
    ] }),
    /* @__PURE__ */ jsx7("button", { className: "rs-player__toggle", type: "button", onClick: toggle, "aria-label": playing ? "Pause track" : "Play track", children: playing ? "\u2161" : "\u25B6" })
  ] });
}
export {
  Marquee,
  MusicPlayer,
  ProfileCard,
  RetroBadge,
  RetroButton,
  RetroCard,
  RetroWindow
};
