"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const kpis = [
  { label: "Daily Cash Position", value: "$2.46M", delta: "+1.2%" },
  { label: "Revenue Today", value: "$182K", delta: "+4.7%" },
  { label: "Expenses Today", value: "$96K", delta: "+0.9%" },
  { label: "Forecasted Cash Flow", value: "$8.1M", delta: "30d" },
  { label: "Payroll Exposure", value: "$412K", delta: "Next 14d" },
  { label: "Project Margin", value: "18.4%", delta: "+0.6pp" },
  { label: "Vendor Spend", value: "$73K", delta: "This week" },
  { label: "AI Risk Alerts", value: "3", delta: "Governed" },
  { label: "Operational Efficiency", value: "92", delta: "Index" },
  { label: "Compliance Exceptions", value: "2", delta: "Review" }
] as const;

export function KPIWidgets() {
  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
      {kpis.map((kpi, idx) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: idx * 0.03 }}
        >
          <Card className="h-full px-4 py-4">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
              {kpi.label}
            </div>
            <div className="mt-2 flex items-end justify-between gap-4">
              <div className="text-lg font-semibold tracking-tight text-paper">{kpi.value}</div>
              <div className="text-xs text-white/60">{kpi.delta}</div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

