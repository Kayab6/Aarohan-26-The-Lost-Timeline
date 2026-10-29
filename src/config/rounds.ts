// Single source of truth for the four round websites.
// Paste the deployed URL into `url` to enable a mission; leave it empty to show COMING SOON.
export type Round = {
  id: string;
  number: string;
  title: string;
  era: string;
  theme: string;
  description: string;
  fragment: string;
  motif: "ancient" | "medieval" | "industrial" | "future";
  url: string;
};

export const rounds: Round[] = [
  {
    id: "hidden-artifact",
    number: "01",
    title: "The Hidden Artifact",
    era: "Ancient Civilization",
    theme: "Digital Forensics & Steganography",
    description:
      "Investigate an ancient artifact image to uncover a hidden message and locate the first Time Fragment.",
    fragment: "TF-01 // ALPHA",
    motif: "ancient",
    url: "https://round1-deploy-chi.vercel.app/",
  },
  {
    id: "architects-blueprint",
    number: "02",
    title: "The Architect’s Blueprint",
    era: "Medieval Era",
    theme: "Coordinate Geometry",
    description:
      "Use equations and a coordinate plane to reconstruct a medieval structure and reveal the location of the second fragment.",
    fragment: "TF-02 // BETA",
    motif: "medieval",
    url: "",
  },
  {
    id: "factory-meltdown",
    number: "03",
    title: "Factory Meltdown",
    era: "Industrial Revolution",
    theme: "Arduino & Electronics",
    description:
      "Program and connect electronic components to restore a factory control system and recover the third fragment.",
    fragment: "TF-03 // GAMMA",
    motif: "industrial",
    url: "https://aarohan-26-factory-meltdown.vercel.app/",
  },
  {
    id: "temporal-lock",
    number: "04",
    title: "The Temporal Lock",
    era: "Future / Year 3026",
    theme: "Digital Logic",
    description:
      "Construct a circuit using AND, OR, and NOT gates to satisfy the Chrono-Core’s activation conditions and recover the final fragment.",
    fragment: "TF-04 // OMEGA",
    motif: "future",
    url: "",
  },
];

export const isRoundOpen = (r: Round) => /^https?:\/\//.test(r.url.trim());
