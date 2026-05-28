import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Keyra Partner",
  description:
    "As a Keyra Partner, CHA Associates PC leverages advanced operational financial intelligence capabilities to support real-time reporting, operational visibility, and event-driven accounting."
};

export default function KeyraPartnerPage() {
  return (
    <PageShell
      eyebrow="Partner positioning"
      title="Keyra Partner capabilities"
      lead="As a Keyra Partner, CHA Associates PC leverages advanced operational financial intelligence capabilities to support real-time reporting, operational visibility, and event-driven accounting—without overstating affiliation or implying ownership."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader title="What this enables" description="Operational clarity and continuous visibility." />
          <CardBody className="text-sm text-white/70">
            <ul className="list-disc space-y-2 pl-5">
              <li>Event-driven accounting patterns for operational telemetry</li>
              <li>Real-time reporting and executive dashboards</li>
              <li>Project and margin visibility tied to workflow events</li>
              <li>Operational visibility and governed decision-support</li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            title="How we position it"
            description="Practical, compliance-aware implementation—enterprise-ready."
          />
          <CardBody className="space-y-3 text-sm text-white/70">
            <p>
              Our role is advisory and implementation-oriented: mapping operational events to financial meaning,
              ensuring data trust, and building executive visibility systems with governance and oversight.
            </p>
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
              Do not infer ownership or exclusive rights. Partner positioning is capability-based and accurately stated.
            </div>
          </CardBody>
        </Card>
      </div>
    </PageShell>
  );
}

