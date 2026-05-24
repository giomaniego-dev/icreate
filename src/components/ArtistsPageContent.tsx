"use client";

import { useState } from "react";
import { artistProfiles } from "@/data/artist-profiles";
import { ArtistsHero } from "@/components/ArtistsHero";
import { Header } from "@/components/Header";
import { ArtistProfileSections } from "@/components/artist-profile/ArtistProfileSections";
import { ArtistSwitcher } from "@/components/artist-profile/ArtistSwitcher";
import { PROFILE_PAGE_BG } from "@/components/artist-profile/profile-theme";

export function ArtistsPageContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArtist = artistProfiles[activeIndex];
  const showHero = activeIndex === 0;

  return (
    <>
      {showHero && <ArtistsHero />}

      {!showHero && (
        <div
          className="px-6 pb-8 pt-8 md:pb-10 md:pt-10"
          style={{ backgroundColor: PROFILE_PAGE_BG }}
        >
          <Header variant="profile" />
        </div>
      )}

      <ArtistProfileSections
        key={activeArtist.id}
        content={activeArtist}
        compactTop={!showHero}
        artistSwitcher={
          <ArtistSwitcher
            currentIndex={activeIndex}
            total={artistProfiles.length}
            onSelect={setActiveIndex}
          />
        }
      />
    </>
  );
}
