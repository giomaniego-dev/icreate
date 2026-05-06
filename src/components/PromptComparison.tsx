"use client";

import Image from "next/image";

type PromptComparisonProps = {
  compact?: boolean;
};

export function PromptComparison({ compact = false }: PromptComparisonProps) {
  return (
    <div
      className={
        compact
          ? "rounded-2xl bg-white px-5 py-8 sm:px-7 md:px-10 md:py-10 lg:px-12"
          : "bg-white px-6 py-16 sm:px-8 md:px-12 lg:px-16"
      }
    >
      <div className="mx-auto max-w-6xl">
        <h2
          className="text-center font-display font-normal leading-tight"
          style={{
            fontSize: compact ? "48px" : "55px",
            background: "linear-gradient(to right, #FBC949 0%, #FF9114 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Which One is a Prompt?
        </h2>
        <p className="mt-2 text-center font-sans text-[20px] font-medium leading-normal text-[#333333]">
          Take a Moment and Look Closely.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl bg-[#F8F8F8] shadow-[0_2px_12px_rgba(0,0,0,0.06)] md:mt-12">
          <div
            className={`flex flex-col items-center justify-center gap-12 px-12 py-12 md:flex-row md:gap-16 ${
              compact
                ? "md:px-12 md:py-12 lg:gap-16 lg:px-14 lg:py-14"
                : "md:px-16 md:py-20 lg:gap-20 lg:px-20 lg:py-24"
            }`}
          >
            <div className="group relative aspect-3/4 w-full max-w-[280px] shrink-0 overflow-hidden rounded-lg md:max-w-[320px]">
              <Image
                src="/images/original.png"
                alt="Original artwork"
                fill
                className="object-cover transition duration-300"
                sizes="(max-width: 768px) 100vw, 320px"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-display text-2xl font-bold uppercase tracking-widest text-white">
                  Original
                </span>
              </div>
            </div>

            <div className="group relative aspect-3/4 w-full max-w-[280px] shrink-0 overflow-hidden rounded-lg md:max-w-[320px]">
              <Image
                src="/images/ai.png"
                alt="AI-generated artwork"
                fill
                className="object-cover transition duration-300"
                sizes="(max-width: 768px) 100vw, 320px"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-display text-2xl font-bold uppercase tracking-widest text-white">
                  AI
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mx-auto rounded-2xl bg-[#F8F8F8] px-6 py-6 md:px-8 md:py-7 ${
            compact
              ? "mt-8 w-full max-w-[560px] md:mt-10"
              : "mt-10 w-full max-w-[760px] md:mt-12"
          }`}
        >
          <p className="font-sans text-[18px] leading-tight text-[#222222]">
            You&apos;ve seen the difference. One is shaped by human intention,
            the other by AI interpretation. Understanding both helps you use AI
            more deliberately in your work.
          </p>
          <p className="mt-6 text-center font-sans text-[26px] font-bold leading-tight text-[#111111]">
            &ldquo;AI recreates. Designers interpret.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
