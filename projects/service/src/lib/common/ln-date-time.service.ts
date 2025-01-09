import { Injectable } from '@angular/core';
import { Library } from '@angularis/core';

@Injectable()
export class LnDateTimeService {
  /**
   * Previous()
   */
  public Previous() {
    return {
      Year: (date: Date | string) => {
        const _date: Date = new Date(
          Library.isString(date) ? new Date(date) : date
        );
        if (Library.isDate(_date)) {
          _date.setFullYear(_date.getFullYear() - 1);
          return _date;
        }
        return _date;
      },
      Month: (date: Date | string) => {
        const _date: Date = new Date(
          Library.isString(date) ? new Date(date) : date
        );
        if (Library.isDate(_date)) {
          if (_date.getMonth() === 0) {
            return new Date(_date.getFullYear() - 1, 11);
          }
          return new Date(_date.getFullYear(), _date.getMonth() - 1);
        }
        return _date;
      },
    };
  }

  /**
   * Next()
   */
  public Next() {
    return {
      Year: (date: Date | string) => {
        const _date: Date = new Date(
          Library.isString(date) ? new Date(date) : date
        );
        if (Library.isDate(_date)) {
          _date.setFullYear(_date.getFullYear() + 1);
          return _date;
        }
        return _date;
      },
      Month: (date: Date | string) => {
        const _date: Date = new Date(
          Library.isString(date) ? new Date(date) : date
        );
        if (Library.isDate(_date)) {
          if (_date.getMonth() === 11) {
            return new Date(_date.getFullYear() + 1, 0);
          }
          return new Date(_date.getFullYear(), _date.getMonth() + 1);
        }
        return _date;
      },
    };
  }

  /**
   * Equal()
   */
  public Equal() {
    return {
      Month: (x: Date | string, y: Date | string) => {
        const date1: Date = new Date(Library.isString(x) ? new Date(x) : x);
        const date2: Date = new Date(Library.isString(y) ? new Date(y) : y);
        if (Library.isDate(date1) && Library.isDate(date2)) {
          return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth()
          );
        }
        return false;
      },
      Day: (x: Date | string, y: Date | string) => {
        const date1: Date = new Date(Library.isString(x) ? new Date(x) : x);
        const date2: Date = new Date(Library.isString(y) ? new Date(y) : y);
        if (Library.isDate(date1) && Library.isDate(date2)) {
          return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
          );
        }
        return false;
      },
    };
  }
}
