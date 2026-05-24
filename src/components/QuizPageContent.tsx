"use client";

import Image from "next/image";
import { useState } from "react";
import { HeroShell } from "@/components/layout/HeroShell";
import { PageContainer } from "./layout/PageContainer";
import { QuizFlow } from "./QuizFlow";
import { QUIZ_CTA_GRADIENT } from "@/lib/quiz-data";
import { QUIZ_PAGE_BG } from "@/lib/site-layout";

type QuizView = "landing" | "quiz";

export function QuizPageContent() {
  const [view, setView] = useState<QuizView>("landing");

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: QUIZ_PAGE_BG }}
    >
      <HeroShell>
        {view === "landing" ? (
          <PageContainer
            size="content"
            className="flex flex-1 flex-col items-center justify-center px-0 pb-16 pt-4 md:pb-20"
          >
            <div className="flex w-full flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-10 lg:gap-14">
              <div
                className="flex shrink-0 items-center justify-center overflow-hidden rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8"
                style={{ background: QUIZ_CTA_GRADIENT }}
              >
                <Image
                  src="/images/robot.svg"
                  alt=""
                  width={420}
                  height={271}
                  className="h-auto w-[200px] sm:w-[220px] md:w-[260px] lg:w-[300px]"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col items-center text-center md:items-end md:text-right">
                <h1 className="font-display text-[2rem] font-bold leading-[1.05] text-white sm:text-[2.35rem] md:text-[2.5rem] lg:text-[3rem]">
                  Put Your AI Skills to the Test
                </h1>
                <p className="mt-3 max-w-md font-sans text-base font-normal leading-[1.2] text-white sm:mt-4 sm:text-lg md:text-[1.15rem] lg:text-[1.35rem]">
                  Find out how ready you are to integrate AI into your design
                  process
                </p>
                <button
                  type="button"
                  onClick={() => setView("quiz")}
                  className="mt-6 inline-flex w-fit items-center justify-center rounded-xl px-9 py-3.5 font-sans text-base font-bold uppercase tracking-wide text-[#1A1A1A] transition hover:opacity-95 md:mt-8"
                  style={{
                    background: QUIZ_CTA_GRADIENT,
                    boxShadow:
                      "0 6px 12px -2px rgba(0,0,0,0.35), 0 12px 24px -6px rgba(0,0,0,0.5)",
                  }}
                >
                  Start
                </button>
              </div>
            </div>
          </PageContainer>
        ) : (
          <PageContainer
            size="content"
            className="flex flex-1 flex-col items-center justify-center pb-12"
          >
            <QuizFlow
              layout="fullscreen"
              initialStep="intro"
              onBackToLanding={() => setView("landing")}
            />
          </PageContainer>
        )}
      </HeroShell>
    </section>
  );
}
