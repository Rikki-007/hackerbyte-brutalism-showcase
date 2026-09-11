import { LinkButton } from "../ui/LinkButton";
import { Badge } from "../ui/Badge";

export function Hero() {
  return (
    <section className="border-b-2 border-hb-black bg-hb-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge tone="green">1,204 EXTENSIONS</Badge>
            <Badge tone="yellow">312K DEVS</Badge>
            <Badge tone="pink">ZERO ROUNDED CORNERS</Badge>
          </div>

          <h1 className="mt-6 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            YOUR TERMINAL
            <br />
            IS <span className="bg-hb-green px-2">BORING</span>.
            <br />
            FIX IT.
          </h1>

          <p className="mt-6 max-w-lg font-sans text-lg text-hb-black/75">
            HackerByte is the marketplace for terminal extensions, CLI tools, and dev utilities built by people
            who read the changelog before the tutorial. No fluff. No dark patterns. No rounded corners.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton to="/marketplace" size="lg" variant="primary">
              Browse Extensions
            </LinkButton>
            <LinkButton to="/docs" size="lg" variant="ghost">
              Read the Docs
            </LinkButton>
          </div>

          <p className="mt-4 font-mono text-xs text-hb-black/50">
            $ curl -fsSL https://get.hackerbyte.dev | sh &nbsp;// takes 4 seconds, we timed it
          </p>
        </div>

        <TerminalPreview />
      </div>
    </section>
  );
}

function TerminalPreview() {
  const lines = [
    { prompt: "~", cmd: "hb search terminal theme", out: null },
    { prompt: "~", cmd: null, out: "→ rice.tty         ★4.6  156K installs" },
    { prompt: "~", cmd: null, out: "→ glitch.grid       ★4.4   19K installs" },
    { prompt: "~", cmd: "hb install rice-tty", out: null },
    { prompt: "~", cmd: null, out: "Fetching rice-tty@5.1.0 ... done" },
    { prompt: "~", cmd: null, out: "Verifying signature ... ok" },
    { prompt: "~", cmd: null, out: "Installed. Terminal re-riced in 0.4s." },
  ];

  return (
    <div className="border-2 border-hb-black bg-hb-black shadow-[var(--shadow-brutal-xl)]">
      <div className="flex items-center gap-2 border-b-2 border-hb-black bg-hb-offwhite px-4 py-2">
        <span className="h-3 w-3 border-2 border-hb-black bg-hb-pink" />
        <span className="h-3 w-3 border-2 border-hb-black bg-hb-yellow" />
        <span className="h-3 w-3 border-2 border-hb-black bg-hb-green" />
        <span className="ml-2 font-mono text-xs font-bold text-hb-black/60">user@hackerbyte:~</span>
      </div>
      <div className="min-h-[280px] p-5 font-mono text-sm leading-relaxed text-hb-green">
        {lines.map((l, i) =>
          l.cmd ? (
            <div key={i}>
              <span className="text-hb-white/40">{l.prompt} $ </span>
              <span className="text-hb-white">{l.cmd}</span>
            </div>
          ) : (
            <div key={i} className="text-hb-green/90">
              {l.out}
            </div>
          ),
        )}
        <div className="mt-1 flex items-center gap-1">
          <span className="text-hb-white/40">~ $</span>
          <span className="inline-block h-4 w-2 animate-flicker bg-hb-green" />
        </div>
      </div>
    </div>
  );
}
