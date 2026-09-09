import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "active";
}

export function Badge({ children, className = "", variant = "default" }: BadgeProps) {
  const variantStyles = {
    default: "bg-[var(--tag-bg)] text-[var(--text-primary)] border border-[var(--border-color)]",
    outline: "bg-transparent text-[var(--text-muted)] border border-[var(--border-color)]",
    active: "bg-[var(--text-primary)] text-[var(--bg-color)] border border-[var(--text-primary)]",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md font-mono text-xs font-medium tracking-tight transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
