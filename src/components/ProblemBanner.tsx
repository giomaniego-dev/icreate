import Image from "next/image";

export function ProblemBanner() {
  return (
    <section className="py-6 sm:py-8 md:py-12">
      <div className="relative w-full overflow-hidden">
        <div className="relative min-h-[320px] aspect-[4/3] sm:aspect-[21/10] md:aspect-[21/9] md:min-h-[320px] lg:aspect-[3/1]">
          <Image
            src="/images/Problem.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 1280px"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/60" aria-hidden />
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-4 py-8 sm:gap-6 sm:px-6 sm:py-10 md:flex-row md:items-center md:justify-center md:gap-8 md:px-12 md:py-16 lg:gap-10 lg:px-16">
          <div className="max-w-2xl">
            <p className="text-left font-sans text-[15px] font-medium leading-[1.65] text-white sm:text-[17px] md:text-[20px]">
              Despite wide digital access, recent studies show that only a small
              portion of Philippine businesses actively use or understand AI
              tools, with just about 17% considered &quot;AI-ready,&quot;
              indicating that many designers and small studios still haven&apos;t
              fully integrated AI into their workflow.
            </p>
            <a
              href="https://philstartech.com/news/2023/11/24/1797/recent-study-finds-only-17-of-companies-in-ph-are-ai-ready/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-left font-sans text-[11px] text-white/70 underline decoration-white/40 underline-offset-2 hover:text-white hover:decoration-white sm:text-[12px] md:text-[13px]"
            >
              Source: Recent study finds only 17% of companies in PH are
              AI-ready (2023)
            </a>
          </div>

          <div className="flex shrink-0 flex-col items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F8F8EC] sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-36 lg:w-36">
              <span className="font-display text-2xl font-bold text-[#1A3B69] sm:text-3xl md:text-4xl lg:text-5xl">
                17%
              </span>
            </div>
            <p className="mt-2 max-w-[220px] text-center font-display text-[14px] font-normal uppercase leading-normal text-white sm:max-w-[280px] sm:text-[16px] md:max-w-[320px] md:text-[20px]">
              &quot;AI-READY&quot; PHILIPPINE BUSINESSES
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
