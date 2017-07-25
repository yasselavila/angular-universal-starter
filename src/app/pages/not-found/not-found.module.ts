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

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared';
import { notFoundRoutes } from './not-found.routes';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    RouterModule.forChild(notFoundRoutes),
    SharedModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class NotFoundModule {
}
