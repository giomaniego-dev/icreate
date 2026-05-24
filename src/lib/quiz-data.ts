export const QUIZ_QUESTIONS = [
  {
    id: "q1",
    question:
      "Your client says the text on your Facebook banner gets cut off when viewed on mobile. Which AI tool helps you quickly generate a properly sized version?",
    options: ["Magic Resize", "Magic Erase", "Text to Image"],
    correctAnswer: "Magic Resize",
  },
  {
    id: "q2",
    question:
      "You need to remove an unwanted object from a photo. Which AI tool is best for this task?",
    options: ["Magic Resize", "Magic Erase", "Text to Image"],
    correctAnswer: "Magic Erase",
  },
  {
    id: "q3",
    question:
      "You want to create an image from a text description. Which AI tool should you use?",
    options: ["Magic Resize", "Magic Erase", "Text to Image"],
    correctAnswer: "Text to Image",
  },
  {
    id: "q4",
    question:
      "A client sends you a small, low-resolution photo and asks for a sharp, print-ready version. Which AI tool is best for upscaling and restoring image quality?",
    options: ["Topaz Photo AI", "Magic Erase", "Background Remover"],
    correctAnswer: "Topaz Photo AI",
  },
  {
    id: "q5",
    question:
      "You want to quickly explore multiple visual concepts and moodboard directions for a new campaign. Which AI tool is best for rapid creative ideation?",
    options: ["Midjourney", "Magic Resize", "Spell Check"],
    correctAnswer: "Midjourney",
  },
] as const;

export type QuizStep = "banner" | "intro" | "quiz" | "complete";

export const QUIZ_GRADIENT_BG =
  "linear-gradient(180deg, #2261B4 0%, #1a3d7a 45%, #14234C 100%)";

export const QUIZ_CTA_GRADIENT =
  "linear-gradient(180deg, #F6D26D 0%, #FF9114 100%)";

export const QUIZ_CTA_GRADIENT_HORIZONTAL =
  "linear-gradient(to right, #F6D26D 0%, #FF9114 100%)";
