import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "AI Governance",
  description:
    "Governance-aware AI decision support: human oversight, explainability, audit visibility, permissions, approvals, escalation layers, and AI vendor trust scoring."
};

export default function AiGovernancePage() {
  return (
    <PageShell
      eyebrow="AI governance"
      title="Explainable, auditable, human-reviewed enterprise intelligence"
      lead="AI should improve human judgment, not replace it. We help organizations design governance workflows that create trust: permissions, approvals, escalation paths, audit visibility, and measurable accountability."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader title="CHA AI Governance Matrix™" description="A practical governance model for operations." />
          <CardBody className="text-sm text-white/70">
            <ul className="list-disc space-y-2 pl-5">
              <li>Human oversight and review requirements</li>
              <li>Explainability and rationale capture</li>
              <li>Audit visibility and exception reporting</li>
              <li>Operational governance workflows (approvals, escalations)</li>
              <li>AI vendor trust scoring and procurement gating</li>
            </ul>
            <div className="mt-5 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/60">
              Decision support systems—not autonomous replacements for humans.
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Readiness first" description="Governance cannot be retrofitted reliably." />
          <CardBody className="space-y-3 text-sm text-white/70">
            <p>
              Governance readiness includes operating model clarity, data trust, workflow maturity, and audit
              expectations. We score readiness and provide a practical implementation roadmap.
            </p>
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

