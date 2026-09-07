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
      <div className="flex items-center justify-between gap-2">
        <span className={`font-bold ${isDone ? "line-through opacity-75" : ""}`}>{q.label}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#d8a84e]">
            {q.pts} pts · {q.tier}
          </span>
          {onToggleDone && (
            <button
              type="button"
              onClick={() => onToggleDone(q.label)}
              title={isDone ? "Unhide this question" : "Hide question (marked as done)"}
              className={`min-h-[32px] rounded-lg px-2.5 py-0.5 text-xs font-bold transition-all ${
                isDone
                  ? "border border-[#d8a84e]/60 bg-transparent text-[#d8a84e] hover:bg-[#d8a84e]/15"
                  : "border border-[#d8a84e]/40 bg-black/30 text-[#f4e8c6] hover:border-[#d8a84e] hover:bg-[#d8a84e] hover:text-[#330e17]"
              }`}
            >
              {isDone ? "Unhide" : "✓ Done"}
            </button>
          )}
        </div>
      </div>
      <p className={`mt-2 text-sm ${isDone ? "opacity-75" : ""}`}>{q.statement}</p>
    </div>
  );
}
