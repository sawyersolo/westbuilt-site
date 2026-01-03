import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { brand } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-200/35 blur-3xl" />
        <div className="absolute -bottom-56 right-[-120px] h-[520px] w-[520px] rounded-full bg-ink-200/35 blur-3xl" />
      </div>

      <Container className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-ink-900 sm:text-6xl">
            {brand.tagline}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-700 sm:text-lg">
            {brand.subtagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#start">Get started</Button>
            <Button href="#work" variant="ghost">
              View work
            </Button>
          </div>

          <div className="mt-10 text-xs text-ink-600">
            Clean builds. Clear structure. No overcomplication.
          </div>
        </div>
      </Container>
    </section>
  );
}
