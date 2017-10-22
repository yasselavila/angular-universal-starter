/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

import { Type, Component } from '@angular/core';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';

export {
  NavBarComponent,
  NotFoundComponent
};

export const components: Type<Component>[] = [
  NavBarComponent,
  NotFoundComponent
];
