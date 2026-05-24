import type { ReactNode } from "react";
import { Header } from "@/components/Header";

type HeroShellProps = {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
};

export function HeroShell({
  children,
  className = "",
  fullHeight = true,
}: HeroShellProps) {
  return (
    <div
      className={`relative z-10 flex flex-col ${fullHeight ? "min-h-screen" : ""} ${className}`.trim()}
    >
      <Header />
      {children}
    </div>
  );
}
