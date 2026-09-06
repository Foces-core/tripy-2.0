"use client";
import { useState } from "react";
import { QUESTIONS } from "~/data/questions";

export const dynamic = "force-dynamic";

const VOL_PW = "vol-877b7d";
const ADMIN_PW = "admin-bd7c6bfb";

export default function Home() {
  return <LocalApp />;
}

function LocalApp() {
  const [role, setRole] = useState<"admin" | "volunteer" | null>(null);
  const [day, setDay] = useState(1);
  const [adminTab, setAdminTab] = useState<"controls" | "live">("controls");
  const [local, setLocal] = useState({ live: false, openDays: { 1: true, 2: false, 3: false } as Record<number, boolean>, scores: { cc1: 0, cc2: 0 } });

  const login = () => {
    const input = prompt("Password:");
    if (input?.trim() === VOL_PW) setRole("volunteer");
    else if (input?.trim() === ADMIN_PW) setRole("admin");
    else if (input !== null) alert("Wrong password.");
  };
  const { live, openDays, scores } = local;
  const isAdmin = role === "admin";

  if (role) {
    return (
      <main className="mx-auto max-w-lg px-4 py-8">
        <h1 className="text-center text-3xl font-bold text-[#d8a84e]">Tripy 2.0 — {isAdmin ? "Admin" : "Volunteer"} (local)</h1>
        <p className="mb-4 text-center text-xs opacity-60">Set NEXT_PUBLIC_CONVEX_URL for shared live mode</p>
        <div className="mb-4 flex justify-center gap-2">
          {(["controls", "live"] as const).map((t) => (
            <button key={t} onClick={() => setAdminTab(t)} className={`rounded-full border border-[#d8a84e] px-4 py-1 text-sm ${adminTab === t ? "bg-[#d8a84e] text-[#330e17]" : "text-[#d8a84e]"}`}>{t}</button>
          ))}
        </div>
        {adminTab === "live" ? (
          <div className="py-8 text-center"><p>CC1</p><p className="text-7xl font-bold text-[#d8a84e]">{scores.cc1}</p><p className="mt-4">CC2</p><p className="text-7xl font-bold text-[#d8a84e]">{scores.cc2}</p></div>
        ) : (
          <>
            <div className="mb-3 flex items-center justify-between rounded-lg bg-[#4a1420] p-3">
              <span className="text-sm">{live ? "running" : "paused"}</span>
              <button disabled={!isAdmin} onClick={() => setLocal({ ...local, live: !live })} className="rounded bg-[#d8a84e] px-4 py-1 font-bold text-[#330e17] disabled:opacity-40">{live ? "Stop Day (admin)" : "Start Day (admin)"}</button>
            </div>
            <div className="mb-3 flex gap-2">{[1, 2, 3].map((d) => (
              <button key={d} onClick={() => { setDay(d); if (isAdmin) setLocal({ ...local, openDays: { ...openDays, [d]: !openDays[d] } }); }}
                className={`rounded border border-[#d8a84e] px-3 py-1 text-sm ${openDays[d] ? "bg-[#d8a84e] text-[#330e17]" : "text-[#d8a84e]"}`}>{openDays[d] ? `Lock ${d}` : `Unlock ${d}`}</button>))}</div>
            <div className="mb-3 text-center text-sm opacity-70">CC1: {scores.cc1} · CC2: {scores.cc2}</div>
            {QUESTIONS[day]!.map((q) => (
              <div key={q.label} className="mb-2 rounded-lg bg-[#4a1420] p-3">
                <p className="text-sm font-bold">{q.label} <span className="font-normal text-[#d8a84e]">({q.pts})</span></p>
                <p className="mt-1 text-xs opacity-80">{q.statement}</p>
                <p className="text-xs opacity-60">Expected: {q.expected}</p>
                <pre className="mt-1 overflow-x-auto rounded bg-black/40 p-2 text-xs">{q.solution}</pre>
                <div className="mt-2 flex gap-2">
                  {(["cc1", "cc2"] as const).map((lab) => (
                    <button key={lab} onClick={() => confirm(`Add ${q.pts} to ${lab.toUpperCase()}?`) && setLocal({ ...local, scores: { ...local.scores, [lab]: (local.scores as any)[lab] + q.pts } })}
                      className="rounded bg-[#d8a84e] px-4 py-1 text-sm font-bold text-[#330e17]">{lab.toUpperCase()} +{q.pts}</button>))}
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
        <button key={d} disabled={!openDays[d]} onClick={() => setDay(d)} className={`mx-1 rounded-md border px-3 py-1 ${day === d ? "bg-[#f4e8c6] text-[#330e17]" : ""} disabled:opacity-30`}>Day {d}</button>))}</div>
      {!openDays[day] ? <p className="py-6 text-center opacity-70">Day not unlocked yet. Time over or not started.</p>
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
