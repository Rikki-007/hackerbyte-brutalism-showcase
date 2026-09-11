import { Panel } from "../components/ui/Panel";
import { LinkButton } from "../components/ui/LinkButton";

const VALUES = [
  {
    title: "No dark patterns",
    body: "No fake urgency timers, no pre-checked upsells, no 'are you sure you want to save money' cancel flows.",
  },
  {
    title: "Local-first by default",
    body: "Most extensions on this registry work fully offline. If something phones home, it says so in the listing.",
  },
  {
    title: "Reviews aren't curated",
    body: "We don't remove negative reviews because an author complained. We do remove spam and abuse, obviously.",
  },
  {
    title: "Open licensing, always disclosed",
    body: "Every extension lists its license up front. cargo.cult exists specifically to catch the ones that don't.",
  },
];

const TEAM = [
  { name: "nullbrigade", role: "Founder / Registry Infra" },
  { name: "swampthing", role: "CLI & Package Format" },
  { name: "0xdeadfeed", role: "Security & Trust" },
  { name: "pixel_junkie", role: "Design System (this one)" },
];

export function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <span className="font-mono text-xs font-bold uppercase tracking-widest text-hb-green">./about</span>
      <h1 className="mt-1 font-display text-4xl sm:text-5xl">WHY WE BUILT THIS</h1>
      <p className="mt-4 font-sans leading-relaxed text-hb-black/80">
        HackerByte started as an internal tool for sharing shell scripts between four engineers who were tired of
        pasting gists into Slack. It turned into a registry because every other extension marketplace we used felt
        like it was designed to sell us something we didn't ask for.
      </p>
      <p className="mt-4 font-sans leading-relaxed text-hb-black/80">
        So we built the opposite: a flat, fast, honest catalog of terminal tools with pricing you can read in one
        glance and reviews nobody paid for.
      </p>

      <h2 className="mt-12 font-display text-2xl">WHAT WE ACTUALLY STAND FOR</h2>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {VALUES.map((v) => (
          <Panel key={v.title} className="p-5">
            <h3 className="font-mono text-sm font-bold uppercase tracking-wide text-hb-green">{v.title}</h3>
            <p className="mt-2 font-sans text-sm text-hb-black/75">{v.body}</p>
          </Panel>
        ))}
      </div>

      <h2 className="mt-12 font-display text-2xl">THE TEAM</h2>
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {TEAM.map((member) => (
          <Panel key={member.name} shadow="sm" className="p-4 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center border-2 border-hb-black bg-hb-yellow font-mono font-bold">
              {member.name.slice(0, 2).toUpperCase()}
            </span>
            <p className="mt-3 font-mono text-sm font-bold">{member.name}</p>
            <p className="mt-1 font-mono text-[11px] text-hb-black/50">{member.role}</p>
          </Panel>
        ))}
      </div>

      <div className="mt-14 border-2 border-hb-black bg-hb-black p-8 text-center shadow-[var(--shadow-brutal-lg)]">
        <h2 className="font-display text-2xl text-hb-white sm:text-3xl">GOT AN EXTENSION WORTH SHIPPING?</h2>
        <p className="mt-2 font-sans text-hb-white/60">Read the publishing docs and get it live in under ten minutes.</p>
        <LinkButton to="/docs" variant="primary" className="mt-5 inline-flex">
          Read the docs
        </LinkButton>
      </div>
    </div>
  );
}
