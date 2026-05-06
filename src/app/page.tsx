import { FeaturedDesigners } from "@/components/FeaturedDesigners";
import { FeaturedAiToolsSection } from "@/components/FeaturedAiToolsSection";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProblemBanner } from "@/components/ProblemBanner";
import { QuizBanner } from "@/components/QuizBanner";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <QuizBanner />
      <ProblemBanner />
      <FeaturedDesigners />
      <FeaturedAiToolsSection />
    </main>
  );
}
