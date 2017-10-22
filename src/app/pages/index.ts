/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

import { NgModule, Type } from '@angular/core';

import { HomeModule } from './home';
import { NotFoundModule } from './not-found';

export {
  HomeModule,
  NotFoundModule
};

export const PAGES: Type<NgModule>[] = [
  HomeModule,
  NotFoundModule
];
