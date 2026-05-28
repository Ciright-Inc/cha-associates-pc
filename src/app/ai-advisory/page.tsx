import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "AI Advisory",
  description:
    "AI readiness, governance, procurement advisory, vendor comparison, and ROI analysis—practical enterprise AI with human oversight and measurable outcomes."
};

export default function AiAdvisoryPage() {
  return (
    <PageShell
      eyebrow="AI Business Advisory"
      title="Trusted, independent guidance for enterprise AI decisions"
      lead="We help organizations avoid costly AI decisions that do not create measurable business value—through readiness, governance, vendor analysis, and financially accountable implementation planning."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader title="Engagements" description="Typical advisory workstreams." />
          <CardBody className="text-sm text-white/70">
            <ul className="list-disc space-y-2 pl-5">
              <li>AI readiness assessments and maturity scoring</li>
              <li>AI implementation planning and operating model design</li>
              <li>AI ROI analysis and cost-of-risk framing</li>
              <li>AI procurement advisory and vendor comparisons</li>
              <li>AI contract review support and governance requirements</li>
              <li>Workflow intelligence planning and modernization roadmaps</li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            title="Governance-first"
            description="Decision-support systems with approvals, audit visibility, and human review."
          />
          <CardBody className="space-y-3 text-sm text-white/70">
            <p>
              We position AI as governed operational intelligence: permissions, escalation layers, explainability,
              and audit visibility. The goal is durable executive trust—not novelty.
            </p>
            <div className="rounded-lg border border-white/10 bg-navy-950/30 px-4 py-3 text-sm text-white/75">
              “Meaningful enterprise AI.” “Operational clarity.” “Financially accountable intelligence.”
            </div>
            <div className="flex gap-4">
              <Link className="text-gold-400 underline underline-offset-4" href="/ai-readiness-assessment">
                Start AI readiness →
              </Link>
              <Link className="text-white/70 hover:text-paper" href="/schedule-consultation">
                Schedule consultation →
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </PageShell>
  );
}

