import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  "aria-label": string;
  className?: string;
  children: ReactNode;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const base =
  "inline-flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-brand-red";

export default function IconButton(props: ButtonProps | LinkProps) {
  if ("href" in props && props.href !== undefined) {
    const { href, className = "", children, ...rest } = props;
    return (
      <Link href={href} className={`${base} ${className}`} {...rest}>
        {children}
      </Link>
    );
  }

  const { className = "", children, ...rest } = props;
  return (
    <button type="button" className={`${base} ${className}`} {...rest}>
      {children}
    </button>
  );
}
