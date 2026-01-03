import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A straightforward process with clear checkpoints"
          subtitle="No chaos, no guessing, no loose ends."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {processSteps.map((s, idx) => (
            <Card key={s.title} className="p-6">
              <div className="text-xs font-semibold text-ink-600">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="mt-2 text-lg font-semibold">{s.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-ink-700">
                {s.text}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
