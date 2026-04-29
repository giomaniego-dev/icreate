import type { ReactNode } from "react";

type ArticleSectionProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  fullWidth?: boolean;
};

/**
 * Standard article body section. Keeps horizontal padding, max-width, and
 * content-column width identical across the article so every block lines up
 * with the hero title.
 *
 * Horizontal padding always matches HeroCarousel/ArticleHero
 * (px-8 md:px-12 lg:px-40) so the left edge of every section lines up
 * with the homepage hero.
 *
 * - Default: capped at max-w-6xl on lg+ (matches the hero)
 * - fullWidth: no max-width cap, so body content/components keep their
 *   original full-bleed width regardless of how the container is padded
 *   — useful for body text, grids, charts, callouts.
 */
export function ArticleSection({
  children,
  className = "",
  contentClassName = "",
  fullWidth = false,
}: ArticleSectionProps) {
  return (
    <section className={className}>
      <div
        className={`px-8 py-16 md:px-12 md:py-24 lg:px-40 ${fullWidth ? "" : "lg:max-w-6xl"}`}
      >
        <div
          className={`${fullWidth ? "" : "max-w-4xl"} ${contentClassName}`.trim()}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
