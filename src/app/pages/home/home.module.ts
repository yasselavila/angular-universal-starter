/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
