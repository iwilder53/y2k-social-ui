import * as react from 'react';
import { HTMLAttributes, ReactNode, ButtonHTMLAttributes } from 'react';

interface RetroWindowProps extends HTMLAttributes<HTMLElement> {
    title: string;
    children: ReactNode;
    icon?: ReactNode;
    controls?: boolean;
    variant?: "classic" | "chrome" | "flat";
}
declare function RetroWindow({ title, children, icon, controls, variant, className, ...props }: RetroWindowProps): react.JSX.Element;

interface RetroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "danger";
    size?: "sm" | "md" | "lg";
}
declare function RetroButton({ variant, size, className, type, ...props }: RetroButtonProps): react.JSX.Element;

interface RetroCardProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    children: ReactNode;
    accent?: boolean;
}
declare function RetroCard({ title, children, accent, className, ...props }: RetroCardProps): react.JSX.Element;

interface RetroBadgeProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: "pink" | "blue" | "lime" | "purple" | "neutral";
}
declare function RetroBadge({ tone, className, ...props }: RetroBadgeProps): react.JSX.Element;

interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    speed?: "slow" | "normal" | "fast";
    separator?: string;
}
declare function Marquee({ children, speed, separator, className, ...props }: MarqueeProps): react.JSX.Element;

interface ProfileCardProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    handle: string;
    avatar?: string;
    status?: string;
    mood?: string;
    children?: ReactNode;
}
declare function ProfileCard({ name, handle, avatar, status, mood, children, className, ...props }: ProfileCardProps): react.JSX.Element;

interface MusicPlayerProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    artist: string;
    src: string;
    cover?: string;
    autoPlay?: boolean;
}
declare function MusicPlayer({ title, artist, src, cover, autoPlay, className, ...props }: MusicPlayerProps): react.JSX.Element;

export { Marquee, type MarqueeProps, MusicPlayer, type MusicPlayerProps, ProfileCard, type ProfileCardProps, RetroBadge, type RetroBadgeProps, RetroButton, type RetroButtonProps, RetroCard, type RetroCardProps, RetroWindow, type RetroWindowProps };
