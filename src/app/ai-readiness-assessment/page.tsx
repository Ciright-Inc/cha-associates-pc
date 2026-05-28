import type { Metadata } from "next";
import Link from "next/link";
import { ReadinessWizard } from "@/components/readiness/ReadinessWizard";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "AI Readiness Assessment",
  description:
    "AI readiness scoring for enterprise operations: governance readiness, workflow intelligence maturity, automation suitability, risk scoring, and practical implementation planning."
};

export default function AiReadinessAssessmentPage() {
  return (
    <PageShell
      eyebrow="AI Readiness Assessment"
      title="CHA Enterprise AI Readiness Model™"
      lead="Score maturity across data trust, workflow intelligence, governance readiness, and operating model preparedness. This assessment is designed for enterprise decision-support—not hype-driven automation."
    >
      <div className="grid gap-10">
        <ReadinessWizard />

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader
              title="What you receive"
              description="A practical output you can use with leadership and stakeholders."
            />
            <CardBody className="text-sm text-white/70">
              <ul className="list-disc space-y-2 pl-5">
                <li>AI maturity scoring and readiness tier</li>
                <li>Governance readiness gaps and control recommendations</li>
                <li>Workflow intelligence maturity and event-telemetry posture</li>
                <li>Risk scoring and vendor trust considerations</li>
                <li>Implementation roadmap aligned to measurable outcomes</li>
              </ul>
            </CardBody>
          </Card>
          <Card>
            <CardHeader title="Next step" description="Review the results with an advisor." />
            <CardBody className="space-y-3 text-sm text-white/70">
              <p>
                If you’d like a guided review, we’ll translate the score into an operating plan: data trust,
                governance workflows, integration posture, and executive visibility.
              </p>
              <div className="flex gap-4">
                <Link className="text-gold-400 underline underline-offset-4" href="/schedule-consultation">
                  Schedule consultation →
                </Link>
                <Link className="text-white/70 hover:text-paper" href="/ai-governance">
                  AI governance →
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}

