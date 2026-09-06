"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

const Standings = dynamic(() => import("./standings"), {
  ssr: false,
  loading: () => <p className="mb-4 py-4 text-center text-sm opacity-60">Loading standings…</p>,
});

const DayGate = dynamic(() => import("./day-gate"), {
  ssr: false,
  loading: () => <p className="py-4 text-center text-sm opacity-60">Loading questions…</p>,
});

export default function StudentPage() {
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
        <div className="mt-3 flex items-center justify-center gap-2 text-sm opacity-80">
          <span className="rounded-full border border-[#f4e8c6]/30 px-3 py-0.5">CC1</span>
          <span className="text-[#d8a84e]">vs</span>
          <span className="rounded-full border border-[#f4e8c6]/30 px-3 py-0.5">CC2</span>
        </div>
      </header>
      <Standings />
      <section className="card mb-4 rounded-xl border border-[#d8a84e]/30 bg-[#4a1420] p-4 text-sm leading-relaxed">
        <p className="font-bold tracking-wide text-[#d8a84e]">HOW IT WORKS</p>
        <ol className="mt-1 list-decimal space-y-0.5 pl-5 opacity-90">
          <li>Read the question here.</li>
          <li>Write and run code on your laptop.</li>
          <li>Raise your hand. A volunteer verifies and scores CC1 / CC2.</li>
        </ol>
      </section>
      <DayGate />
      <footer className="mt-6 flex items-center justify-center gap-4 border-t border-[#f4e8c6]/10 pt-3 text-xs tracking-widest">
        <span className="opacity-60">FOCES · CEC</span>
        <a
          href="https://www.linkedin.com/company/foces-cec"
          target="_blank"
          rel="noreferrer"
          className="text-[#d8a84e] underline opacity-80"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/foces_cec"
          target="_blank"
          rel="noreferrer"
          className="text-[#d8a84e] underline opacity-80"
        >
          Instagram
        </a>
      </footer>
    </main>
  );
}
