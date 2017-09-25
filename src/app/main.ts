/**
 * NgUniversalSkeleton
 *
 * WARNING: The source code in this file is protected by copyright laws,
 * unauthorized use, duplication or redistribution may result in civil
 * liability and criminal prosecution.
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
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
