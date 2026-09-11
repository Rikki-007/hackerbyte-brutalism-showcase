import { stats } from "../../data/stats";

export function StatsBar() {
  return (
    <section className="border-b-2 border-hb-black bg-hb-yellow">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y-2 divide-hb-black sm:grid-cols-4 sm:divide-x-2 sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 px-4 py-6 text-center">
            <span className="font-display text-3xl sm:text-4xl">{stat.value}</span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-hb-black/70">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
