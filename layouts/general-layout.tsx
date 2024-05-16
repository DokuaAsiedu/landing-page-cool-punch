import { Navbar } from "@/components";
import { oswald } from "@/assets/fonts/fonts";

export function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${oswald.className} container relative`} id="gen-layout">
      <Navbar />

      {children}
    </div>
  );
}
