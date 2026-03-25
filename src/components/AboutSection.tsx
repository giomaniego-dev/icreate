import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#F8F8F8] px-6 py-16 sm:px-8 md:px-10 md:py-24 lg:px-16 scroll-mt-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-8 md:flex-row md:items-stretch md:gap-10 lg:gap-12">
        {/* Left card - Image/Logo */}
        <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] md:h-[360px] md:flex-1">
          <Image
            src="/images/icreate-rectangle.png"
            alt="iCREATE"
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right card - About Us text */}
        <div className="flex min-h-[280px] w-full flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.1)] md:min-h-[360px] md:flex-1 md:p-10 lg:p-12">
          <h2 className="font-sans text-lg font-bold uppercase tracking-wide text-[#FF8C00] md:text-xl">
            ABOUT US
          </h2>
          <p className="mt-5 flex-1 font-sans text-base leading-[1.7] text-[#333333] md:text-[17px]">
            &quot;Showcasing the Collaborative Creative Process of Graphic
            Designers and A.I.&quot; is a capstone research project that
            explores how designers integrate AI into modern graphic design and
            how human creativity continues to guide the final outcome. The
            project ultimately aims to clarify AI&apos;s role as a supportive
            tool, promote transparency, and encourage responsible, informed
            engagement with emerging creative technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
