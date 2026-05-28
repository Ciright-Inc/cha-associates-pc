export function ConnectivityDiagram() {
  const systems = [
    "SAP",
    "Oracle",
    "Microsoft Dynamics",
    "NetSuite",
    "Salesforce",
    "QuickBooks",
    "ServiceNow",
    "Payroll systems",
    "Banking APIs",
    "Procurement systems"
  ] as const;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="px-5 py-5">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
          Live enterprise connectivity (conceptual)
        </div>
        <div className="mt-2 text-sm text-white/70">
          Operational intelligence requires connected systems—focused on business connectivity, not technical jargon.
        </div>
      </div>
      <div className="border-t border-white/10 bg-navy-950/40 px-5 py-6">
        <div className="grid gap-3 md:grid-cols-[1fr_220px_1fr] md:items-center">
          <div className="grid gap-2 sm:grid-cols-2">
            {systems.slice(0, 5).map((s) => (
              <div
                key={s}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75"
              >
                {s}
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[rgba(184,155,94,0.35)] bg-[#0C1A3A] px-5 py-6 text-center shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">CHA Layer</div>
            <div className="mt-2 text-base font-semibold text-paper">Operational Intelligence</div>
            <div className="mt-1 text-xs text-white/60">Normalization · Governance · Visibility</div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {systems.slice(5).map((s) => (
              <div
                key={s}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

