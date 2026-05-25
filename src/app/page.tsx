import type { Metadata } from "next";
import { HomeLanding } from "@/components/HomeLanding";

export const metadata: Metadata = {
  title: "iCreate",
  description:
    "Explore interactive workflows, creative processes, and real-world designer–AI collaboration in graphic design.",
};

export default function Home() {
  return <HomeLanding />;
}
