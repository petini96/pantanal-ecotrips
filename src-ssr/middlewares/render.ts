import { type Request, type Response } from 'express';
import { type RenderError } from '#q-app';
import { defineSsrMiddleware } from '#q-app/wrappers';

const RENDER_TIMEOUT_MS = 10000;

function renderWithTimeout(render: (ctx: { req: Request; res: Response }) => Promise<string>, ctx: { req: Request; res: Response }): Promise<string> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(Object.assign(new Error('SSR render timeout'), { code: 504 }));
    }, RENDER_TIMEOUT_MS);

    render(ctx).then(
      (html) => { clearTimeout(timer); resolve(html); },
      (err: unknown) => { clearTimeout(timer); reject(err); }
    );
  });
}

export default defineSsrMiddleware(({ app, render, serve }) => {
  app.get(/.*/, (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'text/html');

    renderWithTimeout(render, { req, res })
      .then((html) => {
        res.send(html);
      })
      .catch((err: RenderError & { code?: number }) => {
        if (err.url) {
          if (err.code) {
            res.redirect(err.code, err.url);
          } else {
            res.redirect(err.url);
          }
          return;
        }

        if (err.code === 404) {
          res.status(404).send('404 | Page Not Found');
          return;
        }

        if (err.code === 504) {
          console.error(`[SSR] Render timeout for ${req.url}`);
          res.status(504).send('504 | Gateway Timeout');
          return;
        }

        if (process.env.DEV) {
          serve.error({ err, req, res });
        } else {
          console.error(`[SSR] Render error for ${req.url}:`, err?.message || err);
          res.status(500).send('500 | Internal Server Error');
        }
      });
  });
});
