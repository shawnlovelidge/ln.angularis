import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Library } from '@angularis/core';

@Injectable({
  providedIn: 'root',
})
export class LnMessageBusService {
  /**
   * Properties
   */
  private _bus: Subject<any> = new Subject<any>();
  /**
   * dispatch()
   */
  public dispatch(message: any) {
    if (Library.isDefined(message)) {
      this._bus.next(message);
    }
  }
  /**
   * message()
   */
  public message(): Observable<any> {
    return this._bus.asObservable();
  }
  /**
   * Function: constructor()
   */
  constructor() {}
}
