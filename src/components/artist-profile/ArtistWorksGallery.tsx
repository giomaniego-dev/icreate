import Image from "next/image";
import type { ArtistWork, ArtistWorksLayout } from "@/types/artist-profile";

type ArtistWorksGalleryProps = {
  works: ArtistWork[];
  layout?: ArtistWorksLayout;
};

function WorkTile({
  work,
  index,
  className,
  sizes,
  priority,
  fill,
}: {
  work: ArtistWork;
  index: number;
  className?: string;
  sizes: string;
  priority?: boolean;
  fill?: boolean;
}) {
  const hasDescription = !!work.description;

  return (
    <div
      className={`group relative overflow-hidden rounded-lg bg-white sm:rounded-xl md:rounded-[0.875rem] ${className ?? ""}`}
    >
      <Image
        src={work.src}
        alt={work.alt ?? `Portfolio work ${index + 1}`}
        {...(fill
          ? { fill: true, className: "object-contain" }
          : { width: 1200, height: 800, className: "h-auto w-full" })}
        sizes={sizes}
        priority={priority}
      />

      {hasDescription && (
        <span
          className="absolute right-2 top-2 z-20 flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-[0.625rem] font-semibold leading-none text-black/70 shadow-sm sm:right-2.5 sm:top-2.5 sm:h-6 sm:w-6 sm:text-[0.6875rem]"
          aria-hidden
        >
          i
        </span>
      )}

      {hasDescription && (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-6 md:p-8">
          <p className="max-w-prose text-center text-xs leading-relaxed text-white sm:text-sm md:text-base">
            {work.description}
          </p>
        </div>
      )}
    </div>
  );
}

function FeaturedWorksLayout({ works }: { works: ArtistWork[] }) {
  const [primary, topRight, bottomRight] = works;

  return (
    <div className="grid w-full grid-cols-1 gap-3 px-3 py-4 sm:grid-cols-[2fr_3fr] sm:grid-rows-2 sm:gap-3 sm:px-4 sm:py-5 md:gap-4 md:px-6 md:py-6 lg:gap-5 lg:px-8 lg:py-7">
      <WorkTile
        work={primary}
        index={0}
        priority
        sizes="(max-width: 640px) 100vw, 42vw"
        className="sm:row-span-2"
      />
      <WorkTile
        work={topRight}
        index={1}
        fill
        sizes="(max-width: 640px) 100vw, 58vw"
        className="min-h-[200px] sm:min-h-0"
      />
      <WorkTile
        work={bottomRight}
        index={2}
        fill
        sizes="(max-width: 640px) 100vw, 58vw"
        className="min-h-[200px] sm:min-h-0"
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
