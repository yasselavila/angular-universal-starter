/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

/* Server specific version of Zone.js */
import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';

import { environment } from '../../environments/environment';

if (environment.production) {
  enableProdMode();
}

export { SsrModule } from './ssr.module';
export { renderModuleFactory, render } from './render';
