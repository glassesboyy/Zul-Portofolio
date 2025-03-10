import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full shadow-sm shadow-cyan-400 font-normal cursor-pointer border border-violet-500/30 hover:border-violet-500/50 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300",
        variant === "default" && " bg-black/20 text-white",
        variant === "secondary" && "bg-violet-500/20 text-white/70"
      )}
    >
      {children}
    </span>
  );
}
