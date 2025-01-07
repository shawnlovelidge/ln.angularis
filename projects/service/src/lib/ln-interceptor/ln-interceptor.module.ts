import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationConfig } from '@angularis/model';
//
// Services
//
import { LnAuthenticationService } from '../ln-authentication/ln-authentication.service';

import { LnInterceptorService } from './ln-interceptor.service';
//
// Provider(s)
//
import {
  AUTH_CONFIG,
  DefaultAuthenticationConfig,
  AuthenticationServiceFactory,
} from '../ln-authentication/ln-authentication.provider';


@NgModule({
  imports: [RouterModule],
  providers: [LnInterceptorService],
})
export class LnInterceptorModule {
  public static forRoot(
    config: AuthenticationConfig = DefaultAuthenticationConfig
  ): ModuleWithProviders<LnInterceptorModule> {
    return {
      ngModule: LnInterceptorModule,
      providers: [
        LnInterceptorService,
        { provide: AUTH_CONFIG, useValue: config },
        {
          provide: LnAuthenticationService,
          useFactory: AuthenticationServiceFactory,
          deps: [AUTH_CONFIG],
        },
      ],
    };
  }
}
