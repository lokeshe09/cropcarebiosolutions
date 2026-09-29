import { renderHead } from '../data/seo';
import type { Route } from './routes';

/**
 * Swaps the page's SEO tags for the route now on screen. The build writes the
 * same tags into each page's HTML file, so what a crawler reads first and what
 * the running app shows always agree.
 */
export function syncHead(route: Route): void {
  const template = document.createElement('template');
  template.innerHTML = renderHead(route);

  document.head.querySelectorAll('[data-seo]').forEach((node) => node.remove());

  // Insert before the stylesheet/font links so the title stays near the top.
  const anchor = document.head.querySelector('meta[name="viewport"]')?.nextSibling ?? null;
  document.head.insertBefore(template.content, anchor);
}
