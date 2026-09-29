interface LogoProps {
  className?: string;
  tone?: 'light' | 'dark';
}

/**
 * The company mark: the green "C" around a seedling, cut from the official
 * logo artwork. On dark panels it sits on a paper disc, since the deep green
 * of the C and the brown root would otherwise sink into the background.
 */
export function Logo({ className = 'h-9 w-9', tone = 'light' }: LogoProps) {
  const mark = (
    <img
      src="/brand/logo-mark.png"
      srcSet="/brand/logo-mark.png 1x, /brand/logo-mark@2x.png 2x"
      alt=""
      aria-hidden
      decoding="async"
      className={
        tone === 'dark'
          ? 'absolute inset-[12%] h-[76%] w-[76%] object-contain'
          : `${className} object-contain`
      }
    />
  );

  /* Inset rather than padding: percentage padding resolves against the
     parent's width, which blew the disc up and squeezed the mark to nothing. */
  if (tone === 'dark') {
    return (
      <span aria-hidden className={`${className} relative block shrink-0 rounded-full bg-paper`}>
        {mark}
      </span>
    );
  }

  return mark;
}

interface LogoTextProps {
  className?: string;
  tone?: 'light' | 'dark';
}

/**
 * The name and the "Caring for Nature" line with its swoosh, cut from the
 * same artwork. The dark-panel version is recoloured so it stays legible.
 */
export function LogoText({ className = 'h-8', tone = 'light' }: LogoTextProps) {
  return (
    <img
      src={tone === 'dark' ? '/brand/logo-text-light.png' : '/brand/logo-text.png'}
      alt="Crop Care Bio Solutions — Caring for Nature"
      decoding="async"
      className={`${className} w-auto max-w-full object-contain`}
    />
  );
}
