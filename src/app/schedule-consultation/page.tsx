import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Schedule Consultation",
  description:
    "Schedule a consultation with CHA Associates PC. Submit an executive intake inquiry, then select a time through our secure scheduling platform."
};

export default function ScheduleConsultationPage() {
  return (
    <PageShell
      eyebrow="Schedule Consultation"
      title="Executive advisory intake"
      lead="Submit your inquiry first. We route it intelligently, then you select a time through our secure scheduling platform."
    >
      <div className="grid gap-6">
        <InquiryForm source="schedule" redirectToCalendar />

        <Card>
          <CardHeader
            title="Secure scheduling platform"
            description="If your environment blocks embedded scheduling, open scheduling in a new tab."
          />
          <CardBody className="text-sm text-white/70">
            <p>
              After submitting the inquiry, you may select a consultation time through our secure scheduling
              platform.
            </p>
            <div className="mt-4">
              <Link
                className="text-gold-400 underline underline-offset-4"
                href="https://mycalendar.ciright.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open scheduling →
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </PageShell>
  );
}

