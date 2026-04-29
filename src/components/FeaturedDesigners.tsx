"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  DesignerProfileModal,
  type DesignerProfileDetail,
} from "@/components/DesignerProfileModal";

const designers: DesignerProfileDetail[] = [
  {
    name: "Michael Aligan",
    image: "/images/michael.png",
    occupation: "Graphic Designer",
    tags: ["Canva AI", "Topaz Photo Ai"],
    about:
      "Michael Aligan is a 38-year-old freelance designer and illustrator with six years of experience. He uses AI as a time-saving tool to stay competitive but insists that human fundamentals must drive the creative process. While he embraces AI for efficiency, he remains wary of how it allows others to bypass the hard work of learning traditional skills.",
    skills: [
      "Design & AI Tech: Expert in photo retouching and layout design using Adobe Photoshop, specializing in daily AI upscaling with Topaz Photo AI to restore low-quality images.",
      "Creative Support: Uses AI for rapid idea generation and moodboarding while utilizing ChatGPT to handle professional administrative tasks like drafting cover letters.",
    ],
    experiences: [
      "Freelance Graphic Designer (Current): Manages a high-volume workflow for a Canadian T-shirt business, where he cleans, retouches, and upscales customer images to create print-ready designs.",
      "Small Local Business Designer (Past): Gained essential industry experience working for local companies before pivoting to international freelance work for better pay and flexibility.",
    ],
    outputItems: [
      {
        title: "Admission Week Visual Pack",
        description:
          "Designed directional posters and digital banners for incoming student orientation.",
        result: "Improved on-site wayfinding and reduced confusion at key booths.",
        image: "/images/mi-1.png",
      },
      {
        title: "Portfolio Poster Series",
        description:
          "Created a three-poster narrative showcasing process sketches, layouts, and final executions.",
        result: "Selected for exhibition in the department showcase.",
        image: "/images/mi-2.png",
      },
      {
        title: "Portfolio Poster Series",
        description:
          "Created a three-poster narrative showcasing process sketches, layouts, and final executions.",
        result: "Selected for exhibition in the department showcase.",
        image: "/images/mi-3.png",
      },
    ],
    processParagraphs: [
      `Michael Aligan is a freelance graphic designer who uses his six years of experience to balance artistic skill with modern technology. His primary process involves taking low-quality or blurry images provided by clients—specifically for t-shirt printing—and running them through AI upscaling software like Topaz Photo AI to make them sharp and clear. Instead of simply accepting what the computer generates, he manually controls the results by adjusting how much the AI modifies the original image, ensuring it doesn't look unnatural. Once the technical cleanup is finished, he takes over the creative side by manually arranging the images into a custom design layout, which is where his human judgment and understanding of design basics come into play. He also uses AI for his personal passion projects to brainstorm new ideas or create "mood boards" for inspiration when he feels stuck. By using these tools as a "high-speed engine" while he remains the "driver," Michael has managed to shorten his work time from an entire day down to just 15 to 30 minutes, giving him a competitive edge while maintaining the high standards of a professional artist.`
    ],
  },
  {
    name: "Jean Michelle Occeña",
    image: "/images/jean.png",
    occupation: "Graphic Designer",
    tags: ["Freepik", "Adobe Firefly"],
    about:
      "Jean is a seasoned Multimedia Specialist with 10 years of experience blending technical IT foundations with the visual arts. She specializes in AI-integrated workflows, treating AI as a 'co-creator' to drive efficiency and brainstorming under tight deadlines. By combining professional design expertise with modern tools, she ensures every project is both strategically executed and human-refined.",
    skills: [
      "Creative Design: Expert in graphic design, storyboarding, and conceptualizing commercial visuals.",
      "Multimedia Production: Proficient in video editing, GIF creation, and foundational HTML/CSS.",
      "Strategic Optimization: Skilled at using AI to solve resource constraints and accelerate brainstorming under tight deadlines.",
    ],
    experiences: [
      "10-Year Creative Career: A seasoned Multimedia Specialist active in the industry since 2016.", 
      "Agency Expertise: Extensive experience in fast-paced advertising, managing commercial accounts and high-pressure pitches.",
      "Multimedia Evolution: Progressed from foundational web customization (HTML/CSS) to expert-level graphic design and video production.",
    ],
    outputItems: [
      {
        title: "Cafe Launch Identity",
        description:
          "Produced logo lockups, menu boards, and promo cards with a warm handcrafted aesthetic.",
        result: "Brand assets rolled out in-store and on delivery apps.",
        image: "/images/jean-1.png",
      },
      {
        title: "Social Content Sprint",
        description:
          "Generated a monthly batch of campaign creatives with reusable composition rules.",
        result: "Cut content production time while keeping visuals on-brand.",
        image: "/images/jean-2.png",
      },
      {
        title: "Social Content Sprint",
        description:
          "Generated a monthly batch of campaign creatives with reusable composition rules.",
        result: "Cut content production time while keeping visuals on-brand.",
        image: "/images/jean-3.png",
      },
    ],
    processParagraphs: [
      "Jean integrates AI into her workflow as a collaborative 'co-creator,' using Adobe Firefly 2024 to bridge the gap between abstract concepts and professional execution. Her process begins by uploading specific image references to guide the AI in generating tailored environments or storyboards, ensuring the output aligns with her intended composition and mood. To meet professional standards, she then moves the generated work into Adobe Photoshop to perform detailed manual polishing, where she corrects technical impurities, artifacts, or glitches inherent in AI results. Finally, she seamlessly blends real-world product assets into these refined AI backgrounds, meticulously adjusting lighting and shadows to create a cohesive, unified scene that maintains her artistic originality while significantly accelerating the production timeline."
    ],
  },
  {
    name: "Joshua Erries Dinglasan",
    image: "/images/joshua.png",
    occupation: "Graphic Designer",
    tags: ["Midjourney", "Adobe Firefly"],
    about:
      "Joshua Erries C. Dinglasan is a 28-year-old Professional Graphic Designer with over a decade of experience, ranging from freelance projects started in 2014 to high-level agency work with firms like VivaMax. After beginning as a self-taught Photoshop enthusiast at age 12, he formalised his passion with a degree in Graphic Design and has since spent 13 years mastering design theories and modern trends to deliver expert visual solutions.",
    skills: [
      "Advanced Photo Manipulation: Realistic image blending, lighting matching, and resolution enhancement.",
      "Digital Design: Creation of professional layouts for posters, book covers, and social media.",
      "Asset Production: Generating custom character designs and vector elements for commercial use.",
    ],
    experiences: [
      "Agencies: Campaigns for VivaMax and official posters for Rain in España.",
      "Freelance: Branding and design for small businesses and events since 2014.",
      "Commercial: Specialist ad layouts for the online gaming and casino sectors.",
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
      `Erries integrates AI into his workflow as a "symbiotic" partner that handles technical efficiency while he maintains control over the creative direction. His process begins with deep research into the project's purpose such as studying book covers for a series poster and he primarily turns to AI when facing tight deadlines or creative blocks. He uses tools like ChatGPT to brainstorm layout ideas and industry-specific tropes, while utilizing Photoshop’s generative fill to expand backgrounds and Midjourney to create generic assets, like a single athlete for a sports ad. However, he never uses AI to generate a complete design; instead, he manually crops and blends these assets, performing his own "passes" to fix AI errors like distorted hands or mismatched skin tones. By keeping the final layout and decision-making organic, he ensures that the AI handles the "grunt work" while the final product retains a human touch and intentionality.`
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
        <p className="mt-2 max-w-1xl mx-20 text-center font-sans text-[20px] font-medium leading-normal text-[#333333]">
          Learn how experienced creatives with over five years in the field are strategically integrating AI into their professional workflows.
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
                          {designer.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-[#FFC107] px-4 py-1.5 font-sans text-[0.8125rem] font-medium text-white transition-transform duration-200 group-hover:scale-105"
                            >
                              {tag}
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
