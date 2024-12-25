import { Hero } from "@/components/template/hero";
import { Navbar } from "@/components/template/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
    </div>
  );
}
