import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

export interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
  separator?: string;
}

export function Marquee({ children, speed = "normal", separator = " ✦ ", className, ...props }: MarqueeProps) {
  return (
    <div className={cn("rs-marquee", `rs-marquee--${speed}`, className)} aria-label={typeof children === "string" ? children : undefined} {...props}>
      <div className="rs-marquee__track" aria-hidden="true">
        <span>{children}{separator}</span><span>{children}{separator}</span>
      </div>
      <span className="rs-sr-only">{children}</span>
    </div>
  );
}
