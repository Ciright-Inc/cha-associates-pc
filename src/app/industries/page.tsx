import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industry specialization across construction, manufacturing, engineering, healthcare, government, and more—operational intelligence grounded in real workflows, compliance, and reporting needs."
};

const industries = [
  "Construction",
  "Manufacturing",
  "Engineering",
  "Healthcare",
  "Food Services",
  "Venue Management",
  "Financial Services",
  "Legal",
  "Utilities",
  "Telecommunications",
  "Chemicals",
  "Government",
  "Professional Services"
] as const;

export default function IndustriesPage() {
  return (
    <PageShell
      eyebrow="Industry specialization"
      title="Operational intelligence grounded in real operating reality"
      lead="Our professionals understand your operational language, compliance structure, workflows, vendors, reporting requirements, and business realities."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader title="Industries we support" description="Dedicated operational and financial visibility." />
          <CardBody>
            <div className="grid gap-3 sm:grid-cols-2">
              {industries.map((i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-navy-950/30 px-4 py-3 text-sm text-white/75"
                >
                  {i}
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            title="What changes by industry"
            description="Operational events, compliance rules, and decision cadence."
          />
          <CardBody className="space-y-3 text-sm text-white/70">
            <ul className="list-disc space-y-2 pl-5">
              <li>Workflows and event sources (projects, orders, service tickets, claims, production runs)</li>
              <li>Cost structures and margin drivers (labor, materials, utilization, overhead allocation)</li>
              <li>Compliance and audit expectations (controls, reporting, privacy, procurement rules)</li>
              <li>Executive visibility needs (cash, risk, throughput, exceptions, profitability)</li>
            </ul>
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
              “Every operational event is connected.”
            </div>
          </CardBody>
        </Card>
      </div>
    </PageShell>
  );
}

