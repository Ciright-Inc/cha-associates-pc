"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  tone: "event" | "engine" | "dashboard";
};

const nodes: Node[] = [
  // operational + financial events
  { id: "sales", label: "Sales", x: 70, y: 80, tone: "event" },
  { id: "ops", label: "Operations", x: 70, y: 160, tone: "event" },
  { id: "proc", label: "Procurement", x: 70, y: 240, tone: "event" },
  { id: "payroll", label: "Payroll", x: 70, y: 320, tone: "event" },
  { id: "finance", label: "Finance", x: 70, y: 400, tone: "event" },
  { id: "compliance", label: "Compliance", x: 70, y: 480, tone: "event" },
  { id: "support", label: "Customer Service", x: 70, y: 560, tone: "event" },
  { id: "inventory", label: "Inventory", x: 70, y: 640, tone: "event" },
  { id: "projects", label: "Project Mgmt", x: 70, y: 720, tone: "event" },

  // engine
  { id: "engine", label: "Intelligence Engine", x: 540, y: 410, tone: "engine" },

  // dashboard
  { id: "dash", label: "Executive Dashboards", x: 980, y: 410, tone: "dashboard" }
];

const edges = [
  // left events -> engine
  ["sales", "engine"],
  ["ops", "engine"],
  ["proc", "engine"],
  ["payroll", "engine"],
  ["finance", "engine"],
  ["compliance", "engine"],
  ["support", "engine"],
  ["inventory", "engine"],
  ["projects", "engine"],
  // engine -> dashboard
  ["engine", "dash"]
] as const;

function getNode(id: string) {
  const n = nodes.find((x) => x.id === id);
  if (!n) throw new Error(`Unknown node: ${id}`);
  return n;
}

function nodeStyles(tone: Node["tone"]) {
  if (tone === "engine") return "fill-[#0C1A3A] stroke-[rgba(184,155,94,0.55)]";
  if (tone === "dashboard") return "fill-[rgba(255,255,255,0.06)] stroke-[rgba(255,255,255,0.18)]";
  return "fill-[rgba(255,255,255,0.03)] stroke-[rgba(255,255,255,0.12)]";
}

export function AIFlowAnimation({ className }: { className?: string }) {
  const [pulse, setPulse] = React.useState(0);

  React.useEffect(() => {
    const t = window.setInterval(() => setPulse((p) => (p + 1) % 9999), 1800);
    return () => window.clearInterval(t);
  }, []);

  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-white/10 bg-white/5", className)}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_30%_0%,rgba(184,155,94,0.12),transparent_55%),radial-gradient(700px_420px_at_90%_20%,rgba(140,170,255,0.10),transparent_55%)]" />
      <div className="relative px-5 py-5">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Real-Time Business Intelligence Flow
            </div>
            <div className="mt-2 text-lg font-semibold tracking-tight text-paper md:text-xl">
              Operational events → financial meaning → executive visibility
            </div>
          </div>
          <div className="text-sm text-white/60">
            Normalization · Classification · Reconciliation · GL Sync · Forecasting · KPI Generation
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-navy-950/40">
          <svg viewBox="0 0 1100 820" className="h-[420px] w-full md:h-[520px]" role="img" aria-label="Operational intelligence data flow diagram">
            <defs>
              <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(184,155,94,0.08)" />
                <stop offset="60%" stopColor="rgba(184,155,94,0.55)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
              </linearGradient>
              <filter id="softGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* edges */}
            {edges.map(([a, b]) => {
              const A = getNode(a);
              const B = getNode(b);
              const x1 = A.x + (a === "engine" ? 130 : 130);
              const y1 = A.y;
              const x2 = B.x - (b === "engine" ? 130 : 140);
              const y2 = B.y;
              const midX = (x1 + x2) / 2;
              const d = `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
              return (
                <g key={`${a}-${b}`}>
                  <path d={d} stroke="url(#goldLine)" strokeWidth="1.4" fill="none" opacity="0.55" />
                  <motion.path
                    key={`${a}-${b}-${pulse}`}
                    d={d}
                    stroke="rgba(184,155,94,0.9)"
                    strokeWidth="2.2"
                    fill="none"
                    pathLength={1}
                    strokeDasharray="0.06 0.94"
                    filter="url(#softGlow)"
                    initial={{ strokeDashoffset: 1 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: a === "engine" ? 1.1 : 1.35, ease: "easeInOut" }}
                    opacity={a === "engine" ? 0.8 : 0.55}
                  />
                </g>
              );
            })}

            {/* engine ring */}
            <motion.circle
              cx={540}
              cy={410}
              r={150}
              fill="none"
              stroke="rgba(184,155,94,0.28)"
              strokeWidth="2"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.55, 0.2] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* nodes */}
            {nodes.map((n) => (
              <g key={n.id} transform={`translate(${n.x - 130}, ${n.y - 26})`}>
                <rect
                  x="0"
                  y="0"
                  width={n.id === "engine" ? 260 : n.id === "dash" ? 280 : 260}
                  height="52"
                  rx="12"
                  className={nodeStyles(n.tone)}
                />
                {n.id === "engine" ? (
                  <motion.rect
                    x="0"
                    y="0"
                    width="260"
                    height="52"
                    rx="12"
                    fill="none"
                    stroke="rgba(184,155,94,0.65)"
                    strokeWidth="1.8"
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: [0.25, 0.7, 0.25] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                    filter="url(#softGlow)"
                  />
                ) : null}
                <text x="16" y="32" fill="rgba(247,248,250,0.92)" fontSize="14" fontWeight="600">
                  {n.label}
                </text>
                {n.tone === "event" ? (
                  <text x="16" y="46" fill="rgba(255,255,255,0.55)" fontSize="11">
                    Telemetry · Events · Costs · Signals
                  </text>
                ) : n.tone === "engine" ? (
                  <text x="16" y="46" fill="rgba(255,255,255,0.6)" fontSize="11">
                    Normalize · Classify · Reconcile · Govern
                  </text>
                ) : (
                  <text x="16" y="46" fill="rgba(255,255,255,0.55)" fontSize="11">
                    KPIs · Forecasts · Alerts · Executive Reporting
                  </text>
                )}
              </g>
            ))}
          </svg>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Principle</div>
            <div className="mt-2 text-sm text-white/75">Every business event has financial meaning.</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Standard</div>
            <div className="mt-2 text-sm text-white/75">Operational intelligence begins with trustworthy data.</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Governance</div>
            <div className="mt-2 text-sm text-white/75">
              AI should improve human judgment, not replace it.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

