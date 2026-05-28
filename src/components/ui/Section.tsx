import { cn } from "@/lib/cn";

export function Section({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("mx-auto w-full max-w-6xl px-4", className)}>{children}</section>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">{children}</div>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-3 text-2xl font-semibold tracking-tight text-paper md:text-3xl">{children}</h2>;
}

export function SectionLead({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70">{children}</p>;
}

