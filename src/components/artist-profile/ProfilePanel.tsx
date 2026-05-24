import type { ReactNode } from "react";
import { PROFILE_CARD_BG } from "./profile-theme";

type ProfilePanelProps = {
  children: ReactNode;
  className?: string;
};

export function ProfilePanel({ children, className = "" }: ProfilePanelProps) {
  return (
    <div
      className={`rounded-2xl p-4 sm:rounded-[1.125rem] sm:p-5 md:rounded-[1.25rem] md:p-6 ${className}`.trim()}
      style={{ backgroundColor: PROFILE_CARD_BG }}
    >
      {children}
    </div>
  );
}
