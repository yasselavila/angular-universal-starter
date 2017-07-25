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

import { AppPage } from './app.po';

describe('NgSkeleton App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  const expectedTitle: string = 'NgSkeleton';

  it(`should display message saying '${expectedTitle}'`, () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(expectedTitle);
  });
});
