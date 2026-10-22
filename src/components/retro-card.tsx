import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

export interface RetroCardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: ReactNode;
  accent?: boolean;
}

export function RetroCard({ title, children, accent = false, className, ...props }: RetroCardProps) {
  return (
    <div className={cn("rs-card", accent && "rs-card--accent", className)} {...props}>
      {title ? <div className="rs-card__heading">{title}</div> : null}
      <div className="rs-card__content">{children}</div>
    </div>
  );
}
