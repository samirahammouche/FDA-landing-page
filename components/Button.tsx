import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  variant?: "navy" | "yellow";
};

const buttonBaseClasses =
  "inline-flex items-center justify-center rounded-full px-6 py-2.5 font-bold shadow-md transition hover:brightness-105";

const variantClasses = {
  navy: "bg-dp-navy text-white",
  yellow: "bg-dp-yellow text-dp-navy",
};

export default function Button({
  children,
  className = "",
  href,
  variant = "navy",
  ...props
}: ButtonProps) {
  const classes = `${buttonBaseClasses} ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}