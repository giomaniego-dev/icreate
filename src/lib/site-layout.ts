/** Shared layout widths — header pill is 50% viewport; main blocks ~65%. */
export const siteLayout = {
  navWidth:
    "mx-auto w-[min(100%,calc(100%-3rem))] md:w-1/2 md:max-w-none",
  contentWidth: "mx-auto w-full max-w-6xl md:w-[65%] md:max-w-[52rem]",
} as const;

export const QUIZ_PAGE_BG =
  "radial-gradient(ellipse 130% 90% at 50% -10%, #3d8fd9 0%, #2261B4 38%, #1a3d7a 62%, #14234C 100%)";
