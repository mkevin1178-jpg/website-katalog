export default function MapEmbed({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-neutral-100 shadow-sm ring-1 ring-black/5">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
