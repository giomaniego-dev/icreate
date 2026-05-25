import type { ArtistProfileContent } from "@/types/artist-profile";

const asset = (file: string) => `/images/chardane-assets/${file}`;

export const chardaneProfileContent: ArtistProfileContent = {
  id: "chardane",
  profile: {
    name: "Chardane Martinez",
    role: "Graphic Designer / Advertising / Digital Marketing",
    bio: "A digital marketing and advertising designer with 12 years of experience in creating social media assets, banner advertisements, and multimedia content for fintech and crypto-related campaigns.",
    portrait: asset("chardane.png"),
    portraitAlt: "Chardane Martinez",
  },
  insights: [
    {
      icon: asset("efficiency.png"),
      iconAlt: "Efficiency in design",
      title: "Efficiency in Design",
      quote: "it makes my work lighter and speeds up my workflow",
    },
    {
      icon: asset("creativity.png"),
      iconAlt: "Creativity with AI",
      title: "Creativity with AI",
      quote:
        "When I get mentally tired or stuck in a creative block, I use AI to explain the topic and find inspiration.",
    },
  ],
  tools: [
    {
      name: "Adobe Firefly",
      icon: asset("firefly.png"),
      url: "https://firefly.adobe.com/",
    },
    {
      name: "Adobe Photoshop",
      icon: asset("photoshop.png"),
      url: "https://www.adobe.com/products/photoshop.html",
    },
    {
      name: "ChatGPT",
      icon: asset("chatgpt.png"),
      url: "https://chatgpt.com/",
    },
    {
      name: "Bannerflow",
      icon: asset("bannerflow.png"),
      url: "https://www.bannerflow.com/",
    },
    {
      name: "Artlist",
      icon: asset("artlist.png"),
      url: "https://artlist.io/",
    },
    {
      name: "HeyGen",
      icon: asset("heygen.png"),
      url: "https://www.heygen.com/",
    },
  ],
  skills: [
    "Advertising design",
    "Social media asset creation",
    "Banner Advertisements",
  ],
  processSteps: [
    {
      label: "Planning",
      icon: asset("planning.png"),
    },
    {
      label: "Translation",
      icon: asset("translation.png"),
    },
    {
      label: "Creative Direction",
      icon: asset("direction.png"),
    },
    {
      label: "Asset Generation",
      icon: asset("asset.png"),
    },
    {
      label: "Refinement",
      icon: asset("refinement.png"),
    },
  ],
  works: [
    { src: asset("work-1.png"), alt: "Portfolio work 1" },
    {
      src: asset("chard-2.png"),
      alt: "Portfolio work 2",
      description:
        "A fully AI-generated visual created using Adobe Firefly, featuring the character, devices, and surrounding environment. Photoshop was used to mock up the UI screens and enhance lighting and color details to emphasize the main subject, while Figma supported the overall interface design integration.",
    },
    { src: asset("work-3.png"), alt: "Portfolio work 3" },
  ],
};
