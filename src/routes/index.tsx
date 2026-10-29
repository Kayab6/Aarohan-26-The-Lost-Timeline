import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ChronoCore } from "@/components/ChronoCore";
import { MissionCard } from "@/components/MissionCard";
import { Reveal, SectionLabel } from "@/components/Reveal";
import { rounds } from "@/config/rounds";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AAROHAN’26 — The Lost Timeline | Chrono-Core Activation" },
      { name: "description", content: "Four eras. Four fragments. One timeline to save. Join the AAROHAN’26 time-travel STEM challenge." },
      { property: "og:title", content: "AAROHAN’26 — The Lost Timeline" },
      { property: "og:description", content: "Four eras. Four fragments. One timeline to save." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const reduce = useReducedMotion();
  const fade = (d: number) => (reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d } });
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-10 overflow-x-clip px-5 pb-20 pt-12 lg:grid-cols-[1.1fr_1fr] lg:pt-20">
        <div>
          <motion.p {...fade(0)} className="label-mono text-cyan">Temporal Research Division // 3026</motion.p>
          <motion.h1 {...fade(0.1)} className="mt-6 font-display text-[clamp(3rem,10vw,7rem)] font-extrabold leading-[0.9] tracking-tight text-gradient">
            AAROHAN’26
          </motion.h1>
          <motion.p {...fade(0.2)} className="mt-4 font-display text-[clamp(1.1rem,3vw,1.8rem)] font-medium tracking-[0.25em] text-foreground">
            THE LOST <span className="text-rose">TIMELINE</span>
          </motion.p>
          <motion.p {...fade(0.3)} className="mt-6 text-lg text-foreground/90">Four eras. Four fragments. One timeline to save.</motion.p>
          <motion.p {...fade(0.35)} className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
            A malfunctioning Chrono-Core has fractured the timeline, scattering four Time Fragments across history.
          </motion.p>
          <motion.div {...fade(0.45)} className="mt-10 flex flex-wrap gap-4">
            <Link to="/missions" className="btn-primary">Begin mission <ArrowRight size={16} /></Link>
            <Link to="/story" className="btn-ghost">Explore the story</Link>
          </motion.div>
        </div>
        <motion.div {...(reduce ? {} : { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1.2 } })}>
          <ChronoCore className="mx-auto w-full max-w-[520px]" />
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <Reveal className="panel corner-marks grid gap-8 p-8 md:grid-cols-[auto_1fr] md:p-12">
          <SectionLabel>Briefing</SectionLabel>
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">The timeline needs Chrono Explorers.</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              AAROHAN’26 is an immersive time-travel STEM challenge. Teams travel through four eras — each a round built around a
              different discipline — to recover the scattered Time Fragments and restore the Chrono-Core.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <Reveal><SectionLabel>Four temporal portals</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">The missions</h2></Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rounds.map((r, i) => <Reveal key={r.id} delay={i * 0.08}><MissionCard round={r} compact /></Reveal>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <Reveal className="panel overflow-hidden p-10 text-center md:p-16">
          <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--rose)_14%,transparent),transparent_70%)]" />
          <p className="relative label-mono text-rose">Rift status: unstable</p>
          <h2 className="relative mt-4 font-display text-3xl font-bold md:text-5xl">Restore the timeline.</h2>
          <Link to="/missions" className="btn-primary relative mt-8">View missions <ArrowRight size={16} /></Link>
        </Reveal>
      </section>
    </>
  );
}
