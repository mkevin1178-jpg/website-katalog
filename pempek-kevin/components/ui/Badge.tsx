import { ReactNode } from "react";

export default function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-neutral-900 ${className}`}
    >
      {children}
    </span>
  );
}
