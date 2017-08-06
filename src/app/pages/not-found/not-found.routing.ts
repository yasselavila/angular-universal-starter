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

import { NotFoundComponent } from './not-found.component';

export const NOT_FOUND_ROUTES: Routes = [
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const NotFoundRoutingModule: ModuleWithProviders = RouterModule.forChild(NOT_FOUND_ROUTES);