import { AboutSection } from "@/components/AboutSection";
import { FeaturedDesigners } from "@/components/FeaturedDesigners";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProblemBanner } from "@/components/ProblemBanner";
import { PromptComparison } from "@/components/PromptComparison";
import { QuizBanner } from "@/components/QuizBanner";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <PromptComparison />
      <ProblemBanner />
      <FeaturedDesigners />
      <QuizBanner />
      <AboutSection />
    </main>
  );
}
