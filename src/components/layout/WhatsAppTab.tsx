import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../../data/site';

/**
 * A single quiet shortcut to the channel this audience actually uses. Held
 * back until the visitor has scrolled past the hero so it never lands on top
 * of the first thing they see.
 */
export function WhatsAppTab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={buildWhatsAppUrl(
            'Hello Crop Care Bio Solutions, I would like to know more about your pheromone lures and traps.',
          )}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-pine py-3.5 pl-4 pr-4 text-paper shadow-[0_16px_40px_-14px_rgba(14,36,28,0.7)] transition-colors hover:bg-clay sm:pr-5"
        >
          <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
          <span className="hidden text-[13px] font-medium sm:inline">Ask on WhatsApp</span>
          <span className="sr-only sm:hidden">Ask on WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
