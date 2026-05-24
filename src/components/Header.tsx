"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageContainer } from "./layout/PageContainer";

const navLinks = [
  { href: "/", label: "HOME", match: (path: string) => path === "/" },
  {
    href: "/artists",
    label: "ARTISTS",
    match: (path: string) => path === "/artists",
  },
  { href: "/quiz", label: "QUIZ", match: (path: string) => path === "/quiz" },
  {
    href: "/about",
    label: "ABOUT",
    match: (path: string) => path === "/about",
  },
] as const;

export type HeaderVariant = "overlay" | "profile";

type HeaderProps = {
  variant?: HeaderVariant;
};

const navLinkBase =
  "rounded-full px-4 py-1.5 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-white transition sm:px-5 sm:py-2";

export function Header({ variant = "overlay" }: HeaderProps) {
  const pathname = usePathname();
  const isProfile = variant === "profile";

  const shellClass = isProfile
    ? "flex items-center justify-between rounded-full border border-black px-5 py-3 sm:px-8 sm:py-3.5"
    : "flex items-center justify-between rounded-full border border-white/30 bg-transparent px-5 py-3 sm:px-8 sm:py-3.5";

  const shellStyle = isProfile
    ? {
        background:
          "linear-gradient(90deg, #C4C4C4 0%, #A8A8A8 50%, #949494 100%)",
      }
    : undefined;

  const inactiveClass = isProfile
    ? `${navLinkBase} hover:bg-black/10`
    : `${navLinkBase} hover:bg-white/10`;

  const activeClass = isProfile
    ? `${navLinkBase} border border-white bg-[#5C5C5C]`
    : `${navLinkBase} border border-white/35 bg-white/20`;

  return (
    <header
      className={`relative z-20 shrink-0 px-6 ${isProfile ? "pt-0" : "pt-8 md:pt-10"}`}
    >
      <PageContainer size="nav">
        <div
          className={shellClass}
          style={shellStyle}
        >
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="iCREATE"
            width={180}
            height={70}
            className="h-9 w-auto sm:h-10 md:h-11"
            priority
          />
        </Link>

        <nav className="flex items-center gap-3 sm:gap-5 md:gap-7">
          {navLinks.map(({ href, label, match }) => {
            const isActive = match(pathname);

            return (
              <Link
                key={href}
                href={href}
                className={isActive ? activeClass : inactiveClass}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        </div>
      </PageContainer>
    </header>
  );
}
