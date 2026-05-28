"use client";

import * as React from "react";
import { buildCalendarUrl } from "@/lib/calendar";
import type { AreaOfInterest, ConsultationType, Industry } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type FormState = {
  firstName: string;
  lastName: string;
  companyName: string;
  jobTitle: string;
  email: string;
  phoneNumber: string;
  industry: Industry | "Other" | "";
  companySize: string;
  geographicRegion: string;
  areaOfInterest: AreaOfInterest | "";
  currentBusinessChallenge: string;
  operationalGoals: string;
  preferredConsultationType: ConsultationType | "";
  preferredTimeframe: string;
  preferredConsultationDate: string;
  consent: boolean;
};

const industries: Array<FormState["industry"]> = [
  "",
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
  "Professional Services",
  "Other"
];

const interests: Array<FormState["areaOfInterest"]> = [
  "",
  "Real-Time Financial Intelligence",
  "AI Readiness Assessment",
  "AI Governance",
  "AI Vendor Review",
  "Operational Intelligence",
  "Workflow Optimization",
  "Financial Reporting Modernization",
  "Enterprise Visibility",
  "Keyra Partner Advisory",
  "Executive Strategy Advisory"
];

const consultationTypes: Array<FormState["preferredConsultationType"]> = [
  "",
  "Introductory Consultation",
  "CFO Advisory Session",
  "AI Readiness Review",
  "Vendor Contract Review",
  "Operational Intelligence Review",
  "Executive Strategy Session",
  "Financial Visibility Assessment"
];

function Field({
  label,
  children,
  hint
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{label}</div>
      <div className="mt-2">{children}</div>
      {hint ? <div className="mt-2 text-xs text-white/50">{hint}</div> : null}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-md border border-white/10 bg-navy-950/40 px-3 py-2 text-sm text-paper",
        "placeholder:text-white/35",
        "focus:border-[rgba(184,155,94,0.55)] focus:ring-0"
      ].join(" ")}
    />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={[
        "w-full rounded-md border border-white/10 bg-navy-950/40 px-3 py-2 text-sm text-paper",
        "focus:border-[rgba(184,155,94,0.55)] focus:ring-0"
      ].join(" ")}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={[
        "min-h-28 w-full rounded-md border border-white/10 bg-navy-950/40 px-3 py-2 text-sm text-paper",
        "placeholder:text-white/35",
        "focus:border-[rgba(184,155,94,0.55)] focus:ring-0"
      ].join(" ")}
    />
  );
}

const initial: FormState = {
  firstName: "",
  lastName: "",
  companyName: "",
  jobTitle: "",
  email: "",
  phoneNumber: "",
  industry: "",
  companySize: "",
  geographicRegion: "",
  areaOfInterest: "",
  currentBusinessChallenge: "",
  operationalGoals: "",
  preferredConsultationType: "",
  preferredTimeframe: "",
  preferredConsultationDate: "",
  consent: false
};

export function InquiryForm({
  source,
  redirectToCalendar
}: {
  source: "contact" | "schedule";
  redirectToCalendar?: boolean;
}) {
  const [state, setState] = React.useState<FormState>(initial);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...state, source })
      });
      const json = (await res.json().catch(() => null)) as { ok: boolean; error?: string; message?: string } | null;
      if (!res.ok || !json?.ok) {
        throw new Error(json?.error ?? "Submission failed");
      }
      setSuccess(
        json.message ??
          "Thank you for contacting CHA Associates PC. Your inquiry has been received. You may now select a consultation time through our secure scheduling platform."
      );

      if (redirectToCalendar) {
        const url = buildCalendarUrl({
          consultationType: state.preferredConsultationType,
          areaOfInterest: state.areaOfInterest,
          email: state.email,
          companyName: state.companyName
        });
        window.open(url, "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Card className="p-5">
      <form onSubmit={onSubmit} className="grid gap-5">
        <div className="text-sm text-white/70">
          This intake is structured for executive advisory routing. We focus on operational clarity, financially
          accountable intelligence, and governed implementation plans.
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="First Name">
            <Input value={state.firstName} onChange={(e) => setState({ ...state, firstName: e.target.value })} required />
          </Field>
          <Field label="Last Name">
            <Input value={state.lastName} onChange={(e) => setState({ ...state, lastName: e.target.value })} required />
          </Field>
          <Field label="Company Name">
            <Input value={state.companyName} onChange={(e) => setState({ ...state, companyName: e.target.value })} required />
          </Field>
          <Field label="Job Title">
            <Input value={state.jobTitle} onChange={(e) => setState({ ...state, jobTitle: e.target.value })} required />
          </Field>
          <Field label="Email Address">
            <Input type="email" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} required />
          </Field>
          <Field label="Phone Number">
            <Input value={state.phoneNumber} onChange={(e) => setState({ ...state, phoneNumber: e.target.value })} required />
          </Field>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Field label="Industry">
            <Select value={state.industry} onChange={(e) => setState({ ...state, industry: e.target.value as FormState["industry"] })} required>
              {industries.map((i) => (
                <option key={i} value={i}>
                  {i === "" ? "Select…" : i}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Company Size" hint="Examples: 1–50, 51–200, 201–1000, 1000+">
            <Input value={state.companySize} onChange={(e) => setState({ ...state, companySize: e.target.value })} required />
          </Field>
          <Field label="Geographic Region" hint="Examples: North America, EMEA, APAC">
            <Input value={state.geographicRegion} onChange={(e) => setState({ ...state, geographicRegion: e.target.value })} required />
          </Field>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Area of Interest">
            <Select value={state.areaOfInterest} onChange={(e) => setState({ ...state, areaOfInterest: e.target.value as FormState["areaOfInterest"] })} required>
              {interests.map((i) => (
                <option key={i} value={i}>
                  {i === "" ? "Select…" : i}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Preferred Consultation Type">
            <Select
              value={state.preferredConsultationType}
              onChange={(e) =>
                setState({ ...state, preferredConsultationType: e.target.value as FormState["preferredConsultationType"] })
              }
              required
            >
              {consultationTypes.map((t) => (
                <option key={t} value={t}>
                  {t === "" ? "Select…" : t}
                </option>
              ))}
            </Select>
          </Field>
        </div>

        <Field label="Current Business Challenge">
          <Textarea
            value={state.currentBusinessChallenge}
            onChange={(e) => setState({ ...state, currentBusinessChallenge: e.target.value })}
            required
            placeholder="Describe the operational environment, constraints, and what needs clarity."
          />
        </Field>

        <Field label="Operational Goals">
          <Textarea
            value={state.operationalGoals}
            onChange={(e) => setState({ ...state, operationalGoals: e.target.value })}
            required
            placeholder="Examples: real-time cash visibility, profitability intelligence, exception governance, workflow efficiency."
          />
        </Field>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Preferred Timeframe" hint="Examples: This month, 30–60 days, This quarter">
            <Input value={state.preferredTimeframe} onChange={(e) => setState({ ...state, preferredTimeframe: e.target.value })} required />
          </Field>
          <Field label="Preferred Consultation Date" hint="If you have a specific target date, enter it here.">
            <Input
              value={state.preferredConsultationDate}
              onChange={(e) => setState({ ...state, preferredConsultationDate: e.target.value })}
              required
              placeholder="YYYY-MM-DD (or a preferred date range)"
            />
          </Field>
        </div>

        <label className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
          <input
            type="checkbox"
            checked={state.consent}
            onChange={(e) => setState({ ...state, consent: e.target.checked })}
            className="mt-1 h-4 w-4 accent-gold-500"
            required
          />
          <span>
            I consent to be contacted by CHA Associates PC regarding this inquiry. I understand this platform is
            governance-aware and human-centered, and does not provide autonomous decision-making.
          </span>
        </label>

        {error ? <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">{error}</div> : null}
        {success ? (
          <div className="rounded-xl border border-[rgba(184,155,94,0.35)] bg-[rgba(184,155,94,0.12)] px-4 py-3 text-sm text-paper">
            {success}
          </div>
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-white/55">
            After submission, you can schedule through our secure platform: <span className="text-paper">mycalendar.ciright.com</span>
          </div>
          <Button type="submit" disabled={submitting}>
            {submitting ? "Submitting…" : "Submit inquiry"}
          </Button>
        </div>
      </form>
    </Card>
  );
}

