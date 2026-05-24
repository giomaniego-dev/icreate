import Image from "next/image";
import type { ReactNode } from "react";
import { HeroShell } from "@/components/layout/HeroShell";

type ArticleHeroProps = {
  title: string;
  date: string;
  excerpt: string;
  source?: ReactNode;
  side?: ReactNode;
  backgroundImage?: string;
};

export function ArticleHero({
  title,
  date,
  excerpt,
  source,
  side,
  backgroundImage = "/images/article-bg.png",
}: ArticleHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover object-right"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-black/25"
          aria-hidden
        />
      </div>

      <HeroShell fullHeight={false}>
        <div className="px-8 pb-20 pt-4 md:px-12 md:pb-24 md:pt-6 lg:px-40">
          <div
            className={
              side
                ? "grid items-center gap-10 md:grid-cols-[1.25fr_1fr] md:gap-12 lg:gap-16"
                : ""
            }
          >
            <div>
              <h1 className="font-display text-4xl font-normal leading-[1.1] text-white md:text-5xl lg:text-[56px]">
                {title}
              </h1>
              <p className="mt-5 font-sans text-base italic text-white/80 md:text-lg">
                {date}
              </p>
              <p className="mt-6 font-sans text-base leading-[1.7] text-white/95 md:text-lg">
                {excerpt}
              </p>
              {source && (
                <div className="mt-6 font-sans text-sm leading-relaxed text-white/75 md:text-base">
                  {source}
                </div>
              )}
            </div>
            {side && (
              <div className="flex w-full justify-center md:justify-end">
                {side}
              </div>
            )}
          </div>
        </div>
      </HeroShell>
    </section>
  );
}
