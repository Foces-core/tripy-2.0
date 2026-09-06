"use client";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { QUESTIONS } from "~/data/questions";

export const dynamic = "force-dynamic";

export default function Home() {
  const remote = useQuery(api.event.get);
  const seed = useMutation(api.event.seed);
  const setLiveM = useMutation(api.event.setLive);
  const setDayM = useMutation(api.event.setDay);
  const addScoreM = useMutation(api.event.addScore);
  const getRole = useQuery(api.event.checkRole, { pw: "__none__" });

  const [role, setRole] = useState<"admin" | "volunteer" | null>(null);
  const [pw, setPw] = useState("");
  const [day, setDay] = useState(1);
  const [adminTab, setAdminTab] = useState<"controls" | "live">("controls");
  void getRole;

  useEffect(() => { seed({}); }, [seed]);

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
    if (d !== day) setDay(d);
    if (!isAdmin) return;
    await setDayM({ day: d, open: !(openDays as any)[d], pw });
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
            <div className="mb-3 flex gap-2">{[1, 2, 3].map((d) => (
              <button key={d} onClick={() => flipDay(d)} className={`rounded border border-[#d8a84e] px-3 py-1 text-sm ${(openDays as any)[d] ? "bg-[#d8a84e] text-[#330e17]" : "text-[#d8a84e]"}`}>{isAdmin ? ((openDays as any)[d] ? `Lock ${d}` : `Unlock ${d}`) : `Day ${d}`}</button>))}</div>
            <div className="mb-3 text-center text-sm opacity-70">CC1: {scores.cc1} · CC2: {scores.cc2}</div>
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
        <p className="text-xs tracking-widest text-[#d8a84e]">FOCES CEC</p>
        <h1 className="text-5xl font-black">Tripy <span className="text-[#d8a84e]">2.0</span></h1>
        <p>3-Day Python Workshop</p>
        <p className="font-bold text-[#d8a84e]">SEPT 7, 8, 9 · 4-5 PM · CC1 and CC2</p>
        <a href="https://forms.gle/H5dx4uyGZBLAX3ECA" target="_blank" className="mt-2 inline-block rounded-lg bg-[#d8a84e] px-5 py-2 font-bold text-[#330e17]">Register</a>
      </header>
      <section className="mb-4 rounded-lg bg-[#4a1420] p-3 text-sm"><p className="font-bold text-[#d8a84e]">How it works</p><p>Read here. Code on laptop. Raise hand. Volunteer verifies.</p></section>
      <div className="mb-4 text-center">{[1, 2, 3].map((d) => (
        <button key={d} disabled={!(openDays as any)[d]} onClick={() => setDay(d)} className={`mx-1 rounded-md border px-3 py-1 ${day === d ? "bg-[#f4e8c6] text-[#330e17]" : ""} disabled:opacity-30`}>Day {d}</button>))}</div>
      {!(openDays as any)[day] ? <p className="py-6 text-center opacity-70">Day locked. Time over or not started.</p>
      : !live ? <p className="py-6 text-center opacity-70">Paused. Wait for go-ahead.</p>
      : QUESTIONS[day]!.map((q) => (
          <div key={q.label} className="mb-3 rounded-lg border border-[#d8a84e]/40 bg-[#4a1420] p-4">
            <div className="flex items-center justify-between"><span className="font-bold">{q.label}</span><span className="text-sm text-[#d8a84e]">{q.pts} pts · {q.tier}</span></div>
            <p className="mt-2 text-sm">{q.statement}</p>
            <p className="mt-1 text-xs opacity-60">Hint: {q.hint}</p>
          </div>))}
      <p className="mt-2 text-center text-xs opacity-60">CC1 {scores.cc1} · CC2 {scores.cc2}</p>
    </main>
  );
}
