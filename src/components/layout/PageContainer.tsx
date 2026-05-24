import type { ElementType, ReactNode } from "react";
import { siteLayout } from "@/lib/site-layout";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "nav" | "content";
  as?: ElementType;
};

export function PageContainer({
  children,
  className = "",
  size = "content",
  as: Tag = "div",
}: PageContainerProps) {
  const widthClass =
    size === "nav" ? siteLayout.navWidth : siteLayout.contentWidth;

  return <Tag className={`${widthClass} ${className}`.trim()}>{children}</Tag>;
}
