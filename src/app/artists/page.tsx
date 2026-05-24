import type { Metadata } from "next";
import { ArtistsPageContent } from "@/components/ArtistsPageContent";

export const metadata: Metadata = {
  title: "Artists | iCreate",
  description:
    "Learn how experienced creatives are effectively integrating AI into their professional workflows.",
};

export default function ArtistsPage() {
  return (
    <>
      <ArtistsPageContent />
    </>
  );
}
