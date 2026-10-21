import { ReactNode } from "react";
import Container from "@/components/ui/Container";

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-neutral-100 bg-brand-cream">
      <Container className="space-y-3 py-10 md:py-14">
        {eyebrow ? (
          <span className="inline-flex items-center rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-neutral-900">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="heading-impact text-2xl leading-tight text-neutral-900 text-balance sm:text-3xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl text-pretty text-neutral-600">{description}</p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
