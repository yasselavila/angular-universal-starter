/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const ROOT_ROUTES: Routes = [
  /* DEFINE ROUTES HERE ...
   *
   * IMPORTANT:
   * Use this approach only if you want to use lazy-loaded pages
   */
];

export const RootRoutingModule: ModuleWithProviders = RouterModule.forRoot(ROOT_ROUTES);
