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

/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { RootComponent } from './root.component';

describe('App: NgSkeleton', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RootComponent
      ],
      /* Tells the compiler not to error on unknown elements and attributes */
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
  });

  const expectedTitle: string = 'NgSkeleton';

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
