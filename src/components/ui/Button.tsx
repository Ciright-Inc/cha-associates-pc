"use client";

import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "outline";

const styles: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-[0_18px_50px_rgba(184,155,94,0.18)]",
  ghost: "bg-white/5 text-paper hover:bg-white/10",
  outline: "border border-white/15 bg-transparent text-paper hover:bg-white/5"
};

export function Button({
  className,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold tracking-wide transition",
        "disabled:cursor-not-allowed disabled:opacity-60",
        styles[variant],
        className
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  href,
  variant = "primary",
  ...props
}: React.ComponentProps<typeof Link> & { variant?: Variant }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold tracking-wide transition",
        styles[variant],
        className
      )}
      {...props}
    />
  );
}

