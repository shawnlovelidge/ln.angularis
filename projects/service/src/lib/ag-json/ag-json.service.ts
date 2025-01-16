import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AgJsonService {
  //
  // Injected Services
  //
  private http = inject(HttpClient);
  //
  // Public Functions
  //
  public get(file: string): Observable<any> {
    return this.http.get(file);
  }

  //
  // Constructor
  //
  constructor() {}
}
