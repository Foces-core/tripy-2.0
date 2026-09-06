"use client";
import LiveClient from "./live-client";
import { Providers } from "../providers";

export default function LivePage() {
  return (
    <Providers>
      <LiveClient />
    </Providers>
  );
}
