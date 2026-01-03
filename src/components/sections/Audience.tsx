import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { audiences } from "@/lib/content";

export default function Audience() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <SectionHeading
          eyebrow="Who this is for"
          title="Broad fit — same quality bar"
          subtitle="If you want something clean, functional, and built properly, this is a good fit."
        />

        <div className="rounded-3xl border border-ink-900/10 bg-stonewash-50 p-6 shadow-soft">
          <ul className="grid gap-3 text-sm text-ink-800 sm:grid-cols-2">
            {audiences.map((a) => (
              <li key={a} className="flex gap-2">
                <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-accent-500" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
