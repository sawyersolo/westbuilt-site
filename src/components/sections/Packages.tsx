import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import clsx from "clsx";
import { packages } from "@/lib/content";

export default function Packages() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Template packages"
          title="A strong starting structure beats a blank slate"
          subtitle="Packages keep projects efficient, predictable, and cost-effective."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {packages.map((p) => (
            <Card
              key={p.name}
              className={clsx(
                "p-6",
                p.emphasis === "recommended" && "border-accent-500/40"
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-lg font-semibold">{p.name}</div>
                {p.emphasis === "recommended" ? (
                  <div className="rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-800">
                    Recommended
                  </div>
                ) : null}
              </div>

              <div className="mt-2 text-sm text-ink-700">{p.description}</div>

              <ul className="mt-5 grid gap-2 text-sm text-ink-800">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-ink-900/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button href="#start">Get started</Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-6 text-sm text-ink-700">
          Not sure what fits? Start with the intake and we’ll figure it out.
        </div>
      </Container>
    </section>
  );
}
