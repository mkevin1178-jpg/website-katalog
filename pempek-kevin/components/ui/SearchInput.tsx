import { forwardRef, InputHTMLAttributes } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "onChange"> & {
  value: string;
  onValueChange: (value: string) => void;
  label?: string;
};

const SearchInput = forwardRef<HTMLInputElement, Props>(function SearchInput(
  { value, onValueChange, label = "Cari produk", className = "", ...rest },
  ref,
) {
  return (
    <div className={`relative w-full ${className}`}>
      <label htmlFor="product-search" className="sr-only">
        {label}
      </label>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
      <input
        ref={ref}
        id="product-search"
        type="search"
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
        placeholder={rest.placeholder ?? "Cari produk..."}
        className="min-h-[44px] w-full rounded-full border border-neutral-200 bg-white py-2 pl-11 pr-10 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-red focus:outline-none [&::-webkit-search-cancel-button]:hidden"
        {...rest}
      />
      {value ? (
        <button
          type="button"
          onClick={() => onValueChange("")}
          aria-label="Hapus pencarian"
          className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-brand-red"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      ) : null}
    </div>
  );
});

export default SearchInput;
