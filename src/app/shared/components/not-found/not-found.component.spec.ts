/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';

describe('Component: Not Found', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotFoundComponent
      ]
    });
  });

  const expectedTitle: string = 'Page not found';

  it('should create the component', async(() => {
    const fixture: ComponentFixture<NotFoundComponent> = TestBed.createComponent(NotFoundComponent);
    const cmp: NotFoundComponent = fixture.debugElement.componentInstance;

    expect(cmp).toBeTruthy();
  }));

  it('should render title in a h3 tag', async(() => {
    const fixture: ComponentFixture<NotFoundComponent> = TestBed.createComponent(NotFoundComponent);
    fixture.detectChanges();

    const compiled: any = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h3').textContent).toContain(expectedTitle);
  }));
});
