"use client";

import { PROFILE_ORANGE } from "./profile-theme";

type ArtistSwitcherProps = {
  currentIndex: number;
  total: number;
  onSelect: (index: number) => void;
};

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="14"
      height="22"
      viewBox="0 0 14 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-black"
      aria-hidden
    >
      {direction === "left" ? (
        <path
          d="M11 2L3 11l8 9"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M3 2l8 9-8 9"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export function ArtistSwitcher({
  currentIndex,
  total,
  onSelect,
}: ArtistSwitcherProps) {
  const goPrev = () => onSelect(currentIndex === 0 ? total - 1 : currentIndex - 1);
  const goNext = () => onSelect(currentIndex === total - 1 ? 0 : currentIndex + 1);

  return (
    <div className="flex items-center justify-center gap-6 bg-white px-4 py-10 sm:gap-8 sm:py-12 md:py-14">
      <button
        type="button"
        onClick={goPrev}
        className="flex h-10 w-10 items-center justify-center rounded-full transition-opacity hover:opacity-70"
        aria-label="Previous artist"
      >
        <ChevronIcon direction="left" />
      </button>

      <div className="flex items-center gap-4 sm:gap-5">
        {Array.from({ length: total }, (_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              type="button"
              onClick={() => onSelect(index)}
              className={`flex h-8 w-8 items-center justify-center rounded-full font-sans text-sm font-medium transition-colors sm:h-9 sm:w-9 sm:text-base ${
                isActive ? "text-white" : "text-black hover:opacity-70"
              }`}
              style={isActive ? { backgroundColor: PROFILE_ORANGE } : undefined}
              aria-label={`View artist ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={goNext}
        className="flex h-10 w-10 items-center justify-center rounded-full transition-opacity hover:opacity-70"
        aria-label="Next artist"
      >
        <ChevronIcon direction="right" />
      </button>
    </div>
  );
}
