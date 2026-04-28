"use client";

import Image from "next/image";
import { useState } from "react";
import { QuizModal } from "./QuizModal";

export function QuizBanner() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  return (
    <section id="quiz" className="scroll-mt-20 px-6 py-10 md:px-12 md:py-16">
      <div
        className="mx-auto flex max-w-7xl flex-col items-center gap-10 overflow-hidden rounded-2xl px-10 py-12 md:flex-row md:items-center md:justify-between md:gap-16 md:px-14 md:py-16 lg:gap-20 lg:px-20 lg:py-20"
        style={{
          background: "linear-gradient(to right, #2261B4 21%, #14234C 100%)",
        }}
      >
        <div
          className="flex shrink-0 items-center justify-center overflow-hidden rounded-xl p-5 md:p-6 lg:p-8"
        >
          <Image
            src="/images/robot.svg"
            alt=""
            width={420}
            height={271}
            className="h-32 w-auto md:h-40 lg:h-48"
          />
        </div>

        <div className="flex flex-1 flex-col items-center text-center md:items-end md:text-right">
          <h2 className="font-display text-[2.25rem] font-bold leading-tight text-white sm:text-[2.75rem] md:text-[3rem] lg:text-[3.5rem]">
            Put Your AI Skills to the Test
          </h2>
          <p className="mt-4 font-sans text-lg font-normal text-white md:text-xl">
            Take the Mini Quiz!
          </p>
          <button
            type="button"
            onClick={() => setIsQuizOpen(true)}
            className="mt-8 inline-flex w-fit cursor-pointer items-center justify-center rounded-2xl px-8 py-4 font-sans text-base font-bold text-black transition-all duration-200 hover:scale-105 hover:opacity-95 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_16px_40px_-8px_rgba(0,0,0,0.5)] active:scale-[0.98]"
            style={{
              background: "linear-gradient(to right, #F6D26D 0%, #FF9114 100%)",
              boxShadow:
                "0 6px 12px -2px rgba(0,0,0,0.35), 0 12px 24px -6px rgba(0,0,0,0.5)",
            }}
          >
            START
          </button>
        </div>
      </div>
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </section>
  );
}
