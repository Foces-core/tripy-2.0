import type { Question } from "~/data/question";

export default function QuestionCard({ q }: { q: Question }) {
  return (
    <div className="card card-question mb-3 rounded-xl border border-[#d8a84e]/40 bg-[#4a1420] p-4">
      <div className="flex items-center justify-between">
        <span className="font-bold">{q.label}</span>
        <span className="text-sm text-[#d8a84e]">
          {q.pts} pts · {q.tier}
        </span>
      </div>
      <p className="mt-2 text-sm">{q.statement}</p>
    </div>
  );
}
