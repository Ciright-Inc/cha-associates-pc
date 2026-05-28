import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Executive Intelligence Center",
  description:
    "CHA Executive Intelligence Center: quarterly intelligence reports, AI governance studies, benchmark reports, executive briefings, vendor risk analysis, and financial modernization publications."
};

const library = [
  {
    title: "CHA Operational Intelligence Framework™",
    type: "Framework",
    summary: "Workflow normalization, operational telemetry, financial visibility, and enterprise orchestration.",
    download: "/frameworks/CHA-Operational-Intelligence-Framework.pdf"
  },
  {
    title: "CHA Financial Event Architecture™",
    type: "Framework",
    summary: "Operational event ingestion, transaction classification, real-time GL synchronization, forecasting visibility.",
    download: "/frameworks/CHA-Financial-Event-Architecture.pdf"
  },
  {
    title: "CHA Enterprise AI Readiness Model™",
    type: "Model",
    summary: "AI maturity scoring, governance readiness, workflow intelligence maturity, risk scoring.",
    download: "/frameworks/CHA-Enterprise-AI-Readiness-Model.pdf"
  },
  {
    title: "CHA AI Governance Matrix™",
    type: "Governance",
    summary: "Human oversight, explainability, audit visibility, operational governance, vendor trust scoring.",
    download: "/frameworks/CHA-AI-Governance-Matrix.pdf"
  },
  {
    title: "CHA Operational Digital Twin Framework™",
    type: "Framework",
    summary: "Workflow mapping, dependency visibility, bottleneck detection, margin leakage analysis.",
    download: "/frameworks/CHA-Operational-Digital-Twin-Framework.pdf"
  }
] as const;

export default function ExecutiveIntelligenceCenterPage() {
  return (
    <PageShell
      eyebrow="CHA Executive Intelligence Center"
      title="Executive thought leadership, built for operational reality"
      lead="Quarterly intelligence reports, governance studies, benchmark research, executive briefings, and frameworks that structure enterprise intelligence—focused on measurable outcomes and trustworthy data."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader title="Subscriptions" description="Executive updates without noise." />
          <CardBody className="space-y-3 text-sm text-white/70">
            <p>
              Receive periodic executive briefings, governance studies, and operational benchmark summaries.
            </p>
            <div className="rounded-lg border border-white/10 bg-navy-950/30 px-4 py-3 text-xs text-white/60">
              Webinar registration and executive subscriptions are supported as part of the platform buildout.
            </div>
            <ButtonLink href="/contact" variant="ghost">
              Request executive subscription
            </ButtonLink>
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="Research library" description="Frameworks, models, and executive PDFs." />
          <CardBody className="space-y-3 text-sm text-white/70">
            <p>
              Downloadable executive materials are designed for leadership alignment and implementation planning.
            </p>
            <div>
              See also:{" "}
              <Link className="text-gold-400 underline underline-offset-4" href="/research-white-papers">
                Research & White Papers →
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {library.map((item) => (
          <Card key={item.title}>
            <CardHeader title={item.title} description={item.type} />
            <CardBody className="space-y-4 text-sm text-white/70">
              <p>{item.summary}</p>
              <div className="flex items-center justify-between gap-4">
                <Link
                  className="text-gold-400 underline underline-offset-4"
                  href={item.download}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download PDF →
                </Link>
                <Link className="text-white/70 hover:text-paper" href="/schedule-consultation">
                  Discuss with an advisor →
                </Link>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}

