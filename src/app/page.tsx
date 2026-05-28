import Link from "next/link";
import { AIFlowAnimation } from "@/components/home/AIFlowAnimation";
import { KPIWidgets } from "@/components/home/KPIWidgets";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Section, SectionEyebrow, SectionHeading, SectionLead } from "@/components/ui/Section";

export default function HomePage() {
  return (
    <div>
      <Section className="pt-16 md:pt-22">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Professional Financial Advisory for the AI Era
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-paper md:text-5xl">
              Real-time financial intelligence, operational visibility, and trusted AI guidance for modern business.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
              CHA Associates PC helps organizations use operational intelligence, real-time financial visibility,
              and governance-aware AI decision support to make better decisions, reduce operational friction, and
              prepare for the next era of business.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/schedule-consultation">Schedule Consultation</ButtonLink>
              <ButtonLink href="/operational-intelligence-platform" variant="ghost">
                Explore Intelligence Platform
              </ButtonLink>
              <ButtonLink href="/ai-readiness-assessment" variant="outline">
                Start AI Readiness Assessment
              </ButtonLink>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                { k: "Positioning", v: "Operational intelligence over AI hype" },
                { k: "Standard", v: "Explainable, auditable, human-reviewed systems" },
                { k: "Outcome", v: "Measurable operational and financial improvement" }
              ].map((x) => (
                <div key={x.k} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{x.k}</div>
                  <div className="mt-2 text-sm text-white/75">{x.v}</div>
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader
              title="Trusted advisors for enterprise intelligence"
              description="Independent guidance for responsible implementation, governance, and measurable value."
            />
            <CardBody className="space-y-4">
              <div className="grid gap-3">
                {[
                  "Financial accountability for AI decisions (ROI, costs, risk).",
                  "Operational visibility: event-based reporting and financial telemetry.",
                  "Governance-first architecture: permissions, approvals, auditability.",
                  "Practical deployment plans across finance, operations, procurement, HR, and compliance."
                ].map((t) => (
                  <div key={t} className="rounded-lg border border-white/10 bg-navy-950/30 px-4 py-3 text-sm text-white/75">
                    {t}
                  </div>
                ))}
              </div>
              <div className="text-xs text-white/55">
                “AI should improve human judgment, not replace it.”
              </div>
              <div className="flex items-center justify-between gap-3">
                <Link className="text-sm text-gold-400 underline underline-offset-4" href="/services">
                  View services
                </Link>
                <Link className="text-sm text-white/70 hover:text-paper" href="/contact">
                  Contact →
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section className="mt-16">
        <AIFlowAnimation />
      </Section>

      <Section className="mt-16">
        <SectionEyebrow>Executive visibility</SectionEyebrow>
        <SectionHeading>Dashboards that keep pace with operations</SectionHeading>
        <SectionLead>
          Financial reporting should happen as operations occur — not weeks later. We design event-driven financial
          visibility, governed decision-support, and trusted operational telemetry that executives can rely on.
        </SectionLead>
        <div className="mt-8">
          <KPIWidgets />
        </div>
      </Section>

      <Section className="mt-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Real-Time Financial Intelligence",
              desc: "Continuous visibility into profitability, cash, forecasting, and GL impacts as events occur.",
              href: "/real-time-financial-intelligence"
            },
            {
              title: "AI Business Advisory",
              desc: "Readiness assessments, ROI analysis, vendor review, and implementation planning with governance.",
              href: "/ai-advisory"
            },
            {
              title: "AI Architecture Services",
              desc: "Human-supervised agent orchestration, knowledge graph design, and cross-department intelligence.",
              href: "/services"
            }
          ].map((c) => (
            <Card key={c.title}>
              <CardHeader title={c.title} description={c.desc} />
              <CardBody>
                <Link className="text-sm text-gold-400 underline underline-offset-4" href={c.href}>
                  Explore →
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="mt-16">
        <Card>
          <CardHeader
            title="Schedule a Consultation"
            description="An executive advisory intake process—structured, specific, and routed intelligently."
          />
          <CardBody className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="text-sm text-white/70">
              Tell us what you’re working on, then select a time through our secure scheduling platform.
            </div>
            <div className="flex gap-3">
              <ButtonLink href="/schedule-consultation">Schedule Consultation</ButtonLink>
              <ButtonLink href="/ai-readiness-assessment" variant="ghost">
                Start readiness assessment
              </ButtonLink>
            </div>
          </CardBody>
        </Card>
      </Section>
    </div>
  );
}

