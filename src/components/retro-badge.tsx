import type { HTMLAttributes } from "react";
import { cn } from "./cn";

export interface RetroBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "pink" | "blue" | "lime" | "purple" | "neutral";
}

export function RetroBadge({ tone = "pink", className, ...props }: RetroBadgeProps) {
  return <span className={cn("rs-badge", `rs-badge--${tone}`, className)} {...props} />;
}
