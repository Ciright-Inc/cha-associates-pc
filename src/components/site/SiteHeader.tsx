"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/operational-intelligence-platform", label: "Platform" },
  { href: "/industries", label: "Industries" },
  { href: "/ai-governance", label: "AI Governance" },
  { href: "/executive-intelligence-center", label: "Executive Intelligence Center" },
  { href: "/research-white-papers", label: "Research" },
  { href: "/about", label: "About" }
] as const;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5">
      <span
        className={cn(
          "absolute left-0 top-0 block h-[2px] w-5 rounded bg-paper transition",
          open && "top-[7px] rotate-45"
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-[7px] block h-[2px] w-5 rounded bg-paper transition",
          open && "opacity-0"
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-[14px] block h-[2px] w-5 rounded bg-paper transition",
          open && "top-[7px] -rotate-45"
        )}
      />
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/80 backdrop-blur supports-[backdrop-filter]:bg-navy-950/55">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 shadow-ring">
              <span className="h-2.5 w-2.5 rounded-full bg-gold-500" />
              <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-wide text-paper">
                CHA Associates PC
              </span>
              <span className="block text-[11px] tracking-wide text-white/60">
                Professional Financial Advisory for the AI Era
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-paper",
                    active && "bg-white/5 text-paper"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="/ai-readiness-assessment"
            variant="ghost"
            className="hidden md:inline-flex"
          >
            Start AI Readiness
          </ButtonLink>
          <ButtonLink href="/schedule-consultation">Schedule Consultation</ButtonLink>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold tracking-wide text-paper transition hover:bg-white/10 md:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
          />
          <div className="fixed right-0 top-0 z-50 h-dvh w-[92vw] max-w-sm border-l border-white/10 bg-navy-950/95 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.55)] md:hidden">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">Navigation</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-paper hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <nav className="mt-4 grid gap-1" aria-label="Mobile">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-lg px-4 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-paper",
                      active && "bg-white/5 text-paper"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 grid gap-2">
              <ButtonLink href="/schedule-consultation" className="w-full">
                Schedule Consultation
              </ButtonLink>
              <ButtonLink href="/ai-readiness-assessment" variant="outline" className="w-full">
                Start AI Readiness Assessment
              </ButtonLink>
              <ButtonLink href="/contact" variant="ghost" className="w-full">
                Tell Us What You’re Working On
              </ButtonLink>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/70">
              <div className="font-semibold text-paper">Operational clarity.</div>
              <div className="mt-1 text-white/65">Financially accountable intelligence with governance and oversight.</div>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}

