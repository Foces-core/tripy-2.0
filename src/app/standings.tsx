"use client";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Providers } from "./providers";

function StandingsInner() {
  const remote = useQuery(api.event.get);
  if (!remote) return <p className="py-4 text-center text-sm opacity-60">Loading standings…</p>;
  return (
    <div className="flex items-stretch justify-around px-4 pt-2 pb-4 text-center">
      <div className="flex-1">
        <p className="text-base font-black tracking-widest opacity-90">CC1</p>
        <p className="text-5xl font-black text-[#f4e8c6]">{remote.scores.cc1}</p>
      </div>
      <div className="flex flex-col items-center justify-center px-2">
        <span className="rounded-full bg-[#d8a84e] px-2.5 py-0.5 text-xs font-black text-[#330e17]">
          VS
        </span>
      </div>
      <div className="flex-1">
        <p className="text-base font-black tracking-widest opacity-90">CC2</p>
        <p className="text-5xl font-black text-[#f4e8c6]">{remote.scores.cc2}</p>
      </div>
    </div>
  );
}

export default function Standings() {
  return (
    <section className="card mb-4 overflow-hidden rounded-xl border border-[#d8a84e]/30 bg-[#4a1420]">
      <p className="pt-3 text-center text-[11px] font-bold tracking-[0.3em] text-[#d8a84e]">
        LIVE STANDINGS
      </p>
      <Providers>
        <StandingsInner />
      </Providers>
    </section>
  );
}
