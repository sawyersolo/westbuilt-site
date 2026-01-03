import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Work from "@/components/sections/Work";

export const metadata = {
  title: "Work — West Built",
  description: "Selected website projects built by West Built across multiple industries.",
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="pt-10">
        <Work />
      </main>
      <Footer />
    </>
  );
}
