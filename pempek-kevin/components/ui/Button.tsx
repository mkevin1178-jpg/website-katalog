import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "whatsapp"
  | "yellow"
  | "light"
  | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full uppercase text-xs font-extrabold tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand-red text-white hover:bg-brand-red-dark",
  secondary:
    "bg-transparent text-brand-red ring-1 ring-inset ring-brand-red hover:bg-brand-red hover:text-white",
  whatsapp: "bg-[#25D366] text-neutral-900 hover:bg-[#1EBE5A]",
  yellow: "bg-brand-yellow text-neutral-900 hover:brightness-95",
  light: "bg-white text-brand-red hover:bg-neutral-100",
  ghost: "bg-transparent text-current hover:bg-brand-red/10",
};

const sizes: Record<Size, string> = {
  sm: "px-4 min-h-[44px] lg:min-h-[40px]",
  md: "px-5 min-h-[44px] lg:min-h-[40px]",
  lg: "px-7 text-sm min-h-[48px] lg:min-h-[44px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; external?: boolean };

function cx(variant: Variant, size: Size, className: string) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

export default function Button(props: ButtonProps | LinkProps) {
  if ("href" in props && props.href !== undefined) {
    const {
      href,
      external,
      variant = "primary",
      size = "md",
      className = "",
      children,
      ...rest
    } = props;
    const cls = cx(variant, size, className);
    const isExternal = external ?? /^https?:|^mailto:|^tel:/.test(href);

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...rest
  } = props;
  return (
    <button className={cx(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
