export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="grid gap-0 lg:grid-cols-4">
      {items.map((item, index) => (
        <li key={item.year} className="flex gap-4 lg:block">
          <div className="flex flex-col items-center lg:flex-row lg:items-center">
            <span
              aria-hidden="true"
              className="h-4 w-4 shrink-0 rounded-full border-2 border-white bg-brand-red ring-2 ring-brand-yellow"
            />
            {index < items.length - 1 ? (
              <span
                aria-hidden="true"
                className="mt-1 w-0.5 flex-1 rounded-full bg-brand-yellow/70 lg:mt-0 lg:h-0.5 lg:w-auto"
              />
            ) : null}
          </div>

          <div className="min-w-0 pb-10 lg:mt-4 lg:pb-0 lg:pr-6">
            <p className="font-display text-sm font-bold uppercase tracking-wider text-brand-red-dark">
              {item.year}
            </p>
            <h3 className="heading-impact mt-1 text-base leading-tight text-neutral-900">
              {item.title}
            </h3>
            <p className="mt-2 max-w-prose text-pretty text-sm leading-relaxed text-neutral-600">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
