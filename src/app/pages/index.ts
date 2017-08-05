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
