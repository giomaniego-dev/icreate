import type { Metadata } from "next";
import { ArticleViewer } from "./ArticleViewer";

export const metadata: Metadata = {
  title:
    "About | iCreate",
  description:
    "Designers\u2026 real talk. Hindi ka mabagal kasi kulang ka sa skill. Mabagal ka kasi ginagawa mo pa rin lahat manually.",
};

export default function AboutPage() {
  return <ArticleViewer />;
}
