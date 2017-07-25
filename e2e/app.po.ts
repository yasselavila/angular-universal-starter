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

import { browser, element, by } from 'protractor';

export class AppPage {
  public navigateTo(): any {
    return browser.get('/');
  }

  public getParagraphText(): any {
    return element(by.css('app-root header a.navbar-brand')).getText();
  }
}
