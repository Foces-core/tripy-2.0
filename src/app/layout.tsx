import "~/styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Tripy 2.0 — 3-Day Python Workshop",
  description: "FOCES CEC Tripy 2.0. Sept 7,8,9. 4-5 PM. CC1 & CC2.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#330e17] text-[#f4e8c6] antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
