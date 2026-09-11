import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/Button";

const LINKS = [
  { to: "/marketplace", label: "Marketplace" },
  { to: "/pricing", label: "Pricing" },
  { to: "/docs", label: "Docs" },
  { to: "/about", label: "About" },
];

function navClass(isActive: boolean) {
  return [
    "border-2 border-transparent px-3 py-1.5 font-mono text-sm font-bold uppercase tracking-wide",
    isActive ? "border-hb-black bg-hb-yellow text-hb-black" : "text-hb-black hover:border-hb-black hover:bg-hb-white",
  ].join(" ");
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-hb-black bg-hb-offwhite">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <NavLink to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center border-2 border-hb-black bg-hb-green font-mono text-lg font-bold shadow-[var(--shadow-brutal-sm)]">
            &gt;_
          </span>
          <span className="font-display text-xl leading-none tracking-tight">
            HACKER<span className="text-hb-green">BYTE</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => navClass(isActive)}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button size="sm" variant="dark">
            hb login
          </Button>
          <Button size="sm" variant="primary">
            Get the CLI
          </Button>
        </div>

        <button
          className="brutal-press-sm border-2 border-hb-black bg-hb-white px-3 py-2 font-mono text-xs font-bold uppercase lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      {open && (
        <div className="border-t-2 border-hb-black bg-hb-white px-4 py-3 lg:hidden">
          <nav className="flex flex-col gap-2">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => navClass(isActive) + " w-full text-left"}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex gap-2">
              <Button size="sm" variant="dark" fullWidth>
                hb login
              </Button>
              <Button size="sm" variant="primary" fullWidth>
                Get the CLI
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
