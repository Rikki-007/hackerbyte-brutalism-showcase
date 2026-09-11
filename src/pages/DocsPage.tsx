import { terminalDemoCommands } from "../data/stats";
import { CodeBlock } from "../components/ui/CodeBlock";
import { Panel } from "../components/ui/Panel";
import { Badge } from "../components/ui/Badge";

const CONFIG_EXAMPLE = `# ~/.hackerbyte/config.toml
[registry]
mirror = "https://registry.hackerbyte.dev"
cache_ttl = "6h"

[install]
verify_signatures = true
parallel_downloads = 4

[telemetry]
enabled = false`;

const MANIFEST_EXAMPLE = `# extension.toml — required to publish
name = "your-extension"
version = "1.0.0"
category = "Productivity"
entrypoint = "./bin/run.sh"

[pricing]
model = "free"   # free | freemium | paid`;

const CLI_REFERENCE = [
  { cmd: "hb search <query>", desc: "Search the registry by name, tag, or author" },
  { cmd: "hb install <slug>", desc: "Install an extension by its registry slug" },
  { cmd: "hb list --installed", desc: "List every extension currently installed" },
  { cmd: "hb update [<slug>]", desc: "Update one extension, or all with no argument" },
  { cmd: "hb remove <slug>", desc: "Uninstall an extension" },
  { cmd: "hb publish", desc: "Publish the current directory as a new extension" },
  { cmd: "hb audit", desc: "Run a license + CVE audit across installed extensions" },
  { cmd: "hb auth login", desc: "Authenticate the CLI against your HackerByte account" },
];

export function DocsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <span className="font-mono text-xs font-bold uppercase tracking-widest text-hb-green">./docs</span>
      <h1 className="mt-1 font-display text-4xl sm:text-5xl">READ THIS BEFORE YOU BREAK ANYTHING</h1>
      <p className="mt-3 max-w-2xl font-sans text-hb-black/70">
        Everything you need to install the CLI, manage extensions, and publish your own. No infinite-scroll docs
        site, no cookie banner, no "was this helpful?" survey.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl">QUICKSTART</h2>
        <p className="mt-2 font-sans text-sm text-hb-black/70">
          Copy, paste, execute. In that order, ideally.
        </p>
        <div className="mt-5 space-y-4">
          {terminalDemoCommands.map((c) => (
            <CodeBlock key={c.command} label={c.label} command={c.command} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl">CLI REFERENCE</h2>
        <Panel className="mt-5 overflow-x-auto">
          <table className="w-full border-collapse font-mono text-sm">
            <thead>
              <tr className="border-b-2 border-hb-black bg-hb-yellow text-left">
                <th className="px-4 py-3 font-bold uppercase">Command</th>
                <th className="px-4 py-3 font-bold uppercase">Description</th>
              </tr>
            </thead>
            <tbody>
              {CLI_REFERENCE.map((row, i) => (
                <tr key={row.cmd} className={i % 2 === 0 ? "bg-hb-white" : "bg-hb-offwhite"}>
                  <td className="border-t-2 border-hb-black px-4 py-3 font-bold text-hb-black">{row.cmd}</td>
                  <td className="border-t-2 border-hb-black px-4 py-3 text-hb-black/75">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl">CONFIGURATION</h2>
        <p className="mt-2 font-sans text-sm text-hb-black/70">
          Global config lives at <code className="border-2 border-hb-black bg-hb-white px-1.5 py-0.5">~/.hackerbyte/config.toml</code>.
        </p>
        <div className="mt-4 border-2 border-hb-black bg-hb-black p-5 shadow-[var(--shadow-brutal)]">
          <pre className="overflow-x-auto font-mono text-sm text-hb-green">{CONFIG_EXAMPLE}</pre>
        </div>
      </section>

      <section className="mt-14 mb-6">
        <div className="flex items-center gap-3">
          <h2 className="font-display text-2xl">PUBLISHING AN EXTENSION</h2>
          <Badge tone="pink">FOR MAINTAINERS</Badge>
        </div>
        <p className="mt-2 font-sans text-sm text-hb-black/70">
          Add an <code className="border-2 border-hb-black bg-hb-white px-1.5 py-0.5">extension.toml</code> manifest
          to your project root, then run <code className="border-2 border-hb-black bg-hb-white px-1.5 py-0.5">hb publish</code>.
        </p>
        <div className="mt-4 border-2 border-hb-black bg-hb-black p-5 shadow-[var(--shadow-brutal)]">
          <pre className="overflow-x-auto font-mono text-sm text-hb-green">{MANIFEST_EXAMPLE}</pre>
        </div>
        <div className="mt-5">
          <CodeBlock label="Publish it" command="hb publish --manifest ./extension.toml" />
        </div>
      </section>
    </div>
  );
}
