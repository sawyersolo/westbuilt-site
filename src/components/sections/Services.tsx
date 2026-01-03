import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="py-14 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <SectionHeading
          eyebrow="What we do"
          title="Simple, structured, and built properly"
          subtitle="Websites that are easy to understand, easy to manage, and built with long-term use in mind."
        />

        <Card className="p-6">
          <ul className="grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s} className="flex gap-2 text-sm text-ink-800">
                <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-accent-500" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </section>
  );
}
