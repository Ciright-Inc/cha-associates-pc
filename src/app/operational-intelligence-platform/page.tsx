import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { AgentCards } from "@/components/platform/AgentCards";
import { KnowledgeGraphMap } from "@/components/platform/KnowledgeGraphMap";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Operational Intelligence Platform",
  description:
    "A conceptual enterprise operational intelligence ecosystem: knowledge graph mapping, governed agent orchestration, operational memory architecture, and executive dashboards."
};

export default function OperationalIntelligencePlatformPage() {
  return (
    <PageShell
      eyebrow="Operational Intelligence Platform"
      title="An enterprise operational intelligence ecosystem"
      lead="The platform experience is designed as an executive decision-support environment: operational visibility, governance workflows, human-reviewed agent orchestration, and retrieval-aware enterprise intelligence."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader
            title="Operational Memory Architecture"
            description="Enterprise intelligence compounds over time."
          />
          <CardBody className="space-y-3 text-sm text-white/70">
            <p>
              Store a conceptual history for advisory interactions, AI readiness reviews, vendor evaluations,
              operational observations, implementation recommendations, workflow analysis, and executive insights.
            </p>
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
              “Enterprise intelligence compounds over time.”
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader
            title="Proprietary frameworks"
            description="Branded models that structure visibility, readiness, and governance."
          />
          <CardBody className="text-sm text-white/70">
            <ul className="list-disc space-y-2 pl-5">
              <li>CHA Operational Intelligence Framework™</li>
              <li>CHA Financial Event Architecture™</li>
              <li>CHA Enterprise AI Readiness Model™</li>
              <li>CHA AI Governance Matrix™</li>
              <li>CHA Operational Digital Twin Framework™</li>
            </ul>
            <div className="mt-5 rounded-lg border border-white/10 bg-navy-950/30 px-4 py-3 text-xs text-white/60">
              Each framework includes executive summaries, visual diagrams, and downloadable PDFs (available in the
              Executive Intelligence Center).
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="mt-10">
        <KnowledgeGraphMap />
      </div>

      <div className="mt-10">
        <div className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
          Human-supervised enterprise agent orchestration
        </div>
        <AgentCards />
      </div>
    </PageShell>
  );
}

