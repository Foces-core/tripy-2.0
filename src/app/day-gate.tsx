"use client";
import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { QUESTIONS } from "~/data/questions";
import { Providers } from "./providers";

type Day = 1 | 2 | 3;

function DayGateInner() {
  const remote = useQuery(api.event.get);
  const [day, setDay] = useState<Day>(1);

  if (!remote) {
    return (
      <>
        <div className="mb-4 text-center">
          {([1, 2, 3] as Day[]).map((d) => (
            <button
              key={d}
              disabled
              className="mx-1 rounded-md border px-3 py-1 text-sm disabled:opacity-30"
            >
              Day {d}
            </button>
          ))}
        </div>
        <p className="py-4 text-center text-sm opacity-60">Checking which days are open…</p>
      </>
    );
  }

  const openDays: Record<Day, boolean> = {
    1: remote.openDays.day1,
    2: remote.openDays.day2,
    3: remote.openDays.day3,
  };

  return (
    <>
      <div className="mb-4 text-center">
        {([1, 2, 3] as Day[]).map((d) => (
          <button
            key={d}
            disabled={!openDays[d]}
            onClick={() => setDay(d)}
            className={`mx-1 rounded-md border px-3 py-1 text-sm ${day === d ? "bg-[#f4e8c6] text-[#330e17]" : ""} disabled:opacity-30`}
          >
            Day {d}
          </button>
        ))}
      </div>
      {!openDays[day] ? (
        <div className="card rounded-xl border border-[#d8a84e]/30 bg-[#4a1420] p-8 text-center">
          <p className="text-3xl">🔒</p>
          <p className="mt-2 font-bold">Day {day} is locked</p>
          <p className="mt-1 text-sm opacity-70">It opens when the mentor starts it.</p>
        </div>
      ) : !remote.live ? (
        <div className="card rounded-xl border border-[#d8a84e]/30 bg-[#4a1420] p-8 text-center">
          <p className="text-3xl">⏸</p>
          <p className="mt-2 font-bold">Paused</p>
          <p className="mt-1 text-sm opacity-70">Wait for the go-ahead from your mentor.</p>
        </div>
      ) : (
        QUESTIONS[day]!.map((q) => (
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
        ))
      )}
    </>
  );
}

export default function DayGate() {
  return (
    <Providers>
      <DayGateInner />
    </Providers>
  );
}
