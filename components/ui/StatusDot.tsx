import { cn } from "@/lib/utils";

type Status = "Active" | "In Development" | "Inactive";

const cfg: Record<Status, { dot: string; pulse: string; label: string }> = {
  Active: { dot: "bg-accent-green", pulse: "animate-ping bg-accent-green", label: "text-accent-green" },
  "In Development": { dot: "bg-amber-400", pulse: "animate-ping bg-amber-400", label: "text-amber-400" },
  Inactive: { dot: "bg-text-muted", pulse: "", label: "text-text-muted" },
};

export function StatusDot({ status, showLabel = false, className }: { status: Status; showLabel?: boolean; className?: string }) {
  const { dot, pulse, label } = cfg[status] ?? cfg["Inactive"];
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span className="relative flex h-2 w-2">
        {pulse && <span className={cn("absolute inline-flex h-full w-full rounded-full opacity-75", pulse)} />}
        <span className={cn("relative inline-flex rounded-full h-2 w-2", dot)} />
      </span>
      {showLabel && <span className={cn("text-xs font-medium", label)}>{status}</span>}
    </span>
  );
}
