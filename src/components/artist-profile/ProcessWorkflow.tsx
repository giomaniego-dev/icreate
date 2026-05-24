import Image from "next/image";
import { Fragment } from "react";
import type { ArtistProcessStep } from "@/types/artist-profile";
import { ProfilePanel } from "./ProfilePanel";

const PROCESS_GRID =
  "grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]";

/** Width of arrow column — must match `StepArrow` (~22px). */
const ARROW_GAP = "1.375rem";

type ProcessWorkflowProps = {
  steps: ArtistProcessStep[];
};

function StepArrow() {
  return (
    <div
      className="flex items-center justify-center self-end pb-7 text-black md:pb-8"
      aria-hidden
    >
      <svg
        width="22"
        height="12"
        viewBox="0 0 28 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 8h22M18 2l8 6-8 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function ProcessWorkflow({ steps }: ProcessWorkflowProps) {
  return (
    <ProfilePanel className="px-4 py-7 sm:px-5 sm:py-8 md:px-6 md:py-10">
      <div className={`hidden lg:grid ${PROCESS_GRID} items-end`}>
        {/* Row 1 — labels & icons */}
        {steps.map((step, index) => (
          <Fragment key={step.label}>
            <div className="flex flex-col items-center">
              <p className="mb-3 min-h-[2.5rem] max-w-[7rem] text-center font-sans text-[0.6875rem] font-medium leading-tight text-black md:mb-3.5 md:min-h-[2.75rem] md:text-xs">
                {step.label}
              </p>
              <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center md:h-16 md:w-16">
                <Image
                  src={step.icon}
                  alt={step.iconAlt ?? step.label}
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            {index < steps.length - 1 && <StepArrow />}
          </Fragment>
        ))}

        {/* Row 2 — continuous line + dots (same column tracks as icons) */}
        {steps.map((step, index) => (
          <Fragment key={`dot-${step.label}`}>
            <div className="relative mt-7 flex justify-center md:mt-8">
              <span className="relative z-10 h-2 w-2 rounded-full bg-black md:h-2.5 md:w-2.5" />
              {index < steps.length - 1 && (
                <div
                  className="absolute left-1/2 top-1/2 z-0 h-[2px] -translate-y-1/2 bg-black"
                  style={{ width: `calc(100% + ${ARROW_GAP})` }}
                  aria-hidden
                />
              )}
            </div>
            {index < steps.length - 1 && (
              <div className="mt-7 md:mt-8" aria-hidden />
            )}
          </Fragment>
        ))}
      </div>

      <div className="lg:hidden">
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-4">
          {steps.map((step) => (
            <div key={step.label} className="flex flex-col items-center">
              <p className="mb-2 min-h-[2.25rem] text-center font-sans text-[0.6875rem] font-medium leading-tight text-black sm:text-xs">
                {step.label}
              </p>
              <div className="flex h-14 w-14 items-center justify-center sm:h-[3.75rem] sm:w-[3.75rem]">
                <Image
                  src={step.icon}
                  alt={step.iconAlt ?? step.label}
                  width={60}
                  height={60}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProfilePanel>
  );
}
