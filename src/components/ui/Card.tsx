import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className = "", hoverable = false, ...props }: CardProps) {
  const hoverClass = hoverable
    ? "transition-all duration-200 hover:border-[var(--text-muted)] hover:shadow-sm"
    : "";

  return (
    <div
      className={`rounded-xl border border-[var(--border-color)] bg-[var(--surface-color)] p-6 sm:p-8 ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
