import { Link } from "react-router-dom";

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Marketplace", to: "/marketplace" },
      { label: "Pricing", to: "/pricing" },
      { label: "Docs", to: "/docs" },
      { label: "Changelog", to: "/docs" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Publish an extension", to: "/docs" },
      { label: "Reviews", to: "/marketplace" },
      { label: "About", to: "/about" },
      { label: "Status", to: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", to: "/about" },
      { label: "Privacy", to: "/about" },
      { label: "License Audits", to: "/marketplace" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-hb-black bg-hb-black text-hb-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center border-2 border-hb-green bg-hb-black font-mono text-lg font-bold text-hb-green">
                &gt;_
              </span>
              <span className="font-display text-xl tracking-tight text-hb-white">
                HACKER<span className="text-hb-green">BYTE</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs font-mono text-sm text-hb-white/60">
              The marketplace for terminal extensions built by people who think rounded corners are a personality
              flaw.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-hb-green">{col.title}</h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="font-mono text-sm text-hb-white/80 hover:text-hb-yellow">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t-2 border-hb-white/20 pt-6 font-mono text-xs text-hb-white/50 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} HACKERBYTE // ALL RIGHTS RESERVED // NO REFUNDS ON BAD TAKES</span>
          <span className="text-hb-green">rendered with zero border-radius</span>
        </div>
      </div>
    </footer>
  );
}
