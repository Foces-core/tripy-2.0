"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useConvex, useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { QUESTIONS } from "~/data/questions";
import { ANSWERS } from "~/data/answers";
import SocialFooter from "../social-footer";
import ScoreNumber from "../score-number";
import { ToastStack, type Toast } from "../toasts";

type Day = 1 | 2 | 3;
type Lab = "cc1" | "cc2";
type Scores = { cc1: number; cc2: number };

function LiveDashboardScoreboard({
  scores,
  size = "normal",
  isAdmin = false,
  deductArm = null,
  onDeduct,
}: {
  scores: Scores | null;
  size?: "normal" | "large";
  isAdmin?: boolean;
  deductArm?: string | null;
  onDeduct?: (lab: Lab, pts: 1 | 2 | 4) => void;
}) {
  if (!scores) {
    return (
      <section className="card mb-4 overflow-hidden rounded-2xl border border-[#d8a84e]/30 bg-gradient-to-b from-[#4a1420] to-[#2c0a13] p-6 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#d8a84e]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d8a84e] opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#d8a84e]"></span>
          </span>
          <span className="tracking-[0.25em]">LIVE STANDINGS</span>
        </div>
        <p className="mt-3 text-sm opacity-60">Connecting to live scores…</p>
      </section>
    );
  }

  const total = scores.cc1 + scores.cc2;
  const cc1Pct =
    total === 0 ? 50 : Math.max(5, Math.min(95, Math.round((scores.cc1 / total) * 100)));
  const cc2Pct = 100 - cc1Pct;
  const diff = Math.abs(scores.cc1 - scores.cc2);
  const leader: "cc1" | "cc2" | "tie" =
    scores.cc1 > scores.cc2 ? "cc1" : scores.cc2 > scores.cc1 ? "cc2" : "tie";

  return (
    <section
      className={`card mb-5 overflow-hidden rounded-2xl border border-[#d8a84e]/40 bg-gradient-to-b from-[#4a1420] via-[#380d18] to-[#240810] shadow-2xl ${
        size === "large" ? "p-5 sm:p-7" : "p-4"
      }`}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-[#d8a84e]/20 pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-black tracking-[0.25em] text-[#d8a84e]">
            LIVE STANDINGS
          </span>
        </div>
        <div>
          {leader === "tie" ? (
            <span className="shimmer-gold rounded-full border border-[#d8a84e]/50 px-3 py-0.5 text-[11px] font-bold text-[#f4e8c6]">
              ⚡ TIED MATCH
            </span>
          ) : (
            <span className="shimmer-gold rounded-full border border-[#d8a84e]/60 px-3 py-0.5 text-[11px] font-bold text-[#f4e8c6]">
              👑 {leader.toUpperCase()} +{diff} PTS
            </span>
          )}
        </div>
      </div>

      {/* Arenas: CC1 vs CC2 */}
      <div
        className={`my-3.5 grid grid-cols-2 items-center gap-3 sm:gap-5 ${
          size === "large" ? "py-2" : ""
        }`}
      >
        {/* CC1 Card */}
        <div
          className={`relative overflow-hidden rounded-xl border p-3 text-center transition-all duration-500 ${
            leader === "cc1"
              ? "border-[#d8a84e] bg-gradient-to-b from-[#d8a84e]/20 via-[#4a1420]/80 to-[#20060d] shadow-[0_0_24px_rgba(216,168,78,0.25)]"
              : "border-[#d8a84e]/25 bg-black/30"
          }`}
        >
          <div className="pointer-events-none absolute -top-8 -left-8 h-20 w-20 rounded-full bg-[#d8a84e]/15 blur-xl" />
          <div className="flex items-center justify-center gap-1.5">
            <span className="text-base font-black tracking-widest text-[#f4e8c6] sm:text-lg">
              CC1
            </span>
            {leader === "cc1" && <span className="float-gentle text-sm">👑</span>}
          </div>
          <div
            className={`mt-1 leading-none font-black ${
              size === "large" ? "text-6xl sm:text-8xl" : "text-5xl sm:text-6xl"
            }`}
          >
            <ScoreNumber
              value={scores.cc1}
              className="bg-gradient-to-b from-white via-[#f4e8c6] to-[#d8a84e] bg-clip-text font-black tracking-tight text-transparent"
            />
          </div>
          {isAdmin && onDeduct && (
            <div className="mt-3 flex justify-center gap-1 sm:gap-1.5">
              {([1, 2, 4] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => onDeduct("cc1", p)}
                  className={`min-h-[28px] rounded border px-2 py-0.5 text-xs font-bold transition-colors ${
                    deductArm === `cc1:${p}`
                      ? "border-red-400 bg-red-600 text-white"
                      : "border-red-400/40 text-red-300 hover:border-red-400 hover:bg-red-950/40"
                  }`}
                >
                  {deductArm === `cc1:${p}` ? "confirm?" : `−${p}`}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* CC2 Card */}
        <div
          className={`relative overflow-hidden rounded-xl border p-3 text-center transition-all duration-500 ${
            leader === "cc2"
              ? "border-orange-400 bg-gradient-to-b from-orange-500/20 via-[#4a1420]/80 to-[#20060d] shadow-[0_0_24px_rgba(249,115,22,0.25)]"
              : "border-[#d8a84e]/25 bg-black/30"
          }`}
        >
          <div className="pointer-events-none absolute -top-8 -right-8 h-20 w-20 rounded-full bg-orange-500/15 blur-xl" />
          <div className="flex items-center justify-center gap-1.5">
            <span className="text-base font-black tracking-widest text-[#f4e8c6] sm:text-lg">
              CC2
            </span>
            {leader === "cc2" && <span className="float-gentle text-sm">👑</span>}
          </div>
          <div
            className={`mt-1 leading-none font-black ${
              size === "large" ? "text-6xl sm:text-8xl" : "text-5xl sm:text-6xl"
            }`}
          >
            <ScoreNumber
              value={scores.cc2}
              className="bg-gradient-to-b from-white via-[#fed7aa] to-[#fb923c] bg-clip-text font-black tracking-tight text-transparent"
            />
          </div>
          {isAdmin && onDeduct && (
            <div className="mt-3 flex justify-center gap-1 sm:gap-1.5">
              {([1, 2, 4] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => onDeduct("cc2", p)}
                  className={`min-h-[28px] rounded border px-2 py-0.5 text-xs font-bold transition-colors ${
                    deductArm === `cc2:${p}`
                      ? "border-red-400 bg-red-600 text-white"
                      : "border-red-400/40 text-red-300 hover:border-red-400 hover:bg-red-950/40"
                  }`}
                >
                  {deductArm === `cc2:${p}` ? "confirm?" : `−${p}`}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Animated Balance Tug-of-war Bar */}
      <div className="mt-2.5">
        <div className="relative flex h-3 w-full overflow-hidden rounded-full border border-[#d8a84e]/30 bg-black/60 p-0.5 shadow-inner">
          <div
            style={{ width: `${cc1Pct}%` }}
            className="h-full rounded-l-full bg-gradient-to-r from-[#d8a84e] to-[#f4e8c6] shadow-[0_0_12px_rgba(216,168,78,0.7)] transition-all duration-700 ease-out"
          />
          <div
            style={{ width: `${cc2Pct}%` }}
            className="h-full rounded-r-full bg-gradient-to-r from-[#ea580c] to-[#fb923c] shadow-[0_0_12px_rgba(251,146,60,0.7)] transition-all duration-700 ease-out"
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-[11px] font-bold text-[#f4e8c6]/80">
          <span className="text-[#d8a84e]">{cc1Pct}% (CC1)</span>
          <span className="text-[10px] tracking-wider opacity-60">{total} PTS SCORED</span>
          <span className="text-[#fb923c]">{cc2Pct}% (CC2)</span>
        </div>
      </div>
    </section>
  );
}

function LoggedOutView({
  scores,
  timedOut,
  toasts,
  pwInput,
  onPwInput,
  onLogin,
}: {
  scores: Scores | null;
  timedOut: boolean;
  toasts: Toast[];
  pwInput: string;
  onPwInput: (v: string) => void;
  onLogin: (e: React.FormEvent) => void;
}) {
  return (
    <main className="mx-auto max-w-lg px-4 py-6 sm:py-8">
      <div className="mb-4 flex items-center justify-between">
        <Link
          href="/"
          prefetch={false}
          className="flex items-center gap-1.5 rounded-full border border-[#d8a84e]/50 bg-black/30 px-3.5 py-1 text-xs font-semibold text-[#d8a84e] shadow-sm transition-all hover:border-[#d8a84e] hover:bg-[#d8a84e]/15 active:scale-95"
        >
          <span>←</span>
          <span>Questions</span>
        </Link>
        <span className="text-[11px] font-bold tracking-[0.35em] text-[#d8a84e]">FOCES · CEC</span>
      </div>
      <header className="mb-5 text-center">
        <h1 className="mt-1 text-3xl leading-none font-black tracking-tight sm:text-4xl">
          Tripy <span className="text-[#d8a84e]">2.0</span> Volunteer
        </h1>
      </header>
      <ToastStack toasts={toasts} />
      <LiveDashboardScoreboard scores={scores} size="normal" />
      {timedOut && !scores && (
        <div className="card mb-4 rounded-xl border border-[#d8a84e]/30 bg-[#4a1420] p-4 text-center">
          <p className="font-bold">Cannot reach live server.</p>
          <p className="mx-auto mt-2 max-w-sm text-sm opacity-80">
            Check internet. If AdGuard or lab firewall blocks it, allow this site and{" "}
            <span className="font-mono text-xs">*.convex.cloud</span>, then reload.
          </p>
          <button
            onClick={() => location.reload()}
            className="btn-gold mt-4 min-h-[44px] rounded-lg bg-[#d8a84e] px-5 py-2 font-bold text-[#330e17]"
          >
            Retry
          </button>
        </div>
      )}
      <form
        onSubmit={onLogin}
        className="card rounded-xl border border-[#d8a84e]/30 bg-[#4a1420] p-4"
      >
        <label htmlFor="live-password" className="text-sm font-bold text-[#d8a84e]">
          Volunteer / Admin login
        </label>
        <div className="mt-2 flex gap-2">
          <input
            id="live-password"
            type="password"
            value={pwInput}
            onChange={(e) => onPwInput(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            className="min-w-0 flex-1 rounded-lg border border-[#d8a84e]/40 bg-black/40 px-3 py-2 text-sm text-[#f4e8c6] placeholder:opacity-40"
          />
          <button
            type="submit"
            className="min-h-[44px] rounded-lg bg-[#d8a84e] px-4 py-2 text-sm font-bold text-[#330e17]"
          >
            Enter
          </button>
        </div>
      </form>
      <SocialFooter />
    </main>
  );
}

export default function Home() {
  const convex = useConvex();
  const remote = useQuery(api.event.get);
  const seed = useMutation(api.event.seed);
  const setLiveM = useMutation(api.event.setLive);
  const setDayM = useMutation(api.event.setDay);
  const addScoreM = useMutation(api.event.addScore);
  const resetM = useMutation(api.event.resetScores);
  const deductM = useMutation(api.event.deductScore);

  const [role, setRole] = useState<"admin" | "volunteer" | null>(null);
  const [pw, setPw] = useState("");
  const [pwInput, setPwInput] = useState("");
  const [day, setDay] = useState<Day>(1);
  const [adminTab, setAdminTab] = useState<"controls" | "live">("controls");
  const seeded = useRef(false);
  const [timedOut, setTimedOut] = useState(false);
  const [pending, setPending] = useState<{ lab: Lab; pts: 1 | 2 | 4; q: string } | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toastId = useRef(0);
  const pushToast = (msg: string, kind: Toast["kind"] = "ok") => {
    const id = ++toastId.current;
    setToasts((t) => [...t, { id, msg, kind }]);
    setTimeout(
      () => {
        setToasts((t) => t.filter((x) => x.id !== id));
      },
      kind === "err" ? 6000 : 3500,
    );
  };
  const [search, setSearch] = useState("");
  const [tier, setTier] = useState<"all" | "easy" | "medium" | "hard">("all");
  const [confirmReset, setConfirmReset] = useState(false);
  const [deductArm, setDeductArm] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setTimedOut(true), 12000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (remote === null && !seeded.current) {
      seeded.current = true;
      void seed({}).catch(() => undefined);
    }
  }, [remote, seed]);

  useEffect(() => {
    if (!remote) return;
    const od: Record<Day, boolean> = {
      1: remote.openDays.day1,
      2: remote.openDays.day2,
      3: remote.openDays.day3,
    };
    if (!od[day]) setDay(([1, 2, 3] as Day[]).find((d) => od[d]) ?? 1);
  }, [remote, day]);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const input = pwInput.trim();
    if (!input) return;
    try {
      const result = await convex.query(api.event.checkRole, { pw: input });
      if (result === "admin" || result === "volunteer") {
        setRole(result);
        setPw(input);
        setPwInput("");
      } else {
        pushToast("Wrong password.", "err");
      }
    } catch {
      pushToast("Could not verify access. Check your connection and try again.", "err");
    }
  };

  if (!remote) {
    if (role)
      return (
        <main className="mx-auto max-w-lg px-4 py-20 text-center">
          <p className="mt-4 opacity-70">Reconnecting…</p>
        </main>
      );
    return (
      <LoggedOutView
        scores={null}
        timedOut={timedOut}
        toasts={toasts}
        pwInput={pwInput}
        onPwInput={setPwInput}
        onLogin={login}
      />
    );
  }

  const openDays: Record<Day, boolean> = {
    1: remote.openDays.day1,
    2: remote.openDays.day2,
    3: remote.openDays.day3,
  };
  const { live, scores } = remote;
  const isAdmin = role === "admin";

  const toggleLive = async () => {
    if (!isAdmin) return;
    try {
      await setLiveM({ live: !live, pw });
      pushToast(!live ? "Day running." : "Day paused.");
    } catch (error) {
      pushToast(error instanceof Error ? error.message : "Could not update event.", "err");
    }
  };
  const flipDay = async (d: Day) => {
    try {
      await setDayM({ day: d, open: !openDays[d], pw });
      pushToast(`Day ${d} ${!openDays[d] ? "open" : "locked"}.`);
    } catch (error) {
      pushToast(error instanceof Error ? error.message : "Could not update day.", "err");
    }
  };
  const reset = async () => {
    if (!confirmReset) {
      setConfirmReset(true);
      return;
    }
    setConfirmReset(false);
    try {
      await resetM({ pw });
      pushToast("Scores wiped to 0.");
    } catch (error) {
      pushToast(error instanceof Error ? error.message : "Could not reset scores.", "err");
    }
  };
  const deduct = async (lab: Lab, pts: 1 | 2 | 4) => {
    const key = `${lab}:${pts}`;
    if (deductArm !== key) {
      setDeductArm(key);
      return;
    }
    setDeductArm(null);
    try {
      await deductM({ lab, pts, day, pw });
      pushToast(`−${pts} ${lab.toUpperCase()} (correction).`);
    } catch (error) {
      pushToast(error instanceof Error ? error.message : "Could not deduct points.", "err");
    }
  };
  const visibleQuestions = (QUESTIONS[day] ?? []).filter(
    (q) =>
      (tier === "all" || q.tier === tier) &&
      (search.trim() === "" ||
        `${q.label} ${q.statement}`.toLowerCase().includes(search.trim().toLowerCase())),
  );
  const add = (lab: Lab, pts: 1 | 2 | 4, q: string) => {
    setPending({ lab, pts, q });
  };
  const confirmAdd = async () => {
    if (!pending) return;
    try {
      await addScoreM({ lab: pending.lab, pts: pending.pts, question: pending.q, day, pw });
      pushToast(`+${pending.pts} to ${pending.lab.toUpperCase()}.`);
      setPending(null);
    } catch (error) {
      pushToast(error instanceof Error ? error.message : "Could not add score.", "err");
      setPending(null);
    }
  };

  if (role) {
    return (
      <main className="mx-auto max-w-lg px-4 py-6 sm:py-8">
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/"
            prefetch={false}
            className="flex items-center gap-1.5 rounded-full border border-[#d8a84e]/50 bg-black/30 px-3.5 py-1 text-xs font-semibold text-[#d8a84e] shadow-sm transition-all hover:border-[#d8a84e] hover:bg-[#d8a84e]/15 active:scale-95"
          >
            <span>←</span>
            <span>Questions</span>
          </Link>
          <span className="text-[11px] font-bold tracking-[0.35em] text-[#d8a84e]">
            FOCES · CEC
          </span>
        </div>
        <h1 className="text-center text-2xl font-bold text-[#d8a84e] sm:text-3xl">
          Tripy 2.0 — {isAdmin ? "Admin" : "Volunteer"}
        </h1>
        <p className="mb-4 text-center text-sm opacity-70">Day {day} · scores update live</p>
        <ToastStack toasts={toasts} />
        <div className="mb-4 flex justify-center gap-2">
          {(["controls", "live"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setAdminTab(t)}
              className={`min-h-[44px] rounded-full border border-[#d8a84e] px-4 py-1 text-sm ${adminTab === t ? "bg-[#d8a84e] text-[#330e17]" : "text-[#d8a84e]"}`}
            >
              {t === "live" ? "Live Scoreboard" : "Verify + Score"}
            </button>
          ))}
        </div>
        {adminTab === "live" ? (
          <div className="py-2">
            <LiveDashboardScoreboard
              scores={scores}
              size="large"
              isAdmin={isAdmin}
              deductArm={deductArm}
              onDeduct={deduct}
            />
            {isAdmin && (
              <p className="mt-3 text-center text-xs opacity-60">
                Minus buttons undo volunteer mistakes (tap twice to confirm).
              </p>
            )}
          </div>
        ) : (
          <>
            <div className="mb-3 flex items-center justify-between rounded-lg bg-[#4a1420] p-3">
              <span className="text-sm">{live ? "running" : "paused"}</span>
              <button
                disabled={!isAdmin}
                onClick={toggleLive}
                className="min-h-[44px] rounded bg-[#d8a84e] px-4 py-1 font-bold text-[#330e17] disabled:opacity-40"
              >
                {live ? "Stop Day (admin)" : "Start Day (admin)"}
              </button>
            </div>
            {!isAdmin && (
              <p className="mb-2 text-center text-xs opacity-60">
                Verify code, tap CC1/CC2. Only admin starts/stops.
              </p>
            )}
            <div className="mb-2 text-center">
              {([1, 2, 3] as Day[]).map((d) => (
                <button
                  key={d}
                  onClick={() => setDay(d)}
                  className={`mx-1 min-h-[44px] min-w-[64px] rounded-md border px-3 py-1 text-sm ${day === d ? "bg-[#f4e8c6] text-[#330e17]" : ""}`}
                >
                  Day {d}
                </button>
              ))}
            </div>
            {isAdmin && (
              <div className="mb-3 flex gap-2">
                {([1, 2, 3] as Day[]).map((d) => (
                  <button
                    key={d}
                    onClick={() => flipDay(d)}
                    className={`min-h-[44px] rounded border border-[#d8a84e] px-3 py-1 text-sm ${openDays[d] ? "bg-[#d8a84e] text-[#330e17]" : "text-[#d8a84e]"}`}
                  >
                    {openDays[d] ? `Lock Day ${d}` : `Unlock Day ${d}`}
                  </button>
                ))}
              </div>
            )}
            <div className="mb-3 flex gap-2">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions…"
                aria-label="Search questions"
                className="min-w-0 flex-1 rounded-lg border border-[#d8a84e]/40 bg-black/40 px-3 py-2 text-sm text-[#f4e8c6] placeholder:opacity-40"
              />
            </div>
            <div className="mb-3 flex justify-center gap-2">
              {(["all", "easy", "medium", "hard"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTier(t)}
                  className={`rounded-full border border-[#d8a84e] px-4 py-2 text-sm capitalize ${tier === t ? "bg-[#d8a84e] text-[#330e17]" : "text-[#d8a84e]"}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="mb-3 text-center text-sm opacity-70">
              CC1: {scores.cc1} · CC2: {scores.cc2}{" "}
              {isAdmin && (
                <button onClick={reset} className="ml-2 underline opacity-70">
                  {confirmReset ? "tap again to wipe scores" : "reset"}
                </button>
              )}
            </div>
            {visibleQuestions.length === 0 && (
              <p className="py-6 text-center text-sm opacity-60">No questions match this filter.</p>
            )}
            {visibleQuestions.map((q) => (
              <div key={q.label} className="card card-question mb-2 rounded-lg bg-[#4a1420] p-3">
                <p className="text-base font-bold">
                  {q.label} <span className="font-normal text-[#d8a84e]">({q.pts})</span>
                </p>
                <p className="mt-1 text-sm opacity-90">{q.statement}</p>
                <p className="mt-1 text-sm text-[#d8a84e]">
                  Output: {ANSWERS[day]![q.label]!.expected}
                </p>
                <details className="mt-1 text-xs opacity-80">
                  <summary className="cursor-pointer text-[#d8a84e]">Hint + solution</summary>
                  <p className="mt-1">Hint: {ANSWERS[day]![q.label]!.hint}</p>
                  <pre className="mt-1 overflow-x-auto rounded bg-black/40 p-2 text-xs">
                    {ANSWERS[day]![q.label]!.solution}
                  </pre>
                </details>
                <div className="mt-3 flex gap-3">
                  {(["cc1", "cc2"] as const).map((lab) => (
                    <button
                      key={lab}
                      onClick={() => add(lab, q.pts, q.label)}
                      className="min-h-[44px] flex-1 rounded-xl bg-[#d8a84e] px-4 py-2.5 text-base font-black text-[#330e17]"
                    >
                      {lab.toUpperCase()} +{q.pts}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
        <button
          onClick={() => setRole(null)}
          className="mx-auto mt-4 block min-h-[44px] px-4 text-sm opacity-60"
        >
          Exit
        </button>
        {pending && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-score-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          >
            <div className="card w-full max-w-xs rounded-2xl border border-[#d8a84e]/40 bg-[#4a1420] p-6 text-center">
              <p id="confirm-score-title" className="text-lg font-black">
                Confirm score?
              </p>
              <p className="mt-2 text-sm opacity-90">
                Add <span className="font-black text-[#d8a84e]">{pending.pts} pts</span> to{" "}
                <span className="font-black">{pending.lab.toUpperCase()}</span>
              </p>
              <p className="mt-1 text-xs opacity-60">
                {pending.q} · Day {day}
              </p>
              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => setPending(null)}
                  className="min-h-[44px] flex-1 rounded-lg bg-red-600 px-4 py-2.5 font-black text-white"
                >
                  No
                </button>
                <button
                  onClick={confirmAdd}
                  className="min-h-[44px] flex-1 rounded-lg bg-green-600 px-4 py-2.5 font-black text-white"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    );
  }

  return (
    <LoggedOutView
      scores={scores}
      timedOut={timedOut}
      toasts={toasts}
      pwInput={pwInput}
      onPwInput={setPwInput}
      onLogin={login}
    />
  );
}
