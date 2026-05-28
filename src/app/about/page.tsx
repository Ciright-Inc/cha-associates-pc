import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About",
  description:
    "CHA Associates PC is a trusted AI-era professional advisory organization focused on operational intelligence, real-time financial visibility, and governance-aware decision-support systems."
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="CHA Associates PC"
      title="Trusted advisors for the operational AI era"
      lead="We help organizations transition responsibly into modern enterprise intelligence—grounded in financial accountability, trustworthy data, and human-centered governance."
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "CHA Associates PC",
          url: "https://chaassociatespc.com",
          slogan: "Professional Financial Advisory for the AI Era",
          description:
            "Real-time financial intelligence, operational visibility, and trusted AI guidance for modern business."
        }}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader
            title="Primary positioning"
            description="Operational intelligence over hype. Governance over novelty."
          />
          <CardBody className="space-y-3 text-sm text-white/70">
            <p>
              We position AI as a decision-support capability—paired with oversight, audit visibility, and
              operational controls. Our work emphasizes explainability, financial impact, and measurable outcomes.
            </p>
            <p className="text-white/60">“Every business event has financial meaning.”</p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="How we work" description="Independent, practical, enterprise-ready advisory." />
          <CardBody className="space-y-3 text-sm text-white/70">
            <ul className="list-disc space-y-2 pl-5">
              <li>Align intelligence initiatives to financial accountability and operating reality.</li>
              <li>Design trusted data foundations and event-based telemetry.</li>
              <li>Implement governance workflows: permissions, approvals, escalations, and audit trails.</li>
              <li>Deliver executive-grade reporting and operational visibility.</li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </PageShell>
  );
}

