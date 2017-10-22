/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
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
