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

import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('Page: Home', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ]
    });
  });

  const expectedTitle: string = 'Welcome!';

  it('should create the component', async(() => {
    const fixture: ComponentFixture<HomeComponent> = TestBed.createComponent(HomeComponent);
    const cmp: HomeComponent = fixture.debugElement.componentInstance;

    expect(cmp).toBeTruthy();
  }));

  it('should render title in a h2 tag', async(() => {
    const fixture: ComponentFixture<HomeComponent> = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    const compiled: any = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h2').textContent).toContain(expectedTitle);
  }));
});
