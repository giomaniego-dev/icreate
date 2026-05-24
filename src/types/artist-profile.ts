export type ArtistProfileCard = {
  name: string;
  role: string;
  bio: string;
  portrait: string;
  portraitAlt?: string;
};

export type ArtistInsight = {
  icon: string;
  iconAlt?: string;
  title: string;
  quote: string;
};

export type ArtistTool = {
  name: string;
  icon: string;
  iconAlt?: string;
};

export type ArtistProcessStep = {
  label: string;
  icon: string;
  iconAlt?: string;
};

export type ArtistWork = {
  src: string;
  alt?: string;
};

/** `featured` = tall left image + two stacked banners on the right. */
export type ArtistWorksLayout = "grid" | "featured";

export type ArtistProfileContent = {
  id: string;
  profile: ArtistProfileCard;
  insights: ArtistInsight[];
  tools: ArtistTool[];
  skills: string[];
  processSteps: ArtistProcessStep[];
  works: ArtistWork[];
  worksLayout?: ArtistWorksLayout;
};
