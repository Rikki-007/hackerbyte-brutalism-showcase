import type { Review } from "../../types";
import { Badge } from "../ui/Badge";
import { Rating } from "../ui/Rating";
import { formatDate } from "../../lib/format";
import { extensions } from "../../data/extensions";

export function ReviewCard({ review, showExtension = true }: { review: Review; showExtension?: boolean }) {
  const extension = extensions.find((e) => e.slug === review.extensionSlug);

  return (
    <div className="flex h-full flex-col border-2 border-hb-black bg-hb-white p-5 shadow-[var(--shadow-brutal)]">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-bold">{review.displayName}</span>
            {review.verified && <Badge tone="green">VERIFIED</Badge>}
          </div>
          <span className="font-mono text-xs text-hb-black/50">{review.handle}</span>
        </div>
        <Rating value={review.rating} />
      </div>

      <p className="mt-3 flex-1 font-sans text-sm leading-snug text-hb-black/85">&ldquo;{review.body}&rdquo;</p>

      <div className="mt-4 flex items-center justify-between border-t-2 border-dashed border-hb-black/30 pt-3 font-mono text-xs text-hb-black/50">
        {showExtension && extension ? (
          <span>
            on <span className="font-bold text-hb-black">{extension.name}</span>
          </span>
        ) : (
          <span>{formatDate(review.date)}</span>
        )}
        <span>▲ {review.upvotes}</span>
      </div>
    </div>
  );
}
