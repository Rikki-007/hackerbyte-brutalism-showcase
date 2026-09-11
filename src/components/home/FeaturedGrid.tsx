import { extensions } from "../../data/extensions";
import { ExtensionCard } from "../marketplace/ExtensionCard";
import { LinkButton } from "../ui/LinkButton";

export function FeaturedGrid() {
  const featured = extensions.filter((e) => e.featured).slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-hb-green">
            ./featured --sort=trending
          </span>
          <h2 className="mt-1 font-display text-3xl sm:text-4xl">HAND-PICKED CHAOS</h2>
        </div>
        <LinkButton to="/marketplace" variant="dark" size="sm">
          View all extensions →
        </LinkButton>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((ext) => (
          <ExtensionCard key={ext.slug} extension={ext} />
        ))}
      </div>
    </section>
  );
}
