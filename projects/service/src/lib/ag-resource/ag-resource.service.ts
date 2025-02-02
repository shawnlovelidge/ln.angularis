import { resource, Injectable, ResourceRef } from '@angular/core';
import { Library } from '@angularis/core';

@Injectable()
export class AgResourceService {
  //
  // Public Properties
  //
  public port: string = '';
  public secure: boolean = true;
  public server: string = '';
  public prefix: string = '';
  //
  // Constructor
  //
  constructor() {}

  //
  // Public Methods
  //
  public createUrl(url: string): string {
    let str = 'HTTP://SERVER';

    if (Library.isStringWithLength(this.port)) {
      str += ':PORT';
    }

    if (Library.isStringWithLength(this.prefix)) {
      str += '/PREFIX';
    }

    if (Library.isStringWithLength(url)) {
      str += '/ENDPOINT';
    }

    str = str
      .replace(/HTTP/g, this.secure ? 'https' : 'http')
      .replace(
        /SERVER/g,
        Library.isStringWithLength(this.server) ? this.server : ''
      )
      .replace(/PORT/g, Library.isStringWithLength(this.port) ? this.port : '')
      .replace(
        /PREFIX/g,
        Library.isStringWithLength(this.prefix) ? this.prefix : ''
      )
      .replace(/ENDPOINT/g, Library.isStringWithLength(url) ? url : '')
      .trim();

    return str;
  }

  //
  // get()
  //
  public get<T>(url: string, params?: any): ResourceRef<T[] | undefined> {
    return resource<T[], any>({
      loader: async () => {
        try {
          const response = await fetch(this.createUrl(url));
          return (await response.json()) as T[];
        } catch (error) {}
        return [];
      },
    });
  }

  //
  // put()
  //
  public put<T>(
    url: string,
    model: any = {},
    params?: any
  ): ResourceRef<T[] | undefined> {
    return resource<T[], any>({
      loader: async () => {
        try {
          const response = await fetch(this.createUrl(url), {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(model),
          });

          return (await response.json()) as T[];
        } catch (error) {}
        return [];
      },
    });
  }

  //
  // post()
  //
  public post<T>(url: string, model: any = {}): ResourceRef<T[] | undefined> {
    return resource<T[], any>({
      loader: async () => {
        try {
          const response = await fetch(this.createUrl(url), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(model),
          });

          return (await response.json()) as T[];
        } catch (error) {}
        return [];
      },
    });
  }

  //
  // patch()
  //
  public patch<T>(url: string, model: any = {}): ResourceRef<T[] | undefined> {
    return resource<T[], any>({
      loader: async () => {
        try {
          const response = await fetch(this.createUrl(url), {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(model),
          });

          return (await response.json()) as T[];
        } catch (error) {}
        return [];
      },
    });
  }
  //
  // delete()
  //
  public delete<T>(
    url: string,
    params: any = {}
  ): ResourceRef<T[] | undefined> {
    return resource<T[], any>({
      loader: async () => {
        try {
          const response = await fetch(this.createUrl(url), {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          return (await response.json()) as T[];
        } catch (error) {}
        return [];
      },
    });
  }
}
