"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Header } from "./Header";

const slides = [
  {
    id: 1,
    headline: ["From traditional", "tools to intelligent", "systems"],
    subheadline: "Are we ready to design beyond limits?",
    backgroundImage: "/images/Carousel 2.JPG",
  },
  {
    id: 2,
    headline: ["Are Filipino Graphic Designers Ready to Create With AI?"],
    subheadline:
      "Learn practical workflows, see real examples, and gain insights from designers using AI tools today.",
    backgroundImage: "/images/Carousel 1.JPG",
  },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(goNext, 6000);
    return () => clearInterval(interval);
  }, [goNext]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Header />

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src={slide.backgroundImage}
              alt=""
              fill
              className="object-cover blur-[2px]"
              sizes="100vw"
              priority={index === 0}
            />
            {/* Dark overlay */}
            <div
              className="absolute inset-0 bg-black/60"
              aria-hidden
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex min-h-screen flex-col justify-center px-8 pt-24 pb-20 md:px-12 lg:max-w-6xl lg:px-40">
            <h1 className="flex min-h-36 flex-col font-display text-4xl font-normal leading-tight text-white md:min-h-46 md:text-5xl lg:min-h-57 lg:text-6xl">
              {slide.headline.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 min-h-14 max-w-xl font-sans text-lg text-white/95 md:min-h-16 md:text-xl">
              {slide.subheadline}
            </p>
            <a
              href="/article"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-2xl px-8 py-4 font-sans text-base font-bold text-black transition hover:opacity-95"
              style={{
                background: "linear-gradient(to right, #F6D26D 0%, #FF9114 100%)",
                boxShadow:
                  "0 6px 12px -2px rgba(0,0,0,0.35), 0 12px 24px -6px rgba(0,0,0,0.5)",
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
