import Image from "next/image";
import type { ArtistWork, ArtistWorksLayout } from "@/types/artist-profile";

type ArtistWorksGalleryProps = {
  works: ArtistWork[];
  layout?: ArtistWorksLayout;
};

function WorkInfoIcon() {
  return (
    <span
      className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-[0.625rem] font-semibold leading-none text-black/70 shadow-sm sm:right-2.5 sm:top-2.5 sm:h-6 sm:w-6 sm:text-[0.6875rem]"
      aria-hidden
    >
      i
    </span>
  );
}

function WorkTile({
  work,
  index,
  className,
  sizes,
  priority,
}: {
  work: ArtistWork;
  index: number;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-white sm:rounded-xl md:rounded-[0.875rem] ${className ?? ""}`}
    >
      <Image
        src={work.src}
        alt={work.alt ?? `Portfolio work ${index + 1}`}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
      />
      <WorkInfoIcon />
    </div>
  );
}

function FeaturedWorksLayout({ works }: { works: ArtistWork[] }) {
  const [primary, topRight, bottomRight] = works;

  return (
    <div className="grid w-full grid-cols-1 gap-3 px-3 py-4 sm:grid-cols-[2fr_3fr] sm:grid-rows-2 sm:gap-3 sm:px-4 sm:py-5 md:gap-4 md:px-6 md:py-6 lg:gap-5 lg:px-8 lg:py-7 sm:h-[clamp(18rem,38vw,30rem)]">
      <WorkTile
        work={primary}
        index={0}
        priority
        sizes="(max-width: 640px) 100vw, 42vw"
        className="aspect-[3/4] min-h-[14rem] sm:row-span-2 sm:aspect-auto sm:min-h-0 sm:h-full"
      />
      <WorkTile
        work={topRight}
        index={1}
        sizes="(max-width: 640px) 100vw, 58vw"
        className="aspect-[16/9] min-h-[8rem] sm:aspect-auto sm:min-h-0 sm:h-full"
      />
      <WorkTile
        work={bottomRight}
        index={2}
        sizes="(max-width: 640px) 100vw, 58vw"
        className="aspect-[16/9] min-h-[8rem] sm:aspect-auto sm:min-h-0 sm:h-full"
      />
    </div>
  );
}

function GridWorksLayout({ works }: { works: ArtistWork[] }) {
  return (
    <div className="grid w-full grid-cols-3 gap-2 px-3 py-4 sm:gap-3 sm:px-4 sm:py-5 md:gap-4 md:px-6 md:py-6 lg:gap-5 lg:px-8 lg:py-7">
      {works.map((work, index) => (
        <WorkTile
          key={work.src}
          work={work}
          index={index}
          sizes="33vw"
          priority={index === 0}
          className="aspect-square"
        />
      ))}
    </div>
  );
}

export function ArtistWorksGallery({
  works,
  layout = "grid",
}: ArtistWorksGalleryProps) {
  if (layout === "featured" && works.length >= 3) {
    return <FeaturedWorksLayout works={works} />;
  }

  return <GridWorksLayout works={works} />;
}
