import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

export interface RetroWindowProps extends HTMLAttributes<HTMLElement> {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  controls?: boolean;
  variant?: "classic" | "chrome" | "flat";
}

export function RetroWindow({
  title,
  children,
  icon,
  controls = true,
  variant = "classic",
  className,
  ...props
}: RetroWindowProps) {
  return (
    <section
      className={cn("rs-window", `rs-window--${variant}`, className)}
      {...props}
    >
      <header className="rs-window__titlebar">
        <span className="rs-window__title">
          {icon ? <span className="rs-window__icon">{icon}</span> : null}
          {title}
        </span>
        {controls ? (
          <span className="rs-window__controls" aria-hidden="true">
            <span>_</span><span>□</span><span>×</span>
          </span>
        ) : null}
      </header>
      <div className="rs-window__body">{children}</div>
    </section>
  );
}
