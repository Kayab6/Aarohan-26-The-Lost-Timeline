import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/story", label: "Story" },
  { to: "/missions", label: "Missions" },
  { to: "/rules", label: "Rules" },
] as const;

const linkCls = "relative px-3 py-2 label-mono text-muted-foreground transition-colors hover:text-foreground";
const activeCls = "!text-cyan after:absolute after:inset-x-3 after:-bottom-px after:h-px after:bg-cyan after:shadow-[var(--glow-cyan)]";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5">
        <Link to="/" className="font-display text-lg font-bold tracking-wider" aria-label="AAROHAN’26 home">
          AAROHAN<span className="text-cyan">’26</span>
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className={linkCls} activeProps={{ className: activeCls, "aria-current": "page" }} activeOptions={{ exact: true }}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 sm:flex">
            <span className="label-mono text-foreground/80">IEEE WIE</span>
            <span className="h-4 w-px bg-border" />
            <span className="label-mono text-foreground/80">IEEE SIGHT</span>
          </div>
          <button type="button" className="grid h-11 w-11 place-items-center rounded border border-border md:hidden"
            aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background/95 md:hidden">
          <ul className="flex flex-col px-5 py-3">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} onClick={() => setOpen(false)} className="block py-3 label-mono text-muted-foreground"
                  activeProps={{ className: "!text-cyan", "aria-current": "page" }} activeOptions={{ exact: true }}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="flex gap-3 border-t border-border pt-3 sm:hidden">
              <span className="label-mono">IEEE WIE</span><span className="label-mono">IEEE SIGHT</span>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
