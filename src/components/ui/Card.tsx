import clsx from "clsx";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-ink-900/10 bg-stonewash-50 shadow-soft",
        className
      )}
    >
      {children}
    </div>
  );
}
