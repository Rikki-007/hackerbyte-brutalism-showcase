export function Tag({ children }: { children: string }) {
  return (
    <span className="border-2 border-hb-black bg-hb-offwhite px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase text-hb-black/80">
      #{children}
    </span>
  );
}
