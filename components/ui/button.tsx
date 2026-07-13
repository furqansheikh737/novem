import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center",
        "h-[46px] rounded-full",
        "px-8",
        "text-[13px] font-semibold uppercase tracking-[0.08em]",
        "text-white",
        "bg-gradient-to-b from-[#C98A5A] to-[#A86C42]",
        "shadow-[0_8px_20px_rgba(168,108,66,0.28)]",
        "transition-all duration-300",
        "hover:-translate-y-0.5",
        "hover:shadow-[0_12px_24px_rgba(168,108,66,0.38)]",
        "hover:from-[#D19361] hover:to-[#9D633D]",
        "active:translate-y-0",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}