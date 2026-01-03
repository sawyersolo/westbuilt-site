import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Packages from "@/components/sections/Packages";
import Process from "@/components/sections/Process";
import Audience from "@/components/sections/Audience";
import Intake from "@/components/sections/Intake";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Work />
      <Services />
      <Packages />
      <Process />
      <Audience />
      <Intake />
      <Footer />
    </main>
  );
}
