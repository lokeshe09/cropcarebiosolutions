import { useEffect, useState } from 'react';
import { Expand } from 'lucide-react';

interface FigureProps {
  src?: string;
  alt: string;
  /** Tailwind aspect utility, e.g. "aspect-[4/5]". */
  ratio?: string;
  className?: string;
  /** Renders a zoom affordance and calls back with the source. */
  onZoom?: (src: string, alt: string) => void;
  /** Skip lazy loading for anything above the fold. */
  eager?: boolean;
  /** Slight zoom on hover of the surrounding group. */
  hoverZoom?: boolean;
}

/**
 * Image with two honest fallbacks: a tone-matched block behind it while the
 * file is in flight, and a labelled placeholder if there is no file at all, so
 * an unshot photograph reads as pending rather than broken.
 *
 * The image itself is never hidden behind a "loaded" flag. A picture served
 * from cache can finish before React attaches onLoad, and that event never
 * fires again — anything gated on it would stay invisible for the whole visit.
 * Letting the browser paint over the placeholder has no such failure mode.
 */
export function Figure({
  src,
  alt,
  ratio = 'aspect-[4/3]',
  className = '',
  onZoom,
  eager = false,
  hoverZoom = true,
}: FigureProps) {
  const [failed, setFailed] = useState(false);

  useEffect(() => setFailed(false), [src]);

  if (!src || failed) {
    return (
      <div
        className={`${ratio} ${className} flex flex-col items-center justify-center gap-2 border border-dashed border-line-strong bg-paper-2 px-4 text-center`}
      >
        <span className="eyebrow">Photograph pending</span>
        <span className="max-w-[22ch] text-xs leading-snug text-ink-3">{alt}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-paper-3 ${ratio} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={eager ? 'high' : 'auto'}
        onError={() => setFailed(true)}
        className={`relative h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          hoverZoom ? 'group-hover:scale-[1.04]' : ''
        }`}
      />

      {onZoom && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onZoom(src, alt);
          }}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-paper/85 text-pine opacity-0 backdrop-blur transition hover:bg-paper focus-visible:opacity-100 group-hover:opacity-100"
        >
          <Expand className="h-4 w-4" />
          <span className="sr-only">Enlarge image</span>
        </button>
      )}
    </div>
  );
}
