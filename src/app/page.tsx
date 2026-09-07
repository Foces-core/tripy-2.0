import Link from "next/link";
import { DAY1 } from "~/data/day1";
import SocialFooter from "./social-footer";
import StudentShell from "./student-shell";

export default function Page() {
  return (
    <main className="mx-auto max-w-lg px-4 py-6 sm:py-8">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-[0.35em] text-[#d8a84e]">FOCES · CEC</span>
        <Link
          href="/volunteer"
          prefetch={false}
          className="flex items-center gap-1.5 rounded-full border border-[#d8a84e]/50 bg-black/30 px-3.5 py-1 text-xs font-semibold text-[#d8a84e] shadow-sm transition-all hover:border-[#d8a84e] hover:bg-[#d8a84e]/15 active:scale-95"
        >
          <span>Volunteer</span>
          <span>→</span>
        </Link>
      </div>

      <header className="mb-5 text-center">
        <h1 className="mt-1 text-5xl leading-none font-black tracking-tight sm:text-6xl">
          Tripy <span className="text-[#d8a84e]">2.0</span>
        </h1>
        <div className="mx-auto mt-3 h-px w-40 bg-[#d8a84e]/60" />
        <div className="mt-3 flex items-center justify-center gap-3 text-base font-bold opacity-90">
          <span className="rounded-full border border-[#f4e8c6]/30 px-4 py-1">CC1</span>
          <span className="text-[#d8a84e]">vs</span>
          <span className="rounded-full border border-[#f4e8c6]/30 px-4 py-1">CC2</span>
        </div>
      </header>
      <section className="card mb-4 rounded-xl border border-[#d8a84e]/30 bg-[#4a1420] p-4 text-sm leading-relaxed">
        <p className="font-bold tracking-wide text-[#d8a84e]">HOW IT WORKS</p>
        <ol className="mt-1 list-decimal space-y-0.5 pl-5 opacity-90">
          <li>Read the question here.</li>
          <li>Write and run code on your laptop.</li>
          <li>Raise your hand. A volunteer verifies and scores CC1 / CC2.</li>
        </ol>
      </section>

      <StudentShell day1Questions={DAY1} />

      <SocialFooter />
    </main>
  );
}
