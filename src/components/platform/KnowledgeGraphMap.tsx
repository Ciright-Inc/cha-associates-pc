"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "industries", label: "Industries", x: 140, y: 120 },
  { id: "workflows", label: "Workflows", x: 360, y: 120 },
  { id: "regulations", label: "Regulations", x: 580, y: 120 },
  { id: "departments", label: "Departments", x: 800, y: 120 },

  { id: "events", label: "Operational Events", x: 260, y: 320 },
  { id: "impacts", label: "Financial Impacts", x: 520, y: 320 },
  { id: "vendors", label: "Vendors", x: 780, y: 320 },

  { id: "aisystems", label: "AI Systems", x: 400, y: 520 },
  { id: "compliance", label: "Compliance Requirements", x: 680, y: 520 }
] as const;

const edges: Array<[string, string]> = [
  ["industries", "workflows"],
  ["workflows", "events"],
  ["events", "impacts"],
  ["regulations", "compliance"],
  ["departments", "events"],
  ["vendors", "events"],
  ["vendors", "aisystems"],
  ["aisystems", "compliance"],
  ["impacts", "aisystems"],
  ["workflows", "departments"],
  ["regulations", "workflows"]
];

function getNode(id: string) {
  const n = nodes.find((x) => x.id === id);
  if (!n) throw new Error("node not found");
  return n;
}

export function KnowledgeGraphMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="px-5 py-5">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
          Enterprise knowledge graph layer (conceptual)
        </div>
        <div className="mt-2 text-sm text-white/70">Every operational event is connected.</div>
      </div>
      <div className="border-t border-white/10 bg-navy-950/40">
        <svg viewBox="0 0 960 620" className="h-[380px] w-full md:h-[460px]" role="img" aria-label="Enterprise knowledge graph conceptual diagram">
          {edges.map(([a, b], idx) => {
            const A = getNode(a);
            const B = getNode(b);
            return (
              <motion.line
                key={`${a}-${b}`}
                x1={A.x}
                y1={A.y}
                x2={B.x}
                y2={B.y}
                stroke="rgba(184,155,94,0.45)"
                strokeWidth="1.6"
                initial={{ pathLength: 0, opacity: 0.2 }}
                whileInView={{ pathLength: 1, opacity: 0.7 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.02 }}
              />
            );
          })}

          {nodes.map((n, idx) => (
            <motion.g
              key={n.id}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
            >
              <rect
                x={n.x - 92}
                y={n.y - 24}
                width="184"
                height="48"
                rx="12"
                fill="rgba(255,255,255,0.06)"
                stroke="rgba(255,255,255,0.14)"
              />
              <text
                x={n.x}
                y={n.y + 5}
                textAnchor="middle"
                fill="rgba(247,248,250,0.92)"
                fontSize="13"
                fontWeight="600"
              >
                {n.label}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>
    </div>
  );
}

