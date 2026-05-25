"use client";

import { ViewProvider, useView } from "@/context/ViewContext";
import { HomeHero } from "@/components/HomeHero";
import { ArtistsPageContent } from "@/components/ArtistsPageContent";
import { QuizPageContent } from "@/components/QuizPageContent";
import { AboutHero } from "@/components/AboutHero";
import { AboutContentSection } from "@/components/AboutContentSection";
import { AboutTeamSection } from "@/components/AboutTeamSection";
import { ArticleViewer } from "@/components/ArticleViewer";
import { Footer } from "@/components/Footer";

const ABOUT_DESCRIPTION =
  `"Showcasing the Collaborative Creative Process of Graphic Designers and A.I." is a capstone research project that explores how designers integrate AI into modern graphic design and how human creativity continues to guide the final outcome. The project ultimately aims to clarify AI's role as a supportive tool, promote transparency, and encourage responsible, informed engagement with emerging creative technologies.`;

const FOOTER_VIEWS = new Set(["artists", "about", "article"]);

function AppShell() {
  const view = useView();

  return (
    <>
      {view === "home" && <HomeHero />}
      {view === "artists" && <ArtistsPageContent />}
      {view === "quiz" && <QuizPageContent />}
      {view === "about" && (
        <>
          <AboutHero title="ABOUT" description={ABOUT_DESCRIPTION} />
          <AboutContentSection />
          <AboutTeamSection />
        </>
      )}
      {view === "article" && <ArticleViewer />}
      {FOOTER_VIEWS.has(view) && <Footer />}
    </>
  );
}

export default function Home() {
  return (
    <ViewProvider>
      <AppShell />
    </ViewProvider>
  );
}
