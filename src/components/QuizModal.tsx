"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const QUIZ_QUESTIONS = [
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
];

type QuizStep = "banner" | "intro" | "quiz" | "complete";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [step, setStep] = useState<QuizStep>("banner");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [droppedAnswer, setDroppedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === QUIZ_QUESTIONS.length - 1;

  const resetQuiz = useCallback(() => {
    setStep("banner");
    setCurrentQuestionIndex(0);
    setDroppedAnswer(null);
    setIsCorrect(null);
    setScore(0);
  }, []);

  const handleClose = useCallback(() => {
    resetQuiz();
    onClose();
  }, [onClose, resetQuiz]);

  const handleGetStarted = () => {
    setStep("intro");
  };

  const handleContinueFromIntro = () => {
    setStep("quiz");
    setDroppedAnswer(null);
    setIsCorrect(null);
  };

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const answer = e.dataTransfer.getData("text/plain");
      if (answer && currentQuestion) {
        setDroppedAnswer(answer);
        const correct = answer === currentQuestion.correctAnswer;
        setIsCorrect(correct);
        if (correct) setScore((s) => s + 1);
      }
    },
    [currentQuestion]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }, []);

  const handleContinueFromQuiz = () => {
    if (isLastQuestion) {
      setStep("complete");
    } else {
      setCurrentQuestionIndex((i) => i + 1);
      setDroppedAnswer(null);
      setIsCorrect(null);
    }
  };

  const canContinueFromQuiz = droppedAnswer !== null;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-modal-fade-in"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quiz-modal-title"
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl shadow-2xl animate-modal-scale-in"
        style={{ backgroundColor: "#2261B4" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-white/90 transition hover:bg-white/20 hover:text-white"
          aria-label="Close quiz"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {step === "banner" && (
          <div
            className="flex min-h-[400px] flex-col items-center justify-center gap-10 px-12 py-20"
            style={{
              background: "linear-gradient(180deg, #2261B4 0%, #14234C 100%)",
            }}
          >
            <div
              className="animate-banner-scale-in flex shrink-0 items-center justify-center overflow-hidden rounded-2xl p-6 md:p-8"
              style={{
                background:
                  "linear-gradient(135deg, #F6D26D 0%, #FF9114 100%)",
                boxShadow:
                  "0 12px 40px -8px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
              }}
            >
              <Image
                src="/images/robot.svg"
                alt=""
                width={140}
                height={109}
                className="h-28 w-auto md:h-36"
              />
            </div>
            <h2
              id="quiz-modal-title"
              className="animate-banner-slide-up animate-banner-delay-200 font-display text-3xl font-bold text-white sm:text-4xl md:text-[2.75rem]"
            >
              Fix-That-Design!
            </h2>
            <button
              type="button"
              onClick={handleGetStarted}
              className="animate-banner-slide-up animate-banner-delay-400 inline-flex items-center justify-center rounded-2xl px-10 py-4 font-sans text-base font-bold text-white transition hover:scale-[1.02] hover:opacity-95 active:scale-[0.98]"
              style={{
                background:
                  "linear-gradient(to right, #F6D26D 0%, #FF9114 100%)",
                boxShadow:
                  "0 6px 12px -2px rgba(0,0,0,0.35), 0 12px 24px -6px rgba(0,0,0,0.5)",
              }}
            >
              Get Started
            </button>
          </div>
        )}

        {step === "intro" && (
          <div
            key="intro"
            className="animate-banner-fade-in flex flex-col items-center justify-center gap-8 px-12 py-16 text-center"
          >
            <p
              id="quiz-modal-title"
              className="max-w-2xl font-sans text-xl font-medium leading-relaxed text-white md:text-2xl"
            >
              Drag and Drop the proper tools on to the image so you can move on
              to the next part!
            </p>
            <button
              type="button"
              onClick={handleContinueFromIntro}
              className="inline-flex items-center justify-center rounded-2xl px-10 py-4 font-sans text-base font-bold text-white transition hover:opacity-95"
              style={{
                background: "linear-gradient(to right, #F6D26D 0%, #FF9114 100%)",
                boxShadow:
                  "0 6px 12px -2px rgba(0,0,0,0.35), 0 12px 24px -6px rgba(0,0,0,0.5)",
              }}
            >
              Continue
            </button>
          </div>
        )}

        {step === "quiz" && currentQuestion && (
          <div
            key={`quiz-${currentQuestionIndex}`}
            className="animate-banner-fade-in flex flex-col gap-8 p-8 md:flex-row md:items-start md:gap-12 md:p-12"
          >
            {/* Left: Robot + Answer box */}
            <div className="flex flex-col items-center gap-4 md:min-w-[280px]">
              <div className="relative">
                <div
                  className="relative z-10 -mb-2 flex justify-center"
                  style={{ marginBottom: "-1rem" }}
                >
                  <Image
                    src="/images/answer-bot.svg"
                    alt=""
                    width={120}
                    height={93}
                    className="h-24 w-auto md:h-28"
                  />
                </div>
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  className={`min-h-[180px] rounded-xl border-2 border-dashed p-6 transition-colors ${
                    droppedAnswer
                      ? isCorrect
                        ? "border-green-400 bg-green-500/20"
                        : "border-red-400 bg-red-500/20"
                      : "border-slate-300 bg-slate-100"
                  }`}
                >
                  {droppedAnswer ? (
                    <p
                      className={`font-sans text-lg font-semibold ${
                        isCorrect ? "text-green-200" : "text-red-200"
                      }`}
                    >
                      {droppedAnswer}
                      {isCorrect ? " ✓" : " ✗"}
                    </p>
                  ) : (
                    <p className="font-sans text-sm text-slate-500">
                      Drop your answer here
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Question + Options */}
            <div className="flex flex-1 flex-col gap-6">
              <p className="font-sans text-lg font-medium leading-relaxed text-white md:text-xl">
                {currentQuestion.question}
              </p>
              <div className="flex flex-col gap-3">
                {currentQuestion.options.map((option) => (
                  <DraggableOption
                    key={option}
                    label={option}
                    disabled={droppedAnswer !== null}
                  />
                ))}
              </div>
              {canContinueFromQuiz && (
                <button
                  type="button"
                  onClick={handleContinueFromQuiz}
                  className="mt-2 w-fit self-start rounded-2xl px-8 py-3 font-sans text-base font-bold text-white transition hover:opacity-95"
                  style={{
                    background:
                      "linear-gradient(to right, #F6D26D 0%, #FF9114 100%)",
                    boxShadow:
                      "0 6px 12px -2px rgba(0,0,0,0.35), 0 12px 24px -6px rgba(0,0,0,0.5)",
                  }}
                >
                  {isLastQuestion ? "See Results" : "Continue"}
                </button>
              )}
            </div>
          </div>
        )}

        {step === "complete" && (
          <div
            key="complete"
            className="animate-banner-fade-in flex flex-col items-center justify-center gap-8 px-12 py-16 text-center"
          >
            <h3 className="font-display text-3xl font-bold text-white">
              Quiz Complete!
            </h3>
            <p className="font-sans text-xl text-white/90">
              You got {score} out of {QUIZ_QUESTIONS.length} correct.
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleClose}
                className="rounded-2xl border-2 border-white/60 px-8 py-3 font-sans font-medium text-white transition hover:bg-white/20"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  resetQuiz();
                  setStep("banner");
                }}
                className="rounded-2xl px-8 py-3 font-sans font-bold text-white transition hover:opacity-95"
                style={{
                  background:
                    "linear-gradient(to right, #F6D26D 0%, #FF9114 100%)",
                  boxShadow:
                    "0 6px 12px -2px rgba(0,0,0,0.35), 0 12px 24px -6px rgba(0,0,0,0.5)",
                }}
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DraggableOption({
  label,
  disabled,
}: {
  label: string;
  disabled: boolean;
}) {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("text/plain", label);
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      draggable={!disabled}
      onDragStart={handleDragStart}
      className={`cursor-grab rounded-xl px-6 py-4 font-sans font-semibold text-black transition active:cursor-grabbing ${
        disabled ? "cursor-not-allowed opacity-60" : "hover:opacity-95"
      }`}
      style={{
        background: "linear-gradient(to right, #F6D26D 0%, #FF9114 100%)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      {label}
    </div>
  );
}
