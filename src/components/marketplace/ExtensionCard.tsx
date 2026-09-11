import { Link } from "react-router-dom";
import type { Extension } from "../../types";
import { Badge } from "../ui/Badge";
import { Rating } from "../ui/Rating";
import { Tag } from "../ui/Tag";
import { formatCount, formatPrice } from "../../lib/format";
import { useInstalled } from "../../hooks/useInstalled";

const accentShadow: Record<Extension["accent"], string> = {
  green: "hover:shadow-[var(--shadow-brutal-green)]",
  yellow: "hover:shadow-[var(--shadow-brutal-yellow)]",
  pink: "hover:shadow-[var(--shadow-brutal-pink)]",
  blue: "hover:shadow-[4px_4px_0_0_#00b7ff]",
};

const accentBg: Record<Extension["accent"], string> = {
  green: "bg-hb-green",
  yellow: "bg-hb-yellow",
  pink: "bg-hb-pink",
  blue: "bg-hb-blue",
};

export function ExtensionCard({ extension }: { extension: Extension }) {
  const { isInstalled, toggleInstalled } = useInstalled();
  const installed = isInstalled(extension.slug);

  return (
    <Link
      to={`/marketplace/${extension.slug}`}
      className={[
        "group flex flex-col border-2 border-hb-black bg-hb-white p-5 shadow-[var(--shadow-brutal)] transition-none",
        accentShadow[extension.accent],
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            className={[
              "flex h-10 w-10 shrink-0 items-center justify-center border-2 border-hb-black font-mono text-sm font-bold",
              accentBg[extension.accent],
            ].join(" ")}
          >
            {extension.name.slice(0, 2).toUpperCase()}
          </span>
          <div>
            <h3 className="font-mono text-base font-bold leading-tight">{extension.name}</h3>
            <span className="font-mono text-[11px] text-hb-black/50">by {extension.author}</span>
          </div>
        </div>
        {extension.trending && <Badge tone="pink">TRENDING</Badge>}
      </div>

      <p className="mt-3 font-sans text-sm leading-snug text-hb-black/80">{extension.tagline}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <Badge tone="black">{extension.category}</Badge>
        {extension.tags.slice(0, 2).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between font-mono text-xs text-hb-black/70">
        <Rating value={extension.rating} count={extension.ratingCount} />
        <span>{formatCount(extension.installs)} installs</span>
      </div>

      <div className="mt-4 flex items-center gap-2 border-t-2 border-dashed border-hb-black/30 pt-4">
        <span className="font-mono text-sm font-bold">{formatPrice(extension.price)}</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleInstalled(extension.slug);
          }}
          className={[
            "brutal-press-sm ml-auto border-2 border-hb-black px-3 py-1.5 font-mono text-xs font-bold uppercase",
            installed ? "bg-hb-black text-hb-green" : "bg-hb-green text-hb-black",
          ].join(" ")}
        >
          {installed ? "✓ Installed" : "Install"}
        </button>
      </div>
    </Link>
  );
}
