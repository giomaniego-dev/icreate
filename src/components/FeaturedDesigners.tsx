import Image from "next/image";
import Link from "next/link";

const designers = [
  {
    name: "Reymond Cruz",
    image: "/images/Profile 1.jpg",
    occupation: "Graphic Designer",
    skills: ["Canva AI", "Adobe Firefly"],
  },
  {
    name: "Steven Castro",
    image: "/images/Profile 2.jpg",
    occupation: "Graphic Designer",
    skills: ["Canva AI", "Adobe Firefly"],
  },
  {
    name: "Athena Perez",
    image: "/images/Profile 3.jpg",
    occupation: "Graphic Designer",
    skills: ["Canva AI", "Adobe Firefly"],
  },
];

export function FeaturedDesigners() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
      <h2
          className="text-center font-display font-normal leading-tight"
          style={{
            fontSize: "55px",
            background: "linear-gradient(to right, #FBC949 0%, #FF9114 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Featured Designers
        </h2>
        <p className="mt-2 text-center font-sans max-w-1xl text-[20px] font-medium leading-normal text-[#333333]">
          Meet the creatives shaping tomorrow&apos;s visual culture and making
          waves in the industry.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {designers.map((designer) => (
            <article
              key={designer.name}
              className="group overflow-hidden rounded-xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.14)]"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-t-xl">
                <Image
                  src={designer.image}
                  alt={designer.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-col items-center px-6 py-5 sm:px-5 sm:py-6">
                <h3 className="text-center font-sans text-[1.25rem] font-bold text-black">
                  {designer.name}
                </h3>
                <p className="mt-1.5 text-center font-sans text-[0.875rem] font-normal text-[#666666]">
                  {designer.occupation}
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  {designer.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#FFC107] px-4 py-1.5 font-sans text-[0.8125rem] font-medium text-white transition-transform duration-200 group-hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Link
                  href="/profiles"
                  className="mt-5 inline-flex items-center justify-center rounded-lg border border-[#DDDDDD] bg-white px-6 py-2.5 font-sans text-[0.875rem] font-medium text-[#333333] shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-[#FF9114]/40 hover:bg-[#FF9114]/10 hover:text-[#FF9114]"
                >
                  View Works
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
