/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

import { NgModuleFactory } from '@angular/core';
import { renderModuleFactory as ngRenderModuleFactory } from '@angular/platform-server';

import * as bundled from './main.ssr';

/* Bundle compiled template!
 * IMPORTANT: The client app must be built first! */
const defaultDocument: string = require('../../../../dist/client/index.html');

/*
 * Using this functions as bridges, we can bundle all Angular deps together ;-)
 */

export function renderModuleFactory<T>(
  moduleFactory?: NgModuleFactory<T>|null,
  url?: string|null,
  document?: string|null
): Promise<string> {
  return ngRenderModuleFactory(moduleFactory, {
    document: (document || defaultDocument),
    url: (url || '')
  });
};

export function render(url?: string|null, document?: string|null): Promise<string> {
  return renderModuleFactory(
    bundled['SsrModuleNgFactory'],
    url,
    document
  );
};
