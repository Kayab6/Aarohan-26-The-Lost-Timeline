// Fractured holographic clock — pure SVG + CSS animation.
export function ChronoCore({ className = "" }: { className?: string }) {
  const ticks = Array.from({ length: 60 }, (_, i) => i);
  const numerals = ["XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
  return (
    <div className={`relative aspect-square ${className}`} role="img" aria-label="The fractured Chrono-Core">
      <div className="absolute inset-[18%] rounded-full bg-primary/25 blur-3xl animate-pulse-glow" />
      <div className="absolute inset-[30%] translate-x-6 rounded-full bg-rose/20 blur-3xl" />
      <svg viewBox="0 0 400 400" className="relative h-full w-full overflow-visible">
        <defs>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.9" />
            <stop offset="45%" stopColor="var(--primary)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* orbital ellipses */}
        <g className="animate-spin-slow origin-center" style={{ transformBox: "fill-box" }}>
          <ellipse cx="200" cy="200" rx="196" ry="70" fill="none" stroke="var(--cyan)" strokeOpacity=".25" />
          <circle cx="396" cy="200" r="3" fill="var(--cyan)" />
        </g>
        <g className="animate-spin-mid" style={{ transformOrigin: "200px 200px" }}>
          <ellipse cx="200" cy="200" rx="70" ry="196" fill="none" stroke="var(--rose)" strokeOpacity=".22" strokeDasharray="2 6" />
          <circle cx="200" cy="4" r="2.5" fill="var(--rose)" />
        </g>
        {/* outer ticks */}
        <g className="animate-spin-slow" style={{ transformOrigin: "200px 200px" }}>
          {ticks.map((i) => (
            <line key={i} x1="200" y1="28" x2="200" y2={i % 5 ? 34 : 42} stroke="var(--cyan)" strokeOpacity={i % 5 ? 0.35 : 0.8}
              transform={`rotate(${i * 6} 200 200)`} />
          ))}
          <circle cx="200" cy="200" r="172" fill="none" stroke="var(--cyan)" strokeOpacity=".35" />
        </g>
        {/* fractured dial — segments offset to suggest breakage */}
        <g className="animate-spin-mid" style={{ transformOrigin: "200px 200px" }}>
          <path d="M200 60 A140 140 0 0 1 321 130" fill="none" stroke="var(--cyan)" strokeWidth="2" />
          <path d="M328 145 A140 140 0 0 1 300 298" fill="none" stroke="var(--primary)" strokeWidth="2" transform="translate(6 4)" />
          <path d="M285 310 A140 140 0 0 1 90 285" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeDasharray="30 6" />
          <path d="M80 270 A140 140 0 0 1 185 61" fill="none" stroke="var(--rose)" strokeWidth="2" transform="translate(-7 -3)" className="animate-flicker" />
        </g>
        {numerals.map((n, i) => {
          const a = (i * 30 - 90) * (Math.PI / 180);
          return (
            <text key={n} x={200 + Math.cos(a) * 118} y={204 + Math.sin(a) * 118} textAnchor="middle"
              fontFamily="JetBrains Mono, monospace" fontSize="10" fill={i === 7 ? "var(--rose)" : "var(--muted-foreground)"}
              opacity={i === 7 ? 1 : 0.7}>{n}</text>
          );
        })}
        {/* inner rings */}
        <g className="animate-spin-fast" style={{ transformOrigin: "200px 200px" }}>
          <circle cx="200" cy="200" r="90" fill="none" stroke="var(--cyan)" strokeOpacity=".5" strokeDasharray="1 5" />
          <circle cx="200" cy="200" r="76" fill="none" stroke="var(--primary)" strokeOpacity=".6" strokeDasharray="60 14 8 14" />
        </g>
        {/* crack */}
        <path d="M200 200 L232 150 L226 128 L250 96 M232 150 L262 158" fill="none" stroke="var(--rose)" strokeWidth="1.5" className="animate-flicker" />
        <circle cx="200" cy="200" r="60" fill="url(#core)" />
        {/* hands — frozen at a broken time */}
        <line x1="200" y1="200" x2="200" y2="120" stroke="var(--foreground)" strokeWidth="2.5" strokeLinecap="round" transform="rotate(-38 200 200)" />
        <line x1="200" y1="200" x2="200" y2="150" stroke="var(--cyan)" strokeWidth="4" strokeLinecap="round" transform="rotate(112 200 200)" />
        <circle cx="200" cy="200" r="6" fill="var(--background)" stroke="var(--cyan)" strokeWidth="2" />
        {/* fragments flying off */}
        <g fill="none" strokeWidth="1.5">
          <path d="M340 70 l14 -6 l4 14 z" stroke="var(--cyan)" className="animate-pulse-glow" />
          <path d="M48 96 l12 4 l-6 12 z" stroke="var(--rose)" className="animate-pulse-glow" />
          <path d="M60 330 l16 -2 l-4 14 z" stroke="var(--cyan)" />
          <path d="M346 320 l10 10 l-14 4 z" stroke="var(--primary)" className="animate-pulse-glow" />
        </g>
        <text x="200" y="392" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="3" fill="var(--rose)">
          CORE INTEGRITY // 27% — RIFT DETECTED
        </text>
      </svg>
    </div>
  );
}
