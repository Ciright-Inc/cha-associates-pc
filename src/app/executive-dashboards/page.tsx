import type { Metadata } from "next";
import Link from "next/link";
import { KPIWidgets } from "@/components/home/KPIWidgets";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Executive Dashboards",
  description:
    "Executive-grade dashboards for cash, profitability, forecasting, risk exceptions, vendor spend, and compliance visibility—built for real-time operations."
};

export default function ExecutiveDashboardsPage() {
  return (
    <PageShell
      eyebrow="Executive dashboards"
      title="Visibility designed for CFO, COO, CIO, and executive leadership"
      lead="Dashboards are not decoration. They are operational instruments: consistent definitions, governed access, audit visibility, and a decision cadence aligned with how the business runs."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader
            title="What executives need"
            description="Clarity that is financially credible and operationally actionable."
          />
          <CardBody className="text-sm text-white/70">
            <ul className="list-disc space-y-2 pl-5">
              <li>Daily cash position and forward-looking cash exposure</li>
              <li>Profitability intelligence by project, product, or service line</li>
              <li>Vendor spend, commitments, and exception visibility</li>
              <li>Operational efficiency indicators tied to real event data</li>
              <li>Compliance exceptions with governed escalation</li>
            </ul>
            <div className="mt-5 text-sm text-white/70">
              See also:{" "}
              <Link className="text-gold-400 underline underline-offset-4" href="/real-time-financial-intelligence">
                Real-Time Financial Intelligence
              </Link>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="Governed AI alerts" description="Decision-support with oversight—not autonomy." />
          <CardBody className="space-y-3 text-sm text-white/70">
            <p>
              Alerts and recommendations are treated as governed signals: explainable, reviewable, and auditable.
              This supports human judgment and reduces operational risk.
            </p>
            <div className="rounded-lg border border-white/10 bg-navy-950/30 px-4 py-3 text-xs text-white/60">
              Human oversight · Explainability · Audit visibility · Operational governance
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="mt-10">
        <KPIWidgets />
      </div>
    </PageShell>
  );
}

