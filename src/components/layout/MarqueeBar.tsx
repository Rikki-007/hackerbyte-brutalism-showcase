const MESSAGES = [
  "NO ROUNDED CORNERS",
  "NO SOFT SHADOWS",
  "NO GRADIENTS",
  "NO MERCY",
  "1,204 EXTENSIONS AND COUNTING",
  "SHIP IT UGLY, SHIP IT FAST",
];

export function MarqueeBar() {
  const items = [...MESSAGES, ...MESSAGES];
  return (
    <div className="overflow-hidden border-b-2 border-hb-black bg-hb-black py-1.5">
      <div className="flex w-max animate-marquee">
        {items.map((msg, i) => (
          <span key={i} className="mx-6 flex items-center font-mono text-xs font-bold uppercase tracking-widest text-hb-green">
            {msg}
            <span className="ml-6 text-hb-yellow">//</span>
          </span>
        ))}
      </div>
    </div>
  );
}
