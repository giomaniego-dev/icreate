import type { Metadata } from "next";
import { HomeHero } from "@/components/HomeHero";

export const metadata: Metadata = {
  title: "iCreate",
  description:
    "Explore interactive workflows, creative processes, and real-world designer–AI collaboration in graphic design.",
};

export default function Home() {
  return <HomeHero />;
}
