import { FIELD_GALLERY } from '../../data/site';

interface PhotoColumnsProps {
  onZoom: (src: string, alt: string) => void;
}

/**
 * Each column owns its photographs outright — no picture appears in more than
 * one column, so the same frame can never show up twice on screen at once.
 *
 * Sharing the full set across every column does not work here: the columns
 * drift at different speeds, so matching them up by list position guarantees
 * nothing, and with roughly six frames visible out of eleven a collision is
 * only a matter of seconds.
 *
 * Within a column a photograph returns only after the whole set has passed,
 * which is well beyond the height of the viewport.
 *
 * Indices are into FIELD_GALLERY. Each layout is a complete partition, so
 * every photograph is on screen at every breakpoint.
 */
const LAYOUTS = {
  /* Three columns: trap, crop, person and produce shots spread across all. */
  wide: [
    [0, 7, 4, 3],
    [10, 2, 8, 5],
    [1, 9, 6],
  ],
  /* Two columns, for narrow screens where a third would be too slim. */
  narrow: [
    [0, 7, 4, 3, 8, 6],
    [10, 2, 5, 1, 9],
  ],
} as const;

/* Speed, direction and a negative delay, so the columns never set off together. */
const MOTION = [
  { duration: '78s', reverse: false, delay: '-9s' },
  { duration: '104s', reverse: true, delay: '-43s' },
  { duration: '88s', reverse: false, delay: '-67s' },
];

function Column({
  order,
  index,
  onZoom,
}: {
  order: readonly number[];
  index: number;
  onZoom: (src: string, alt: string) => void;
}) {
  const motion = MOTION[index % MOTION.length];
  const slides = order
    .map((position) => FIELD_GALLERY[position])
    .filter((slide): slide is (typeof FIELD_GALLERY)[number] => Boolean(slide));

  /* Two identical halves, slid by exactly -50%, so the loop has no seam. */
  const track = [...slides, ...slides];

  return (
    <div className="flex-1 overflow-hidden">
      <div
        className={`marquee-y gap-4 ${motion?.reverse ? 'marquee-y--reverse' : ''}`}
        style={{
          ['--marquee-duration' as string]: motion?.duration ?? '90s',
          animationDelay: motion?.delay ?? '0s',
        }}
      >
        {track.map((slide, position) => {
          const cloned = position >= slides.length;

          return (
            <button
              key={`${slide.src}-${position}`}
              type="button"
              tabIndex={cloned ? -1 : 0}
              aria-hidden={cloned || undefined}
              onClick={() => onZoom(slide.full, slide.alt)}
              className="group relative block aspect-[4/5] w-full shrink-0 cursor-zoom-in overflow-hidden rounded-lg bg-pine shadow-[0_18px_44px_-24px_rgba(0,0,0,0.75)] ring-1 ring-white/10"
            >
              <img
                src={slide.src}
                alt={cloned ? '' : slide.alt}
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover transition duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

/**
 * The photography beside the masthead. Vertical columns suit the pictures,
 * which are all shot portrait, and keep them large instead of shrinking them
 * into a contact sheet.
 *
 * Every frame loads eagerly — this is the first thing on the page, and native
 * lazy loading would leave the off-screen tiles blank as they drift in. The two
 * layouts reference the same eleven files, so only eleven are ever fetched.
 */
export function PhotoColumns({ onZoom }: PhotoColumnsProps) {
  return (
    <div className="absolute inset-0">
      <div className="hidden h-full gap-4 px-4 sm:flex">
        {LAYOUTS.wide.map((order, index) => (
          <Column key={`wide-${index}`} order={order} index={index} onZoom={onZoom} />
        ))}
      </div>

      <div className="flex h-full gap-3 px-3 sm:hidden">
        {LAYOUTS.narrow.map((order, index) => (
          <Column key={`narrow-${index}`} order={order} index={index} onZoom={onZoom} />
        ))}
      </div>

      {/* Feather the edges so the columns dissolve into the panel rather than
          stopping at a hard line. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,var(--color-pine-deep)_0%,transparent_13%,transparent_87%,var(--color-pine-deep)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-pine-deep via-pine-deep/70 to-transparent lg:block"
      />
    </div>
  );
}
