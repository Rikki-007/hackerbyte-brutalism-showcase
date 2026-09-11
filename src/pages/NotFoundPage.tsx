import { LinkButton } from "../components/ui/LinkButton";

export function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="border-2 border-hb-black bg-hb-pink px-4 py-2 font-mono text-lg font-bold text-hb-white shadow-[var(--shadow-brutal)]">
        ERROR 404
      </span>
      <h1 className="mt-6 font-display text-4xl sm:text-5xl">SEGFAULT: PAGE NOT FOUND</h1>
      <p className="mt-4 font-sans text-hb-black/70">
        Whatever you were looking for either moved, got deprecated, or never existed. Standard stuff around here.
      </p>
      <LinkButton to="/" className="mt-8">
        Return to safety
      </LinkButton>
    </div>
  );
}
