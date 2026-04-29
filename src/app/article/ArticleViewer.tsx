"use client";

import Image from "next/image";
import { useState } from "react";
import { ArticleHero } from "@/components/ArticleHero";
import { ArticleSection } from "@/components/ArticleSection";

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
      "Stop Working Outdated: Why Your Manual Workflow is Killing Your Creativity",
    date: "April 28, 2026",
    excerpt:
      "\u201CDesigners\u2026 real talk. Hindi ka mabagal kasi kulang ka sa skill. Mabagal ka kasi ginagawa mo pa rin lahat manually. AI tools like Firefly? Hindi sila kalaban, sila yung pang-level up mo. Imagine mo \u2018to: concept ideas in seconds, ang dali gumawa ng variations, at mas mabilis na revisions na nagreresulta sa mas mabilis na approval. Yung mga designers na aangat ngayon, hindi yung pinaka-magaling\u2026 Sila yung nag-eexecute without killing creativity.\u201D",
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
        >
          <div className="grid grid-cols-1 items-center gap-12 grid-cols-2 md:gap-16">
            <p className="max-w-xl font-sans text-base leading-[1.7] text-white/95 md:text-lg">
              Recent industry data supports this shift, showing that designers
              who integrate AI tools can reduce time spent on repetitive
              technical tasks by up to 30-50%. This isn&apos;t about replacing
              the artist; it&apos;s about removing the &quot;grunt work&quot;
              that leads to burnout, allowing you to stay in the &quot;flow
              state&quot; where the real magic happens.
            </p>

            <div className="flex justify-center md:justify-end">
              <Image
                src="/images/analytics.png"
                alt="AI Impact on Workflow Efficiency pie chart: 40% time saved by AI on repetitive tasks, 60% remaining for production and creative polish"
                width={573}
                height={432}
                className="h-auto w-full max-w-md"
              />
            </div>
          </div>
        </ArticleHero>

        <ArticleSection className="bg-white" fullWidth>
          <p className="text-justify font-sans text-base leading-[1.7] text-black md:text-lg">
            Aminin na natin may mga habits tayo na hindi na updated, pero
            ginagawa pa rin natin dahil &ldquo;sanay na.&rdquo; This hit hard
            during a recent workshop. One participant proudly shared na he
            spent hours manually masking a subject frame-by-frame, keyframes,
            adjustments, lahat manual. And yes, medyo malinis output niya. Pero
            real talk&hellip; sobrang time-heavy.
          </p>

          <h2 className="my-14 text-right font-display text-3xl font-normal text-[#FF8C00] md:my-20 md:text-4xl lg:text-5xl">
            &ldquo;The Real Problem Isn&apos;t the Skill&rdquo;
          </h2>

          <div className="space-y-6 text-justify font-sans text-base leading-[1.7] text-black md:text-lg">
            <p>
              Hindi issue ang effort. The editor was skilled. The issue is
              system blindness. If your workflow depends purely on manual
              execution, you&apos;re limiting scale. Tools evolved. Pero if
              mindset stays manual-first, you&apos;re stuck.
            </p>
            <p>
              This principle applies across the entire creative suite. In
              Photoshop, Generative Fill replaces hours of cloning and healing
              by allowing you to describe the environment. In After Effects,
              Roto Brush 2 uses machine learning to propagate masks, turning a
              day-long task into a few minutes of refinement. Even in
              Illustrator, using AI-assisted vectorizing provides a foundation
              that drastically shortens the path from a raw sketch to a
              workable file.
            </p>
          </div>

          <h2 className="mt-14 font-display text-3xl font-normal text-[#FF8C00] md:mt-20 md:text-4xl lg:text-5xl">
            &ldquo;Ang dami ko pang pwedeng gawin&hellip;&rdquo;
          </h2>

          <div className="mt-10 space-y-6 text-justify font-sans text-base leading-[1.7] text-black md:text-lg">
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

      <ArticleSection className="bg-white" fullWidth>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          <p className="text-justify font-sans text-base leading-[1.7] text-black md:text-lg">
            In a recent webinar titled &ldquo;The Truth About AI in Graphic
            Design,&rdquo; Rollan Ba&ntilde;ez of Creative Nation Academy
            offered a compelling look into this shift. His central thesis is
            clear: AI is not here to replace the artist, but to fundamentally
            redefine the creative workflow.
          </p>

          <h2 className="text-center font-display text-3xl font-normal leading-[1.15] text-[#FF8C00] md:text-4xl lg:text-5xl">
            The Evolution of the &ldquo;Silent Partner&rdquo;
          </h2>
        </div>

        <div className="mt-12 space-y-6 text-justify font-sans text-base leading-[1.7] text-black md:mt-16 md:text-lg">
          <p>
            Generative AI has become so common so quickly that it appears like
            it just showed up. Ba&ntilde;ez said that intelligence has been
            built into our software for a long time, though. Since 2018, tools
            like Adobe Sensei have been quietly improving workflows by taking
            care of the &ldquo;invisible&rdquo; work that designers often
            don&apos;t think about.
          </p>
          <p>
            Today&apos;s AI is most useful right now because it can help with
            &ldquo;blank canvas syndrome.&rdquo; By automating high-demand,
            repetitive tasks&mdash;what Ba&ntilde;ez calls the &ldquo;manual
            labor&rdquo; of design&mdash;creatives can shift their focus from
            doing things to coming up with new ideas. The software does the
            hard work, and the designer does the planning.
          </p>
        </div>

        <p className="mt-12 text-center font-sans text-base italic text-black md:mt-16 md:text-lg">
          &ldquo;What you solved here is the manual work.&rdquo; &mdash; Rollan
          Ba&ntilde;ez
        </p>

        <h2 className="mt-16 font-display text-3xl font-normal text-[#FF8C00] md:mt-24 md:text-4xl lg:text-5xl">
          The Efficiency vs. &ldquo;Prompt Fatigue&rdquo;
        </h2>

        <div className="mt-10 space-y-6 text-justify font-sans text-base leading-[1.7] text-black md:text-lg">
          <p>
            While AI&apos;s speed is its greatest selling point, it introduces
            a new kind of exhaustion. We are moving from a world of
            &ldquo;doing&rdquo; to a world of &ldquo;curating,&rdquo; but
            curation has its own costs.
          </p>
          <p>
            A significant risk in the AI-first approach is &ldquo;Prompt
            Fatigue.&rdquo; This occurs when the time spent fine-tuning a
            prompt to match a specific internal vision actually exceeds the
            time it would have taken to create the asset manually. Furthermore,
            there is the danger of technical atrophy. Ba&ntilde;ez warned that
            if we lean too heavily on automation, our foundational skills
            become &ldquo;mapurol&rdquo; (blunt).
          </p>
          <p>
            A designer who cannot &ldquo;fact-check&rdquo; an AI-generated
            layout or manually refine a digital artifact loses the very
            &ldquo;human touch&rdquo; that differentiates professional,
            high-quality work from generic, algorithmically-generated noise.
          </p>
        </div>

        <h2 className="mt-16 text-right font-display text-3xl font-normal text-[#FF8C00] md:mt-24 md:text-4xl lg:text-5xl">
          Ethics and the New Digital Ledger
        </h2>

        <div className="mt-10 space-y-6 text-justify font-sans text-base leading-[1.7] text-black md:text-lg">
          <p>
            Beyond the craft itself lies the complex issue of integrity. The
            industry is currently grappling with what many call a &ldquo;battle
            cry&rdquo; for artist rights&mdash;protesting the use of creative
            intellectual property to train models without consent or
            compensation.
          </p>
          <p>
            Professional integrity in this new era will be defined by
            transparency. This isn&apos;t just an ethical preference; it is
            becoming a technical standard. Initiatives like the Content
            Authenticity Initiative (CAI) are paving the way for &ldquo;Content
            Credentials,&rdquo; allowing creators to prove the origin of their
            work and ensure &ldquo;Substantial Human Intervention&rdquo; is
            documented. In a world of deepfakes and infinite iterations,
            proving how something was made is becoming as valuable as the work
            itself.
          </p>
        </div>

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

        <p className="mt-12 text-justify font-sans text-base leading-[1.7] text-black md:mt-16 md:text-lg">
          While AI can generate options, it cannot provide the
          &ldquo;why.&rdquo; It cannot understand a client&apos;s specific
          emotional goals, the ethical implications of a visual metaphor, or
          the cultural nuances of a brand&apos;s identity. AI is a powerful
          assistant that can democratize creativity and vanish the &ldquo;blank
          page&rdquo; forever. However, the true value of a designer lies in
          their taste, their ethics, and their ability to steer technology
          toward a meaningful human connection. AI may make us look smart by
          polishing our outputs, but it is our human intent that actually makes
          the work intelligent.
        </p>

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
