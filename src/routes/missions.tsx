import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MissionCard } from "@/components/MissionCard";
import { Reveal, SectionLabel } from "@/components/Reveal";
import { RoundVideoModal } from "@/components/RoundVideoModal";
import { rounds, type Round } from "@/config/rounds";

export const Route = createFileRoute("/missions")({
  head: () => ({
    meta: [
      { title: "Missions — AAROHAN’26 The Lost Timeline" },
      { name: "description", content: "Four temporal portals: steganography, coordinate geometry, Arduino electronics and digital logic." },
      { property: "og:title", content: "Missions — AAROHAN’26" },
      { property: "og:description", content: "Four temporal portals. Recover every Time Fragment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Missions,
});

function Missions() {
  const [selectedRound, setSelectedRound] = useState<Round | null>(null);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-16">
      <Reveal>
        <SectionLabel>Mission control // portal array</SectionLabel>
        <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">Four temporal <span className="text-cyan">portals</span></h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Each portal leads to a separate round. Recover the fragment in each era to restore the Chrono-Core.</p>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {rounds.map((r, i) => <Reveal key={r.id} delay={i * 0.08} className="h-full"><MissionCard round={r} onWatchVideo={setSelectedRound} /></Reveal>)}
      </div>
      </section>
      {selectedRound && <RoundVideoModal round={selectedRound} onClose={() => setSelectedRound(null)} />}
    </>
  );
}
