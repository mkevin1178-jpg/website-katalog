import { OpeningHour } from "@/data/site";

export default function OpeningHours({ hours }: { hours: readonly OpeningHour[] }) {
  return (
    <ul className="divide-y divide-neutral-100 rounded-2xl border border-neutral-100 bg-white">
      {hours.map((item) => (
        <li
          key={item.day}
          className="flex items-center justify-between gap-4 px-4 py-3 text-sm"
        >
          <span className="font-semibold text-neutral-800">{item.day}</span>
          <span className="text-neutral-600">{item.hours}</span>
        </li>
      ))}
    </ul>
  );
}
