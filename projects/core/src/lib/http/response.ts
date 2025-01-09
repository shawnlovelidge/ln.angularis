import { Library } from '../library';
import { Error } from './error';

/**
 * Response
 */
export class Response<T> {
  public data: T[];
  public errors: Error[] = [];
  public total: number = 0;
  public pagination: Object;

  hasErrors() {
    return Library.isArrayWithLength(this.errors);
  }

  hasData() {
    return (
      Library.isArrayWithLength(this.data) ||
      (!Library.isArray(this.data) && Library.isObject(this.data))
    );
  }

  /**
   * constructor()
   */
  constructor(options: any, map: any = undefined, pagination: Object = {}) {
    this.data = [];
    this.errors = [];
    this.total = Library.init(options, 'total', 0);
    this.pagination = Object.assign(
      {
        pageNo: 0,
        pageSize: 0,
        totalPages: 0,
        totalRecords: 0,
      },
      pagination
    );

    if (Library.isObject(options)) {
      if (Library.isArrayWithLength(options)) {
        //
        // if no map defined then...
        //
        if (Library.isUndefined(map)) {
          this.data = [...options];
        } else {
          this.data = options.map((o: any) => {
            return map(o);
          });
        }
      } else if (!Library.isArray(options)) {
        //
        // if no map defined then...
        //
        if (Library.isUndefined(map)) {
          this.data.push(options);
        } else {
          this.data.push(map(options));
        }
      }

      if (Library.hasOwnProperty(options, 'errors')) {
        this.errors = options.errors.map((e: any) => {
          return new Error(e);
        });
      }
    }
  }
}
