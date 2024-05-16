import dynamic from "next/dynamic";

const NewNav = dynamic(
  () => import("@/components/new-nav").then(({ NewNav }) => NewNav),
  { ssr: false },
);

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`pt-2 flex flex-col items-stretch`} id="def-layout">
      <NewNav />

      {children}
    </div>
  );
}
