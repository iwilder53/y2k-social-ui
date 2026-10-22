import type { ButtonHTMLAttributes } from "react";
import { cn } from "./cn";

export interface RetroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

export function RetroButton({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: RetroButtonProps) {
  return (
    <button
      type={type}
      className={cn("rs-button", `rs-button--${variant}`, `rs-button--${size}`, className)}
      {...props}
    />
  );
}
