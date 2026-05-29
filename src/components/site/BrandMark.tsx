import { cn } from "@/lib/cn";

export function BrandMark({ className, size = 40 }: { className?: string; size?: number }) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#071027] ring-1 ring-white/10",
        className
      )}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg viewBox="0 0 40 40" fill="none" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" fill="#071027" />
        <circle cx="14" cy="20" r="4" fill="#B89B5E" />
        <path d="M22 20H34" stroke="#B89B5E" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
        <path d="M22 14H30" stroke="rgba(247,248,250,0.55)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 26H32" stroke="rgba(247,248,250,0.55)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}
