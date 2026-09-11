import { Hero } from "../components/home/Hero";
import { StatsBar } from "../components/home/StatsBar";
import { FeaturedGrid } from "../components/home/FeaturedGrid";
import { ReviewsTeaser } from "../components/home/ReviewsTeaser";
import { Newsletter } from "../components/home/Newsletter";

export function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedGrid />
      <ReviewsTeaser />
      <Newsletter />
    </>
  );
}
