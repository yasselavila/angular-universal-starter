/**
 * NgSkeleton
 *
 * WARNING: The source code in this file is protected by copyright laws,
 * unauthorized use, duplication or redistribution may result in civil
 * liability and criminal prosecution.
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 */

import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
];
