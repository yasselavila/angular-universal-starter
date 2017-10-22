/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

import { AppPage } from './app.po';

describe('Angular Universal Starter App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  const expectedTitle: string = 'Angular Universal Starter';

  it(`should display message saying '${expectedTitle}'`, () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(expectedTitle);
  });
});
