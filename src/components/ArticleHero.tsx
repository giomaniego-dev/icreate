import Image from "next/image";
import type { ReactNode } from "react";
import { Header } from "./Header";

type ArticleHeroProps = {
  title: string;
  date: string;
  excerpt: string;
  backgroundImage?: string;
  children?: ReactNode;
};

export function ArticleHero({
  title,
  date,
  excerpt,
  backgroundImage = "/images/article-bg.png",
  children,
}: ArticleHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black">
      <Header />

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
          className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 px-8 pt-32 pb-20 md:px-12 md:pt-40 md:pb-24 lg:px-40">
        <h1 className="font-display text-4xl font-normal leading-[1.15] text-white md:text-5xl lg:text-[56px]">
          {title}
        </h1>
        <p className="mt-6 font-sans text-base italic text-white/85 md:text-lg">
          {date}
        </p>
        <p className="mt-8 font-sans text-base leading-[1.7] text-white/95 md:text-lg">
          {excerpt}
        </p>

        {children}
      </div>
    </section>
  );
}
