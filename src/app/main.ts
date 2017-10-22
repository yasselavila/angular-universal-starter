/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

import { enableProdMode, CompilerOptions } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RootModule } from './root';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const compilerOptions: CompilerOptions = {
  preserveWhitespaces: false
};

platformBrowserDynamic()
  .bootstrapModule(RootModule, compilerOptions)
  .catch((err: Error) => console.error(err));
