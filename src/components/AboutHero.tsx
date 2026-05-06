import Image from "next/image";
import { Header } from "./Header";

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
      <Header />

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
          className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30"
          aria-hidden
        />
      </div>

      <div className="relative z-10 px-8 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40 lg:px-40">
        <h1 className="font-display text-5xl font-normal tracking-wide text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-8 max-w-5xl font-sans text-base leading-[1.65] text-white/95 md:text-[29px] md:leading-[1.45]">
          {description}
        </p>
      </div>
    </section>
  );
}
