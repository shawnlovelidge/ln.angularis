import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from '@angularis/core';
//
// Services
//
import { AgHttpClientService } from './ag-http-client.service';
//
// Defining a Map Type
//
export type IMap<T> = (item: any) => T;
//
// Describe the AgHttpService Interface
//
export interface IHttpService {
  get<T>(
    endpoint: string,
    cb?: IMap<T>,
    param?: object
  ): Observable<Response<T>>;
  put<T>(
    endpoint: string,
    model: any,
    cb?: IMap<T>,
    param?: object
  ): Observable<Response<T>>;
  post<T>(endpoint: string, model: any, cb?: IMap<T>): Observable<Response<T>>;
  patch<T>(endpoint: string, model: any, cb?: IMap<T>): Observable<Response<T>>;
  delete<T>(
    endpoint: string,
    param?: object,
    cb?: IMap<T>
  ): Observable<Response<T>>;
}
//
// AgHttpService
//
@Injectable()
export class AgHttpService implements IHttpService {
  public get port() {
    return this.httpClient.port;
  }

  public set port(value: string) {
    this.httpClient.port = value;
  }

  public get server() {
    return this.httpClient.server;
  }

  public set server(value: string) {
    this.httpClient.server = value;
  }

  public get secure() {
    return this.httpClient.secure;
  }

  public set secure(value: boolean) {
    this.httpClient.secure = value;
  }

  public get prefix() {
    return this.httpClient.prefix;
  }

  public set prefix(value: string) {
    this.httpClient.prefix = value;
  }

  public get<T>(
    endpoint: string,
    cb?: IMap<T>,
    params?: object
  ): Observable<Response<T>> {
    return this.httpClient
      .get(endpoint, params)
      .pipe(map(resp => new Response(resp, cb)));
  }

  public put<T>(
    endpoint: string,
    model: any,
    cb?: IMap<T>,
    params?: object
  ): Observable<Response<T>> {
    return this.httpClient
      .put(endpoint, model, params)
      .pipe(map(resp => new Response(resp, cb)));
  }

  public post<T>(
    endpoint: string,
    model: any,
    cb?: IMap<T>
  ): Observable<Response<T>> {
    return this.httpClient
      .post(endpoint, model)
      .pipe(map(resp => new Response(resp, cb)));
  }

  public patch<T>(
    endpoint: string,
    model: any,
    cb?: IMap<T>
  ): Observable<Response<T>> {
    return this.httpClient
      .patch(endpoint, model)
      .pipe(map(resp => new Response(resp, cb)));
  }

  public delete<T>(
    endpoint: string,
    params?: object,
    cb?: IMap<T>
  ): Observable<Response<T>> {
    return this.httpClient
      .delete(endpoint, params)
      .pipe(map(resp => new Response(resp, cb)));
  }

  constructor(private httpClient: AgHttpClientService) {}
}
