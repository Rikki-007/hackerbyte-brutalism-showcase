import { useClipboard } from "../../hooks/useClipboard";

interface CodeBlockProps {
  command: string;
  label?: string;
  prompt?: string;
}

export function CodeBlock({ command, label, prompt = "$" }: CodeBlockProps) {
  const { copied, copy } = useClipboard();

  return (
    <div className="w-full">
      {label && (
        <div className="mb-1 font-mono text-[11px] font-bold uppercase tracking-widest text-hb-black/60">{label}</div>
      )}
      <div className="flex items-stretch border-2 border-hb-black bg-hb-black shadow-[var(--shadow-brutal)]">
        <div className="flex flex-1 items-center gap-2 overflow-x-auto px-4 py-3">
          <span className="select-none font-mono text-hb-green">{prompt}</span>
          <code className="whitespace-pre font-mono text-sm text-hb-white">{command}</code>
        </div>
        <button
          onClick={() => copy(command)}
          aria-label="Copy command to clipboard"
          className={[
            "shrink-0 border-l-2 border-hb-black px-4 font-mono text-xs font-bold uppercase tracking-wider transition-none",
            copied ? "bg-hb-green text-hb-black" : "bg-hb-yellow text-hb-black hover:bg-hb-green active:translate-y-[1px]",
          ].join(" ")}
        >
          {copied ? "COPIED ✓" : "COPY"}
        </button>
      </div>
    </div>
  );
}
