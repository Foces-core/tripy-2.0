"use client";
import { useEffect, useState } from "react";
import { Providers } from "./providers";

export const dynamic = "force-dynamic";

export default function Page() {
  const [mounted, setMounted] = useState(false);
  const [HomeInner, setHomeInner] = useState<any>(null);
  useEffect(() => {
    setMounted(true);
    import("./home-client").then((m) => setHomeInner(() => m.default));
  }, []);
  return (
    <Providers>
      {mounted && HomeInner ? <HomeInner /> : <p className="py-20 text-center opacity-70">Loading Tripy…</p>}
    </Providers>
  );
}
