/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavBarComponent } from './nav-bar.component';

describe('Component: NavBar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NavBarComponent
      ]
    });
  });

  it('should create the component', async(() => {
    const fixture: ComponentFixture<NavBarComponent> = TestBed.createComponent(NavBarComponent);
    const cmp: NavBarComponent = fixture.debugElement.componentInstance;

    expect(cmp).toBeTruthy();
  }));
});
