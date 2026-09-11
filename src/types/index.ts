export type ExtensionCategory =
  | "Terminal"
  | "Git"
  | "AI"
  | "Security"
  | "Productivity"
  | "DevOps"
  | "Themes"
  | "Debugging";

export type PricingModel = "free" | "paid" | "freemium";

export interface Extension {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string[];
  author: string;
  category: ExtensionCategory;
  tags: string[];
  version: string;
  lastUpdated: string;
  installs: number;
  rating: number;
  ratingCount: number;
  pricingModel: PricingModel;
  price: number | null;
  accent: "green" | "yellow" | "pink" | "blue";
  featured?: boolean;
  trending?: boolean;
  installCommand: string;
  features: string[];
  changelog: { version: string; date: string; notes: string[] }[];
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  billing: "forever" | "per month" | "per seat / month";
  tagline: string;
  cta: string;
  accent: "green" | "yellow" | "black";
  highlighted?: boolean;
  features: string[];
}

export interface Review {
  id: string;
  handle: string;
  displayName: string;
  rating: number;
  extensionSlug: string;
  date: string;
  body: string;
  verified: boolean;
  upvotes: number;
}

export interface Stat {
  label: string;
  value: string;
}
