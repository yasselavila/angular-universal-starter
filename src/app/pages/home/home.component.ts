/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @HostBinding('class')
  public className: string = 'home-page';

  public constructor() {
  }

  public ngOnInit(): void {
    // TODO
  }
}
