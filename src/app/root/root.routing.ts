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
