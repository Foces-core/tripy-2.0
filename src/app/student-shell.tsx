"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Question } from "~/data/question";
import LockSync, { type Day, type Locks } from "./lock-sync";
import QuestionCard from "./question-card";

export type TierFilter = "all" | "easy" | "medium" | "hard";
export type SortOrder = "asc" | "desc";

export default function StudentShell({ day1Questions }: { day1Questions: Question[] }) {
  const [day, setDay] = useState<Day>(1);
  const [locks, setLocks] = useState<Locks>(null);
  const [day2Questions, setDay2Questions] = useState<Question[] | null>(null);
  const [day3Questions, setDay3Questions] = useState<Question[] | null>(null);
  const [loadingDay, setLoadingDay] = useState<boolean>(false);
  const [tier, setTier] = useState<TierFilter>("all");
  const [order, setOrder] = useState<SortOrder>("asc");
  const [doneLabels, setDoneLabels] = useState<Record<string, boolean>>({});
  const [showDone, setShowDone] = useState<boolean>(false);
  const dayRef = useRef<Day>(1);
  dayRef.current = day;

  useEffect(() => {
    try {
      const saved = localStorage.getItem("tripy_done_questions");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const map: Record<string, boolean> = {};
          for (const l of parsed) {
            if (typeof l === "string") map[l] = true;
          }
          setDoneLabels(map);
        }
      }
    } catch {}
  }, []);

  const toggleDone = useCallback((label: string) => {
    setDoneLabels((prev) => {
      const next = { ...prev };
      if (next[label]) {
        delete next[label];
      } else {
        next[label] = true;
      }
      try {
        localStorage.setItem("tripy_done_questions", JSON.stringify(Object.keys(next)));
      } catch {}
      return next;
    });
  }, []);

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

  const currentDayQuestions = useMemo(() => {
    return day === 1 ? day1Questions : day === 2 ? (day2Questions ?? []) : (day3Questions ?? []);
  }, [day, day1Questions, day2Questions, day3Questions]);

  const doneCount = useMemo(() => {
    return currentDayQuestions.filter((q) => doneLabels[q.label]).length;
  }, [currentDayQuestions, doneLabels]);

  const applyFilterAndSort = useCallback(
    (questions: Question[]) => {
      let list = questions;
      if (!showDone) {
        list = list.filter((q) => !doneLabels[q.label]);
      }
      if (tier !== "all") {
        list = list.filter((q) => q.tier === tier);
      }
      if (order === "desc") {
        if (tier === "all") {
          const hard = list.filter((q) => q.tier === "hard");
          const medium = list.filter((q) => q.tier === "medium");
          const easy = list.filter((q) => q.tier === "easy");
          return [...hard, ...medium, ...easy];
        }
        return [...list].reverse();
      }
      return list;
    },
    [tier, order, showDone, doneLabels],
  );

  const visibleDay1 = useMemo(
    () => applyFilterAndSort(day1Questions),
    [applyFilterAndSort, day1Questions],
  );
  const visibleDay2 = useMemo(
    () => (day2Questions ? applyFilterAndSort(day2Questions) : null),
    [applyFilterAndSort, day2Questions],
  );
  const visibleDay3 = useMemo(
    () => (day3Questions ? applyFilterAndSort(day3Questions) : null),
    [applyFilterAndSort, day3Questions],
  );

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
      ) : (
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2 sm:justify-between">
          <div className="flex flex-nowrap items-center gap-1 sm:gap-1.5">
            {(["all", "easy", "medium", "hard"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTier(t)}
                className={`min-h-[36px] rounded-full border border-[#d8a84e] px-3 py-1 text-xs font-bold whitespace-nowrap capitalize transition-colors sm:px-3.5 sm:text-sm ${
                  tier === t ? "bg-[#d8a84e] text-[#330e17]" : "text-[#d8a84e]"
                }`}
              >
                {t === "all" ? "All" : t === "easy" ? "Easy" : t === "medium" ? "Med" : "Hard"}
              </button>
            ))}
          </div>
          <div className="flex flex-nowrap items-center gap-1.5 sm:gap-2">
            {doneCount > 0 && (
              <button
                type="button"
                onClick={() => setShowDone((prev) => !prev)}
                className={`flex min-h-[36px] items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-semibold whitespace-nowrap transition-colors sm:px-3 ${
                  showDone
                    ? "border-[#d8a84e] bg-[#d8a84e]/20 text-[#f4e8c6]"
                    : "border-[#d8a84e]/40 bg-black/20 text-[#f4e8c6] hover:border-[#d8a84e]"
                }`}
                title={showDone ? "Hide completed questions" : "Show hidden completed questions"}
              >
                <span>{showDone ? "Showing done" : "Done hidden"}</span>
                <span className="rounded-full bg-[#d8a84e] px-1.5 py-0.5 text-[10px] font-black text-[#330e17]">
                  {doneCount}
                </span>
              </button>
            )}
            {tier === "all" && (
              <button
                type="button"
                onClick={() => setOrder((prev) => (prev === "asc" ? "desc" : "asc"))}
                aria-label="Toggle difficulty sort order"
                className="flex min-h-[36px] items-center gap-1 rounded-lg border border-[#d8a84e]/40 bg-black/20 px-2.5 py-1 text-xs font-semibold whitespace-nowrap text-[#f4e8c6] hover:border-[#d8a84e] sm:px-3"
              >
                <span className="opacity-70">Sort:</span>
                <span className="text-[#d8a84e]">
                  {order === "asc" ? "Easy to Hard" : "Hard to Easy"}
                </span>
              </button>
            )}
          </div>
        </div>
      )}

      <div
        hidden={isDayLocked || isPaused || day !== 1}
        className={isDayLocked || isPaused || day !== 1 ? "hidden" : undefined}
      >
        {visibleDay1.length === 0 ? (
          <p className="py-6 text-center text-sm opacity-70">
            {doneCount > 0 && !showDone
              ? `All matching questions are marked done! Tap "Done hidden (${doneCount})" above to review.`
              : "No questions match this filter."}
          </p>
        ) : (
          visibleDay1.map((q) => (
            <QuestionCard
              key={q.label}
              q={q}
              isDone={Boolean(doneLabels[q.label])}
              onToggleDone={toggleDone}
            />
          ))
        )}
      </div>

      <div
        hidden={isDayLocked || isPaused || day !== 2}
        className={isDayLocked || isPaused || day !== 2 ? "hidden" : undefined}
      >
        {day === 2 && (loadingDay || !visibleDay2) ? (
          <p className="py-6 text-center text-sm opacity-60">Loading Day 2 questions…</p>
        ) : visibleDay2?.length === 0 ? (
          <p className="py-6 text-center text-sm opacity-70">
            {doneCount > 0 && !showDone
              ? `All matching questions are marked done! Tap "Done hidden (${doneCount})" above to review.`
              : "No questions match this filter."}
          </p>
        ) : (
          visibleDay2?.map((q) => (
            <QuestionCard
              key={q.label}
              q={q}
              isDone={Boolean(doneLabels[q.label])}
              onToggleDone={toggleDone}
            />
          ))
        )}
      </div>

      <div
        hidden={isDayLocked || isPaused || day !== 3}
        className={isDayLocked || isPaused || day !== 3 ? "hidden" : undefined}
      >
        {day === 3 && (loadingDay || !visibleDay3) ? (
          <p className="py-6 text-center text-sm opacity-60">Loading Day 3 questions…</p>
        ) : visibleDay3?.length === 0 ? (
          <p className="py-6 text-center text-sm opacity-70">
            {doneCount > 0 && !showDone
              ? `All matching questions are marked done! Tap "Done hidden (${doneCount})" above to review.`
              : "No questions match this filter."}
          </p>
        ) : (
          visibleDay3?.map((q) => (
            <QuestionCard
              key={q.label}
              q={q}
              isDone={Boolean(doneLabels[q.label])}
              onToggleDone={toggleDone}
            />
          ))
        )}
      </div>
    </>
  );
}
