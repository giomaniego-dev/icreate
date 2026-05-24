import type { Metadata } from "next";
import { QuizPageContent } from "@/components/QuizPageContent";

export const metadata: Metadata = {
  title: "Quiz | iCreate",
  description:
    "Put your AI skills to the test and find out how ready you are to integrate AI into your design process.",
};

export default function QuizPage() {
  return <QuizPageContent />;
}
