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

import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input('title')
  public title: string = 'NgUniversalSkeleton';

  public navActive: boolean = false;

  public constructor() {
  }

  public ngOnInit(): void {
    // TODO
  }

  @HostListener('window:resize', ['$event'])
  public onWindowResize(event?: Event): void {
    this.toggleNav(true);
  }

  public toggleNav(hide?: boolean): void {
    this.navActive = hide ? false : !this.navActive;
  }
}
