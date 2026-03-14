import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "cyan" | "red" | "outline";
  className?: string;
}

export function Badge({ children, variant = "green", className }: BadgeProps) {
  const variants = {
    green: "bg-accent-green/10 text-accent-green border-accent-green/20",
    cyan: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20",
    red: "bg-accent-red/10 text-accent-red border-accent-red/20",
    outline: "bg-transparent text-text-muted border-bg-border",
  };

  return (
    <span
      className={cn(
        "px-2 py-0.5 text-xs font-medium border rounded-full",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
