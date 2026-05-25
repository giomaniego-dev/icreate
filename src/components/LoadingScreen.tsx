"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleReady = () => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 600);
    };

    if (document.readyState === "complete") {
      const timer = setTimeout(handleReady, 400);
      return () => clearTimeout(timer);
    }

    const onLoad = () => setTimeout(handleReady, 400);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center transition-opacity duration-500"
      style={{ opacity: fadeOut ? 0 : 1 }}
    >
      <Image
        src="/images/loading-bg.png"
        alt=""
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <Image
          src="/images/smiling-bot.png"
          alt="Loading"
          width={120}
          height={120}
          className="animate-bounce"
          priority
        />
        <div className="flex gap-2">
          {[0, 200, 400].map((delay) => (
            <span
              key={delay}
              className="h-2.5 w-2.5 rounded-full bg-white"
              style={{
                animation: "loading-dot 1.2s ease-in-out infinite",
                animationDelay: `${delay}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
