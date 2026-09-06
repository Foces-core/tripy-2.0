"use client";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { QUESTIONS } from "~/data/questions";

export default function Home() {
  const remote = useQuery(api.event.get);
  const seed = useMutation(api.event.seed);
  const setLiveM = useMutation(api.event.setLive);
  const setDayM = useMutation(api.event.setDay);
  const addScoreM = useMutation(api.event.addScore);
  const resetM = useMutation(api.event.resetScores);

  const [role, setRole] = useState<"admin" | "volunteer" | null>(null);
  const [pw, setPw] = useState("");
  const [day, setDay] = useState(1);
  const [adminTab, setAdminTab] = useState<"controls" | "live">("controls");
  const seeded = useRef(false);

  useEffect(() => {
    if (remote === null && !seeded.current) { seeded.current = true; seed({}); }
  }, [remote, seed]);

  if (!remote) return <p className="py-20 text-center opacity-70">Loading Tripy…</p>;

  const openDays: Record<number, boolean> = {
    1: (remote.openDays as any).day1,
    2: (remote.openDays as any).day2,
    3: (remote.openDays as any).day3,
  };
  const { live, scores } = remote as any;
  const isAdmin = role === "admin";

  const login = async () => {
    const input = prompt("Password (volunteer or admin):");
    if (!input) return;
    const { ConvexClient } = await import("convex/browser");
    const c = new ConvexClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
    const r: any = await c.query(api.event.checkRole, { pw: input.trim() });
    if (r === "admin" || r === "volunteer") { setRole(r); setPw(input.trim()); }
    else alert("Wrong password.");
  };

  const toggleLive = async () => {
    if (!isAdmin) return alert("Admin only.");
    await setLiveM({ live: !live, pw });
  };
  const flipDay = async (d: number) => {
    await setDayM({ day: d, open: !(openDays as any)[d], pw });
  };
  const reset = async () => {
    if (prompt("Type RESET to wipe both scores to 0:") !== "RESET") return;
    await resetM({ pw });
  };
  const add = async (lab: "cc1" | "cc2", pts: number, q: string) => {
    if (!confirm(`Add ${pts} to ${lab.toUpperCase()} for ${q}?`)) return;
    await addScoreM({ lab, pts, question: q, by: pw.slice(0, 8), day, pw });
  };

  if (role) {
    return (
      <main className="mx-auto max-w-lg px-4 py-8">
        <h1 className="text-center text-3xl font-bold text-[#d8a84e]">Tripy 2.0 — {isAdmin ? "Admin" : "Volunteer"}</h1>
        <p className="mb-4 text-center text-sm opacity-70">Day {day} · live shared DB</p>
        <div className="mb-4 flex justify-center gap-2">
          {(["controls", "live"] as const).map((t) => (
            <button key={t} onClick={() => setAdminTab(t)} className={`rounded-full border border-[#d8a84e] px-4 py-1 text-sm ${adminTab === t ? "bg-[#d8a84e] text-[#330e17]" : "text-[#d8a84e]"}`}>{t === "live" ? "Live Scoreboard" : "Verify + Score"}</button>
          ))}
        </div>
        {adminTab === "live" ? (
          <div className="py-8 text-center"><p>CC1</p><p className="text-7xl font-bold text-[#d8a84e]">{scores.cc1}</p><p className="mt-4">CC2</p><p className="text-7xl font-bold text-[#d8a84e]">{scores.cc2}</p></div>
        ) : (
          <>
            <div className="mb-3 flex items-center justify-between rounded-lg bg-[#4a1420] p-3">
              <span className="text-sm">{live ? "running" : "paused"}</span>
              <button disabled={!isAdmin} onClick={toggleLive} className="rounded bg-[#d8a84e] px-4 py-1 font-bold text-[#330e17] disabled:opacity-40">{live ? "Stop Day (admin)" : "Start Day (admin)"}</button>
            </div>
            {!isAdmin && <p className="mb-2 text-center text-xs opacity-60">Verify code, tap CC1/CC2. Only admin starts/stops.</p>}
            <div className="mb-2 text-center">{[1, 2, 3].map((d) => (
              <button key={d} onClick={() => setDay(d)} className={`mx-1 rounded-md border px-3 py-1 text-sm ${day === d ? "bg-[#f4e8c6] text-[#330e17]" : ""}`}>Day {d}</button>))}</div>
            {isAdmin && (
              <div className="mb-3 flex gap-2">{[1, 2, 3].map((d) => (
                <button key={d} onClick={() => flipDay(d)} className={`rounded border border-[#d8a84e] px-3 py-1 text-sm ${(openDays as any)[d] ? "bg-[#d8a84e] text-[#330e17]" : "text-[#d8a84e]"}`}>{(openDays as any)[d] ? `Lock Day ${d}` : `Unlock Day ${d}`}</button>))}</div>
            )}
            <div className="mb-3 text-center text-sm opacity-70">CC1: {scores.cc1} · CC2: {scores.cc2} {isAdmin && (<button onClick={reset} className="ml-2 underline opacity-70">reset</button>)}</div>
            {QUESTIONS[day]!.map((q) => (
              <div key={q.label} className="mb-2 rounded-lg bg-[#4a1420] p-3">
                <p className="text-sm font-bold">{q.label} <span className="font-normal text-[#d8a84e]">({q.pts})</span></p>
                <p className="mt-1 text-xs opacity-80">{q.statement}</p>
                <p className="text-xs opacity-60">Expected: {q.expected}</p>
                <pre className="mt-1 overflow-x-auto rounded bg-black/40 p-2 text-xs">{q.solution}</pre>
                <div className="mt-2 flex gap-2">
                  {(["cc1", "cc2"] as const).map((lab) => (
                    <button key={lab} onClick={() => add(lab, q.pts, q.label)} className="rounded bg-[#d8a84e] px-4 py-1 text-sm font-bold text-[#330e17]">{lab.toUpperCase()} +{q.pts}</button>))}
                </div>
              </div>
            ))}
          </>
        )}
        <button onClick={() => setRole(null)} className="mx-auto mt-4 block text-sm opacity-60">Exit</button>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-lg px-4 py-8">
      <button onClick={login} className="fixed right-4 top-3 rounded-2xl border border-[#d8a84e] px-4 py-1 text-xs text-[#d8a84e] opacity-70">Volunteer</button>
      <header className="mb-5 text-center">
        <p className="text-[11px] font-bold tracking-[0.35em] text-[#d8a84e]">FOCES · CEC</p>
        <h1 className="mt-1 text-6xl font-black leading-none tracking-tight">Tripy <span className="text-[#d8a84e]">2.0</span></h1>
        <div className="mx-auto mt-3 h-px w-40 bg-[#d8a84e]/60" />
        <p className="mt-3 text-lg">3-Day Python Workshop</p>
        <p className="mt-1 text-sm font-bold tracking-wide text-[#d8a84e]">SEPT 7, 8, 9 · 4–5 PM</p>
        <div className="mt-2 flex items-center justify-center gap-2 text-xs opacity-80">
          <span className="rounded-full border border-[#f4e8c6]/30 px-3 py-0.5">CC1</span>
          <span className="text-[#d8a84e]">vs</span>
          <span className="rounded-full border border-[#f4e8c6]/30 px-3 py-0.5">CC2</span>
        </div>
        <a href="https://forms.gle/H5dx4uyGZBLAX3ECA" target="_blank" rel="noreferrer" className="hidden">Register</a>
      </header>
      <section className="card mb-4 overflow-hidden rounded-xl border border-[#d8a84e]/30 bg-[#4a1420]">
        <p className="pt-3 text-center text-[11px] font-bold tracking-[0.3em] text-[#d8a84e]">LIVE STANDINGS</p>
        <div className="flex items-stretch justify-around px-4 pb-4 pt-2 text-center">
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest opacity-70">CC1</p>
            <p className="text-5xl font-black text-[#f4e8c6]">{scores.cc1}</p>
          </div>
          <div className="flex flex-col items-center justify-center px-2">
            <span className="rounded-full bg-[#d8a84e] px-2.5 py-0.5 text-xs font-black text-[#330e17]">VS</span>
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest opacity-70">CC2</p>
            <p className="text-5xl font-black text-[#f4e8c6]">{scores.cc2}</p>
          </div>
        </div>
      </section>
      <section className="card mb-4 rounded-xl border border-[#d8a84e]/30 bg-[#4a1420] p-4 text-sm leading-relaxed">
        <p className="font-bold tracking-wide text-[#d8a84e]">HOW IT RUNS</p>
        <ol className="mt-1 list-decimal space-y-0.5 pl-5 opacity-90">
          <li>Read the question here.</li>
          <li>Write and run code on your laptop.</li>
          <li>Raise your hand. A volunteer verifies and scores CC1 / CC2.</li>
        </ol>
      </section>
      <div className="mb-4 text-center">{[1, 2, 3].map((d) => (
        <button key={d} disabled={!(openDays as any)[d]} onClick={() => setDay(d)} className={`mx-1 rounded-md border px-3 py-1 ${day === d ? "bg-[#f4e8c6] text-[#330e17]" : ""} disabled:opacity-30`}>Day {d}</button>))}</div>
      {!(openDays as any)[day] ? (
        <div className="card rounded-xl border border-[#d8a84e]/30 bg-[#4a1420] p-8 text-center">
          <p className="text-3xl">🔒</p>
          <p className="mt-2 font-bold">Day {day} is locked</p>
          <p className="mt-1 text-sm opacity-70">Time over or not started yet. Hang tight.</p>
        </div>
      ) : !live ? (
        <div className="card rounded-xl border border-[#d8a84e]/30 bg-[#4a1420] p-8 text-center">
          <p className="text-3xl">⏸</p>
          <p className="mt-2 font-bold">Paused</p>
          <p className="mt-1 text-sm opacity-70">Wait for the go-ahead from your mentor.</p>
        </div>
      ) : QUESTIONS[day]!.map((q) => (
          <div key={q.label} className="card mb-3 rounded-xl border border-[#d8a84e]/40 bg-[#4a1420] p-4">
            <div className="flex items-center justify-between"><span className="font-bold">{q.label}</span><span className="text-sm text-[#d8a84e]">{q.pts} pts · {q.tier}</span></div>
            <p className="mt-2 text-sm">{q.statement}</p>
            <p className="mt-1 text-xs opacity-60">Hint: {q.hint}</p>
          </div>))}
      <p className="mt-4 text-center text-xs opacity-60">CC1 {scores.cc1} · CC2 {scores.cc2}</p>
      <footer className="mt-6 border-t border-[#f4e8c6]/10 pt-3 text-center text-[11px] tracking-widest opacity-60">FOCES · CEC — TRIPY 2.0</footer>
    </main>
  );
}
