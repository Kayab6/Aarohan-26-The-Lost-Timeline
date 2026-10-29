// Layered, lightweight space backdrop: static star tiles that drift slowly.
function stars(n: number, seed: number, size: number) {
  let s = seed;
  const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  return Array.from({ length: n }, () => `${Math.round(rnd() * 2000)}px ${Math.round(rnd() * 2000)}px 0 ${size}px oklch(0.97 0.01 270 / ${(0.3 + rnd() * 0.6).toFixed(2)})`).join(",");
}
const far = stars(140, 7, 0);
const near = stars(50, 31, 0.6);

export function SpaceBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-primary/15 blur-[140px]" />
      <div className="absolute -right-40 top-1/3 h-[34rem] w-[34rem] rounded-full bg-rose/10 blur-[150px]" />
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute inset-x-0 top-0 h-[4000px] animate-drift">
        <div className="h-px w-px" style={{ boxShadow: far }} />
        <div className="absolute top-[2000px] h-px w-px" style={{ boxShadow: far }} />
      </div>
      <div className="absolute inset-x-0 top-0 h-[4000px] animate-drift-fast">
        <div className="h-px w-px" style={{ boxShadow: near }} />
        <div className="absolute top-[2000px] h-px w-px" style={{ boxShadow: near }} />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--background)_100%)]" />
    </div>
  );
}
