import dynamic from "next/dynamic";

const Navbar = dynamic(
  () => import("@/components/navbar").then(({ Navbar }) => Navbar),
  { ssr: false },
);

export function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`pt-2 flex flex-col items-stretch`} id="def-layout">
      <Navbar />

      {children}
    </div>
  );
}
