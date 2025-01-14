import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

/**
 * Services
 */
import { AgAuthenticationService } from '../ag-authentication/ag-authentication.service';
import { Observable } from 'rxjs';

@Injectable()
export class AgAuthenticationGuardService
  implements CanActivate, CanActivateChild
{
  /**
   * canActivate()
   */
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticationService.isAuthenticated();
  }

  /**
   * canActivateChild()
   */
  canActivateChild(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticationService.isAuthenticated();
  }

  /**
   * canLoad()
   */
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  /**
   * constructor()
   */
  constructor(private authenticationService: AgAuthenticationService) {}
}
