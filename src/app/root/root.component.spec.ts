/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { RootComponent } from './root.component';

describe('App: Angular Universal Starter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RootComponent
      ],
      /* Tells the compiler not to error on unknown elements and attributes */
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
  });

  const expectedTitle: string = 'Angular Universal Starter';

  it('should create the app', async(() => {
    const fixture: ComponentFixture<RootComponent> = TestBed.createComponent(RootComponent);
    const app: RootComponent = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));

  it(`should have as title '${expectedTitle}'`, async(() => {
    const fixture: ComponentFixture<RootComponent> = TestBed.createComponent(RootComponent);
    const app: RootComponent = fixture.debugElement.componentInstance;

    expect(app.title).toEqual(expectedTitle);
  }));
});
