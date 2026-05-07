"use client";

import Image from "next/image";
import { useState } from "react";
import { ArticleHero } from "@/components/ArticleHero";
import { ArticleSection } from "@/components/ArticleSection";
import { PromptComparison } from "@/components/PromptComparison";

const PAGER_BUTTON_STYLE = {
  background: "linear-gradient(to right, #F6D26D 0%, #FF9114 100%)",
  boxShadow:
    "0 6px 12px -2px rgba(0,0,0,0.35), 0 12px 24px -6px rgba(0,0,0,0.5)",
} as const;

const PAGER_BUTTON_CLASSES =
  "inline-flex w-fit cursor-pointer items-center justify-center gap-2 rounded-2xl px-10 py-3 font-sans text-base font-bold text-black transition hover:opacity-95";

const articles = {
  first: {
    title:
      "Stop Working Outdated: Why Manual Workflows Can Limit Your Creativity",
    date: "April 28, 2026",
    excerpt:
      "\u201CDesigners\u2026 real talk. Hindi ka mabagal kasi kulang ka sa skill. Mabagal ka kasi ginagawa mo pa rin lahat manually. AI tools like Firefly? Hindi sila kalaban, sila yung pang-level up mo. Designers who use AI tools can cut repetitive work by up to 30-50%, not to replace creativity but to reduce burnout and stay focused on meaningful, creative flow.\u201D",
  },
  second: {
    title:
      "Redefining the Creative Perspective: The Advancing Role of AI In Graphic Design",
    date: "April 28, 2026",
    excerpt:
      "In the current creative perspective, a dividing question dominates the conversation: Is AI making us smarter, or is it just making us look smart? For graphic designers, the integration of artificial intelligence is frequently portrayed as a competitive scenario\u2014a battle between the virtue of tradition and the efficiency of technology. However, looking past the headlines reveals a much more nuanced reality.",
  },
} as const;

type View = keyof typeof articles;

export function ArticleViewer() {
  const [view, setView] = useState<View>("first");

  const switchTo = (next: View) => {
    setView(next);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (view === "first") {
    return (
      <main>
        <ArticleHero
          title={articles.first.title}
          date={articles.first.date}
          excerpt={articles.first.excerpt}
          source={
            <p>
              Source:{" "}
              <a
                href="https://www.researchgate.net/publication/396096968_Integrating_Artificial_Intelligence_into_the_Design_Process_Implications_for_Creativity_and_Innovation"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-white/50 underline-offset-4 transition hover:text-white hover:decoration-white"
              >
                Integrating Artificial Intelligence into the Design Process:
                Implications for Creativity and Innovation
              </a>
            </p>
          }
          side={
            <Image
              src="/images/analytics.png"
              alt="AI Impact on Workflow Efficiency pie chart: 40% time saved by AI on repetitive tasks, 60% remaining for production and creative polish"
              width={573}
              height={432}
              className="h-auto w-full max-w-sm md:max-w-none"
            />
          }
        />

        <ArticleSection className="bg-white" fullWidth>
          <h2 className="mb-14 mt-8 font-display text-3xl font-normal text-[#F0AE32] md:mb-20 md:mt-12 md:text-4xl lg:text-5xl">
            &ldquo;The Real Problem Isn&apos;t the Skill&rdquo;
          </h2>

          <div className="max-w-6xl space-y-6 font-sans text-base leading-[1.7] text-black md:text-lg">
            <p>
              Effort isn&apos;t the issue; skill is already there. The
              opportunity lies in expanding how that skill is applied. When a
              workflow relies entirely on manual execution, it can naturally
              limit speed and scalability. But with today&apos;s evolving tools,
              designers have more ways to support and enhance their process.
            </p>
            <p>
              I remember showing someone a simple workflow in Premiere Pro
              using the Object Mask Tool. I selected a part of the video, went
              to Effect Controls, and clicked &ldquo;Track Selected Mask&rdquo;
              forward and backward. Within seconds, the mask was clean. I
              duplicated the clip and placed text behind the subject to show
              its practical use. What usually takes hours with manual masking
              and key framing was reduced to minutes, with only minor
              adjustments needed.
            </p>
          </div>

          <div className="mt-16 flex items-center gap-3 md:mt-20 md:gap-4">
            <span aria-hidden className="shrink-0 text-[#F0AE32]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-9 w-9 md:h-11 md:w-11"
              >
                <path
                  d="M12 3.5a6.5 6.5 0 0 0-4.18 11.48c.95.8 1.43 1.55 1.57 2.27h5.22c.14-.72.62-1.47 1.57-2.27A6.5 6.5 0 0 0 12 3.5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.5 20.5h5M10 17.8h4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M12 1v1.4M4.9 4.9l1 1M19.1 4.9l-1 1M2.8 12H1.4M22.6 12h-1.4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <h2 className="font-display text-3xl font-normal text-[#F0AE32] md:text-4xl lg:text-5xl">
              &ldquo;Ang dami ko pang pwedeng gawin&hellip;&rdquo;
            </h2>
          </div>

          <div className="mt-10 max-w-6xl space-y-6 font-sans text-base leading-[1.7] text-black md:text-lg">
            <p>
              After the demo, he got excited and you could see it, like
              something had just been unlocked. &ldquo;Ang dami ko pa pwedeng
              gawin&hellip;&rdquo; he said and that&apos;s exactly it. Not
              because the tool is magic, but because there&apos;s now a system
              in place.
            </p>
            <p>
              That final stretch is where everything matters most. The subtle
              refinements, the artistic polish, the storytelling decisions, the
              small details that make work feel intentional. That&apos;s what
              clients notice, and that&apos;s what defines your style.
            </p>
          </div>

          <div className="relative mt-16 md:mt-20">
            <Image
              src="/images/answer-bot.svg"
              alt=""
              width={140}
              height={130}
              aria-hidden
              className="absolute -top-12 right-6 z-10 h-24 w-auto md:-top-14 md:right-10 md:h-28 lg:h-32"
            />
            <div className="rounded-3xl bg-[#1E3A8A] px-8 py-10 md:px-12 md:py-12 lg:px-14 lg:py-14">
              <h3 className="font-display text-2xl font-normal text-white md:text-3xl lg:text-4xl">
                Did you know?
              </h3>
              <p className="mt-6 text-justify font-sans text-base leading-[1.7] text-white/95 md:text-lg">
                Object Mask in Premiere Pro can automatically handle about 80%
                of the masking work. Instead of doing everything manually, you
                just refine the remaining 20%&mdash;where the creative polish,
                detail, and storytelling come in.
              </p>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center gap-6 md:mt-28">
            <p className="text-center font-sans text-base text-zinc-500 md:text-lg">
              {articles.second.title}
            </p>
            <button
              type="button"
              onClick={() => switchTo("second")}
              className={PAGER_BUTTON_CLASSES}
              style={PAGER_BUTTON_STYLE}
            >
              Next
              <span aria-hidden>&rarr;</span>
            </button>
          </div>
        </ArticleSection>
      </main>
    );
  }

  return (
    <main>
      <ArticleHero
        title={articles.second.title}
        date={articles.second.date}
        excerpt={articles.second.excerpt}
      />
      <div className="mt-12 md:mt-14">
        <PromptComparison compact />
      </div>
      <ArticleSection className="bg-white" fullWidth>
        <h2 className="mb-10 font-display text-3xl font-normal leading-[1.15] text-[#F0AE32] md:mb-12 md:text-4xl lg:text-5xl">
          The Evolution of the &ldquo;Silent Partner&rdquo;
        </h2>

        <div className="max-w-6xl space-y-6 font-sans text-base leading-[1.7] text-black md:text-lg">
          <p>
            In a recent webinar titled &ldquo;The Truth About AI in Graphic
            Design,&rdquo; Rollan Ba&ntilde;ez explains that AI is not replacing
            designers but transforming the creative workflow. He emphasizes that
            what feels like a sudden rise of AI is actually an evolution of
            technologies that have long been embedded in design tools, such as
            Adobe Sensei, which have been quietly improving efficiency since
            around 2018.
          </p>
          <p>
            Today, generative AI builds on this foundation by helping designers
            overcome &ldquo;blank canvas syndrome&rdquo; and by taking over
            repetitive, time-consuming tasks the &ldquo;manual labor&rdquo; of
            design. As a result, creatives are able to shift their focus from
            execution to ideation, allowing them to concentrate more on
            conceptual thinking, decision-making, and overall creative
            direction.
          </p>
        </div>

        <p className="mt-14 text-center font-sans text-base italic text-black md:mt-16 md:text-lg">
          &ldquo;What you solved here is the manual work.&rdquo; &mdash; Rollan
          Ba&ntilde;ez
        </p>

        <div className="relative mt-16 md:mt-24">
          <div className="rounded-3xl bg-[#1E3A8A] px-8 py-10 md:px-12 md:py-14 lg:px-14 lg:py-16">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
              <div className="max-w-2xl">
                <p className="font-display text-lg font-normal leading-snug text-white md:text-xl lg:text-2xl">
                  If AI can generate a thousand variations of a logo in
                  seconds, what is left for the human?
                </p>
                <p className="mt-4 font-sans text-base text-white md:text-lg">
                  The answer is{" "}
                  <strong className="font-bold text-[#F6D26D]">intent.</strong>
                </p>
              </div>
              <div className="relative h-28 w-44 shrink-0 md:h-36 md:w-56 lg:h-40 lg:w-64">
                <Image
                  src="/images/answer-bot.svg"
                  alt=""
                  width={160}
                  height={149}
                  aria-hidden
                  className="absolute right-0 -top-2 h-20 w-auto rotate-18 md:h-24 lg:h-28"
                />
                <Image
                  src="/images/smiling-bot.png"
                  alt=""
                  width={149}
                  height={134}
                  aria-hidden
                  className="absolute right-12 bottom-0 h-24 w-auto md:right-16 md:h-32 lg:h-36"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center gap-6 md:mt-28">
          <p className="text-center font-sans text-base text-zinc-500 md:text-lg">
            {articles.first.title}
          </p>
          <button
            type="button"
            onClick={() => switchTo("first")}
            className={PAGER_BUTTON_CLASSES}
            style={PAGER_BUTTON_STYLE}
          >
            <span aria-hidden>&larr;</span>
            Previous
          </button>
        </div>
      </ArticleSection>
    </main>
  );
}
