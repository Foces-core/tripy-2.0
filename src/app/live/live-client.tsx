"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { QUESTIONS } from "~/data/questions";
import { ANSWERS } from "~/data/answers";
import SocialFooter from "../social-footer";

type Day = 1 | 2 | 3;
type Lab = "cc1" | "cc2";
type Scores = { cc1: number; cc2: number };

function LoggedOutView({
  scores,
  timedOut,
  actionError,
  pwInput,
  onPwInput,
  onLogin,
}: {
  scores: Scores | null;
  timedOut: boolean;
  actionError: string | null;
  pwInput: string;
  onPwInput: (v: string) => void;
  onLogin: (e: React.FormEvent) => void;
}) {
  return (
    <main className="mx-auto max-w-lg px-4 py-8">
      <Link
        href="/"
        prefetch={false}
        className="fixed top-3 left-4 rounded-2xl border border-[#d8a84e] px-4 py-1 text-xs text-[#d8a84e] opacity-70"
      >
        ← Questions
      </Link>
      <header className="mb-5 text-center">
        <p className="text-[11px] font-bold tracking-[0.35em] text-[#d8a84e]">FOCES · CEC</p>
        <h1 className="mt-1 text-4xl leading-none font-black tracking-tight">
          Tripy <span className="text-[#d8a84e]">2.0</span> Live
        </h1>
      </header>
      {actionError && (
        <p
          role="alert"
          className="mb-3 rounded-lg border border-red-400/60 bg-red-950/50 p-2 text-center text-sm"
        >
          {actionError}
        </p>
      )}
      <section className="card mb-4 overflow-hidden rounded-xl border border-[#d8a84e]/30 bg-[#4a1420]">
        <p className="pt-3 text-center text-[11px] font-bold tracking-[0.3em] text-[#d8a84e]">
          LIVE STANDINGS
        </p>
        {scores ? (
          <div className="flex items-stretch justify-around px-4 pt-2 pb-4 text-center">
            <div className="flex-1">
              <p className="text-base font-black tracking-widest opacity-90">CC1</p>
              <p className="text-5xl font-black text-[#f4e8c6]">{scores.cc1}</p>
            </div>
            <div className="flex flex-col items-center justify-center px-2">
              <span className="rounded-full bg-[#d8a84e] px-2.5 py-0.5 text-xs font-black text-[#330e17]">
                VS
              </span>
            </div>
            <div className="flex-1">
              <p className="text-base font-black tracking-widest opacity-90">CC2</p>
              <p className="text-5xl font-black text-[#f4e8c6]">{scores.cc2}</p>
            </div>
          </div>
        ) : (
          <p className="py-4 text-center text-sm opacity-60">Loading live scores…</p>
        )}
      </section>
      {timedOut && !scores && (
        <div className="card mb-4 rounded-xl border border-[#d8a84e]/30 bg-[#4a1420] p-4 text-center">
          <p className="font-bold">Cannot reach live server.</p>
          <p className="mx-auto mt-2 max-w-sm text-sm opacity-80">
            Check internet. If AdGuard or lab firewall blocks it, allow this site and{" "}
            <span className="font-mono text-xs">*.convex.cloud</span>, then reload.
          </p>
          <button
            onClick={() => location.reload()}
            className="btn-gold mt-4 rounded-lg bg-[#d8a84e] px-5 py-2 font-bold text-[#330e17]"
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
            className="rounded-lg bg-[#d8a84e] px-4 py-2 text-sm font-bold text-[#330e17]"
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
  const remote = useQuery(api.event.get);
  const seed = useMutation(api.event.seed);
  const setLiveM = useMutation(api.event.setLive);
  const setDayM = useMutation(api.event.setDay);
  const addScoreM = useMutation(api.event.addScore);
  const resetM = useMutation(api.event.resetScores);

  const [role, setRole] = useState<"admin" | "volunteer" | null>(null);
  const [pw, setPw] = useState("");
  const [pwInput, setPwInput] = useState("");
  const [day, setDay] = useState<Day>(1);
  const [adminTab, setAdminTab] = useState<"controls" | "live">("controls");
  const seeded = useRef(false);
  const [timedOut, setTimedOut] = useState(false);
  const [pending, setPending] = useState<{ lab: Lab; pts: 1 | 2 | 4; q: string } | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

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

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const input = pwInput.trim();
    if (!input) return;
    try {
      const { ConvexClient } = await import("convex/browser");
      const client = new ConvexClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
      const result = await client.query(api.event.checkRole, { pw: input });
      client.close();
      if (result === "admin" || result === "volunteer") {
        setRole(result);
        setPw(input);
        setPwInput("");
      } else {
        setActionError("Wrong password.");
      }
    } catch {
      setActionError("Could not verify access. Check your connection and try again.");
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
        actionError={actionError}
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
    } catch (error) {
      setActionError(error instanceof Error ? error.message : "Could not update event.");
    }
  };
  const flipDay = async (d: Day) => {
    try {
      await setDayM({ day: d, open: !openDays[d], pw });
    } catch (error) {
      setActionError(error instanceof Error ? error.message : "Could not update day.");
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
    } catch (error) {
      setActionError(error instanceof Error ? error.message : "Could not reset scores.");
    }
  };
  const add = (lab: Lab, pts: 1 | 2 | 4, q: string) => {
    setPending({ lab, pts, q });
  };
  const confirmAdd = async () => {
    if (!pending) return;
    try {
      await addScoreM({ lab: pending.lab, pts: pending.pts, question: pending.q, day, pw });
      setPending(null);
    } catch (error) {
      setActionError(error instanceof Error ? error.message : "Could not add score.");
      setPending(null);
    }
  };

  if (role) {
    return (
      <main className="mx-auto max-w-lg px-4 py-8">
        <Link
          href="/"
          prefetch={false}
          className="fixed top-3 left-4 rounded-2xl border border-[#d8a84e] px-4 py-1 text-xs text-[#d8a84e] opacity-70"
        >
          ← Questions
        </Link>
        <h1 className="text-center text-3xl font-bold text-[#d8a84e]">
          Tripy 2.0 — {isAdmin ? "Admin" : "Volunteer"}
        </h1>
        <p className="mb-4 text-center text-sm opacity-70">Day {day} · scores update live</p>
        {actionError && (
          <p
            role="alert"
            className="mb-3 rounded-lg border border-red-400/60 bg-red-950/50 p-2 text-center text-sm"
          >
            {actionError}
          </p>
        )}
        <div className="mb-4 flex justify-center gap-2">
          {(["controls", "live"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setAdminTab(t)}
              className={`rounded-full border border-[#d8a84e] px-4 py-1 text-sm ${adminTab === t ? "bg-[#d8a84e] text-[#330e17]" : "text-[#d8a84e]"}`}
            >
              {t === "live" ? "Live Scoreboard" : "Verify + Score"}
            </button>
          ))}
        </div>
        {adminTab === "live" ? (
          <div className="py-8 text-center">
            <p>CC1</p>
            <p className="text-7xl font-bold text-[#d8a84e]">{scores.cc1}</p>
            <p className="mt-4">CC2</p>
            <p className="text-7xl font-bold text-[#d8a84e]">{scores.cc2}</p>
          </div>
        ) : (
          <>
            <div className="mb-3 flex items-center justify-between rounded-lg bg-[#4a1420] p-3">
              <span className="text-sm">{live ? "running" : "paused"}</span>
              <button
                disabled={!isAdmin}
                onClick={toggleLive}
                className="rounded bg-[#d8a84e] px-4 py-1 font-bold text-[#330e17] disabled:opacity-40"
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
                  className={`mx-1 rounded-md border px-3 py-1 text-sm ${day === d ? "bg-[#f4e8c6] text-[#330e17]" : ""}`}
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
                    className={`rounded border border-[#d8a84e] px-3 py-1 text-sm ${openDays[d] ? "bg-[#d8a84e] text-[#330e17]" : "text-[#d8a84e]"}`}
                  >
                    {openDays[d] ? `Lock Day ${d}` : `Unlock Day ${d}`}
                  </button>
                ))}
              </div>
            )}
            <div className="mb-3 text-center text-sm opacity-70">
              CC1: {scores.cc1} · CC2: {scores.cc2}{" "}
              {isAdmin && (
                <button onClick={reset} className="ml-2 underline opacity-70">
                  {confirmReset ? "tap again to wipe scores" : "reset"}
                </button>
              )}
            </div>
            {QUESTIONS[day]!.map((q) => (
              <div key={q.label} className="mb-2 rounded-lg bg-[#4a1420] p-3">
                <p className="text-sm font-bold">
                  {q.label} <span className="font-normal text-[#d8a84e]">({q.pts})</span>
                </p>
                <p className="mt-1 text-xs opacity-80">{q.statement}</p>
                <p className="mt-1 text-xs text-[#d8a84e]">Hint: {ANSWERS[day]![q.label]!.hint}</p>
                <p className="text-xs opacity-60">Expected: {ANSWERS[day]![q.label]!.expected}</p>
                <pre className="mt-1 overflow-x-auto rounded bg-black/40 p-2 text-xs">
                  {ANSWERS[day]![q.label]!.solution}
                </pre>
                <div className="mt-2 flex gap-2">
                  {(["cc1", "cc2"] as const).map((lab) => (
                    <button
                      key={lab}
                      onClick={() => add(lab, q.pts, q.label)}
                      className="rounded bg-[#d8a84e] px-4 py-1 text-sm font-bold text-[#330e17]"
                    >
                      {lab.toUpperCase()} +{q.pts}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
        <button onClick={() => setRole(null)} className="mx-auto mt-4 block text-sm opacity-60">
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
                  className="flex-1 rounded-lg bg-red-600 px-4 py-2.5 font-black text-white"
                >
                  No
                </button>
                <button
                  onClick={confirmAdd}
                  className="flex-1 rounded-lg bg-green-600 px-4 py-2.5 font-black text-white"
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
      actionError={actionError}
      pwInput={pwInput}
      onPwInput={setPwInput}
      onLogin={login}
    />
  );
}
