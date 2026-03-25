"use client";

import Image from "next/image";

export function PromptComparison() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 md:px-12 lg:px-16">
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
          Which One is a Prompt?
        </h2>
        <p className="mt-2 text-center font-sans text-[20px] font-medium leading-normal text-[#333333]">
          Take a Moment and Look Closely.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl bg-[#F8F8F8] shadow-[0_2px_12px_rgba(0,0,0,0.06)] md:mt-12">
          <div className="flex flex-col items-center justify-center gap-12 px-12 py-12 md:flex-row md:gap-16 md:px-16 md:py-20 lg:gap-20 lg:px-20 lg:py-24">
            <div className="group relative aspect-[3/4] w-full max-w-[280px] shrink-0 overflow-hidden rounded-lg md:max-w-[320px]">
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

            <div className="group relative aspect-[3/4] w-full max-w-[280px] shrink-0 overflow-hidden rounded-lg md:max-w-[320px]">
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
      </div>
    </section>
  );
}
