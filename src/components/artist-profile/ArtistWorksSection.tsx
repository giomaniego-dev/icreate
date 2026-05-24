import Image from "next/image";
import type { ReactNode } from "react";
import type { ArtistWork, ArtistWorksLayout } from "@/types/artist-profile";
import { ArtistWorksGallery } from "./ArtistWorksGallery";

const WORKS_BG_IMAGE = "/images/bg.png";

type ArtistWorksSectionProps = {
  works: ArtistWork[];
  worksLayout?: ArtistWorksLayout;
  artistSwitcher?: ReactNode;
};

export function ArtistWorksSection({
  works,
  worksLayout,
  artistSwitcher,
}: ArtistWorksSectionProps) {
  return (
    <div className="relative mt-4 w-full md:mt-5">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={WORKS_BG_IMAGE}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#F5F5F5]/90" />
      </div>

      <div className="relative w-full">
        <ArtistWorksGallery works={works} layout={worksLayout} />
        {artistSwitcher}
      </div>
    </div>
  );
}
