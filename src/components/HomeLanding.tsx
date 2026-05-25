"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HomeHero } from "./HomeHero";

const VISITED_KEY = "icreate-initial-load";

export function HomeLanding() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(VISITED_KEY)) {
      sessionStorage.setItem(VISITED_KEY, "1");
      router.replace("/artists");
    } else {
      setReady(true);
    }
  }, [router]);

  if (!ready) return null;

  return <HomeHero />;
}
