export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
      {children}
    </p>
  );
}
