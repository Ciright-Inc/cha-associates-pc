import type { Metadata } from "next";
import Link from "next/link";
import { ConnectivityDiagram } from "@/components/platform/ConnectivityDiagram";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Enterprise Connectivity",
  description:
    "Conceptual integration architecture for enterprise systems: ERP, CRM, payroll, banking, procurement, and operations—connected for operational visibility and financial intelligence."
};

export default function EnterpriseConnectivityPage() {
  return (
    <PageShell
      eyebrow="Enterprise connectivity"
      title="Connected systems enable operational intelligence"
      lead="Operational intelligence requires connected systems. We design the integration posture conceptually—focused on business connectivity, trustworthy data, and governed visibility."
    >
      <ConnectivityDiagram />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader title="What we prioritize" description="Trustworthiness and business meaning." />
          <CardBody className="text-sm text-white/70">
            <ul className="list-disc space-y-2 pl-5">
              <li>Operational event ingestion aligned to workflows</li>
              <li>Normalization and consistent definitions</li>
              <li>Reconciliation and financial meaning mapping</li>
              <li>Permissions, approvals, and audit visibility</li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader title="Where it shows up" description="Dashboards, alerts, and governed recommendations." />
          <CardBody className="space-y-3 text-sm text-white/70">
            <p>
              Connectivity supports real-time reporting, operational visibility, exception management, and executive
              decision cadence.
            </p>
            <div>
              See also:{" "}
              <Link className="text-gold-400 underline underline-offset-4" href="/executive-dashboards">
                Executive Dashboards
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </PageShell>
  );
}

