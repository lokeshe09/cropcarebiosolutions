import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'accent' | 'outline' | 'ghost' | 'onDark';
type Size = 'sm' | 'md';

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50';

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-pine text-paper hover:bg-pine-soft',
  accent: 'bg-clay text-white hover:bg-clay-deep',
  outline: 'border border-line-strong text-ink hover:border-pine hover:text-pine',
  ghost: 'text-ink hover:text-clay',
  onDark: 'bg-paper text-pine hover:bg-clay-soft',
};

const SIZES: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-[13px]',
  md: 'px-7 py-3.5 text-sm',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  /** Appends an arrow that slides forward on hover. */
  withArrow?: boolean;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`group/btn ${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...rest}
    >
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
          aria-hidden
        />
      )}
    </button>
  );
}

interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  external?: boolean;
  children: ReactNode;
}

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className = '',
  external = false,
  children,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group/btn ${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
          aria-hidden
        />
      )}
    </a>
  );
}
