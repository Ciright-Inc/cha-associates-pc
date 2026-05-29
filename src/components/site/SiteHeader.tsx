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
  { href: "/executive-intelligence-center", label: "Intelligence Center" },
  { href: "/research-white-papers", label: "Research" },
  { href: "/about", label: "About" }
] as const;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5">
      <span
        className={cn(
          "absolute left-0 top-0 block h-[2px] w-5 rounded bg-paper transition-all duration-200",
          open && "top-[7px] rotate-45"
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-[7px] block h-[2px] w-5 rounded bg-paper transition-all duration-200",
          open && "opacity-0"
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-[14px] block h-[2px] w-5 rounded bg-paper transition-all duration-200",
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

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050B16]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(184,155,94,0.25)] to-transparent"
      />

      {/* Top bar: brand + CTAs */}
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="group inline-flex min-w-0 items-center gap-3">
          <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#071027] ring-1 ring-white/10">
            <span className="h-2.5 w-2.5 rounded-full bg-gold-500" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-semibold tracking-wide text-paper">
              CHA Associates PC
            </span>
            <span className="hidden truncate text-[11px] text-white/60 sm:block">
              Professional Financial Advisory for the AI Era
            </span>
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ButtonLink
            href="/ai-readiness-assessment"
            variant="ghost"
            className="hidden lg:inline-flex"
          >
            AI Readiness
          </ButtonLink>
          <ButtonLink href="/schedule-consultation" className="hidden sm:inline-flex">
            Schedule Consultation
          </ButtonLink>
          <ButtonLink href="/schedule-consultation" className="inline-flex sm:hidden px-3">
            Schedule
          </ButtonLink>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-[#071027] p-2.5 text-paper transition hover:bg-[#0C1A3A] md:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {/* Desktop navigation strip */}
      <div className="relative hidden border-t border-white/10 bg-[#071027] md:block">
        <nav
          className="mx-auto flex max-w-6xl items-center gap-0.5 overflow-x-auto px-4 py-2 scrollbar-none"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-lg px-3 py-2 text-sm transition",
                  active
                    ? "bg-[#0C1A3A] text-paper ring-1 ring-[rgba(184,155,94,0.35)]"
                    : "text-white/70 hover:bg-[#0C1A3A]/60 hover:text-paper"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile drawer */}
      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
          />
          <div className="fixed inset-y-0 right-0 z-50 flex w-[min(92vw,22rem)] flex-col border-l border-white/10 bg-[#050B16] shadow-[0_30px_120px_rgba(0,0,0,0.55)] md:hidden">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                Navigation
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/10 bg-[#071027] px-3 py-2 text-sm font-semibold text-paper hover:bg-[#0C1A3A]"
              >
                Close
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile">
              <div className="grid gap-1">
                {nav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-lg px-4 py-3 text-sm transition",
                        active
                          ? "bg-[#0C1A3A] text-paper ring-1 ring-[rgba(184,155,94,0.35)]"
                          : "text-white/75 hover:bg-[#071027] hover:text-paper"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>

            <div className="border-t border-white/10 bg-[#071027] px-4 py-4">
              <div className="grid gap-2">
                <ButtonLink href="/schedule-consultation" className="w-full">
                  Schedule Consultation
                </ButtonLink>
                <ButtonLink href="/ai-readiness-assessment" variant="outline" className="w-full">
                  Start AI Readiness
                </ButtonLink>
                <ButtonLink href="/contact" variant="ghost" className="w-full">
                  Contact Us
                </ButtonLink>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
