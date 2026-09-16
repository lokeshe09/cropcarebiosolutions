import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Stagger position when several Reveals sit in a row. */
  delay?: number;
  /** Distance travelled on the way in, in pixels. */
  distance?: number;
  className?: string;
  as?: 'div' | 'li' | 'section';
}

/**
 * Fades content up as it enters the viewport, once. Falls back to a plain
 * element when the visitor has asked for reduced motion.
 */
export function Reveal({
  children,
  delay = 0,
  distance = 18,
  className,
  as = 'div',
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-72px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
