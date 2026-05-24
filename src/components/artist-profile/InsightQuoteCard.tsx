import Image from "next/image";
import type { ArtistInsight } from "@/types/artist-profile";
import { ProfilePanel } from "./ProfilePanel";

type InsightQuoteCardProps = {
  insight: ArtistInsight;
};

export function InsightQuoteCard({ insight }: InsightQuoteCardProps) {
  return (
    <ProfilePanel className="flex flex-1 items-center gap-3 sm:gap-4">
      <Image
        src={insight.icon}
        alt={insight.iconAlt ?? insight.title}
        width={52}
        height={52}
        className="h-12 w-12 shrink-0 object-contain sm:h-[3.25rem] sm:w-[3.25rem]"
      />
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-[0.6875rem] font-normal uppercase leading-tight tracking-[0.06em] text-black sm:text-xs md:text-[0.8125rem]">
          {insight.title}
        </h3>
        <p className="mt-1.5 font-sans text-[0.6875rem] leading-snug text-black sm:mt-2 sm:text-xs md:text-[0.8125rem] md:leading-[1.35]">
          &ldquo;{insight.quote}&rdquo;
        </p>
      </div>
    </ProfilePanel>
  );
}
