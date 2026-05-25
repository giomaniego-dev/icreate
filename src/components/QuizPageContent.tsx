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
            className="flex flex-1 flex-col items-center justify-center px-4 pb-16 pt-4 md:pb-20"
          >
            <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-center md:gap-10 lg:gap-14">
              <div
                className="flex shrink-0 items-end justify-center overflow-hidden rounded-2xl px-6 pt-6 sm:px-8 sm:pt-8 md:px-10 md:pt-10"
                style={{ background: QUIZ_CTA_GRADIENT }}
              >
                <Image
                  src="/images/smile-bot.svg"
                  alt=""
                  width={400}
                  height={400}
                  className="h-auto w-[180px] sm:w-[200px] md:w-[240px] lg:w-[280px]"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col items-center text-center md:items-end md:text-right">
                <h1 className="font-display text-[2rem] font-bold leading-[1.1] text-white sm:text-[2.35rem] md:text-[2.6rem] lg:text-[3.2rem]">
                  Put Your AI Skills
                  <br />
                  to the Test
                </h1>
                <p className="mt-4 max-w-sm font-sans text-base font-normal leading-[1.4] text-white/90 sm:text-lg md:text-[1.1rem] lg:text-[1.25rem]">
                  Find out how ready you are to integrate AI into your design
                  process
                </p>
                <button
                  type="button"
                  onClick={() => setView("quiz")}
                  className="mt-6 inline-flex w-fit items-center justify-center rounded-lg px-10 py-3 font-sans text-sm font-bold uppercase tracking-wider text-[#1A1A1A] transition hover:opacity-90 md:mt-8"
                  style={{
                    background: QUIZ_CTA_GRADIENT,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
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
