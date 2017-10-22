/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { NotFoundComponent } from './not-found.component';

describe('Page: Not Found', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      /* Tells the compiler not to error on unknown elements and attributes */
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [
        NotFoundComponent
      ]
    });
  });

  it('should create the component', async(() => {
    const fixture: ComponentFixture<NotFoundComponent> = TestBed.createComponent(NotFoundComponent);
    const cmp: NotFoundComponent = fixture.debugElement.componentInstance;

    expect(cmp).toBeTruthy();
  }));
});
