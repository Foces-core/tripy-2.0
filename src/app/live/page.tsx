"use client";
import LiveClient from "./live-client";
import { Providers } from "../providers";

export const dynamic = "force-dynamic";

export default function LivePage() {
  return (
    <Providers>
      <LiveClient />
    </Providers>
  );
}
