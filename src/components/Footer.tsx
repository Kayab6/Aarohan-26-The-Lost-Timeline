import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-navy/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl font-bold">AAROHAN<span className="text-cyan">’26</span></p>
          <p className="label-mono mt-2 text-rose">The Lost Timeline</p>
          <p className="mt-3 text-sm text-muted-foreground">Amrita Vishwa Vidyapeetham, Bengaluru</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {([["/", "Home"], ["/story", "Story"], ["/missions", "Missions"], ["/rules", "Rules"]] as const).map(([to, l]) => (
              <li key={to}><Link to={to} className="label-mono text-muted-foreground hover:text-cyan">{l}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border py-4 text-center label-mono text-muted-foreground/60">
        IEEE WIE · IEEE SIGHT — Temporal Research Division // 3026
      </div>
    </footer>
  );
}
