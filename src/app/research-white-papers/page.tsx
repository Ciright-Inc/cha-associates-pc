import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Research & White Papers",
  description:
    "Research summaries and executive white papers on operational telemetry, real-time financial intelligence, AI governance, vendor risk, and enterprise intelligence."
};

const papers = [
  {
    title: "Operational Telemetry & Financial Meaning",
    summary: "How event-based operations map to financially accountable reporting and executive visibility.",
    tag: "Research summary"
  },
  {
    title: "Enterprise AI Governance: Oversight by Design",
    summary: "Permissions, approvals, explainability, audit visibility, and vendor trust scoring for enterprise AI.",
    tag: "Governance study"
  },
  {
    title: "Vendor Risk Analysis for Decision-Support Systems",
    summary: "A practical evaluation lens for procurement teams and executive leadership.",
    tag: "Briefing"
  },
  {
    title: "Real-Time Financial Intelligence for Project-Driven Organizations",
    summary: "Margin visibility, cash exposure, and event-driven GL synchronization—built for operations.",
    tag: "Industry paper"
  }
] as const;

export default function ResearchWhitePapersPage() {
  return (
    <PageShell
      eyebrow="Research & White Papers"
      title="Executive-grade publications for modern business"
      lead="Our thought leadership is grounded in operating reality: trustworthy data, financially credible intelligence, and governance-aware decision-support systems."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {papers.map((p) => (
          <Card key={p.title}>
            <CardHeader title={p.title} description={p.tag} />
            <CardBody className="space-y-4 text-sm text-white/70">
              <p>{p.summary}</p>
              <div className="flex items-center justify-between gap-4">
                <Link className="text-white/70 hover:text-paper" href="/executive-intelligence-center">
                  View library →
                </Link>
                <Link className="text-gold-400 underline underline-offset-4" href="/schedule-consultation">
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

