/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { components } from './components';

/*
 * Do not specify providers for modules that might be imported by a lazy loaded module
 */

@NgModule({
  imports: [
    /* This imports are required in pages */
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    ...components
  ],
  declarations: [
    ...components
  ]
})
export class SharedModule {
}
