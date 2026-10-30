import { ArrowUpRight, Lock, Play } from "lucide-react";
import { isRoundOpen, type Round } from "@/config/rounds";

function Motif({ motif }: { motif: Round["motif"] }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1 };
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden>
      {motif === "ancient" && (
        <g {...s}>
          <path d="M40 100 L100 20 L160 100 Z" /><path d="M60 100 L100 46 L140 100" /><path d="M80 100 L100 72 L120 100" />
          <circle cx="100" cy="60" r="44" strokeDasharray="2 4" />
          {[0, 1, 2, 3, 4].map((i) => <path key={i} d={`M${20 + i * 8} 20 l4 0 l-2 6 z`} />)}
          <line x1="0" y1="0" x2="200" y2="0" className="text-rose animate-scan" stroke="var(--rose)" strokeOpacity=".7" />
        </g>
      )}
      {motif === "medieval" && (
        <g {...s}>
          {Array.from({ length: 11 }, (_, i) => <line key={i} x1={i * 20} y1="0" x2={i * 20} y2="120" strokeOpacity=".2" />)}
          {Array.from({ length: 7 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 20} x2="200" y2={i * 20} strokeOpacity=".2" />)}
          <line x1="0" y1="100" x2="200" y2="100" /><line x1="20" y1="0" x2="20" y2="120" />
          <path d="M60 100 V50 h10 v-8 h10 v8 h10 v-8 h10 v8 h10 v-8 h10 v8 h10 V100" />
          <path d="M90 100 v-22 a10 10 0 0 1 20 0 v22" />
          <path d="M20 110 Q100 -20 180 110" stroke="var(--rose)" strokeOpacity=".7" />
          <circle cx="150" cy="35" r="18" />
        </g>
      )}
      {motif === "industrial" && (
        <g {...s}>
          <path d="M10 60 H50 V30 H90 V90 H130 V50 H190" /><path d="M10 80 H30 V100 H110 V70 H170" strokeOpacity=".5" />
          {[[50, 30], [90, 90], [130, 50], [110, 70]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="3" fill="currentColor" />)}
          <rect x="140" y="10" width="44" height="26" rx="2" />
          <circle cx="152" cy="23" r="4" fill="var(--rose)" stroke="none" className="animate-pulse-glow" />
          <circle cx="172" cy="23" r="4" />
        </g>
      )}
      {motif === "future" && (
        <g {...s}>
          <path d="M20 30 h20 a14 14 0 0 1 0 28 h-20 z" /><text x="22" y="48" fontSize="8" fill="currentColor" stroke="none" fontFamily="monospace">AND</text>
          <path d="M20 72 q14 14 0 28 q30 0 40 -14 q-10 -14 -40 -14z" /><text x="26" y="90" fontSize="8" fill="currentColor" stroke="none" fontFamily="monospace">OR</text>
          <path d="M100 52 v20 l18 -10 z" /><circle cx="121" cy="62" r="3" />
          <path d="M54 44 H80 V58 H100 M60 86 H80 V66 H100" />
          <path d="M124 62 H140" />
          <circle cx="166" cy="62" r="24" stroke="var(--rose)" /><circle cx="166" cy="62" r="16" strokeDasharray="3 3" />
          <rect x="160" y="56" width="12" height="12" />
        </g>
      )}
    </svg>
  );
}

export function MissionCard({
  round,
  compact = false,
  onWatchVideo,
}: {
  round: Round;
  compact?: boolean;
  onWatchVideo?: (round: Round) => void;
}) {
  const open = isRoundOpen(round);
  return (
    <article className="panel corner-marks group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[var(--glow-cyan)]">
      <div className="relative h-36 border-b border-border bg-navy/60 px-6 py-4 text-cyan/70 transition-colors group-hover:text-cyan">
        <Motif motif={round.motif} />
        <span className="absolute left-4 top-3 font-display text-5xl font-bold text-foreground/10">{round.number}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="label-mono text-cyan">Round {round.number}</p>
          <span className={`label-mono rounded-sm border px-2 py-1 !text-[0.62rem] ${open ? "border-cyan/50 text-cyan" : "border-rose/50 text-rose"}`}>
            {open ? "● Portal open" : "● Coming soon"}
          </span>
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold leading-tight">{round.title}</h3>
        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div><dt className="label-mono !text-[0.6rem] text-muted-foreground">Era</dt><dd className="mt-1">{round.era}</dd></div>
          <div><dt className="label-mono !text-[0.6rem] text-muted-foreground">STEM Theme</dt><dd className="mt-1">{round.theme}</dd></div>
        </dl>
        {!compact && <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{round.description}</p>}
        <div className="mt-auto pt-6">
          <p className="label-mono mb-4 text-muted-foreground">Fragment · <span className="text-foreground">{round.fragment}</span></p>
          {!compact && (open ? (
            <>
              <a href={round.url} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
                Enter portal <ArrowUpRight size={16} /><span className="sr-only">(opens in a new tab)</span>
              </a>
              {onWatchVideo && (
                <button type="button" className="btn-ghost mt-3 w-full justify-center" onClick={() => onWatchVideo(round)}>
                  <Play size={14} /> Watch video
                </button>
              )}
            </>
          ) : (
            <>
              <button type="button" disabled aria-disabled="true" className="btn-ghost w-full cursor-not-allowed justify-center opacity-60 hover:!translate-y-0 hover:!bg-transparent">
                <Lock size={14} /> Coming soon
              </button>
              {onWatchVideo && (
                <button type="button" className="btn-ghost mt-3 w-full justify-center" onClick={() => onWatchVideo(round)}>
                  <Play size={14} /> Watch video
                </button>
              )}
            </>
          ))}
        </div>
      </div>
    </article>
  );
}
