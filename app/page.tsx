import Intro from "@/components/landing/Intro";
import ModeSelector from "@/components/landing/ModeSelector";
import Navbar from "@/components/landing/Navebar";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#14161B]">
      {/* <Navbar /> */}
      <Intro />
      <ModeSelector />
    </main>
  );
}