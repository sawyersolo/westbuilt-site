"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { work } from "@/lib/content";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Lightbox from "@/components/ui/Lightbox";
import { useState } from "react";

export default function Work() {
  const [active, setActive] = useState<null | typeof work[number]>(null);
  return (
    <section id="work" className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="A small selection of recent projects"
          subtitle="Across construction, music, retail, and service-based businesses."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((item) => (
<div
  key={item.title}
  className="rounded-3xl border border-ink-900/10 bg-stonewash-50 shadow-soft overflow-hidden cursor-pointer"
  role="button"
  tabIndex={0}
  onClick={() => setActive(item)}
  onKeyDown={(e) => e.key === "Enter" && setActive(item)}
>

              <div className="relative aspect-[16/10]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={false}
                />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="mt-1 text-xs text-ink-600">{item.industry}</div>
                  </div>
                  {item.href && item.href !== "#" ? (
                    <Button href={item.href} variant="ghost" external>
                      View
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm text-ink-700">
          Want your project here? <a className="underline" href="#start">Get started</a>.
        </div>
          {active ? (
      <Lightbox open={!!active} onClose={() => setActive(null)}>
        <div className="grid gap-4">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={active.image}
              alt={active.title}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div>
            <div className="text-lg font-semibold">{active.title}</div>
            <div className="mt-1 text-sm text-ink-700">{active.industry}</div>
          </div>
        </div>
      </Lightbox>
    ) : null}
  </Container>
</section>
  );
}
