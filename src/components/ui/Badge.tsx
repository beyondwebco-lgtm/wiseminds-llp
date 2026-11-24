import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "gold" | "navy" | "outline" | "white";
  className?: string;
}

export function Badge({ children, variant = "blue", className }: BadgeProps) {
  const variants = {
    blue: "bg-[#2446A8]/10 text-[#2446A8] border-[#2446A8]/20",
    gold: "bg-[#F4C430]/20 text-[#8F6B00] border-[#F4C430]/40",
    navy: "bg-[#0B1739] text-white border-transparent",
    outline: "bg-transparent text-[#475569] border-slate-300",
    white: "bg-white/15 text-white border-white/20 backdrop-blur-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
