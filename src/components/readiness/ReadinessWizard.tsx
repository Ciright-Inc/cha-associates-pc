"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type Answer = 0 | 1 | 2 | 3 | 4;

type Question = {
  id: string;
  domain:
    | "Data trust"
    | "Workflow maturity"
    | "Governance readiness"
    | "Security & audit"
    | "Operating model"
    | "Value definition";
  prompt: string;
  guidance: string;
};

const questions: Question[] = [
  {
    id: "data_lineage",
    domain: "Data trust",
    prompt: "Do you have consistent definitions for key financial and operational metrics across systems?",
    guidance: "Trust requires consistent definitions, lineage, and reconciliation."
  },
  {
    id: "event_capture",
    domain: "Workflow maturity",
    prompt: "Can your critical workflows emit reliable operational events (projects, orders, tickets, production runs)?",
    guidance: "Operational intelligence begins with event telemetry that maps to business reality."
  },
  {
    id: "controls",
    domain: "Governance readiness",
    prompt: "Do you have permissions, approvals, and escalation paths for decision-support recommendations?",
    guidance: "Governance workflows are the difference between trusted signals and risky automation."
  },
  {
    id: "audit",
    domain: "Security & audit",
    prompt: "Can you audit who accessed what, why a recommendation was made, and what action occurred?",
    guidance: "Explainability and audit visibility are prerequisites for enterprise trust."
  },
  {
    id: "owners",
    domain: "Operating model",
    prompt: "Are owners assigned for data quality, model oversight, exceptions, and continuous improvement?",
    guidance: "AI systems require accountable human ownership—by design."
  },
  {
    id: "value",
    domain: "Value definition",
    prompt: "Do you have measurable outcomes defined (cash visibility, margin leakage reduction, cycle-time gains)?",
    guidance: "Financial accountability prevents hype-driven initiatives."
  }
];

const scale: Array<{ label: string; value: Answer }> = [
  { label: "Not started", value: 0 },
  { label: "Early", value: 1 },
  { label: "Developing", value: 2 },
  { label: "Established", value: 3 },
  { label: "Strong", value: 4 }
];

function scoreLabel(score: number) {
  if (score >= 85) return { tier: "Ready", note: "Strong foundation for governed, enterprise-grade deployment." };
  if (score >= 65) return { tier: "Progressing", note: "Good direction—close key gaps before scaling." };
  if (score >= 45) return { tier: "Emerging", note: "Foundational work needed to ensure trust and accountability." };
  return { tier: "Early stage", note: "Start with data trust, workflow telemetry, and governance design." };
}

export function ReadinessWizard() {
  const [answers, setAnswers] = React.useState<Record<string, Answer>>(() =>
    Object.fromEntries(questions.map((q) => [q.id, 0]))
  );
  const [idx, setIdx] = React.useState(0);
  const current = questions[idx];

  const total = questions.length * 4;
  const raw = Object.values(answers).reduce<number>((a, b) => a + b, 0);
  const score = Math.round((raw / total) * 100);
  const label = scoreLabel(score);

  const domains = React.useMemo(() => {
    const byDomain = new Map<Question["domain"], { sum: number; max: number }>();
    for (const q of questions) {
      const v = answers[q.id] ?? 0;
      const cur = byDomain.get(q.domain) ?? { sum: 0, max: 0 };
      byDomain.set(q.domain, { sum: cur.sum + v, max: cur.max + 4 });
    }
    return Array.from(byDomain.entries()).map(([domain, v]) => ({
      domain,
      pct: Math.round((v.sum / v.max) * 100)
    }));
  }, [answers]);

  return (
    <div className="grid gap-6">
      <Card className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">AI readiness scoring</div>
            <div className="mt-2 text-xl font-semibold tracking-tight text-paper">
              {label.tier} <span className="text-white/55">({score}/100)</span>
            </div>
            <div className="mt-2 text-sm text-white/70">{label.note}</div>
          </div>

          <div className="w-full max-w-md">
            <div className="flex items-center justify-between text-xs text-white/55">
              <span>Progress</span>
              <span>
                {idx + 1}/{questions.length}
              </span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-[rgba(184,155,94,0.75)]" style={{ width: `${Math.round(((idx + 1) / questions.length) * 100)}%` }} />
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">{current.domain}</div>
        <div className="mt-3 text-lg font-semibold tracking-tight text-paper">{current.prompt}</div>
        <div className="mt-2 text-sm text-white/70">{current.guidance}</div>

        <div className="mt-6 grid gap-3 md:grid-cols-5">
          {scale.map((s) => {
            const active = answers[current.id] === s.value;
            return (
              <button
                key={s.value}
                type="button"
                onClick={() => setAnswers((a) => ({ ...a, [current.id]: s.value }))}
                className={[
                  "rounded-xl border px-4 py-3 text-left transition",
                  active
                    ? "border-[rgba(184,155,94,0.55)] bg-[rgba(184,155,94,0.10)]"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                ].join(" ")}
              >
                <div className="text-sm font-semibold text-paper">{s.label}</div>
                <div className="mt-1 text-xs text-white/55">Score: {s.value}/4</div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-white/55">
            “AI should improve human judgment, not replace it.” This score is directional and reviewed with you.
          </div>
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIdx((i) => Math.max(0, i - 1))}
              disabled={idx === 0}
            >
              Back
            </Button>
            <Button
              type="button"
              onClick={() => setIdx((i) => Math.min(questions.length - 1, i + 1))}
              disabled={idx === questions.length - 1}
            >
              Next
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">Domain breakdown</div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {domains.map((d, i) => (
            <motion.div
              key={d.domain}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-4"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{d.domain}</div>
              <div className="mt-2 flex items-end justify-between">
                <div className="text-lg font-semibold text-paper">{d.pct}%</div>
                <div className="text-xs text-white/55">maturity</div>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-[rgba(184,155,94,0.75)]" style={{ width: `${d.pct}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
}

