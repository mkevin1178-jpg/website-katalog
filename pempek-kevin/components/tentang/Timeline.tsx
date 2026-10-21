export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-8 border-l-2 border-brand-yellow/60 pl-6">
      {items.map((item) => (
        <li key={item.year} className="relative">
          <span
            className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-white bg-brand-red"
            aria-hidden="true"
          />
          <p className="font-display text-sm font-bold uppercase tracking-wide text-brand-red">
            {item.year}
          </p>
          <h3 className="mt-1 font-display text-lg font-bold text-neutral-900">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-neutral-600">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
