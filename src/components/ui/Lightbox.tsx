import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { useDismissable } from '../../hooks/useDismissable';

interface LightboxProps {
  open: boolean;
  src: string;
  alt: string;
  onClose: () => void;
}

export function Lightbox({ open, src, alt, onClose }: LightboxProps) {
  useDismissable(open, onClose);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-pine-deep/92 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/25 text-paper transition hover:bg-white/10 sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>

          <motion.figure
            className="m-0 max-h-full"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="max-h-[78vh] w-auto max-w-full object-contain"
            />
            <figcaption className="eyebrow mt-4 text-center text-sage">{alt}</figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
