"use client";

import Image from "next/image";
import { useNavigate } from "@/context/ViewContext";
import { HeroShell } from "@/components/layout/HeroShell";

const HERO_ACCENT = "#F9A825";

export function HomeHero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/Carousel 1.JPG"
          alt=""
          fill
          className="object-cover object-center blur-[3px] scale-105"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <HeroShell>
        <div className="flex flex-1 items-center pb-16 pt-4 md:pb-20 md:pt-6">
          <div className="box-border w-full pl-8 pr-6 sm:pl-[10%] sm:pr-10 md:w-[60%] md:pl-[10%] md:pr-12 lg:w-[55%] lg:pl-[12%] lg:pr-16">
            <h1 className="font-display text-[2.625rem] font-extrabold leading-[1.08] tracking-tight text-white whitespace-nowrap sm:text-5xl md:text-[3.75rem] lg:text-[4.5rem] xl:text-[5.25rem]">
              <span className="block">Inside the</span>
              <span className="block" style={{ color: HERO_ACCENT }}>
                Designer-AI
              </span>
              <span className="block">Creative Process</span>
            </h1>

            <p className="mt-5 max-w-none font-sans text-base font-normal leading-[1.6] text-white sm:mt-6 sm:text-lg md:mt-7 md:text-[1.125rem] md:leading-[1.55]">
              Explore interactive workflows, creative processes, and real-world
              designer–AI collaboration in graphic design.
            </p>

            <button
              type="button"
              onClick={() => navigate("artists")}
              className="mt-7 inline-flex items-center justify-center rounded-xl px-7 py-3.5 font-sans text-base font-bold text-[#1A1A1A] transition hover:opacity-95 sm:mt-8 md:mt-9 md:px-8 md:py-4"
              style={{
                backgroundColor: HERO_ACCENT,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.35)",
              }}
            >
              Explore Process
            </button>
          </div>
        </div>
      </HeroShell>
    </section>
  );
}
