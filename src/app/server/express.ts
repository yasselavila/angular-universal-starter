/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

import * as express from 'express';
import { Application as ExpressApp, Request, Response } from 'express';
import * as path from 'path';
import * as process from 'process';

/* The server bundle is loaded here, it's why you don't want a changing hash in it */
const { render } = require('./main.bundle');

const app: ExpressApp = express();

/* IMPORTANT: Comment this if you do not need to need static assets here */
const assetsPath: string = path.resolve(__dirname, '..', 'client');
app.use(express.static(assetsPath, { index: false }));

/* SSR */
app.get('**', (req: Request, res: Response) => {
  render(req.path)
    .then(html => res.send(html))
    .catch(err => res.status(500).send('Unknown server error'));
});

/* Start the app server: */

const isProd: boolean = ('production' === (process.env.NODE_ENV || null));
const portNumber: string = process.env.PORT || '3000';
const port: number = parseInt(portNumber, 10);

app.listen(port, () => {
  if (!isProd) {
    console.log(`Listening on http://localhost:${port}`);
  }
});
