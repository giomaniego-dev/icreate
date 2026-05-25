"use client";

import Image from "next/image";
import { useNavigate } from "@/context/ViewContext";

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#000000]">
      <div className="mx-auto w-full max-w-[90rem] px-8 py-12 md:px-12 lg:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-8">
          <div className="flex flex-col items-start">
            <button type="button" onClick={() => navigate("home")} className="w-fit -ml-5 -mb-3">
              <Image
                src="/images/logo.svg"
                alt="iCREATE"
                width={200}
                height={77}
                className="h-14 w-auto"
              />
            </button>
            <p className="font-sans text-[24px] font-normal text-white">
              Art & Human-AI Collaboration
            </p>
          </div>

          <div className="flex gap-16 md:gap-20">
            <div className="flex flex-col gap-4">
              <h3 className="font-sans text-sm font-semibold text-white md:text-base">
                Links
              </h3>
              <nav className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => navigate("home")}
                  className="text-left font-sans text-sm text-white transition hover:text-white md:text-base"
                >
                  Home
                </button>
                <button
                  type="button"
                  onClick={() => navigate("artists")}
                  className="text-left font-sans text-sm text-white transition hover:text-white md:text-base"
                >
                  Artist
                </button>
                <button
                  type="button"
                  onClick={() => navigate("quiz")}
                  className="text-left font-sans text-sm text-white transition hover:text-white md:text-base"
                >
                  Quiz
                </button>
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-sans text-sm font-semibold text-white md:text-base">
                Information
              </h3>
              <nav className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => navigate("about")}
                  className="text-left font-sans text-sm text-white transition hover:text-white md:text-base"
                >
                  About
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-600" />

      <div className="mx-auto w-full max-w-[90rem] px-8 py-6 md:px-12 lg:px-16">
        <p className="text-center font-sans text-md text-[18px] text-white">
          © 2025 iCreate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
