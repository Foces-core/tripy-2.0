"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { QUESTIONS } from "~/data/questions";

const Standings = dynamic(() => import("./standings"), {
  ssr: false,
  loading: () => <p className="mb-4 py-4 text-center text-sm opacity-60">Loading standings…</p>,
});

type Day = 1 | 2 | 3;

export default function StudentPage() {
  const [day, setDay] = useState<Day>(1);
  return (
    <main className="mx-auto max-w-lg px-4 py-8">
      <Link
        href="/live"
        prefetch={false}
        className="fixed top-3 left-4 rounded-2xl border border-[#d8a84e] px-4 py-1 text-xs text-[#d8a84e] opacity-70"
      >
        Live →
      </Link>
      <header className="mb-5 text-center">
        <p className="text-[11px] font-bold tracking-[0.35em] text-[#d8a84e]">FOCES · CEC</p>
        <h1 className="mt-1 text-6xl leading-none font-black tracking-tight">
          Tripy <span className="text-[#d8a84e]">2.0</span>
        </h1>
        <div className="mx-auto mt-3 h-px w-40 bg-[#d8a84e]/60" />
        <p className="mt-3 text-lg">3-Day Python Workshop</p>
        <p className="mt-1 text-sm font-bold tracking-wide text-[#d8a84e]">SEPT 7, 8, 9 · 4–5 PM</p>
        <div className="mt-2 flex items-center justify-center gap-2 text-xs opacity-80">
          <span className="rounded-full border border-[#f4e8c6]/30 px-3 py-0.5">CC1</span>
          <span className="text-[#d8a84e]">vs</span>
          <span className="rounded-full border border-[#f4e8c6]/30 px-3 py-0.5">CC2</span>
        </div>
      </header>
      <Standings />
      <section className="card mb-4 rounded-xl border border-[#d8a84e]/30 bg-[#4a1420] p-4 text-sm leading-relaxed">
        <p className="font-bold tracking-wide text-[#d8a84e]">HOW IT RUNS</p>
        <ol className="mt-1 list-decimal space-y-0.5 pl-5 opacity-90">
          <li>Read the question here.</li>
          <li>Write and run code on your laptop.</li>
          <li>Raise your hand. A volunteer verifies and scores CC1 / CC2.</li>
        </ol>
      </section>
      <div className="mb-4 text-center">
        {([1, 2, 3] as Day[]).map((d) => (
          <button
            key={d}
            onClick={() => setDay(d)}
            className={`mx-1 rounded-md border px-3 py-1 text-sm ${day === d ? "bg-[#f4e8c6] text-[#330e17]" : ""}`}
          >
            Day {d}
          </button>
        ))}
      </div>
      {QUESTIONS[day]!.map((q) => (
        <div
          key={q.label}
          className="card mb-3 rounded-xl border border-[#d8a84e]/40 bg-[#4a1420] p-4"
        >
          <div className="flex items-center justify-between">
            <span className="font-bold">{q.label}</span>
            <span className="text-sm text-[#d8a84e]">
              {q.pts} pts · {q.tier}
            </span>
          </div>
          <p className="mt-2 text-sm">{q.statement}</p>
        </div>
      ))}
      <footer className="mt-6 border-t border-[#f4e8c6]/10 pt-3 text-center text-[11px] tracking-widest opacity-60">
        FOCES · CEC — TRIPY 2.0
      </footer>
    </main>
  );
}
