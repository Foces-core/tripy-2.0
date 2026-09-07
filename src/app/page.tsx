import Link from "next/link";
import { DAY1 } from "~/data/day1";
import SocialFooter from "./social-footer";
import StudentShell from "./student-shell";

export default function Page() {
  return (
    <main className="mx-auto max-w-lg px-4 py-8">
      <Link
        href="/volunteer"
        prefetch={false}
        className="fixed top-3 right-4 flex min-h-[44px] items-center rounded-2xl border border-[#d8a84e] px-4 py-2 text-xs text-[#d8a84e] opacity-70"
      >
        Volunteer →
      </Link>
      <header className="mb-5 text-center">
        <p className="text-[11px] font-bold tracking-[0.35em] text-[#d8a84e]">FOCES · CEC</p>
        <h1 className="mt-1 text-6xl leading-none font-black tracking-tight">
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
