import Image from "next/image";
import { HeroShell } from "@/components/layout/HeroShell";

const HERO_ACCENT = "#F58220";

const HERO_OVERLAY = [
  "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.38) 42%, rgba(0,0,0,0.52) 100%)",
  "radial-gradient(ellipse 95% 85% at 50% 48%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.72) 100%)",
].join(", ");

export function ArtistsHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/bg.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div
          className="absolute inset-0"
          style={{ background: HERO_OVERLAY }}
        />
      </div>

      <HeroShell>
        <div className="flex flex-1 flex-col items-center justify-center px-4 pb-16 pt-4 text-center sm:px-6 md:pb-20 md:pt-6">
          <div className="w-full max-w-6xl">
            <p
              className="font-display whitespace-nowrap text-[clamp(1.75rem,5.8vw,4.75rem)] font-normal uppercase leading-none tracking-[0.03em]"
              style={{
                color: HERO_ACCENT,
                textShadow:
                  "0 2px 10px rgba(0, 0, 0, 0.55), 0 4px 28px rgba(0, 0, 0, 0.4)",
              }}
            >
              Creative Collective
            </p>

            <h1 className="mt-3 font-display text-[clamp(1rem,2.35vw,2.125rem)] font-normal uppercase leading-none tracking-[0.06em] text-white sm:mt-4 md:mt-5 md:whitespace-nowrap">
              Featured Graphic Designers
            </h1>

            <p className="mx-auto mt-7 max-w-lg font-sans text-[clamp(0.8125rem,1.35vw,1.0625rem)] font-normal leading-[1.55] text-white sm:mt-8 md:mt-9 md:max-w-xl lg:max-w-2xl">
              Learn how experienced creatives are effectively integrating AI into
              their professional workflows.
            </p>
          </div>
        </div>
      </HeroShell>
    </section>
  );
}
