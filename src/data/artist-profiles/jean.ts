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
      url: "https://firefly.adobe.com/",
    },
    {
      name: "Magnific",
      icon: asset("magnific.png"),
      url: "https://magnific.ai/",
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
      modalTitle: "PLANNING & BRIEF UNDERSTANDING",
      modalDescription:
        "Jean begins her workflow by receiving the client brief and identifying what type of output is required, especially in fast-paced advertising projects. Her background in multimedia helps her interpret complex requests and define the direction of the design. She considers constraints such as time pressure, required formats, and visual intent before starting any creative work.",
    },
    {
      label: "Concept Exploration",
      icon: asset("concept.png"),
      modalTitle: "AI-ASSISTED BRAINSTORMING & CONCEPT EXPLORATION",
      modalDescription:
        "She uses Adobe Firefly mainly during the brainstorming stage, especially when the brief requires specific visual forms such as poses, storyboard directions, or conceptual scenes. AI is used to generate multiple idea directions quickly, helping her explore possible compositions that would normally take time to sketch manually. This stage is heavily used in agency settings where speed is critical.",
    },
    {
      label: "Visual Generation",
      icon: asset("generation.png"),
      modalTitle: "PROMPT-BASED STORYBOARD & VISUAL GENERATION",
      modalDescription:
        "AI is used to generate storyboard frames and visual drafts for advertising pitches, including pose references, character arrangements, and scene compositions. She relies on prompting to control outputs such as layout ideas or visual storytelling elements. This helps her quickly build pitch materials, especially when collaborating with a team and needing multiple storyboard options in a short timeframe.",
    },
    {
      label: "Asset Curation",
      icon: asset("asset.png"),
      modalTitle: "HYBRID ASSET CURATION & COMPOSITION BUILDING",
      modalDescription:
        "At this stage, she selects the most usable AI-generated outputs and combines them with stock photos or manually sourced images when AI results are incomplete or not accurate enough. Instead of switching tools repeatedly, she adapts by mixing outputs and building a workable composition. This is where she ensures the visual still makes sense conceptually and aligns with the client’s requirements.",
    },
    {
      label: "Refinement",
      icon: asset("refinement.png"),
      modalTitle: "REFINEMENT, PROBLEM-SOLVING & FINAL POLISH",
      modalDescription:
        "She manually refines the final output by correcting AI errors such as distorted anatomy or incomplete details, and adjusts the design to meet professional standards. When AI outputs fail, she does not restart the process but fixes and improves them through editing and creative adjustments. She also ensures the final work remains original, cohesive, and aligned with the intended message before delivery.",
    },
  ],
  works: [
    {
      src: asset("jean-1.png"),
      alt: "Portfolio work 1",
      description:
        "Using the 2024 version of Adobe Firefly with an uploaded image reference to generate the initial visual. The image was then refined in Adobe Photoshop by cleaning up impurities and integrating the product into a cohesive single-scene composition.",
    },
    { src: asset("work-2.png"), alt: "Portfolio work 2" },
    {
      src: asset("jean-3.png"),
      alt: "Portfolio work 3",
      description:
        "The image was generated using the 2024 version of Adobe Firefly with an uploaded image reference. The final composition was further refined in Adobe Photoshop by removing impurities and adding the product to create a unified scene.",
    },
  ],
};
