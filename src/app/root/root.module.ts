/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { RootRoutingModule } from './root.routing';
import { PAGES } from '../pages';
import { RootComponent } from './root.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-ssr' }),
    ReactiveFormsModule,
    SharedModule,
    RootRoutingModule,
    ...PAGES
  ],
  declarations: [
    RootComponent
  ],
  bootstrap: [
    RootComponent
  ]
})
export class RootModule {
}
