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
      modalTitle: "PLANNING / CONTENT UNDERSTANDING",
      modalDescription:
        "Begins when Ms. Chardane receives the client request, studies the deliverables, interprets the goal of the project, and identifies the cultural and visual requirements needed for the design, especially for Arabic-based materials where layout, language flow, and emphasis are important considerations.",
    },
    {
      label: "Translation",
      icon: asset("translation.png"),
      modalTitle: "TRANSLATION & CREATIVE SUPPORT",
      modalDescription:
        "follows as she uses tools like ChatGPT to translate Arabic text into English, explain unfamiliar topics, identify important keywords, and provide visual references or inspirations that help her overcome creative blocks and better understand the direction of the project.",
    },
    {
      label: "Creative Direction",
      icon: asset("direction.png"),
      modalTitle: "CREATIVE DIRECTION & DESIGN DECISION-MAKING",
      modalDescription:
        "Occurs as the designer determines the artistic direction, selects which ideas and references fit the brand, decides the appropriate visual style, and plans how the message should be communicated through layout, imagery, and typography while maintaining originality in the overall concept.",
    },
    {
      label: "Asset Generation",
      icon: asset("asset.png"),
      modalTitle: "ASSET GENERATION & WORKFLOW ASSISTANCE",
      modalDescription:
        "Comes next as she utilizes tools such as Adobe Firefly, Bannerflow, and Adobe Photoshop Generative Fill to generate culturally specific assets, modify visuals, automate repetitive banner resizing tasks, and correct flaws in generated outputs to speed up the production process.",
    },
    {
      label: "Refinement",
      icon: asset("refinement.png"),
      modalTitle: "FINAL INTEGRATION & VALIDATION",
      modalDescription:
        "Completes the workflow as she manually assembles the final composition, refines layouts and branding, evaluates the quality of AI-generated outputs, ensures cultural and visual accuracy, and makes the final creative decisions that transform AI-assisted materials into a polished and original design outcome.",
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
