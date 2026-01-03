import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/sections/Services";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Services — West Built",
  description: "Clear, reliable web design and development services from West Built.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Container className="pb-10 max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
          <p className="mt-4 text-ink-700">
            West Built designs and builds websites that are clear, reliable, and easy to maintain.
            No bloated platforms. No unnecessary complexity.
          </p>
        </Container>
        <Services />
        <Container className="pb-20 max-w-2xl text-sm text-ink-700">
          <p>
            <strong>Not included:</strong> locked-in platforms, forced subscriptions,
            or overengineered dashboards.
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
