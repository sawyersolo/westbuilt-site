import clsx from "clsx";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-accent-300/60";
  const styles =
    variant === "primary"
      ? "bg-ink-900 text-stonewash-50 hover:bg-ink-800 shadow-soft"
      : "bg-transparent text-ink-900 hover:bg-ink-900/5";

  if (external) {
    return (
      <a
        className={clsx(base, styles, className)}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={clsx(base, styles, className)} href={href}>
      {children}
    </Link>
  );
}
