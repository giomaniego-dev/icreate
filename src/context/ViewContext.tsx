"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

export type View = "home" | "artists" | "quiz" | "about" | "article";

type ViewContextValue = {
  view: View;
  navigate: (to: View) => void;
};

const ViewContext = createContext<ViewContextValue | null>(null);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<View>("home");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const navigate = useCallback((to: View) => {
    setView(to);
  }, []);

  useEffect(() => {
    if (hydrated) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [view, hydrated]);

  if (!hydrated) return null;

  return (
    <ViewContext.Provider value={{ view, navigate }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView(): View {
  const ctx = useContext(ViewContext);
  if (!ctx) throw new Error("useView must be used within ViewProvider");
  return ctx.view;
}

export function useNavigate(): (to: View) => void {
  const ctx = useContext(ViewContext);
  if (!ctx) throw new Error("useNavigate must be used within ViewProvider");
  return ctx.navigate;
}
