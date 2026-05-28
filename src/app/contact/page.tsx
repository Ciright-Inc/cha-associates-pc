import type { Metadata } from "next";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CHA Associates PC. Tell us what you’re working on and request advisory routing for operational intelligence, real-time financial visibility, and governance-aware AI."
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Tell us what you’re working on"
      lead="We focus on operational clarity, financially credible intelligence, and governance-aware implementation. Provide a structured intake so we can route your inquiry to the right advisory path."
    >
      <div className="grid gap-6">
        <InquiryForm source="contact" />

        <Card>
          <CardHeader title="Prefer to schedule immediately?" description="Submit inquiry, then schedule securely." />
          <CardBody className="text-sm text-white/70">
            <div className="mt-2">
              <Link className="text-gold-400 underline underline-offset-4" href="/schedule-consultation">
                Schedule a consultation →
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </PageShell>
  );
}

