import { useMemo, useState } from "react";
import { extensions, categories } from "../data/extensions";
import { ExtensionCard } from "../components/marketplace/ExtensionCard";
import { FilterBar, type PriceFilter, type SortKey } from "../components/marketplace/FilterBar";

export function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [sort, setSort] = useState<SortKey>("trending");
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");

  const filtered = useMemo(() => {
    let list = extensions.filter((ext) => {
      const matchesSearch =
        search.trim() === "" ||
        ext.name.toLowerCase().includes(search.toLowerCase()) ||
        ext.author.toLowerCase().includes(search.toLowerCase()) ||
        ext.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      const matchesCategory = category === "All" || ext.category === category;

      const matchesPrice =
        priceFilter === "all" ||
        (priceFilter === "free" && ext.pricingModel === "free") ||
        (priceFilter === "paid" && ext.pricingModel !== "free");

      return matchesSearch && matchesCategory && matchesPrice;
    });

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "installs":
          return b.installs - a.installs;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        case "trending":
        default:
          return Number(b.trending) - Number(a.trending) || b.installs - a.installs;
      }
    });

    return list;
  }, [search, category, sort, priceFilter]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-hb-green">./marketplace</span>
        <h1 className="mt-1 font-display text-4xl sm:text-5xl">EXTENSION REGISTRY</h1>
        <p className="mt-2 max-w-2xl font-sans text-hb-black/70">
          {extensions.length} extensions, zero curation committee. Filter by category, price, or just search for
          whatever's on fire right now.
        </p>
      </div>

      <FilterBar
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        sort={sort}
        onSortChange={setSort}
        priceFilter={priceFilter}
        onPriceFilterChange={setPriceFilter}
        resultCount={filtered.length}
      />

      {filtered.length === 0 ? (
        <div className="mt-10 border-2 border-dashed border-hb-black bg-hb-white p-10 text-center font-mono">
          <p className="text-lg font-bold">404: NO EXTENSIONS MATCHED</p>
          <p className="mt-2 text-sm text-hb-black/60">Try a broader search or clear your filters.</p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((ext) => (
            <ExtensionCard key={ext.slug} extension={ext} />
          ))}
        </div>
      )}
    </div>
  );
}
