import { reviews } from "../../data/reviews";
import { ReviewCard } from "../reviews/ReviewCard";
import { LinkButton } from "../ui/LinkButton";

export function ReviewsTeaser() {
  const picks = reviews.slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-hb-pink">
            ./reviews --unfiltered
          </span>
          <h2 className="mt-1 font-display text-3xl sm:text-4xl">WHAT THE COMMUNITY SAYS</h2>
        </div>
        <LinkButton to="/marketplace" variant="ghost" size="sm">
          Read more reviews →
        </LinkButton>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {picks.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
    </section>
  );
}
