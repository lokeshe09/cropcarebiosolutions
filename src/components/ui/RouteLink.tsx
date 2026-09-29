import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';
import type { PageId } from '../../types';
import { PAGE_PATHS } from '../../lib/routes';

interface RouteLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'> {
  /** An app page, or any in-site path such as a product address. */
  to: PageId | { path: string };
  onNavigate: () => void;
  children: ReactNode;
}

/**
 * A real link with a real href, so search engines can follow it and visitors
 * can open it in a new tab. A plain click is handled in-app instead of
 * reloading the page.
 */
export function RouteLink({ to, onNavigate, children, ...rest }: RouteLinkProps) {
  const href = typeof to === 'string' ? PAGE_PATHS[to] : to.path;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate();
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
