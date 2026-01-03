import Container from "@/components/ui/Container";
import { brand } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink-900/10 py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="font-semibold tracking-tight">{brand.name}</div>
          <div className="mt-1 text-sm text-ink-700">Web design & development
          <div className="mt-1 text-xs text-ink-600">Built with modern tools. Deployed reliably.</div></div>
          <div className="mt-1 text-sm text-ink-700">Working remotely</div>
        </div>

        <div className="text-sm text-ink-700">
          <a className="hover:underline" href={`mailto:${brand.email}`}>
            {brand.email}
          </a>
          <div className="mt-2 text-xs text-ink-600">
            © {new Date().getFullYear()} {brand.name}
          </div>
        </div>
      </Container>
    </footer>
  );
}
