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
  selector: 'app-not-found-page',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  @HostBinding('class')
  public className: string = 'not-found-page';

  public constructor() {
  }

  public ngOnInit(): void {
    // TODO
  }
}
