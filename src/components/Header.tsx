"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { brand, nav } from "@/lib/content";
import clsx from "clsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b border-transparent",
        scrolled
          ? "backdrop-blur bg-stonewash-100/85 border-ink-900/10"
          : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="font-semibold tracking-tight text-ink-900">
          {brand.name}
        </a>

        <nav className="hidden items-center gap-2 sm:flex">
          {nav.map((item) =>
            "cta" in item && item.cta ? (
              <Button key={item.href} href={item.href}>
                {item.label}
              </Button>
            ) : (
              <Button key={item.href} href={item.href} variant="ghost">
                {item.label}
              </Button>
            )
          )}
        </nav>

        <div className="sm:hidden">
          <Button href="#start">Get started</Button>
        </div>
      </Container>
    </header>
  );
}
