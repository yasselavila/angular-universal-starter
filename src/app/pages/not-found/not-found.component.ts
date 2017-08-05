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

import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
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
