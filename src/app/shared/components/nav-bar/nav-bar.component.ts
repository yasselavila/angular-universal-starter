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

import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input('offCanvas')
  public offCanvas: boolean = true;

  @Input('logo')
  public logo: string;

  @Input('title')
  public title: string;

  @Output()
  public navToggled: EventEmitter<boolean> = new EventEmitter();

  public navOpen: boolean = false;

  @HostListener('window:resize', ['$event'])
  public onWindowResize(event?: any): void {
    this.toggleNavIfOpen();
  }

  public toggleNav(close?: boolean): void {
    this.navOpen = !!close ? false : !this.navOpen;
    this.navToggled.emit(this.navOpen);
  }

  public toggleNavIfOpen(): void {
    if (this.navOpen) {
      this.toggleNav(true);
    }
  }

  public stopPropagation(event?: any): void {
    if (event && !!event.stopPropagation) {
      event.stopPropagation();
    }
  }
}
