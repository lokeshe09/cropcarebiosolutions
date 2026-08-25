import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

export interface AnimatedCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  viewportMargin?: string;
  hoverEffect?: boolean;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 24,
  duration = 0.5,
  viewportMargin = '-40px 0px',
  hoverEffect = false,
  ...props
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialOffset,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: viewportMargin,
      }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  viewportMargin?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.08,
  viewportMargin = '-40px 0px',
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
