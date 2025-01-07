import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Guid } from '@angularis/core';
import { Observable } from 'rxjs';

import { LnAuthenticationService } from '../ln-authentication/ln-authentication.service';

@Injectable()
export class LnInterceptorService implements HttpInterceptor {
  //
  // intercept
  //
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //
    // Set the Authorization Header
    //
    if (request.url.startsWith('https://api.')) {
      if (this.authenticationService.hasToken()) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.authenticationService.token}`,
            // 'X-B3-TraceId': `${Guid.create()}`,
            // 'X-B3-SpanId': `${Guid.create()}`,
          },
        });
      }
    }
    return next.handle(request);
  }

  /**
   * constructor()
   */
  constructor(private authenticationService: LnAuthenticationService) {}
}
