import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Client Portal",
  description:
    "Client Operational Intelligence Workspace: operational dashboards, AI readiness reports, vendor tracking, implementation roadmaps, KPI intelligence, risk visibility, and executive reporting."
};

const tiles = [
  {
    title: "Operational dashboards",
    desc: "Executive visibility tied to operational telemetry and financially credible definitions.",
    href: "/executive-dashboards"
  },
  {
    title: "AI readiness reports",
    desc: "Scoring outputs, maturity breakdown, governance gaps, and practical next-step plans.",
    href: "/ai-readiness-assessment"
  },
  {
    title: "Vendor tracking",
    desc: "Procurement comparisons, trust scoring, contract review notes, and renewal visibility.",
    href: "/ai-governance"
  },
  {
    title: "Implementation roadmaps",
    desc: "Sequenced initiatives with measurable outcomes and accountable ownership.",
    href: "/services"
  },
  {
    title: "Operational risk visibility",
    desc: "Exceptions, escalations, and audit visibility designed for enterprise trust.",
    href: "/ai-governance"
  },
  {
    title: "Executive reporting",
    desc: "Decision cadence aligned to how the business runs: cash, margin, risk, and throughput.",
    href: "/real-time-financial-intelligence"
  }
] as const;

export default function ClientPortalPage() {
  return (
    <PageShell
      eyebrow="Client Operational Intelligence Workspace"
      title="A governed environment for executive visibility"
      lead="This portal is designed to feel like an executive operational intelligence environment: dashboards, readiness reports, vendor tracking, roadmaps, KPI intelligence, and operational risk visibility."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {tiles.map((t) => (
          <Card key={t.title}>
            <CardHeader title={t.title} description={t.desc} />
            <CardBody>
              <Link className="text-gold-400 underline underline-offset-4" href={t.href}>
                Open →
              </Link>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-sm text-white/70">
        Client authentication, permissions, and workspace persistence are part of the platform roadmap. This build
        establishes the executive UI language and information architecture.
      </div>
    </PageShell>
  );
}

