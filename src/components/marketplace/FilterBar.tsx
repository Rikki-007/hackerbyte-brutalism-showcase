import { categories } from "../../data/extensions";

export type SortKey = "trending" | "installs" | "rating" | "newest";
export type PriceFilter = "all" | "free" | "paid";

interface FilterBarProps {
  search: string;
  onSearchChange: (v: string) => void;
  category: (typeof categories)[number];
  onCategoryChange: (v: (typeof categories)[number]) => void;
  sort: SortKey;
  onSortChange: (v: SortKey) => void;
  priceFilter: PriceFilter;
  onPriceFilterChange: (v: PriceFilter) => void;
  resultCount: number;
}

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "trending", label: "Trending" },
  { value: "installs", label: "Most Installed" },
  { value: "rating", label: "Top Rated" },
  { value: "newest", label: "Newest" },
];

export function FilterBar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sort,
  onSortChange,
  priceFilter,
  onPriceFilterChange,
  resultCount,
}: FilterBarProps) {
  return (
    <div className="border-2 border-hb-black bg-hb-white p-4 shadow-[var(--shadow-brutal)] sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex-1">
          <label htmlFor="search" className="sr-only">
            Search extensions
          </label>
          <input
            id="search"
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="grep -i 'extension name, tag, or author'"
            className="w-full border-2 border-hb-black bg-hb-offwhite px-4 py-2.5 font-mono text-sm placeholder:text-hb-black/40 focus:bg-hb-white focus:outline-none focus:ring-2 focus:ring-hb-green"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase text-hb-black/50">Price:</span>
          {(["all", "free", "paid"] as PriceFilter[]).map((p) => (
            <button
              key={p}
              onClick={() => onPriceFilterChange(p)}
              className={[
                "border-2 border-hb-black px-3 py-1.5 font-mono text-xs font-bold uppercase transition-none",
                priceFilter === p ? "bg-hb-black text-hb-green" : "bg-hb-white text-hb-black hover:bg-hb-offwhite",
              ].join(" ")}
            >
              {p}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="font-mono text-xs font-bold uppercase text-hb-black/50">
            Sort:
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortKey)}
            className="border-2 border-hb-black bg-hb-white px-3 py-1.5 font-mono text-xs font-bold uppercase focus:outline-none focus:ring-2 focus:ring-hb-green"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 border-t-2 border-dashed border-hb-black/30 pt-4">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => onCategoryChange(c)}
            className={[
              "border-2 border-hb-black px-3 py-1.5 font-mono text-xs font-bold uppercase transition-none",
              category === c ? "bg-hb-yellow text-hb-black" : "bg-hb-white text-hb-black hover:bg-hb-offwhite",
            ].join(" ")}
          >
            {c}
          </button>
        ))}
        <span className="ml-auto self-center font-mono text-xs text-hb-black/50">
          {resultCount} result{resultCount === 1 ? "" : "s"}
        </span>
      </div>
    </div>
  );
}
