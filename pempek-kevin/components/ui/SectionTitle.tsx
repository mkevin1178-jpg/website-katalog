import { ReactNode } from "react";

export default function SectionTitle({
  children,
  align = "center",
  className = "",
}: {
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <h2
      className={`heading-impact text-xl text-brand-red sm:text-2xl tracking-wide ${
        align === "left" ? "text-left" : "text-center"
      } ${className}`}
    >
      {children}
    </h2>
  );
}
