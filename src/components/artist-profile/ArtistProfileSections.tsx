import type { ReactNode } from "react";
import type { ArtistProfileContent } from "@/types/artist-profile";
import { ArtistWorksSection } from "./ArtistWorksSection";
import { DesignerProfileCard } from "./DesignerProfileCard";
import { InsightQuoteCard } from "./InsightQuoteCard";
import { ProcessWorkflow } from "./ProcessWorkflow";
import { ProfileSkillsPanel } from "./ProfileSkillsPanel";
import { ProfileToolsPanel } from "./ProfileToolsPanel";
import { PROFILE_PAGE_BG } from "./profile-theme";

type ArtistProfileSectionsProps = {
  content: ArtistProfileContent;
  artistSwitcher?: ReactNode;
  /** Less top padding when profile nav replaces the full-screen hero. */
  compactTop?: boolean;
};

export function ArtistProfileSections({
  content,
  artistSwitcher,
  compactTop = false,
}: ArtistProfileSectionsProps) {
  const topPadding = compactTop
    ? "pt-6 sm:pt-8 md:pt-10"
    : "pt-20 sm:pt-24 md:pt-28";

  return (
    <section className="pb-0" style={{ backgroundColor: PROFILE_PAGE_BG }}>
      <div
        className={`mx-auto max-w-6xl space-y-4 px-4 pb-4 sm:space-y-5 sm:px-6 sm:pb-5 md:px-10 md:pb-6 lg:px-16 ${topPadding}`}
      >
        <DesignerProfileCard profile={content.profile} />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-12 lg:items-stretch">
          <div className="flex flex-col gap-4 md:gap-5 lg:col-span-5">
            {content.insights.map((insight) => (
              <InsightQuoteCard key={insight.title} insight={insight} />
            ))}
          </div>

          <div className="lg:col-span-3">
            <ProfileToolsPanel tools={content.tools} />
          </div>

          <div className="lg:col-span-4">
            <ProfileSkillsPanel skills={content.skills} />
          </div>
        </div>

        <ProcessWorkflow steps={content.processSteps} />
      </div>

      <ArtistWorksSection
        works={content.works}
        worksLayout={content.worksLayout}
        artistSwitcher={artistSwitcher}
      />
    </section>
  );
}
