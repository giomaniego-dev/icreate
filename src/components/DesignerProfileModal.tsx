"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const GRADIENT_TEXT_STYLE: React.CSSProperties = {
  background: "linear-gradient(to right, #FBC949 0%, #FF9114 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export type DesignerProfileDetail = {
  name: string;
  image: string;
  occupation: string;
  skills: string[];
  achievements: string[];
};

const DEFAULT_PROFICIENCY = [
  { src: "/images/canva.png", alt: "Canva" },
  { src: "/images/photoshop.png", alt: "Adobe Photoshop" },
];

const OUTPUT_SLIDES = [
  {
    src: "/images/artfusionexhibit.png",
    alt: "Artfusion Exhibit poster, March 15–16 2025",
  },
  {
    src: "/images/grants-chips.png",
    alt: "Grantz Chips promotional poster",
  },
  {
    src: "/images/logitech.png",
    alt: "Logitech Pebble M350 mouse poster",
  },
] as const;

const PROCESS_PARAGRAPHS = [
  "In my workflow as a graphic designer, I use AI mainly as a support tool to speed up parts of the design process. When starting a project, I review the client brief and sometimes use AI to help gather references and visual inspirations so I can quickly understand the direction of the design.",
  "During the ideation stage, I use AI for brainstorming, such as exploring possible color palettes, typography pairings, or style references. Once I have a concept in mind, I move into the design phase using tools like Adobe Illustrator, Adobe Photoshop, or Figma, where I create and refine the actual design.",
  "AI features also help automate small tasks like background removal or generating quick variations, which makes the workflow more efficient. In the end, I still review and finalize everything myself to ensure the design meets the project requirements.",
];

type MainTab = 0 | 1 | 2;

const MAIN_TAB_LABELS = [
  "Profile and achievements",
  "Design outputs carousel",
  "Design process",
] as const;

interface DesignerProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  designers: DesignerProfileDetail[];
  /** Which designer’s profile tab to show (achievements are unique per designer). */
  initialIndex?: number;
}

export function DesignerProfileModal({
  isOpen,
  onClose,
  designers,
  initialIndex = 0,
}: DesignerProfileModalProps) {
  const [designerIndex, setDesignerIndex] = useState(initialIndex);
  const [mainTab, setMainTab] = useState<MainTab>(0);
  const [outputSlide, setOutputSlide] = useState(1);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setDesignerIndex(initialIndex);
      setMainTab(0);
      setOutputSlide(1);
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose]);

  if (!isOpen || designers.length === 0) return null;

  const designer = designers[designerIndex] ?? designers[0];
  const modalTitleId = "designer-profile-modal-title";

  const nOut = OUTPUT_SLIDES.length;
  const leftIdx = (outputSlide - 1 + nOut) % nOut;
  const rightIdx = (outputSlide + 1) % nOut;

  const stepOutput = (delta: number) => {
    setOutputSlide((s) => (s + delta + nOut) % nOut);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom,0px))] pt-[max(0.5rem,env(safe-area-inset-top,0px))] animate-modal-fade-in sm:p-4"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby={mainTab === 0 ? modalTitleId : undefined}
      aria-label={mainTab !== 0 ? MAIN_TAB_LABELS[mainTab] : undefined}
    >
      <div
        className="relative flex h-[calc(100dvh-max(0.5rem,env(safe-area-inset-top,0px))-max(0.5rem,env(safe-area-inset-bottom,0px))-0.75rem)] max-h-[calc(100dvh-0.75rem)] w-[min(100%,92vw)] max-w-[920px] min-h-0 animate-modal-scale-in flex-col overflow-hidden rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.14)] sm:h-[min(36rem,86dvh)] sm:max-h-[min(36rem,86dvh)] sm:rounded-2xl md:w-[min(100%,88vw)]"
        style={{ backgroundColor: "#F0F0F0" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-2 top-2 z-20 min-h-[44px] min-w-[44px] rounded-lg p-2 text-[#222222] transition hover:bg-black/5 sm:right-3 sm:top-3 sm:min-h-0 sm:min-w-0 sm:p-1.5"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            className="mx-auto block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="flex min-h-0 flex-1 flex-col pt-11 sm:pt-12">
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-y-contain [-webkit-overflow-scrolling:touch] px-4 py-4 sm:px-7 sm:py-6 md:px-10 md:py-8">
            {mainTab === 0 && (
              <div className="mx-auto flex min-h-full w-full max-w-[840px] flex-1 flex-col">
                <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] md:min-h-[280px] md:flex-row md:items-stretch">
                  <div
                    className="relative aspect-4/5 max-h-[44vh] w-full shrink-0 md:aspect-square md:max-h-none md:w-1/2 md:min-h-0 md:self-stretch"
                    style={{ backgroundColor: "#3A6FB8" }}
                  >
                    <Image
                      src={designer.image}
                      alt=""
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 420px"
                      priority
                    />
                  </div>

                  <div className="flex w-full flex-1 flex-col justify-center gap-6 px-6 py-7 sm:gap-4 sm:px-8 sm:py-8 md:w-1/2 md:gap-5 md:px-10 md:py-10 lg:px-12 lg:py-11">
                    <header className="shrink-0">
                      <h2
                        id={modalTitleId}
                        className="font-sans text-2xl font-bold leading-[1.15] tracking-tight text-black sm:text-[1.625rem] md:text-[1.75rem]"
                      >
                        {designer.name}
                      </h2>
                      <p className="mt-2 font-sans text-[0.9375rem] font-normal leading-normal text-[#666666] md:text-base">
                        {designer.occupation}
                      </p>
                    </header>

                    <div className="shrink-0">
                      <h3
                        className="font-sans text-lg font-bold leading-snug md:text-xl"
                        style={GRADIENT_TEXT_STYLE}
                      >
                        Achievements
                      </h3>
                      <ul className="mt-3 list-disc space-y-2 pl-5 font-sans text-sm font-normal leading-[1.65] text-black sm:pl-4.5 sm:text-[0.9375rem] sm:leading-[1.7] marker:text-black">
                        {designer.achievements.map((item) => (
                          <li key={item} className="pl-0.5">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex shrink-0 flex-row items-center justify-between gap-4">
                      <h3
                        className="font-sans text-lg font-bold leading-snug md:text-xl"
                        style={GRADIENT_TEXT_STYLE}
                      >
                        Proficiency
                      </h3>
                      <div className="flex shrink-0 items-center gap-2.5">
                        {DEFAULT_PROFICIENCY.map((icon) => (
                          <div
                            key={icon.src}
                            className="relative h-10 w-10 overflow-hidden rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.12)] ring-1 ring-black/5 sm:h-11 sm:w-11"
                          >
                            <Image
                              src={icon.src}
                              alt={icon.alt}
                              fill
                              className="object-cover"
                              sizes="44px"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {mainTab === 1 && (
              <div className="flex min-h-[min(14rem,calc(100dvh-12rem))] flex-1 flex-col justify-center py-1 sm:min-h-0 sm:py-2">
                <h2 className="mb-2 text-center font-sans text-base font-bold tracking-wide text-black sm:mb-4 sm:text-lg md:text-xl">
                  OUTPUTS
                </h2>

                <div className="relative flex min-h-0 flex-1 items-center justify-center py-1 sm:py-2">
                  <button
                    type="button"
                    onClick={() => stepOutput(-1)}
                    className="absolute left-0 top-1/2 z-30 flex min-h-10 min-w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#E8E8E8] text-[#222222] shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition active:bg-[#DDDDDD] md:left-0.5"
                    aria-label="Previous slide"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => stepOutput(1)}
                    className="absolute right-0 top-1/2 z-30 flex min-h-10 min-w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#E8E8E8] text-[#222222] shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition active:bg-[#DDDDDD] md:right-0.5"
                    aria-label="Next slide"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>

                  <div className="flex w-full max-w-full items-center justify-center gap-0.5 px-7 sm:max-w-[620px] sm:gap-2 sm:px-8 md:max-w-[700px] md:gap-3">
                    {[
                      { index: leftIdx, role: "side" as const },
                      { index: outputSlide, role: "center" as const },
                      { index: rightIdx, role: "side" as const },
                    ].map(({ index, role }) => {
                      const slide = OUTPUT_SLIDES[index];
                      const isCenter = role === "center";
                      return (
                        <div
                          key={`${index}-${role}-${outputSlide}`}
                          className={`relative flex shrink-0 justify-center transition-all duration-300 ease-out ${
                            isCenter
                              ? "z-20 w-[42%] max-w-[220px] scale-100 sm:w-[40%] sm:max-w-[260px] md:max-w-[280px]"
                              : "z-10 w-[21%] max-w-[92px] scale-[0.76] opacity-90 sm:w-[23%] sm:max-w-[120px] sm:scale-[0.82] md:max-w-[140px] md:scale-[0.84]"
                          }`}
                        >
                          <div
                            className={`relative w-full overflow-hidden rounded-md bg-white sm:rounded-lg ${
                              isCenter
                                ? "shadow-[0_14px_32px_rgba(0,0,0,0.22)]"
                                : "shadow-[0_8px_20px_rgba(0,0,0,0.14)]"
                            }`}
                            style={{ aspectRatio: "3 / 4" }}
                          >
                            <Image
                              src={slide.src}
                              alt={slide.alt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 28vw, 240px"
                              priority={isCenter}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {mainTab === 2 && (
              <div className="flex min-h-0 flex-1 flex-col px-1 py-1 sm:px-4 sm:py-2">
                <h2 className="mb-3 text-center font-sans text-xl font-extrabold leading-tight tracking-wide text-black sm:mb-5 sm:text-lg md:text-3xl md:tracking-widest">
                  PROCESS
                </h2>
                <div className="mx-auto w-full max-w-xl flex-1 space-y-3 sm:max-w-xl sm:space-y-4">
                  {PROCESS_PARAGRAPHS.map((text, i) => (
                    <p
                      key={i}
                      className="font-sans text-[0.8125rem] leading-[1.65] text-black sm:text-[0.875rem] sm:leading-[1.7] md:text-[0.9375rem]"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className="flex shrink-0 justify-center gap-3.5 border-t border-black/6 px-4 py-3 sm:border-t-0 sm:gap-4 sm:py-3.5"
          role="tablist"
          aria-label="Modal sections"
        >
          {([0, 1, 2] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={mainTab === tab}
              onClick={() => setMainTab(tab)}
              className="flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-full p-1"
              aria-label={MAIN_TAB_LABELS[tab]}
            >
              <span
                className={`block h-3.5 w-3.5 rounded-full transition sm:h-4 sm:w-4 ${
                  mainTab === tab
                    ? "scale-110 bg-[#2C2C2C] shadow-sm"
                    : "scale-100 bg-white shadow-md ring-1 ring-black/12"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
