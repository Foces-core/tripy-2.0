import dynamic from "next/dynamic";

export const dynamic = "force-dynamic";

const HomeClient = dynamic(() => import("./home-client"), { ssr: false });

export default function Page() {
  return <HomeClient />;
}
