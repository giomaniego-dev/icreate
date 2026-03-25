import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-8 py-6 md:px-12 lg:px-16">
      <Link href="/" className="relative">
        <Image
          src="/images/logo.svg"
          alt="iCREATE"
          width={180}
          height={70}
          className="h-12 w-auto md:h-14 lg:h-16"
          priority
        />
      </Link>
      <nav className="flex items-center gap-4">
        <Link
          href="/"
          className="rounded-full border border-white bg-transparent px-7 py-3.5 font-sans text-base font-semibold text-white transition hover:bg-zinc-600"
        >
          Home
        </Link>
        <Link
          href="/#about"
          className="rounded-full border border-white bg-transparent px-7 py-3.5 font-sans text-base font-semibold text-white transition hover:bg-zinc-600"
        >
          About
        </Link>
      </nav>
    </header>
  );
}
