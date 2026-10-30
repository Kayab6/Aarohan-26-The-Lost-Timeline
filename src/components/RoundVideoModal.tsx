import { X } from "lucide-react";
import { useEffect } from "react";
import type { Round } from "@/config/rounds";

type RoundVideoModalProps = {
  round: Round;
  onClose: () => void;
};

export function RoundVideoModal({ round, onClose }: RoundVideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const videoUrl = `${round.videoUrl}${round.videoUrl.includes("?") ? "&" : "?"}autoplay=1&rel=0`;

  return (
    <div
      id="aarohan-round-video-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="aarohan-round-video-title"
      onClick={onClose}
    >
      <div
        className="panel corner-marks relative w-full max-w-4xl p-4 shadow-[var(--glow-cyan)] sm:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="label-mono text-cyan">Round {round.number} // Introduction</p>
            <h2 id="aarohan-round-video-title" className="mt-2 font-display text-xl font-semibold">
              {round.title}
            </h2>
          </div>
          <button
            type="button"
            className="btn-ghost shrink-0 !p-3"
            aria-label="Close video"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-border bg-background">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={videoUrl}
            title={`${round.title} introduction video`}
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
