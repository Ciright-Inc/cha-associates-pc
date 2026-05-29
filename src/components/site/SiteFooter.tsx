import Link from "next/link";
import { BrandMark } from "@/components/site/BrandMark";
import { ButtonLink } from "@/components/ui/Button";

const groups = [
  {
    label: "Platform",
    links: [
      { href: "/operational-intelligence-platform", label: "Operational Intelligence Platform" },
      { href: "/executive-dashboards", label: "Executive Dashboards" },
      { href: "/enterprise-connectivity", label: "Enterprise Connectivity" },
      { href: "/ai-governance", label: "AI Governance" }
    ]
  },
  {
    label: "Advisory",
    links: [
      { href: "/services", label: "Services" },
      { href: "/ai-advisory", label: "AI Advisory" },
      { href: "/real-time-financial-intelligence", label: "Real-Time Financial Intelligence" },
      { href: "/keyra-partner", label: "Keyra Partner" }
    ]
  },
  {
    label: "Insights",
    links: [
      { href: "/executive-intelligence-center", label: "Executive Intelligence Center" },
      { href: "/research-white-papers", label: "Research & White Papers" },
      { href: "/ai-readiness-assessment", label: "AI Readiness Assessment" }
    ]
  }
] as const;

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#050B16]">
      {/* Subtle top glow — contained within footer, no transparency seam */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(184,155,94,0.35)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(900px_180px_at_50%_0%,rgba(184,155,94,0.08),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border border-white/10 bg-[#071027] px-5 py-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                Schedule Consultation
              </div>
              <div className="mt-1 text-base font-semibold tracking-tight text-paper">
                Executive advisory intake, routed intelligently
              </div>
              <div className="mt-1 text-sm text-white/65">
                Submit your inquiry, then schedule securely via{" "}
                <Link
                  href="https://mycalendar.ciright.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 underline underline-offset-4"
                >
                  mycalendar.ciright.com
                </Link>
                .
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <ButtonLink href="/schedule-consultation">Schedule</ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Tell Us What You’re Working On
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_1.95fr]">
          <div>
            <div className="flex items-center gap-3">
              <BrandMark size={40} />
              <div>
                <div className="text-sm font-semibold tracking-wide text-paper">CHA Associates PC</div>
                <div className="text-xs text-white/60">Professional Financial Advisory for the AI Era</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Real-time financial intelligence, operational visibility, and trusted AI guidance for modern
              business. Operational clarity over hype. Human oversight over automation theater.
            </p>
            <div className="mt-5 rounded-xl border border-white/10 bg-[#071027] px-4 py-4 text-sm text-white/70">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Positioning</div>
              <div className="mt-2">
                Meaningful enterprise AI. Financially accountable intelligence. Human-reviewed systems.
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {groups.map((g) => (
              <div key={g.label}>
                <div className="text-xs font-semibold uppercase tracking-widest text-white/60">{g.label}</div>
                <ul className="mt-4 space-y-2">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link className="text-sm text-white/70 transition hover:text-paper" href={l.href}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-white/60">Company</div>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link className="text-sm text-white/70 transition hover:text-paper" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-white/70 transition hover:text-paper" href="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-white/70 transition hover:text-paper" href="/client-portal">
                    Client Portal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-[#050B16]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} CHA Associates PC. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/contact" className="transition hover:text-paper">
              Contact
            </Link>
            <Link href="/client-portal" className="transition hover:text-paper">
              Client Portal
            </Link>
            <Link href="/about" className="transition hover:text-paper">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
