"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import {
  QUIZ_CTA_GRADIENT_HORIZONTAL,
  QUIZ_QUESTIONS,
  type QuizStep,
} from "@/lib/quiz-data";

const CTA_SHADOW =
  "0 6px 12px -2px rgba(0,0,0,0.35), 0 12px 24px -6px rgba(0,0,0,0.5)";

type QuizFlowProps = {
  initialStep?: QuizStep;
  layout?: "fullscreen" | "modal";
  onExit?: () => void;
  onBackToLanding?: () => void;
};

export function QuizFlow({
  initialStep = "banner",
  layout = "fullscreen",
  onExit,
  onBackToLanding,
}: QuizFlowProps) {
  const [step, setStep] = useState<QuizStep>(initialStep);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [droppedAnswer, setDroppedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === QUIZ_QUESTIONS.length - 1;
  const isFullscreen = layout === "fullscreen";

  const resetQuiz = useCallback(() => {
    setStep(initialStep);
    setCurrentQuestionIndex(0);
    setDroppedAnswer(null);
    setIsCorrect(null);
    setScore(0);
  }, [initialStep]);

  const handleExit = useCallback(() => {
    resetQuiz();
    onExit?.();
  }, [onExit, resetQuiz]);

  const handleGetStarted = () => setStep("intro");

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

  const shellClass = isFullscreen
    ? "flex h-full w-full flex-1 flex-col"
    : "relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl shadow-2xl";

  const contentClass = isFullscreen
    ? "flex flex-1 flex-col items-center justify-center px-6 py-8 sm:px-10 md:px-14"
    : "flex flex-1 flex-col overflow-y-auto";

  return (
    <div className={shellClass} style={isFullscreen ? undefined : { backgroundColor: "#2261B4" }}>
      {!isFullscreen && onExit && (
        <button
          type="button"
          onClick={handleExit}
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-white/90 transition hover:bg-white/20 hover:text-white"
          aria-label="Close quiz"
        >
          <CloseIcon />
        </button>
      )}

      <div className={contentClass}>
        {step === "banner" && (
          <div className="flex flex-col items-center justify-center gap-10 py-8 text-center md:py-12">
            <div className="animate-banner-scale-in flex shrink-0 items-center justify-center overflow-hidden rounded-2xl p-6 md:p-8">
              <Image
                src="/images/robot.svg"
                alt=""
                width={280}
                height={180}
                className="h-28 w-auto md:h-36"
              />
            </div>
            <h2 className="animate-banner-slide-up animate-banner-delay-200 font-display text-3xl font-bold text-white sm:text-4xl md:text-[2.75rem]">
              Fix-That-Design!
            </h2>
            <button
              type="button"
              onClick={handleGetStarted}
              className="animate-banner-slide-up animate-banner-delay-400 inline-flex items-center justify-center rounded-xl px-10 py-4 font-sans text-base font-bold text-black transition hover:opacity-95"
              style={{
                background: QUIZ_CTA_GRADIENT_HORIZONTAL,
                boxShadow: CTA_SHADOW,
              }}
            >
              Get Started
            </button>
          </div>
        )}

        {step === "intro" && (
          <div
            key="intro"
            className="animate-banner-fade-in flex max-w-3xl flex-col items-center justify-center gap-8 px-4 py-8 text-center md:py-12"
          >
            <p className="font-sans text-xl font-medium leading-relaxed text-white md:text-2xl">
              Drag and Drop the proper tools on to the image so you can move on
              to the next part!
            </p>
            <button
              type="button"
              onClick={handleContinueFromIntro}
              className="inline-flex items-center justify-center rounded-xl px-10 py-4 font-sans text-base font-bold text-black transition hover:opacity-95"
              style={{
                background: QUIZ_CTA_GRADIENT_HORIZONTAL,
                boxShadow: CTA_SHADOW,
              }}
            >
              Continue
            </button>
          </div>
        )}

        {step === "quiz" && currentQuestion && (
          <div
            key={`quiz-${currentQuestionIndex}`}
            className="animate-banner-fade-in flex w-full max-w-5xl flex-col gap-8 md:flex-row md:items-start md:gap-12"
          >
            <div className="flex flex-col items-center gap-4 md:min-w-[280px]">
              <div className="relative w-full max-w-xs">
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
                        isCorrect ? "text-green-700" : "text-red-700"
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
                  className="mt-2 w-fit self-start rounded-xl px-8 py-3 font-sans text-base font-bold text-black transition hover:opacity-95"
                  style={{
                    background: QUIZ_CTA_GRADIENT_HORIZONTAL,
                    boxShadow: CTA_SHADOW,
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
            className="animate-banner-fade-in flex flex-col items-center justify-center gap-8 px-4 py-8 text-center md:py-12"
          >
            <h3 className="font-display text-3xl font-bold text-white md:text-4xl">
              Quiz Complete!
            </h3>
            <p className="font-sans text-xl text-white/90">
              You got {score} out of {QUIZ_QUESTIONS.length} correct.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {onBackToLanding && (
                <button
                  type="button"
                  onClick={() => {
                    resetQuiz();
                    onBackToLanding();
                  }}
                  className="rounded-xl border-2 border-white/60 px-8 py-3 font-sans font-medium text-white transition hover:bg-white/20"
                >
                  Back to Start
                </button>
              )}
              {onExit && (
                <button
                  type="button"
                  onClick={handleExit}
                  className="rounded-xl border-2 border-white/60 px-8 py-3 font-sans font-medium text-white transition hover:bg-white/20"
                >
                  Close
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setDroppedAnswer(null);
                  setIsCorrect(null);
                  setScore(0);
                  setStep("intro");
                }}
                className="rounded-xl px-8 py-3 font-sans font-bold text-black transition hover:opacity-95"
                style={{
                  background: QUIZ_CTA_GRADIENT_HORIZONTAL,
                  boxShadow: CTA_SHADOW,
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
        background: QUIZ_CTA_GRADIENT_HORIZONTAL,
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      {label}
    </div>
  );
}

function CloseIcon() {
  return (
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
  );
}
