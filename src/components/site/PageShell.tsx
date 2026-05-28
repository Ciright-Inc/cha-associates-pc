import { Section } from "@/components/ui/Section";

export function PageShell({
  title,
  lead,
  eyebrow,
  children
}: {
  title: string;
  lead: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Section className="pt-16">
        {eyebrow ? (
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">{eyebrow}</div>
        ) : null}
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-paper md:text-4xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70">{lead}</p>
      </Section>
      <Section className="mt-12">{children}</Section>
    </div>
  );
}

