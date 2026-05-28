import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Real-Time Financial Intelligence",
  description:
    "Event-based accounting and continuous financial visibility: real-time GL impacts, profitability intelligence, cash intelligence, and executive reporting as operations occur."
};

const examples = [
  "Labor costs",
  "Project updates",
  "Material purchases",
  "Customer payments",
  "Payroll events",
  "Inventory movement",
  "Communication expenses",
  "Procurement activity",
  "Vendor invoices",
  "Operational milestones"
] as const;

const updates = [
  "General ledger synchronization",
  "Project profitability visibility",
  "Forecasting and cash flow",
  "Operational dashboards",
  "Executive reporting",
  "KPI generation and alerts"
] as const;

export default function RealTimeFinancialIntelligencePage() {
  return (
    <PageShell
      eyebrow="Service"
      title="Real-Time Financial Intelligence"
      lead="Financial reporting should happen as operations occur — not weeks later. We design event-driven visibility where business events continuously update financial meaning."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader
            title="Business events generate financial impact"
            description="Operational telemetry becomes financially accountable intelligence."
          />
          <CardBody className="text-sm text-white/70">
            <div className="grid gap-2 sm:grid-cols-2">
              {examples.map((e) => (
                <div key={e} className="rounded-lg border border-white/10 bg-navy-950/30 px-3 py-2">
                  {e}
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader
            title="These events should update visibility immediately"
            description="Executives shouldn’t wait for month-end to see reality."
          />
          <CardBody className="text-sm text-white/70">
            <ul className="list-disc space-y-2 pl-5">
              {updates.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
            <div className="mt-5 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
              “Operational intelligence begins with trustworthy data.”
            </div>
          </CardBody>
        </Card>
      </div>
    </PageShell>
  );
}

