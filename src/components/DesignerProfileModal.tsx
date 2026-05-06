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
  tags: string[];
  about: string;
  skills: string[];
  experiences: string[];
  outputItems: DesignerOutputItem[];
  processParagraphs: string[];
  processImage?: string;
};

type DesignerOutputItem = {
  title: string;
  description: string;
  result: string;
  image?: string;
  imageAlt?: string;
};

const TAB_LABELS = ["About", "Skills", "Experiences"] as const;
type TabIndex = 0 | 1 | 2;

type MainSection = 0 | 1 | 2;

const MAIN_SECTION_LABELS = [
  "Profile",
  "Design outputs carousel",
  "Design process",
] as const;

interface DesignerProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  designers: DesignerProfileDetail[];
  initialIndex?: number;
}

export function DesignerProfileModal({
  isOpen,
  onClose,
  designers,
  initialIndex = 0,
}: DesignerProfileModalProps) {
  const [designerIndex, setDesignerIndex] = useState(initialIndex);
  const [activeTab, setActiveTab] = useState<TabIndex>(0);
  const [mainSection, setMainSection] = useState<MainSection>(0);
  const [outputSlide, setOutputSlide] = useState(0);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setDesignerIndex(initialIndex);
      setActiveTab(0);
      setMainSection(0);
      setOutputSlide(0);
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    setActiveTab(0);
    setOutputSlide(0);
  }, [designerIndex]);

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

  const outputItems = designer.outputItems;
  const nOut = outputItems.length;
  const safeOutSlide = nOut > 0 ? outputSlide : 0;
  const leftIdx = nOut > 0 ? (safeOutSlide - 1 + nOut) % nOut : 0;
  const rightIdx = nOut > 0 ? (safeOutSlide + 1) % nOut : 0;

  const stepOutput = (delta: number) => {
    if (nOut === 0) return;
    setOutputSlide((s) => (s + delta + nOut) % nOut);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom,0px))] pt-[max(0.5rem,env(safe-area-inset-top,0px))] animate-modal-fade-in sm:p-4"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby={mainSection === 0 ? modalTitleId : undefined}
      aria-label={
        mainSection !== 0 ? MAIN_SECTION_LABELS[mainSection] : undefined
      }
    >
      <div
        className="relative flex h-[calc(100dvh-1.5rem)] w-[min(100%,92vw)] max-w-[960px] min-h-0 animate-modal-scale-in flex-col overflow-hidden rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.14)] sm:h-[min(36rem,90dvh)] sm:rounded-2xl md:w-[min(100%,90vw)]"
        style={{ backgroundColor: "#E9E5DF" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-3 top-3 z-20 min-h-11 min-w-11 rounded-lg p-2 text-[#222222] transition hover:bg-black/5 sm:right-4 sm:top-4 sm:min-h-0 sm:min-w-0 sm:p-1.5"
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

        <div className="flex min-h-0 flex-1 flex-col px-5 pt-12 pb-4 sm:px-8 sm:pt-14 sm:pb-5 md:px-12 md:pt-14 md:pb-6">
          {mainSection === 0 && (
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] md:flex-row">
              <div className="relative aspect-square w-full shrink-0 md:aspect-auto md:w-[42%]">
                <Image
                  src={designer.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 380px"
                  priority
                />
              </div>

              <div className="flex w-full flex-1 flex-col gap-4 px-6 py-6 sm:gap-5 sm:px-8 sm:py-7 md:w-[58%] md:px-9 md:py-9">
                <header>
                  <h2
                    id={modalTitleId}
                    className="font-sans text-2xl font-extrabold leading-tight tracking-tight text-black md:text-[1.625rem]"
                  >
                    {designer.name}
                  </h2>
                  <p className="mt-1 font-sans text-sm font-normal text-[#777777] md:text-base">
                    {designer.occupation}
                  </p>
                </header>

                <div
                  className="flex items-center"
                  role="tablist"
                  aria-label="Designer profile sections"
                >
                  {TAB_LABELS.map((label, idx) => (
                    <div key={label} className="flex items-center">
                      <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === idx}
                        onClick={() => setActiveTab(idx as TabIndex)}
                        className={`px-1 font-sans text-base font-bold leading-none transition md:text-lg ${
                          activeTab === idx ? "" : "text-black hover:opacity-80"
                        }`}
                        style={
                          activeTab === idx ? GRADIENT_TEXT_STYLE : undefined
                        }
                      >
                        {label}
                      </button>
                      {idx < TAB_LABELS.length - 1 && (
                        <span
                          aria-hidden
                          className="mx-3 inline-block h-4 w-px bg-black/40 sm:mx-4"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto pr-1">
                  {activeTab === 0 && (
                    <p className="text-justify font-sans text-[0.875rem] leading-[1.65] text-black md:text-[0.9375rem] md:leading-[1.7]">
                      {designer.about}
                    </p>
                  )}

                  {activeTab === 1 && (
                    <ul className="list-disc space-y-3 pl-5 text-justify font-sans text-[0.875rem] leading-[1.65] text-black marker:text-black md:text-[0.9375rem] md:leading-[1.7]">
                      {designer.skills.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {activeTab === 2 && (
                    <ul className="list-disc space-y-3 pl-5 text-justify font-sans text-[0.875rem] leading-[1.65] text-black marker:text-black md:text-[0.9375rem] md:leading-[1.7]">
                      {designer.experiences.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          )}

          {mainSection === 1 && (
            <div className="flex min-h-0 flex-1 flex-col justify-center py-1 sm:py-2">
              <h2 className="mb-3 text-center font-sans text-xl font-extrabold leading-tight tracking-wide text-black sm:mb-5 sm:text-lg md:text-3xl md:tracking-widest">
                OUTPUTS
              </h2>

              <div className="relative flex min-h-0 flex-1 items-center justify-center py-1 sm:py-2">
                <button
                  type="button"
                  onClick={() => stepOutput(-1)}
                  className="absolute left-0 top-1/2 z-30 flex min-h-10 min-w-10 -translate-y-1/2 items-center justify-center rounded-full transition hover:scale-105 active:scale-95 md:left-0.5"
                  aria-label="Previous slide"
                >
                  <Image
                    src="/images/left-button.png"
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10"
                    aria-hidden
                  />
                </button>
                <button
                  type="button"
                  onClick={() => stepOutput(1)}
                  className="absolute right-0 top-1/2 z-30 flex min-h-10 min-w-10 -translate-y-1/2 items-center justify-center rounded-full transition hover:scale-105 active:scale-95 md:right-0.5"
                  aria-label="Next slide"
                >
                  <Image
                    src="/images/right-button.png"
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10"
                    aria-hidden
                  />
                </button>

                <div className="flex w-full max-w-full items-center justify-center gap-0.5 px-7 sm:max-w-[620px] sm:gap-2 sm:px-8 md:max-w-[700px] md:gap-3">
                  {[
                    { index: leftIdx, role: "side" as const },
                    { index: safeOutSlide, role: "center" as const },
                    { index: rightIdx, role: "side" as const },
                  ].map(({ index, role }) => {
                    const slide = outputItems[index];
                    if (!slide) return null;
                    const isCenter = role === "center";
                    const hasImage = Boolean(slide.image);
                    return (
                      <div
                        key={`${index}-${role}-${safeOutSlide}`}
                        className={`relative flex shrink-0 justify-center transition-all duration-300 ease-out ${
                          isCenter
                            ? "z-20 w-[42%] max-w-[220px] scale-100 sm:w-[40%] sm:max-w-[260px] md:max-w-[280px]"
                            : "z-10 w-[21%] max-w-[92px] scale-[0.76] opacity-90 sm:w-[23%] sm:max-w-[120px] sm:scale-[0.82] md:max-w-[140px] md:scale-[0.84]"
                        }`}
                      >
                        <div
                          className={`relative w-full overflow-hidden rounded-md bg-white sm:rounded-lg ${
                            isCenter
                              ? `${
                                  hasImage ? "p-0" : "p-4 sm:p-5"
                                } shadow-[0_14px_32px_rgba(0,0,0,0.22)]`
                              : `${
                                  hasImage ? "p-0" : "p-2.5 sm:p-3"
                                } shadow-[0_8px_20px_rgba(0,0,0,0.14)]`
                          }`}
                          style={hasImage ? undefined : { aspectRatio: "3 / 4" }}
                        >
                          {hasImage ? (
                            <Image
                              src={slide.image ?? ""}
                              alt={
                                slide.imageAlt ??
                                `${designer.name} output: ${slide.title}`
                              }
                              width={0}
                              height={0}
                              sizes="(max-width: 640px) 28vw, 280px"
                              className="block h-auto w-full"
                              priority={isCenter}
                            />
                          ) : (
                            <div className="flex h-full flex-col rounded-md border border-[#EFEFEF] bg-[#FAFAFA] p-2.5 text-left sm:p-3">
                              <p
                                className={`font-sans font-bold leading-tight text-black ${
                                  isCenter
                                    ? "text-sm sm:text-base"
                                    : "text-[0.625rem] sm:text-[0.6875rem]"
                                }`}
                              >
                                {slide.title}
                              </p>
                              <p
                                className={`mt-2 font-sans text-[#444444] ${
                                  isCenter
                                    ? "text-[0.75rem] leading-[1.45] sm:text-[0.8125rem]"
                                    : "text-[0.5625rem] leading-[1.35] sm:text-[0.625rem]"
                                }`}
                              >
                                {slide.description}
                              </p>
                              <p
                                className={`mt-auto pt-2 font-sans font-semibold text-[#FF9114] ${
                                  isCenter
                                    ? "text-[0.6875rem] sm:text-[0.75rem]"
                                    : "text-[0.5rem] sm:text-[0.5625rem]"
                                }`}
                              >
                                {slide.result}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {mainSection === 2 && (
            <div className="flex min-h-0 flex-1 flex-col px-1 py-1 sm:px-4 sm:py-2">
              <h2 className="mb-3 text-center font-sans text-xl font-extrabold leading-tight tracking-wide text-black sm:mb-5 sm:text-lg md:text-3xl md:tracking-widest">
                PROCESS
              </h2>
              <div className="mx-auto flex w-full max-w-[880px] flex-1 items-center justify-center">
                {designer.processImage ? (
                  <div className="relative w-full overflow-hidden rounded-2xl">
                    <Image
                      src={designer.processImage}
                      alt={`${designer.name} design process`}
                      width={1200}
                      height={800}
                      className="h-auto w-full"
                      sizes="(max-width: 1024px) 92vw, 880px"
                    />
                  </div>
                ) : (
                  <p className="font-sans text-sm text-[#444444]">
                    No process image available.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <div
          className="flex shrink-0 justify-center gap-4 pb-4 sm:gap-5 sm:pb-5"
          role="tablist"
          aria-label="Modal sections"
        >
          {([0, 1, 2] as const).map((section) => (
            <button
              key={section}
              type="button"
              role="tab"
              aria-selected={mainSection === section}
              onClick={() => setMainSection(section)}
              className="flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-full"
              aria-label={MAIN_SECTION_LABELS[section]}
            >
              <span
                className={`block h-4 w-4 rounded-full transition sm:h-5 sm:w-5 ${
                  mainSection === section
                    ? "bg-[#2C2C2C]"
                    : "bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-black/10"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
