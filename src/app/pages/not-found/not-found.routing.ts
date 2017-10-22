/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
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
