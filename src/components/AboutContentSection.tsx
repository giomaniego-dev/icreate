import Image from "next/image";
import { ArticleSection } from "./ArticleSection";

type AboutContentSectionProps = {
  imageSrc?: string;
  quote?: string;
};

export function AboutContentSection({
  imageSrc = "/images/group-picture.png",
  quote = "AI creates possibilities. Designers create purpose.",
}: AboutContentSectionProps) {
  return (
    <ArticleSection className="bg-[#F2F2F2]" fullWidth>
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="relative mx-auto w-full max-w-[560px] overflow-hidden border border-zinc-300 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.12)]">
          <Image
            src={imageSrc}
            alt="The iCREATE team collaborating on a design task"
            width={560}
            height={360}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <blockquote className="text-center font-display text-4xl font-normal leading-tight text-black md:text-5xl lg:text-[64px]">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
    </ArticleSection>
  );
}
