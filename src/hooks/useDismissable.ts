import { useEffect } from 'react';

/**
 * While `open`, locks page scroll and closes on Escape. Used by every overlay
 * so the behaviour is identical wherever one appears.
 */
export function useDismissable(open: boolean, onClose: () => void): void {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);
}
