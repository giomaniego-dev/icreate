"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ToolCard = {
  id: string;
  title?: string;
  description?: string;
  iconImage?: string;
  previewImage?: string;
  tips?: string[];
};

const featuredAiTools: ToolCard[] = [
  {
    id: "adobe-firefly",
    title: "Adobe Firefly",
    description:
      "Generate and edit visuals from text prompts, helping designers create, modify, and refine images quickly.",
    iconImage: "/images/firefly.png",
    tips: [
      "Use Generative Fill for quick edits",
      "Add reference images for accuracy",
      "Refine outputs in Photoshop or Illustrator",
    ],
  },
  {
    id: "photoshop",
    title: "Photoshop",
    description:
      "A professional image editing software, now enhanced with AI tools for faster and smarter editing.",
    iconImage: "/images/photoshop-logo.png",
    tips: [
      "Work in layers for easier control and adjustments",
      "Use shortcuts to speed up workflow",
      "Use AI tools with manual editing for refinement",
    ],
  },
  {
    id: "adobe-creative-stack",
    previewImage: "/images/doge.png",
  },
  {
    id: "midjourney",
    title: "MidJourney",
    description:
      "An AI image generation tool that creates high-quality, artistic visuals from text prompts.",
    iconImage: "/images/midjourney.png",
    tips: [
      "Be specific with prompts (style, lighting, mood, composition)",
      "Use variations/upscaling to refine outputs and explore options",
    ],
  },
];

function FeaturedAiToolCard({
  tool,
  showTips = false,
}: {
  tool: ToolCard;
  showTips?: boolean;
}) {
  const hasPreview = Boolean(tool.previewImage);
  const isImageOnly = hasPreview && !tool.title && !tool.description;
  const hasTips = Boolean(tool.tips?.length);
  const renderTips = showTips && hasTips && !isImageOnly;
  const isFullBleedCard = isImageOnly || renderTips;

  return (
    <article
      className={`flex h-full min-h-[180px] rounded-[18px] border border-[#D8D8D8] bg-[#EBE8E3] shadow-[0_2px_8px_rgba(0,0,0,0.08)] ${
        isFullBleedCard
          ? "items-stretch overflow-hidden p-0"
          : "items-center p-5 sm:p-6"
      }`}
    >
      {renderTips ? (
        <div className="h-full w-full rounded-[18px] bg-linear-to-b from-[#2D66B6] to-[#142B62] px-5 py-4 text-[#E9ECF2] sm:px-6 sm:py-5">
          <h3 className="font-sans text-[20px] font-bold tracking-[0.02em] sm:text-[22px]">
            💡 TIPS IN USING:
          </h3>
          <ul className="mt-2 list-disc pl-5 font-sans text-[15px] leading-tight sm:text-[17px]">
            {tool.tips!.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      ) : hasPreview ? (
        <div
          className={`relative w-full overflow-hidden bg-[#FFB028] ${
            isImageOnly ? "h-full rounded-[18px]" : "h-[90px] rounded-xl sm:h-[110px]"
          }`}
        >
          <Image
            src={tool.previewImage!}
            alt={tool.title ?? "AI tool preview"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 460px"
          />
        </div>
      ) : (
        <>
          {tool.iconImage ? (
            <div className="mr-5 flex h-[80px] w-[80px] shrink-0 items-center justify-center self-start sm:mr-6 sm:h-[90px] sm:w-[90px]">
              <Image
                src={tool.iconImage}
                alt={`${tool.title ?? "AI tool"} logo`}
                width={120}
                height={120}
                className="h-full w-full object-contain"
              />
            </div>
          ) : null}

          {(tool.title || tool.description) && (
            <div className="flex min-w-0 flex-1 flex-col self-start pr-6">
              {tool.title && (
                <h3 className="font-sans text-[20px] font-bold leading-[1.1] text-[#D9A21B] sm:text-[22px]">
                  {tool.title}
                </h3>
              )}
              {tool.description && (
                <p className="mt-1.5 font-sans text-[14px] leading-snug text-[#1A1A1A] sm:text-[15px]">
                  {tool.description}
                </p>
              )}
            </div>
          )}
        </>
      )}
    </article>
  );
}

export function FeaturedAiToolsSection() {
  const [activeTipCard, setActiveTipCard] = useState<string | null>(null);

  return (
    <section className="bg-white px-6 py-14 sm:px-8 md:px-10 md:py-16 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="relative rounded-[18px] bg-linear-to-r from-[#2763B9] to-[#17275F] px-5 py-5 shadow-[0_4px_12px_rgba(0,0,0,0.16)] sm:px-8 sm:py-6 md:px-10">
          <div className="flex items-center justify-between gap-5">
            <h2 className="max-w-[640px] font-sans text-[34px] font-bold leading-[1.1] text-[#FFFFFF] sm:text-[40px] md:text-[44px]">
              Discover Common AI Tools Used by Professionals
            </h2>
            <Image
              src="/images/answer-bot.svg"
              alt="AI assistant icon"
              width={150}
              height={150}
              className="hidden h-auto w-[130px] shrink-0 md:block lg:w-[150px]"
            />
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-6xl rounded-[20px] bg-[#F5F5F5] px-4 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)] sm:px-6 sm:py-6 md:px-8">
          <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2">
            {featuredAiTools.map((tool) => (
              <Link
                key={tool.id}
                href="#"
                aria-label={tool.title ?? `${tool.id} card`}
                className="group block h-full"
                onClick={(event) => {
                  if (!tool.previewImage) {
                    event.preventDefault();
                    setActiveTipCard((previous) =>
                      previous === tool.id ? null : tool.id,
                    );
                  }
                }}
              >
                <div className="relative h-full">
                  <FeaturedAiToolCard
                    tool={tool}
                    showTips={activeTipCard === tool.id}
                  />
                  <span className="absolute bottom-3 right-4 text-[30px] leading-none text-[#B6B6B6] transition-colors duration-200 group-hover:text-[#8D8D8D]">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
