"use client";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import type { Question } from "~/data/question";
import LockSync, { type Day, type Locks } from "./lock-sync";
import QuestionCard from "./question-card";

export default function StudentShell({ day1 }: { day1: ReactNode }) {
  const [day, setDay] = useState<Day>(1);
  const [locks, setLocks] = useState<Locks>(null);
  const [day2Questions, setDay2Questions] = useState<Question[] | null>(null);
  const [day3Questions, setDay3Questions] = useState<Question[] | null>(null);
  const [loadingDay, setLoadingDay] = useState<boolean>(false);
  const dayRef = useRef<Day>(1);
  dayRef.current = day;

  useEffect(() => {
    if (day === 2 && !day2Questions) {
      setLoadingDay(true);
      import("~/data/day2")
        .then((m) => {
          setDay2Questions(m.DAY2);
          setLoadingDay(false);
        })
        .catch(() => setLoadingDay(false));
    } else if (day === 3 && !day3Questions) {
      setLoadingDay(true);
      import("~/data/day3")
        .then((m) => {
          setDay3Questions(m.DAY3);
          setLoadingDay(false);
        })
        .catch(() => setLoadingDay(false));
    }
  }, [day, day2Questions, day3Questions]);

  const onLocks = useCallback((l: Exclude<Locks, null>) => {
    setLocks(l);
    if (!l.open[dayRef.current]) {
      const first = ([1, 2, 3] as Day[]).find((d) => l.open[d]) ?? 1;
      setDay(first);
    }
  }, []);

  const isDayLocked = Boolean(locks && !locks.open[day]);
  const isPaused = Boolean(locks && !locks.live);

  return (
    <>
      <LockSync onLocks={onLocks} />
      <div className="mb-4 flex justify-center gap-2 text-center">
        {([1, 2, 3] as Day[]).map((d) => (
          <button
            key={d}
            disabled={Boolean(locks && !locks.open[d])}
            onClick={() => setDay(d)}
            className={`min-h-[44px] min-w-[64px] rounded-md border px-4 py-2 text-sm font-semibold transition-colors ${
              day === d ? "bg-[#f4e8c6] text-[#330e17]" : "text-[#f4e8c6]"
            } disabled:opacity-30`}
          >
            Day {d}
          </button>
        ))}
      </div>

      {!locks && (
        <p className="py-2 text-center text-xs opacity-60">Checking which days are open…</p>
      )}

      {isDayLocked ? (
        <div className="card rounded-xl border border-[#d8a84e]/30 bg-[#4a1420] p-8 text-center">
          <p className="text-3xl">🔒</p>
          <p className="mt-2 font-bold">Day {day} is locked</p>
          <p className="mt-1 text-sm opacity-70">It opens when the mentor starts it.</p>
        </div>
      ) : isPaused ? (
        <div className="card rounded-xl border border-[#d8a84e]/30 bg-[#4a1420] p-8 text-center">
          <p className="text-3xl">⏸</p>
          <p className="mt-2 font-bold">Paused</p>
          <p className="mt-1 text-sm opacity-70">Wait for the go-ahead from your mentor.</p>
        </div>
      ) : null}

      <div
        hidden={isDayLocked || isPaused || day !== 1}
        className={isDayLocked || isPaused || day !== 1 ? "hidden" : undefined}
      >
        {day1}
      </div>

      <div
        hidden={isDayLocked || isPaused || day !== 2}
        className={isDayLocked || isPaused || day !== 2 ? "hidden" : undefined}
      >
        {day === 2 && (loadingDay || !day2Questions) ? (
          <p className="py-6 text-center text-sm opacity-60">Loading Day 2 questions…</p>
        ) : (
          day2Questions?.map((q) => <QuestionCard key={q.label} q={q} />)
        )}
      </div>

      <div
        hidden={isDayLocked || isPaused || day !== 3}
        className={isDayLocked || isPaused || day !== 3 ? "hidden" : undefined}
      >
        {day === 3 && (loadingDay || !day3Questions) ? (
          <p className="py-6 text-center text-sm opacity-60">Loading Day 3 questions…</p>
        ) : (
          day3Questions?.map((q) => <QuestionCard key={q.label} q={q} />)
        )}
      </div>
    </>
  );
}
