import Image from "next/image";
import type { ArtistTool } from "@/types/artist-profile";
import { ProfilePanel } from "./ProfilePanel";

type ProfileToolsPanelProps = {
  title?: string;
  tools: ArtistTool[];
};

export function ProfileToolsPanel({
  title = "Tools",
  tools,
}: ProfileToolsPanelProps) {
  return (
    <ProfilePanel className="flex h-full min-h-0 flex-col">
      <h3 className="text-center font-display text-[0.6875rem] font-normal uppercase tracking-[0.08em] text-black sm:text-xs md:text-[0.8125rem]">
        {title}
      </h3>
      <div
        className={
          tools.length > 2
            ? "mt-5 grid flex-1 grid-cols-3 place-items-center gap-3 sm:mt-6 sm:gap-3.5 md:mt-7 md:gap-4"
            : "mt-5 flex flex-1 flex-wrap items-center justify-center gap-5 sm:mt-6 md:mt-7 md:gap-6"
        }
      >
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center overflow-hidden rounded-2xl sm:h-14 sm:w-14 md:h-[3.75rem] md:w-[3.75rem]"
          >
            <Image
              src={tool.icon}
              alt={tool.iconAlt ?? tool.name}
              width={80}
              height={80}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </ProfilePanel>
  );
}
