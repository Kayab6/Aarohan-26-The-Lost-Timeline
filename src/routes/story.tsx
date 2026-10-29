import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionLabel } from "@/components/Reveal";
import { rounds } from "@/config/rounds";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Story — The Timeline Has Collapsed | AAROHAN’26" },
      { name: "description", content: "In 3026 the Chrono-Core overloads, opening a Temporal Rift and scattering four Time Fragments across history." },
      { property: "og:title", content: "The Timeline Has Collapsed — AAROHAN’26" },
      { property: "og:description", content: "Become a Chrono Explorer and recover the four Time Fragments." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Story,
});

const logs = [
  { t: "3026.001", m: "Chrono-Core constructed. Time-travel device ready for first activation.", warn: false },
  { t: "3026.002", m: "Activation initiated… CORE OVERLOAD. Temporal Rift detected.", warn: true },
  { t: "3026.003", m: "Four Time Fragments scattered across history. Timeline stability compromised.", warn: true },
  { t: "3026.004", m: "Recruiting Chrono Explorers. Objective: recover all fragments and restore the Chrono-Core.", warn: false },
];

function EraArt({ i }: { i: number }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.2 };
  return (
    <svg viewBox="0 0 120 80" className="h-20 w-32 text-cyan" aria-hidden>
      {i === 0 && <g {...s}><path d="M10 70 L60 12 L110 70Z" /><path d="M35 70 L60 40 L85 70" /><circle cx="60" cy="30" r="4" /></g>}
      {i === 1 && <g {...s}><path d="M20 70 V34 h10 v-8 h10 v8 h10 v-8 h10 v8 h10 v-8 h10 v8 h10 V70" /><path d="M52 70 v-14 a8 8 0 0 1 16 0 v14" /><path d="M10 74 Q60 0 110 74" stroke="var(--rose)" /></g>}
      {i === 2 && <g {...s}><path d="M10 70 V40 l20 -12 v12 l20 -12 v12 l20 -12 V70z" /><rect x="80" y="14" width="10" height="56" /><circle cx="85" cy="8" r="4" stroke="var(--rose)" /></g>}
      {i === 3 && <g {...s}><circle cx="60" cy="40" r="30" /><circle cx="60" cy="40" r="20" strokeDasharray="3 3" stroke="var(--rose)" /><rect x="52" y="32" width="16" height="16" /></g>}
    </svg>
  );
}

function Story() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-5 pt-16">
        <Reveal>
          <SectionLabel>Incident report // classified</SectionLabel>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">The timeline has <span className="text-rose">collapsed.</span></h1>
        </Reveal>
        <Reveal delay={0.1} className="panel corner-marks mt-10 p-6 font-mono text-sm md:p-8">
          <p className="label-mono mb-4 text-muted-foreground">System log — Temporal Research Division</p>
          <ul className="space-y-3">
            {logs.map((l) => (
              <li key={l.t} className="flex gap-4">
                <span className="shrink-0 text-muted-foreground">[{l.t}]</span>
                <span className={l.warn ? "text-rose" : "text-foreground/90"}>{l.m}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            In the year 3026, scientists create the <span className="text-foreground">Chrono-Core</span>, a time-travel device. During its first
            activation, it overloads and creates a <span className="text-rose">Temporal Rift</span>. Four Time Fragments scatter across history,
            threatening the stability of the timeline. You become a <span className="text-cyan">Chrono Explorer</span> — recover the four fragments
            and restore the Chrono-Core.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-5 pt-20" aria-label="Timeline of eras">
        <Reveal><SectionLabel>Fragment trace</SectionLabel></Reveal>
        <ol className="relative mt-10 border-l border-cyan/30 pl-8 md:pl-12">
          {rounds.map((r, i) => (
            <li key={r.id} className="relative pb-14 last:pb-0">
              <span className={`absolute -left-[calc(2rem+7px)] top-2 h-3.5 w-3.5 rotate-45 border md:-left-[calc(3rem+7px)] ${i === 3 ? "border-rose bg-rose/40 shadow-[var(--glow-rose)]" : "border-cyan bg-cyan/30 shadow-[var(--glow-cyan)]"}`} />
              <Reveal delay={0.05} className="panel flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
                <EraArt i={i} />
                <div>
                  <p className="label-mono text-cyan">Era {r.number} · {r.era}</p>
                  <h2 className="mt-2 font-display text-2xl font-semibold">{r.title}</h2>
                  <p className="label-mono mt-3 text-muted-foreground">Signal: {r.fragment}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
