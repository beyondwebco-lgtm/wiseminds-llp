import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        centered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full mb-3",
            isDark
              ? "bg-[#2446A8]/40 text-[#F4C430] border border-[#F4C430]/30"
              : "bg-[#2446A8]/10 text-[#2446A8] border border-[#2446A8]/20"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]" />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight",
          isDark ? "text-white" : "text-[#0B1739]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            isDark ? "text-slate-300" : "text-[#475569]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
