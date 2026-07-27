type MarqueeProps = {
  items: string[];
};

export function Marquee({ items }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className="group relative overflow-hidden border-y border-foreground/10 py-5">
      <div className="animate-marquee flex w-max shrink-0 gap-10 group-hover:[animation-play-state:paused]">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-display text-xl italic text-muted sm:text-2xl"
          >
            {item}
            <span aria-hidden="true" className="text-accent">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
