"use client";

import Image from "next/image";
import { useState } from "react";
import { QuizModal } from "./QuizModal";

export function QuizBanner() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  return (
    <section id="quiz" className="bg-white px-6 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center py-4 sm:py-6 md:py-8">
        <div
          className="flex w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl px-6 py-10 sm:px-8 sm:py-12 md:flex-row md:justify-between md:gap-8 md:px-12 lg:gap-10 lg:px-16"
          style={{
            background: "linear-gradient(to right, #2261B4 21%, #14234C 100%)",
          }}
        >
          <div
            className="flex shrink-0 items-center justify-center overflow-hidden rounded-xl p-3 sm:p-4 md:p-5 lg:p-6"
          >
            <Image
              src="/images/robot.svg"
              alt=""
              width={420}
              height={271}
              className="h-auto w-[240px] sm:w-[280px] md:w-[340px] lg:w-[400px]"
            />
          </div>

          <div className="flex flex-1 flex-col items-center text-center md:max-w-[520px] md:items-end md:text-right">
            <h2 className="font-display text-[2rem] font-bold leading-[1.05] text-white sm:text-[2.5rem] md:text-[2.5rem] lg:text-[3rem]">
              Put Your AI Skills to the Test
            </h2>
            <p className="mt-3 max-w-[540px] font-sans text-base font-normal leading-[1.15] text-white sm:mt-4 md:text-[1.15rem] lg:text-[1.35rem]">
              Find out how ready you are to integrate AI into your design process
            </p>
            <button
              type="button"
              onClick={() => setIsQuizOpen(true)}
              className="mt-6 inline-flex w-fit cursor-pointer items-center justify-center rounded-2xl px-8 py-3 font-sans text-base font-bold text-black transition-all duration-200 hover:scale-105 hover:opacity-95 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4),0_16px_40px_-8px_rgba(0,0,0,0.5)] active:scale-[0.98]"
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
      </div> 
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </section>
  );
}
