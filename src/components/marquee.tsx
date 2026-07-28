type MarqueeProps = {
  items: string[];
};

// Repeated enough times per half so the track stays wider than any
// viewport — otherwise the loop runs out of content before the
// translateX(-50%) reset point and a gap of empty space appears.
const REPEAT = 6;
const SECONDS_PER_REPEAT = 28;

export function Marquee({ items }: MarqueeProps) {
  const half = Array.from({ length: REPEAT }, () => items).flat();
  const track = [...half, ...half];

  return (
    <div className="mask-fade-x group relative overflow-hidden border-y border-foreground/10 py-5">
      <div className="divider-gradient absolute inset-x-0 top-0" />
      <div
        className="animate-marquee flex w-max shrink-0 gap-10 group-hover:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${REPEAT * SECONDS_PER_REPEAT}s` } as React.CSSProperties}
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-display text-xl text-muted sm:text-2xl"
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
