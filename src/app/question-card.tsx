import type { Question } from "~/data/question";

export default function QuestionCard({
  q,
  isDone = false,
  onToggleDone,
}: {
  q: Question;
  isDone?: boolean;
  onToggleDone?: (label: string) => void;
}) {
  return (
    <div
      className={`card card-question mb-3 rounded-xl border border-[#d8a84e]/40 bg-[#4a1420] p-4 transition-all ${
        isDone ? "border-[#d8a84e]/20 opacity-60" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3
            className={`text-base leading-snug font-bold text-[#f4e8c6] ${
              isDone ? "line-through opacity-75" : ""
            }`}
          >
            {q.label}
          </h3>
        </div>
        <div className="flex shrink-0 items-center gap-2 pt-0.5">
          <span className="rounded-md border border-[#d8a84e]/30 bg-black/30 px-2 py-0.5 text-xs font-semibold whitespace-nowrap text-[#d8a84e]">
            {q.pts} {q.pts === 1 ? "pt" : "pts"} · {q.tier}
          </span>
          {onToggleDone && (
            <button
              type="button"
              onClick={() => onToggleDone(q.label)}
              title={isDone ? "Unhide this question" : "Hide question (marked as done)"}
              className={`flex min-h-[30px] w-[68px] items-center justify-center rounded-lg border text-xs font-bold transition-all ${
                isDone
                  ? "border-[#d8a84e]/60 bg-transparent text-[#d8a84e] hover:bg-[#d8a84e]/15"
                  : "border-[#d8a84e]/40 bg-black/30 text-[#f4e8c6] hover:border-[#d8a84e] hover:bg-[#d8a84e] hover:text-[#330e17]"
              }`}
            >
              {isDone ? "Unhide" : "✓ Done"}
            </button>
          )}
        </div>
      </div>
      <p className={`mt-2 text-sm leading-relaxed text-[#f4e8c6]/90 ${isDone ? "opacity-75" : ""}`}>
        {q.statement}
      </p>
    </div>
  );
}
