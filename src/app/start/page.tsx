import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Intake from "@/components/sections/Intake";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Get Started — West Built",
  description: "Start a website project with West Built.",
};

export default function StartPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Container className="pb-6 max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight">Get started</h1>
          <p className="mt-4 text-ink-700">
            You don’t need everything figured out. This intake just helps us understand
            what you’re looking for so we can suggest next steps.
          </p>
        </Container>
        <Intake />
      </main>
      <Footer />
    </>
  );
}
