import type { ArtistProfileContent } from "@/types/artist-profile";

const asset = (file: string) => `/images/jean-assets/${file}`;

export const jeanProfileContent: ArtistProfileContent = {
  id: "jean",
  profile: {
    name: "Michelle Jean Occena",
    role: "Graphic Designer/Advertising",
    bio: "A multimedia specialist with 10 years of experience in advertising and graphic design, specializing in visual content for advertising campaigns and digital media through creative design and production expertise.",
    portrait: asset("jean.png"),
    portraitAlt: "Michelle Jean Occena",
  },
  insights: [
    {
      icon: asset("efficiency.png"),
      iconAlt: "Efficiency in design",
      title: "Efficiency in Design",
      quote: "AI makes our design process easier and faster.",
    },
    {
      icon: asset("creativity.png"),
      iconAlt: "Creativity with AI",
      title: "Creativity with AI",
      quote:
        "The image suggestions influence me by making me realize ideas I had not thought of before.",
    },
  ],
  tools: [
    {
      name: "Adobe Firefly",
      icon: asset("firefly.png"),
    },
    {
      name: "Magnific",
      icon: asset("magnific.png"),
    },
  ],
  skills: [
    "Advertising design",
    "Digital media visuals",
    "Multimedia production",
  ],
  processSteps: [
    {
      label: "Planning",
      icon: asset("planning.png"),
    },
    {
      label: "Concept Exploration",
      icon: asset("concept.png"),
    },
    {
      label: "Visual Generation",
      icon: asset("generation.png"),
    },
    {
      label: "Asset Curation",
      icon: asset("asset.png"),
    },
    {
      label: "Refinement",
      icon: asset("refinement.png"),
    },
  ],
  works: [
    { src: asset("work-1.png"), alt: "Portfolio work 1" },
    { src: asset("work-2.png"), alt: "Portfolio work 2" },
    { src: asset("work-3.png"), alt: "Portfolio work 3" },
  ],
};
