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
      className={`flex h-full min-h-[182px] rounded-[18px] border border-[#D8D8D8] bg-[#EBE8E3] shadow-[0_2px_8px_rgba(0,0,0,0.08)] ${
        isFullBleedCard
          ? "items-stretch overflow-hidden p-0"
          : "items-start p-4 sm:p-5"
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
          <div className="mr-4 mt-1 flex h-[78px] w-[78px] shrink-0 items-center justify-center rounded-[14px] bg-[#F4F4F4] sm:h-[92px] sm:w-[92px] sm:rounded-[18px]">
            {tool.iconImage ? (
              <Image
                src={tool.iconImage}
                alt={`${tool.title ?? "AI tool"} logo`}
                width={78}
                height={78}
                className="h-[64px] w-[64px] rounded-[14px] object-cover sm:h-[78px] sm:w-[78px] sm:rounded-[16px]"
              />
            ) : null}
          </div>

          {(tool.title || tool.description) && (
            <div className="flex min-w-0 flex-1 flex-col pr-8">
              {tool.title && (
                <h3 className="font-sans text-[28px] font-semibold leading-[1.05] text-[#E6B814] sm:text-[34px]">
                  {tool.title}
                </h3>
              )}
              {tool.description && (
                <p className="mt-1.5 font-sans text-[18px] leading-[1.18] text-[#121212] sm:mt-2 sm:text-[22px]">
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
    <section className="bg-white px-6 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="relative rounded-[18px] bg-linear-to-r from-[#2763B9] to-[#17275F] px-5 py-6 shadow-[0_4px_12px_rgba(0,0,0,0.16)] sm:px-8 sm:py-6">
          <div className="flex items-center justify-between gap-5">
            <h2 className="mx-5 max-w-[700px] font-sans text-[44px] font-bold leading-[1.06] text-[#E7E8E8] sm:text-[52px] md:text-[58px]">
              Discover Common AI Tools Used by Professionals
            </h2>
            <Image
              src="/images/answer-bot.svg"
              alt="AI assistant icon"
              width={220}
              height={220}
              className="hidden h-auto w-[220px] shrink-0 md:block lg:w-[220px]"
            />
          </div>
        </div>
        <div className="mx-auto max-w-6xl rounded-[20px] bg-[#F5F5F5] px-4 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)] sm:px-8 sm:py-6">
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {featuredAiTools.map((tool) => (
              <Link
                key={tool.id}
                href="#"
                aria-label={tool.title ?? `${tool.id} card`}
                className="group"
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
                  <span className="absolute bottom-3 right-4 text-[34px] leading-none text-[#B6B6B6] transition-colors duration-200 group-hover:text-[#8D8D8D]">
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
