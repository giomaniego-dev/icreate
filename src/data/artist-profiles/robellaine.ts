import type { ArtistProfileContent } from "@/types/artist-profile";

const asset = (file: string) => `/images/robellaine-assets/${file}`;

export const robellaineProfileContent: ArtistProfileContent = {
  id: "robellaine",
  profile: {
    name: "Robellaine Abuan",
    role: "Graphic Designer/Advertising",
    bio: "A multimedia specialist with 10 years of experience in advertising and graphic design, specializing in visual content for advertising campaigns and digital media through creative design and production expertise.",
    portrait: asset("robellaine.png"),
    portraitAlt: "Robellaine Abuan",
  },
  insights: [
    {
      icon: asset("efficiency.png"),
      iconAlt: "Efficiency in design",
      title: "Efficiency in Design",
      quote:
        "My incorporation of AI has significantly reduced the amount of time i put in designing.",
    },
    {
      icon: asset("creativity.png"),
      iconAlt: "Creativity with AI",
      title: "Creativity with AI",
      quote:
        "I often experience creative blocks, it helps me think of ideas quickly, while allowing me to maintain creative freedom in developing my own concepts.",
    },
  ],
  tools: [
    {
      name: "Midjourney",
      icon: asset("magnific.png"),
      url: "https://www.midjourney.com/",
    },
    {
      name: "Google Gemini",
      icon: asset("gemini.png"),
      url: "https://gemini.google.com/",
    },
    {
      name: "ChatGPT",
      icon: asset("chatgpt.png"),
      url: "https://chatgpt.com/",
    },
  ],
  skills: ["Brand management", "Social media content creation"],
  processSteps: [
    {
      label: "Planning",
      icon: asset("planning.png"),
    },
    {
      label: "Concept Development",
      icon: asset("concept.png"),
    },
    {
      label: "Visual Generation",
      icon: asset("asset.png"),
    },
    {
      label: "Design Execution",
      icon: asset("execution.png"),
    },
    {
      label: "Refinement",
      icon: asset("refinement.png"),
    },
  ],
  works: [
    { src: asset("work-1.png"), alt: "Portfolio work 1" },
    {
      src: asset("rob-2.png"),
      alt: "Portfolio work 2",
      description:
        "A product-focused visual created through a controlled photoshoot to ensure proper lighting, angles, and consistent brand presentation, with assets captured in a standard portrait format. The composition was adapted for a Facebook cover layout using Canva’s Magic Expand to extend the background while maintaining visual continuity and allowing space for design elements. Final output was completed in Canva through product arrangement, environmental refinement, and structured typography hierarchy to emphasize key messaging and create a cohesive, platform-ready design.",
    },
    {
      src: asset("rob-3.png"),
      alt: "Portfolio work 3",
      description:
        "A Shopee banner created through a hybrid workflow combining curated visual references and AI-assisted generation. An inspiration image from Pinterest guided the concept direction, which was translated into a structured prompt for AI image generation in Freepik (Magnific) to produce a model-based product visual aligned with a Gen Z beauty aesthetic. The selected output was then refined in Canva, where layout, typography, promotional messaging, and call-to-action elements were arranged to achieve a balanced, conversion-focused composition.",
    },
  ],
  worksLayout: "featured",
};
