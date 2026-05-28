import { Card, CardBody, CardHeader } from "@/components/ui/Card";

const agents = [
  {
    title: "CFO Intelligence Agent",
    desc: "Decision support for cash, profitability, forecasting, and variance—human reviewed."
  },
  {
    title: "Compliance Agent",
    desc: "Exception visibility, audit readiness, and policy-aligned approvals with explainability."
  },
  {
    title: "Procurement Intelligence Agent",
    desc: "Vendor spend visibility, contract risk flags, and purchase flow governance."
  },
  {
    title: "Manufacturing Optimization Agent",
    desc: "Operational throughput signals, bottleneck detection, and margin leakage analysis."
  },
  {
    title: "Construction Cost Agent",
    desc: "Project event ingestion, cost-to-complete visibility, and margin intelligence."
  },
  {
    title: "Workflow Intelligence Agent",
    desc: "Process telemetry, handoff friction, and operational exception triage."
  },
  {
    title: "Vendor Analysis Agent",
    desc: "Trust scoring, procurement comparisons, and governance requirements mapping."
  },
  {
    title: "Financial Reporting Agent",
    desc: "Event-driven reporting, GL synchronization checks, and controlled reconciliation support."
  }
] as const;

export function AgentCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {agents.map((a) => (
        <Card key={a.title}>
          <CardHeader title={a.title} description="Human-supervised decision support" />
          <CardBody className="text-sm text-white/70">
            <p>{a.desc}</p>
            <div className="mt-4 rounded-lg border border-white/10 bg-navy-950/30 px-4 py-3 text-xs text-white/60">
              Permissions · Approvals · Escalations · Audit visibility · Explainability
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

