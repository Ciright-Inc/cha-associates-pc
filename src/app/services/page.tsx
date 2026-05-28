import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Real-time financial intelligence, AI business advisory, and enterprise operational intelligence architecture with governance and oversight."
};

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="Practical enterprise intelligence specialists"
      lead="CHA Associates PC delivers real-time financial visibility, AI readiness and governance advisory, and operational intelligence architecture designed for trustworthy decision support."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader
            title="Real-Time Financial Intelligence"
            description="Continuous visibility into profitability, cash, forecasting, and GL impacts."
          />
          <CardBody className="space-y-4 text-sm text-white/70">
            <ul className="list-disc space-y-2 pl-5">
              <li>Event-based accounting design</li>
              <li>Financial telemetry & operational reporting</li>
              <li>Project profitability & margin visibility</li>
              <li>Cash intelligence & forecasting visibility</li>
            </ul>
            <Link className="text-gold-400 underline underline-offset-4" href="/real-time-financial-intelligence">
              Explore service →
            </Link>
          </CardBody>
        </Card>

        <Card>
          <CardHeader
            title="AI Business Advisory"
            description="Independent guidance to avoid costly AI decisions that don’t create value."
          />
          <CardBody className="space-y-4 text-sm text-white/70">
            <ul className="list-disc space-y-2 pl-5">
              <li>AI readiness assessments</li>
              <li>AI ROI & cost-of-risk analysis</li>
              <li>Procurement advisory & vendor comparisons</li>
              <li>Contract review support & governance planning</li>
            </ul>
            <Link className="text-gold-400 underline underline-offset-4" href="/ai-advisory">
              Explore service →
            </Link>
          </CardBody>
        </Card>

        <Card>
          <CardHeader
            title="AI Architecture Services"
            description="Human-supervised orchestration across departments and systems."
          />
          <CardBody className="space-y-4 text-sm text-white/70">
            <ul className="list-disc space-y-2 pl-5">
              <li>Operational intelligence architecture</li>
              <li>Governed agent orchestration (decision support)</li>
              <li>Knowledge graph & retrieval-aware content systems</li>
              <li>Executive dashboards & connectivity planning</li>
            </ul>
            <Link className="text-gold-400 underline underline-offset-4" href="/operational-intelligence-platform">
              Explore platform →
            </Link>
          </CardBody>
        </Card>
      </div>
    </PageShell>
  );
}

