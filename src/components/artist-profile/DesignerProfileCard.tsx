import Image from "next/image";
import type { ArtistProfileCard as ArtistProfileCardData } from "@/types/artist-profile";
import { PROFILE_GRADIENT, PROFILE_ORANGE } from "./profile-theme";

type DesignerProfileCardProps = {
  profile: ArtistProfileCardData;
};

/**
 * Matches Figma: portrait bottom-aligned to the orange bar, head lifts above it.
 * `jean.png` is 380×342 — width ~36% of the card, height = bar + head lift.
 */
export function DesignerProfileCard({ profile }: DesignerProfileCardProps) {
  return (
    <div className="relative pt-[5.5rem] md:pt-[6.25rem]">
      <div
        className="relative -mt-[5.5rem] overflow-visible rounded-2xl p-3.5 md:-mt-[6.25rem] md:rounded-[1.25rem] md:p-4"
        style={{ background: PROFILE_GRADIENT }}
      >
        {/* Portrait — plain image, no blend/scale tricks */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-[calc(100%+5.5rem)] w-[42%] sm:w-[40%] md:h-[calc(100%+6.25rem)] md:w-[38%] lg:w-[36%]">
          <div className="relative h-full w-full">
            <Image
              src={profile.portrait}
              alt={profile.portraitAlt ?? profile.name}
              fill
              className="object-contain object-bottom"
            sizes="(max-width: 768px) 42vw, 400px"
              priority
            />
          </div>
        </div>

        {/* White inset — drives card height; sits right of portrait */}
        <div className="relative z-10 ml-[40%] min-h-[12rem] rounded-xl bg-white px-6 py-6 sm:ml-[38%] sm:px-7 sm:py-7 md:ml-[36%] md:min-h-[13.5rem] md:rounded-[0.875rem] md:px-9 md:py-8 lg:ml-[34%] lg:min-h-[14.5rem] lg:px-10 lg:py-9">
          <h2
            className="font-display text-[1.35rem] leading-[1.08] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[1.875rem]"
            style={{ color: PROFILE_ORANGE }}
          >
            {profile.name}
          </h2>
          <p className="mt-1.5 font-display text-[0.625rem] font-normal uppercase leading-tight tracking-[0.12em] text-black sm:text-[0.6875rem] md:text-xs">
            {profile.role.toUpperCase()}
          </p>
          <p className="mt-4 font-sans text-xs leading-[1.55] text-black sm:text-[0.8125rem] md:text-sm md:leading-[1.6]">
            {profile.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
