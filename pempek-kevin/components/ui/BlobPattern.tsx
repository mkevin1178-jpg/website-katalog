export default function BlobPattern({
  className = "text-white/[0.12]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <g fill="currentColor">
        <path d="M92 38c34-14 78-6 96 24s10 74-14 104-64 46-96 32-56-52-52-90 32-56 66-70Z" />
        <path d="M300 74c26 8 44 40 38 72s-42 58-74 54-58-40-54-74 64-60 90-52Z" />
        <path d="M236 236c30-6 66 14 74 46s-12 70-46 80-72-8-84-40 26-80 56-86Z" />
        <path d="M60 250c22-4 46 12 52 36s-8 52-32 58-50-8-56-32 14-58 36-62Z" />
        <circle cx="352" cy="300" r="26" />
        <circle cx="170" cy="180" r="16" />
      </g>
    </svg>
  );
}
