import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Packages from "@/components/sections/Packages";

export const metadata = {
  title: "Packages — West Built",
  description: "Website packages designed for clarity, speed, and long-term use.",
};

export default function PackagesPage() {
  return (
    <>
      <Header />
      <main className="pt-10">
        <Packages />
      </main>
      <Footer />
    </>
  );
}
