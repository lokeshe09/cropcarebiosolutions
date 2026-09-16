interface LogoProps {
  className?: string;
  tone?: 'light' | 'dark';
}

/**
 * The company mark: a leaf split between the two brand colours, with the
 * midrib drawn through as a single hairline.
 */
export function Logo({ className = 'h-9 w-9', tone = 'light' }: LogoProps) {
  const ring = tone === 'dark' ? '#F7F4EC' : '#17352A';
  const stem = tone === 'dark' ? '#17352A' : '#F7F4EC';

  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden focusable="false">
      <circle cx="20" cy="20" r="19" fill="none" stroke={ring} strokeWidth="1.25" />
      <path
        d="M20 31c-5.6-2.6-9-7.1-9-12.1C11 14.4 14.7 11 20 9.4V31Z"
        fill="#3F6B4E"
      />
      <path
        d="M20 31c5.6-2.6 9-7.1 9-12.1C29 14.4 25.3 11 20 9.4V31Z"
        fill="#B4552D"
      />
      <path d="M20 32V8" stroke={stem} strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M20 18.5c2.4-1.9 4.9-2.4 6.6-4M20 23.6c-2.4-1.9-4.9-2.4-6.6-4"
        stroke={stem}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}
