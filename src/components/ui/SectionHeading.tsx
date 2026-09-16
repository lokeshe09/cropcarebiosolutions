import type { ReactNode } from 'react';

interface SectionHeadingProps {
  /** Two-digit index printed in the margin, e.g. "02". */
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  /** Sits opposite the title on wide screens. */
  action?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
}

/**
 * The one heading treatment used across the site: a hairline, a mono index and
 * label, then the display title. Keeping it in one place is what makes the
 * rhythm read as deliberate from page to page.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  action,
  align = 'left',
  tone = 'light',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center';
  const rule = tone === 'dark' ? 'bg-white/20' : 'bg-line';
  const label = tone === 'dark' ? 'text-sage' : 'text-ink-3';
  const heading = tone === 'dark' ? 'text-paper' : 'text-pine';
  const body = tone === 'dark' ? 'text-paper/70' : 'text-ink-2';

  return (
    <div className={className}>
      <div className={`h-px w-full ${rule}`} />

      <div
        className={`mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${
          centered ? 'md:flex-col md:items-center md:text-center' : ''
        }`}
      >
        <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
          {(index || eyebrow) && (
            <p className={`eyebrow mb-4 flex items-center gap-3 ${label} ${centered ? 'justify-center' : ''}`}>
              {index && <span>{index}</span>}
              {index && eyebrow && <span aria-hidden className="h-px w-6 bg-current opacity-40" />}
              {eyebrow && <span>{eyebrow}</span>}
            </p>
          )}

          <h2 className={`text-[clamp(1.9rem,4vw,3.15rem)] ${heading}`}>{title}</h2>

          {lead && <p className={`mt-5 max-w-xl text-[17px] leading-relaxed ${body}`}>{lead}</p>}
        </div>

        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
}
