/**
 * Angular Universal Starter
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 * @license   New BSD License (see LICENSE.txt)
 */

import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UniversalInterceptor implements HttpInterceptor {
  public constructor(@Optional() @Inject('serverUrl') protected serverUrl: string) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const serverReq: HttpRequest<any> = !this.serverUrl ? req : req.clone({
      url: `${this.serverUrl}${req.url}`
    });

    return next.handle(serverReq);
  }
}
