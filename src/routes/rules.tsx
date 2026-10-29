import { createFileRoute } from "@tanstack/react-router";
import { Clock, Layers, Trophy, Users, FileCheck } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/Reveal";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [
      { title: "Rules — Mission Protocol | AAROHAN’26" },
      { name: "description", content: "Mission protocol for AAROHAN’26: teams, rounds, time limits and progression." },
      { property: "og:title", content: "Mission Protocol — AAROHAN’26" },
      { property: "og:description", content: "Teams of 4–5, four rounds, fixed time limits." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Rules,
});

const rules = [
  { icon: Users, code: "P-01", title: "Team composition", body: "Teams contain 4–5 members." },
  { icon: Layers, code: "P-02", title: "Four rounds", body: "The event has four rounds — one for each era." },
  { icon: Clock, code: "P-03", title: "Fixed time limit", body: "Each round has a fixed time limit." },
  { icon: Trophy, code: "P-04", title: "Progression", body: "Successful teams receive the corresponding Time Fragment and proceed to the next stage." },
  { icon: FileCheck, code: "P-05", title: "Finalisation", body: "Scoring and exact time limits are finalised by the organisers." },
];

function Rules() {
  return (
    <section className="mx-auto max-w-5xl px-5 pt-16">
      <Reveal>
        <SectionLabel>Mission protocol</SectionLabel>
        <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">Rules of <span className="text-cyan">engagement</span></h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Read the protocol before entering any portal.</p>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {rules.map((r, i) => (
          <Reveal key={r.code} delay={i * 0.06} className={`panel corner-marks flex gap-5 p-6 ${i === 4 ? "md:col-span-2" : ""}`}>
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded border border-cyan/30 text-cyan"><r.icon size={20} /></div>
            <div>
              <p className="label-mono text-muted-foreground">{r.code}</p>
              <h2 className="mt-1 font-display text-lg font-semibold">{r.title}</h2>
              <p className="mt-2 text-muted-foreground">{r.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
