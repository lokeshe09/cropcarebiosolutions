import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import {
  allRoutes,
  renderHead,
  renderNoscript,
  renderRobots,
  renderSitemap,
} from './src/data/seo';
import { routePath, type Route } from './src/lib/routes';

const root = path.dirname(fileURLToPath(import.meta.url));

const HEAD_START = '<!--seo:start-->';
const HEAD_END = '<!--seo:end-->';
const NS_START = '<!--noscript:start-->';
const NS_END = '<!--noscript:end-->';

const headBlock = (route: Route) => `${HEAD_START}\n    ${renderHead(route)}\n    ${HEAD_END}`;
const noscriptBlock = (route: Route) => `${NS_START}${renderNoscript(route)}${NS_END}`;

const between = (html: string, start: string, end: string, value: string) =>
  html.slice(0, html.indexOf(start)) + value + html.slice(html.indexOf(end) + end.length);

/**
 * Search engine output, generated from src/data/seo.ts:
 *
 *  - every page gets its own HTML file (about.html, pheromone-lures/….html …)
 *    with its own title, description, canonical, Open Graph tags, JSON-LD and
 *    a plain-HTML copy of its content, so crawlers see the right page without
 *    running any JavaScript;
 *  - 404.html for addresses that do not exist (served with a real 404);
 *  - sitemap.xml (with images) and robots.txt.
 *
 * In development the same sitemap and robots are served live.
 */
function seo(): Plugin {
  let outDir = path.resolve(root, 'dist');
  let isBuild = false;

  return {
    name: 'crop-care-seo',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
      isBuild = config.command === 'build';
    },
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return html
          .replace('<!--seo:head-->', headBlock({ page: 'home' }))
          .replace('<!--seo:noscript-->', noscriptBlock({ page: 'home' }));
      },
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/sitemap.xml') {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.end(renderSitemap(new Date().toISOString().slice(0, 10)));
          return;
        }
        if (req.url === '/robots.txt') {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.end(renderRobots());
          return;
        }
        next();
      });
    },
    closeBundle() {
      if (!isBuild) return;

      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
      const write = (file: string, content: string) => {
        const target = path.join(outDir, file);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, content);
      };
      const pageHtml = (route: Route) =>
        between(
          between(template, HEAD_START, HEAD_END, headBlock(route)),
          NS_START,
          NS_END,
          noscriptBlock(route),
        );

      const routes = allRoutes();
      for (const route of routes) {
        const url = routePath(route);
        write(url === '/' ? 'index.html' : `${url.slice(1)}.html`, pageHtml(route));
      }
      write('404.html', pageHtml({ page: 'home', notFound: true }));
      write('sitemap.xml', renderSitemap(new Date().toISOString().slice(0, 10)));
      write('robots.txt', renderRobots());

      console.log(`SEO: ${routes.length} pages, 404.html, sitemap.xml and robots.txt written`);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seo()],
  resolve: {
    alias: {
      '@': path.resolve(root, 'src'),
    },
  },
  build: {
    target: 'es2022',
    cssTarget: 'chrome100',
    sourcemap: false,
    rollupOptions: {
      output: {
        // Keep the animation runtime out of the entry chunk; it is only needed
        // once the page is interactive.
        manualChunks: {
          motion: ['motion/react'],
        },
      },
    },
  },
});
