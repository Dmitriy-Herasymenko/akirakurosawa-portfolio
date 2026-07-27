import { Reveal } from "@/components/reveal";

type Stat = {
  value: string;
  label: string;
};

export function Stats({ items }: { items: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
      {items.map((item, i) => (
        <Reveal key={item.label} delay={i * 100}>
          <div className="border-l border-foreground/15 pl-4 sm:pl-6">
            <div className="font-display text-4xl sm:text-5xl">
              {item.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
              {item.label}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
