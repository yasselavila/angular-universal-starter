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

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { homeRoutes } from './home.routes';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
