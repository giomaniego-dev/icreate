import Image from "next/image";
import { ArticleSection } from "./ArticleSection";

const teamMembers = [
  {
    name: "Marco Gabriel P. Maniego",
    image: "/images/marco-avatar.png",
  },
  {
    name: "Ainah Eirielle V. Bautista",
    image: "/images/ainah-avatar.png",
  },
  {
    name: "Leila Jois R. Paz",
    image: "/images/leila-avatar.png",
  },
  {
    name: "Arianne Nicole O. Oasan",
    image: "/images/arriane-avatar.png",
  },
  {
    name: "Raphael Julian N. Evangelista",
    image: "/images/raph-avatar.png",
  },
] as const;

const aboutTeamText =
  "We are Bachelor of Multimedia Arts students from STI Ortigas-Cainta conducting research on how artificial intelligence can be effectively integrated into the workflow of graphic designers, exploring its role as a tool that enhances ideation, streamlines processes, and supports meaningful and original work while examining its strengths and limitations compared to human-made designs to guide designers in using AI responsibly, creatively, and with intention.";

export function AboutTeamSection() {
  return (
    <ArticleSection className="bg-[#F2F2F2] pt-2 pb-20 md:pb-24 lg:pb-28" fullWidth>
      <h2
        className="text-center font-display text-4xl font-normal tracking-wide md:text-5xl lg:text-[62px]"
        style={{
          background:
            "linear-gradient(90deg, #FBE9A4 0%, #FBC949 42%, #FF9A1A 75%, #FF8600 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        MEET THE TEAM
      </h2>

      <div className="mx-auto mt-12 max-w-6xl">
        <div className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="w-[168px] overflow-hidden border border-[#8DA5D8]/30 bg-[#3E3E42] shadow-[0_7px_16px_rgba(0,0,0,0.2)] md:w-[176px]"
            >
              <div className="h-[174px] w-full bg-linear-to-b from-[#2D67B9] to-[#1E4282] md:h-[182px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={176}
                  height={186}
                  className="h-full w-full object-cover"
                  sizes="176px"
                />
              </div>
              <div className="flex min-h-[74px] items-center justify-center px-3 py-3 md:min-h-[80px]">
                <p className="text-center font-sans text-[13px] font-medium leading-[1.2] text-white md:text-[14px]">
                  {member.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-[18px] bg-linear-to-b from-[#2F67B6] via-[#235AA6] to-[#1A2D63] px-8 py-10 shadow-[0_8px_20px_rgba(0,0,0,0.26)] md:px-12 md:py-12 lg:px-14 lg:py-14">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.25fr_1fr] lg:gap-12">
          <p className="max-w-[650px] text-left font-sans text-[15px] leading-[1.38] text-white md:text-[18px]">
            {aboutTeamText}
          </p>

          <div className="relative mx-auto h-[210px] w-full max-w-[410px] md:h-[240px]">
            <Image
              src="/images/happy-bot.png"
              alt=""
              width={160}
              height={149}
              aria-hidden
              className="absolute left-1 top-8 h-[200px] w-auto md:left-4 md:h-[200px]"
            />
            <Image
              src="/images/error-bot.png"
              alt=""
              width={160}
              height={149}
              aria-hidden
              className="absolute right-4 top-9 h-[200px] w-auto md:right-4 md:h-[200px]"
            />
          </div>
        </div>
      </div>
    </ArticleSection>
  );
}
