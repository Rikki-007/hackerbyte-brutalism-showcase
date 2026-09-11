import { Link, Navigate, useParams } from "react-router-dom";
import { extensions } from "../data/extensions";
import { reviewsForExtension } from "../data/reviews";
import { Badge } from "../components/ui/Badge";
import { Rating } from "../components/ui/Rating";
import { Tag } from "../components/ui/Tag";
import { CodeBlock } from "../components/ui/CodeBlock";
import { Panel } from "../components/ui/Panel";
import { ReviewCard } from "../components/reviews/ReviewCard";
import { formatCount, formatDate, formatPrice } from "../lib/format";
import { useInstalled } from "../hooks/useInstalled";

const accentBg: Record<string, string> = {
  green: "bg-hb-green",
  yellow: "bg-hb-yellow",
  pink: "bg-hb-pink",
  blue: "bg-hb-blue",
};

export function ExtensionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const extension = extensions.find((e) => e.slug === slug);
  const { isInstalled, toggleInstalled } = useInstalled();

  if (!extension) return <Navigate to="/marketplace" replace />;

  const installed = isInstalled(extension.slug);
  const extReviews = reviewsForExtension(extension.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <Link to="/marketplace" className="font-mono text-xs font-bold uppercase text-hb-black/60 hover:text-hb-black">
        ← back to registry
      </Link>

      <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* main column */}
        <div className="lg:col-span-2">
          <div className="flex items-start gap-4">
            <span
              className={[
                "flex h-16 w-16 shrink-0 items-center justify-center border-2 border-hb-black font-mono text-2xl font-bold shadow-[var(--shadow-brutal)]",
                accentBg[extension.accent],
              ].join(" ")}
            >
              {extension.name.slice(0, 2).toUpperCase()}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-display text-3xl sm:text-4xl">{extension.name}</h1>
                {extension.trending && <Badge tone="pink">TRENDING</Badge>}
                {extension.featured && <Badge tone="yellow">FEATURED</Badge>}
              </div>
              <p className="mt-1 font-sans text-hb-black/70">{extension.tagline}</p>
              <p className="mt-1 font-mono text-xs text-hb-black/50">
                by <span className="font-bold text-hb-black">{extension.author}</span> · v{extension.version} ·
                updated {formatDate(extension.lastUpdated)}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge tone="black">{extension.category}</Badge>
            {extension.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="mt-8 space-y-4 font-sans leading-relaxed text-hb-black/85">
            {extension.longDescription.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="font-display text-2xl">FEATURES</h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {extension.features.map((f) => (
                <li key={f} className="flex items-start gap-2 border-2 border-hb-black bg-hb-white p-3 font-mono text-sm shadow-[var(--shadow-brutal-sm)]">
                  <span className="mt-0.5 shrink-0 font-bold text-hb-green">▣</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-2xl">CHANGELOG</h2>
            <div className="mt-4 space-y-4">
              {extension.changelog.map((c) => (
                <Panel key={c.version} shadow="sm" className="p-4">
                  <div className="flex items-center gap-3 font-mono text-sm font-bold">
                    <span className="border-2 border-hb-black bg-hb-yellow px-2 py-0.5">v{c.version}</span>
                    <span className="text-hb-black/50">{formatDate(c.date)}</span>
                  </div>
                  <ul className="mt-3 list-inside list-disc space-y-1 font-sans text-sm text-hb-black/80">
                    {c.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </Panel>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl">REVIEWS ({extReviews.length})</h2>
              <Rating value={extension.rating} count={extension.ratingCount} />
            </div>
            {extReviews.length === 0 ? (
              <p className="mt-4 font-mono text-sm text-hb-black/50">No reviews yet. Be the first to break it.</p>
            ) : (
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {extReviews.map((r) => (
                  <ReviewCard key={r.id} review={r} showExtension={false} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-5">
            <Panel className="p-5">
              <div className="flex items-center justify-between font-mono text-sm">
                <span className="text-hb-black/50">Price</span>
                <span className="text-lg font-bold">{formatPrice(extension.price)}</span>
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-sm">
                <span className="text-hb-black/50">Installs</span>
                <span className="font-bold">{formatCount(extension.installs)}</span>
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-sm">
                <span className="text-hb-black/50">Rating</span>
                <Rating value={extension.rating} count={extension.ratingCount} />
              </div>

              <button
                onClick={() => toggleInstalled(extension.slug)}
                className={[
                  "brutal-press mt-5 w-full border-2 border-hb-black px-5 py-3 font-mono text-sm font-bold uppercase tracking-wide",
                  installed ? "bg-hb-black text-hb-green" : "bg-hb-green text-hb-black",
                ].join(" ")}
              >
                {installed ? "✓ Installed — click to remove" : "Install Extension"}
              </button>
            </Panel>

            <div>
              <CodeBlock label="Install via CLI" command={extension.installCommand} />
            </div>

            <Panel className="p-5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-hb-black/50">Published by</h3>
              <p className="mt-2 font-mono text-lg font-bold">{extension.author}</p>
              <p className="mt-1 font-sans text-sm text-hb-black/60">
                Maintains {extensions.filter((e) => e.author === extension.author).length} extension(s) on
                HackerByte.
              </p>
            </Panel>
          </div>
        </aside>
      </div>
    </div>
  );
}
