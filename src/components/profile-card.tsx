import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

export interface ProfileCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  handle: string;
  avatar?: string;
  status?: string;
  mood?: string;
  children?: ReactNode;
}

export function ProfileCard({ name, handle, avatar, status = "ONLINE NOW", mood = "currently listening to music", children, className, ...props }: ProfileCardProps) {
  return (
    <div className={cn("rs-profile", className)} {...props}>
      <div className="rs-profile__top">
        {avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="rs-profile__avatar" src={avatar} alt={`${name}'s avatar`} />
        ) : (
          <div className="rs-profile__avatar rs-profile__avatar--placeholder" aria-hidden="true">✿</div>
        )}
        <div className="rs-profile__identity">
          <h2>{name}</h2>
          <p>@{handle}</p>
          <span className="rs-status"><i />{status}</span>
        </div>
      </div>
      <div className="rs-profile__mood">{mood}</div>
      {children ? <div className="rs-profile__extra">{children}</div> : null}
    </div>
  );
}
