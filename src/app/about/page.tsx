import type { Metadata } from "next";
import { AboutContentSection } from "@/components/AboutContentSection";
import { AboutHero } from "@/components/AboutHero";
import { AboutTeamSection } from "@/components/AboutTeamSection";

const ABOUT_DESCRIPTION =
  "\"Showcasing the Collaborative Creative Process of Graphic Designers and A.I.\" is a capstone research project that explores how designers integrate AI into modern graphic design and how human creativity continues to guide the final outcome. The project ultimately aims to clarify AI's role as a supportive tool, promote transparency, and encourage responsible, informed engagement with emerging creative technologies.";

export const metadata: Metadata = {
  title: "About | iCreate",
  description: ABOUT_DESCRIPTION,
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero title="ABOUT" description={ABOUT_DESCRIPTION} />
      <AboutContentSection />
      <AboutTeamSection />
    </main>
  );
}
