import { cn } from "@/lib/cn";

export function Card({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.35)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="border-b border-white/10 px-5 py-4">
      <div className="text-sm font-semibold tracking-wide text-paper">{title}</div>
      {description ? <div className="mt-1 text-xs leading-relaxed text-white/60">{description}</div> : null}
    </div>
  );
}

export function CardBody({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("px-5 py-5", className)}>{children}</div>;
}

