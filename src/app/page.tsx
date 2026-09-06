"use client";
import { useEffect, useState, type ComponentType } from "react";
import { Providers } from "./providers";

export const dynamic = "force-dynamic";

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [HomeInner, setHomeInner] = useState<ComponentType | null>(null);
  useEffect(() => {
    setMounted(true);
    import("./home-client").then((m) => setHomeInner(() => m.default));
  }, []);
  return (
    <Providers>
      {mounted && HomeInner ? (
        <HomeInner />
      ) : (
        <main className="mx-auto max-w-lg px-4 py-8">
          <p className="text-center text-[11px] font-bold tracking-[0.35em] text-[#d8a84e]">
            FOCES · CEC
          </p>
          <h1 className="mt-1 text-center text-6xl font-black">
            Tripy <span className="text-[#d8a84e]">2.0</span>
          </h1>
          <div className="mx-auto mt-6 max-w-lg space-y-3">
            {[72, 56, 88].map((w, i) => (
              <div
                key={i}
                className="animate-pulse rounded-xl border border-[#d8a84e]/20 bg-[#4a1420] p-4"
              >
                <div className="h-4 rounded bg-[#f4e8c6]/15" style={{ width: `${w}%` }} />
                <div className="mt-2 h-3 rounded bg-[#f4e8c6]/10" style={{ width: `${w - 20}%` }} />
              </div>
            ))}
          </div>
        </main>
      )}
    </Providers>
  );
}
