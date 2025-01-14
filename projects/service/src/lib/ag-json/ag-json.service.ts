import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AgJsonService {
  /**
   * Function: get()
   * @function
   */
  public get(file: string): Observable<any> {
    return this.httpClient.get(file);
  }

  /**
   * Function: constructor()
   */
  constructor(private httpClient: HttpClient) {}
}
