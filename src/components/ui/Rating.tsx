export function Rating({ value, count }: { value: number; count?: number }) {
  const full = Math.round(value);
  return (
    <div className="flex items-center gap-1.5 font-mono text-sm">
      <span aria-hidden className="tracking-tight">
        {Array.from({ length: 5 }, (_, i) => (i < full ? "★" : "☆")).join("")}
      </span>
      <span className="font-bold">{value.toFixed(1)}</span>
      {typeof count === "number" && <span className="text-hb-black/60">({count.toLocaleString()})</span>}
    </div>
  );
}
