import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    download?: boolean | string;
    target?: string;
    rel?: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-display font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none";

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-xs rounded-md gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-lg gap-2",
    lg: "px-7 py-3.5 text-base rounded-lg gap-2.5",
  };

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-[var(--text-primary)] text-[var(--bg-color)] border border-[var(--text-primary)] hover:opacity-90 shadow-sm",
    secondary:
      "bg-[var(--surface-color)] text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--text-muted)] hover:bg-[var(--surface-subtle)]",
    outline:
      "bg-transparent text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--text-primary)]",
    ghost:
      "bg-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-subtle)]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, download, target, rel, ...rest } = props as ButtonAsLinkProps;
    if (download || href.startsWith("mailto:") || href.startsWith("tel:") || target === "_blank") {
      return (
        <a href={href} download={download} target={target} rel={rel} className={combinedClasses} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
