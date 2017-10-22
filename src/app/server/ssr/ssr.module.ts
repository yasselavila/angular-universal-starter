/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RootModule } from '../../root/root.module';
import { RootComponent } from '../../root/root.component';
import { UniversalInterceptor } from './universal.interceptor';

@NgModule({
  imports: [
    ServerModule,
    RootModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UniversalInterceptor, multi: true }
  ],
  bootstrap: [
    RootComponent
  ]
})
export class SsrModule {
}
