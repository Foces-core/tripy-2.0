import "~/styles/globals.css";
import type { Metadata, Viewport } from "next";
import SwRegister from "./sw-register";

export const metadata: Metadata = {
  title: "Tripy 2.0 — 3-Day Python Workshop",
  description:
    "FOCES CEC Tripy 2.0. Sept 7, 8, 9. 4-5 PM. CC1 vs CC2. Read questions, code locally, score live.",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon.svg", apple: "/apple-touch-icon.svg" },
  openGraph: {
    title: "Tripy 2.0 — 3-Day Python Workshop",
    description: "Sept 7, 8, 9 · 4-5 PM · CC1 vs CC2 · FOCES CEC",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#330e17",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const convexUrl =
    process.env.NEXT_PUBLIC_CONVEX_URL || "https://compassionate-caiman-145.convex.cloud";
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href={convexUrl} crossOrigin="anonymous" />
        <link rel="dns-prefetch" href={convexUrl} />
      </head>
      <body className="bg-[#330e17] text-[#f4e8c6] antialiased">
        {children}
        <SwRegister />
      </body>
    </html>
  );
}
