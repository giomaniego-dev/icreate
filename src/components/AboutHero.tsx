import Image from "next/image";
import { HeroShell } from "@/components/layout/HeroShell";

type AboutHeroProps = {
  title: string;
  description: string;
  backgroundImage?: string;
};

export function AboutHero({
  title,
  description,
  backgroundImage = "/images/about-bg.png",
}: AboutHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-linear-to-r from-black/40 via-black/25 to-black/10"
          aria-hidden
        />
      </div>

      <HeroShell fullHeight={false}>
        <div className="px-8 pb-28 pt-10 md:px-12 md:pb-32 md:pt-14 lg:px-40">
          <h1 className="font-display text-5xl font-normal tracking-wide text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-8 font-sans text-[20px] font-medium leading-[1.65] text-white/95">
            {description}
          </p>
        </div>
      </HeroShell>
    </section>
  );
}
