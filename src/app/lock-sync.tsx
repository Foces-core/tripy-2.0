"use client";
import { useEffect } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Providers } from "./providers";

export type Day = 1 | 2 | 3;
export type Locks = { live: boolean; open: Record<Day, boolean> } | null;

function Inner({ onLocks }: { onLocks: (l: Exclude<Locks, null>) => void }) {
  const remote = useQuery(api.event.getLocks);
  useEffect(() => {
    if (!remote) return;
    onLocks({
      live: remote.live,
      open: { 1: remote.openDays.day1, 2: remote.openDays.day2, 3: remote.openDays.day3 },
    });
  }, [remote, onLocks]);
  return null;
}

export default function LockSync({ onLocks }: { onLocks: (l: Exclude<Locks, null>) => void }) {
  return (
    <Providers>
      <Inner onLocks={onLocks} />
    </Providers>
  );
}
