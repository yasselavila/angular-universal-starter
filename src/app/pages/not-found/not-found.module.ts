/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared';
import { NotFoundRoutingModule } from './not-found.routing';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    SharedModule,
    NotFoundRoutingModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class NotFoundModule {
}
