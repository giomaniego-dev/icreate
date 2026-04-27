"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  DesignerProfileModal,
  type DesignerProfileDetail,
} from "@/components/DesignerProfileModal";

const designers: DesignerProfileDetail[] = [
  {
    name: "Reymond Cruz",
    image: "/images/Profile 1.jpg",
    occupation: "Graphic Designer",
    skills: ["Canva AI", "Adobe Firefly"],
    achievements: [
      "Led brand refresh projects for two campus organizations",
      "Honorable mention in a national student poster competition",
      "Regular contributor to peer design critiques and workshops",
    ],
    outputItems: [
      {
        title: "Admission Week Visual Pack",
        description:
          "Designed directional posters and digital banners for incoming student orientation.",
        result: "Improved on-site wayfinding and reduced confusion at key booths.",
        image: "/images/jw1.png",
      },
      {
        title: "Portfolio Poster Series",
        description:
          "Created a three-poster narrative showcasing process sketches, layouts, and final executions.",
        result: "Selected for exhibition in the department showcase.",
        image: "/images/jw2.png",
      },
      {
        title: "Portfolio Poster Series",
        description:
          "Created a three-poster narrative showcasing process sketches, layouts, and final executions.",
        result: "Selected for exhibition in the department showcase.",
        image: "/images/jw3.png",
      },
    ],
    processParagraphs: [
      "I start by translating the brief into one clear message and a visual mood board that anchors every decision.",
      "From there I explore multiple layout paths quickly, then pressure-test each one for hierarchy and readability.",
      "Before final delivery, I create reusable templates and export settings so teams can produce follow-up assets consistently.",
    ],
  },
  {
    name: "Deither Castro",
    image: "/images/diether.png",
    occupation: "Graphic Designer",
    skills: ["Canva AI", "Adobe Firefly"],
    achievements: [
      "Awarded 'Best Visual Concept' in a student design showcase",
      "Recognized for outstanding use of AI-assisted workflows",
      "Featured in two online design community spotlights",
    ],
    outputItems: [
      {
        title: "Cafe Launch Identity",
        description:
          "Produced logo lockups, menu boards, and promo cards with a warm handcrafted aesthetic.",
        result: "Brand assets rolled out in-store and on delivery apps.",
        image: "/images/sarah.png",
      },
      {
        title: "Social Content Sprint",
        description:
          "Generated a monthly batch of campaign creatives with reusable composition rules.",
        result: "Cut content production time while keeping visuals on-brand.",
        image: "/images/jillian.png",
      },
      {
        title: "Social Content Sprint",
        description:
          "Generated a monthly batch of campaign creatives with reusable composition rules.",
        result: "Cut content production time while keeping visuals on-brand.",
        image: "/images/housing.png",
      },
    ],
    processParagraphs: [
      "My process begins with audience intent: what they should feel, remember, and do after seeing the design.",
      "I use rapid concept blocks to test shape language and color direction before polishing any one idea too early.",
      "Once approved, I package files in production-friendly formats so marketing and printing teams can move fast.",
    ],
  },
  {
    name: "Joshua Erries Dingalsan",
    image: "/images/joshua.png",
    occupation: "Graphic Designer",
    skills: ["Canva AI", "Adobe Firefly"],
    achievements: [
      "Published work in a regional emerging designers gallery",
      "Mentored first-year students on layout and typography basics",
      "Shortlisted for a collaborative UI concept challenge",
    ],
    outputItems: [
      {
        title: "Editorial Spread Concept",
        description:
          "Designed a long-form magazine layout system balancing typography and image storytelling.",
        result: "Used as a teaching sample in introductory design classes.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        imageAlt: "Athena editorial concept output",
      },
      {
        title: "Culture Fest Key Visual",
        description:
          "Created campaign hero artwork and adaptation rules for posters, tickets, and social posts.",
        result: "Boosted event visibility across student communities.",
      },
      {
        title: "Portfolio Site UI Refresh",
        description:
          "Refined information architecture and visual rhythm for a cleaner browsing experience.",
        result: "Increased average session time on featured projects.",
      },
    ],
    processParagraphs: [
      "I define the narrative first, because visual style should support the story instead of overpowering it.",
      "Then I refine spacing, type scale, and rhythm until content feels effortless to read across breakpoints.",
      "At handoff, I include annotations for hierarchy and tone so collaborators can preserve intent.",
    ],
  },
];

export function FeaturedDesigners() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const [cardsPerView, setCardsPerView] = useState(3);
  // const [currentSlide, setCurrentSlide] = useState(0);

  /* useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
        return;
      }

      if (window.innerWidth < 1024) {
        setCardsPerView(2);
        return;
      }

      setCardsPerView(3);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxSlide = useMemo(
    () => Math.max(0, designers.length - cardsPerView),
    [cardsPerView],
  );

  useEffect(() => {
    setCurrentSlide((previous) => Math.min(previous, maxSlide));
  }, [maxSlide]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((previous) => (previous >= maxSlide ? 0 : previous + 1));
    }, 4500);

    return () => window.clearInterval(timer);
  }, [maxSlide]);*/

  const openProfile = (index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  /*const goPrev = () => {
    setCurrentSlide((previous) => (previous <= 0 ? maxSlide : previous - 1));
  };

  const goNext = () => {
    setCurrentSlide((previous) => (previous >= maxSlide ? 0 : previous + 1));
  };

  const totalSlides = maxSlide + 1;*/

  return (
    <section className="bg-white px-6 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16" id="featured-designers">
      <div className="mx-auto max-w-6xl">
        <h2
          className="text-center font-display font-normal leading-tight"
          style={{
            fontSize: "55px",
            background: "linear-gradient(to right, #FBC949 0%, #FF9114 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Featured Designers
        </h2>
        <p className="mt-2 max-w-1xl text-center font-sans text-[20px] font-medium leading-normal text-[#333333]">
          Meet the creatives shaping tomorrow&apos;s visual culture and making
          waves in the industry.
        </p>

        <div className="mt-12">
          <div className="relative px-4 sm:px-8">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  //transform: `translateX(-${(currentSlide * 100) / cardsPerView}%)`,
                }}
              >
                {designers.map((designer, index) => (
                  <div
                    key={designer.name}
                    className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
                  >
                    <article className="group overflow-hidden rounded-xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.14)]">
                      <div className="relative aspect-square w-full overflow-hidden rounded-t-xl">
                        <Image
                          src={designer.image}
                          alt={designer.name}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>

                      <div className="flex flex-col items-center px-6 py-5 sm:px-5 sm:py-6">
                        <h3 className="text-center font-sans text-[1.25rem] font-bold text-black">
                          {designer.name}
                        </h3>
                        <p className="mt-1.5 text-center font-sans text-[0.875rem] font-normal text-[#666666]">
                          {designer.occupation}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                          {designer.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full bg-[#FFC107] px-4 py-1.5 font-sans text-[0.8125rem] font-medium text-white transition-transform duration-200 group-hover:scale-105"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={() => openProfile(index)}
                          className="mt-5 inline-flex items-center justify-center rounded-lg border border-[#DDDDDD] bg-white px-6 py-2.5 font-sans text-[0.875rem] font-medium text-[#333333] shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-[#FF9114]/40 hover:bg-[#FF9114]/10 hover:text-[#FF9114]"
                        >
                          View Works
                        </button>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* <button
              type="button"
              //onClick={goPrev}
              aria-label="Show previous designer"
              className="absolute -left-2 top-1/2 z-10 hidden -translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/95 p-3 text-[#2E2E2E] shadow-[0_10px_24px_rgba(0,0,0,0.16)] ring-1 ring-black/5 backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#FF9114] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] sm:inline-flex"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Show next designer"
              className="absolute -right-2 top-1/2 z-10 hidden translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/95 p-3 text-[#2E2E2E] shadow-[0_10px_24px_rgba(0,0,0,0.16)] ring-1 ring-black/5 backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#FF9114] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] sm:inline-flex"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button> */}
          </div>

          {/*<div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <button
                key={slideIndex}
                type="button"
                aria-label={`Go to slide ${slideIndex + 1}`}
                onClick={() => setCurrentSlide(slideIndex)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  currentSlide === slideIndex ? "bg-[#FF9114]" : "bg-[#D9D9D9]"
                }`}
              />
            ))}
          </div>*/}
        </div>
      </div>

      <DesignerProfileModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        designers={designers}
        initialIndex={selectedIndex}
      />
    </section>
  );
}
