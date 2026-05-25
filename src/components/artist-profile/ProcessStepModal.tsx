"use client";

import { useEffect, useRef } from "react";
import type { ArtistProcessStep } from "@/types/artist-profile";

type ProcessStepModalProps = {
  step: ArtistProcessStep | null;
  onClose: () => void;
};

export function ProcessStepModal({ step, onClose }: ProcessStepModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!step) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [step, onClose]);

  if (!step?.modalTitle) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-xl">
        {/* Navy header bar with close button */}
        <div className="flex h-14 items-center justify-end bg-[#1a2a5b] px-4">
          <button
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center text-white/80 transition-colors hover:text-white"
            aria-label="Close"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1l12 12M13 1 1 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h3 className="mb-4 font-sans text-base font-bold uppercase tracking-wide text-black sm:text-lg">
            {step.modalTitle}
          </h3>

          <p
            className="text-sm leading-relaxed text-black/80 sm:text-base sm:leading-relaxed"
            style={{ textAlign: "justify" }}
          >
            {step.modalDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
