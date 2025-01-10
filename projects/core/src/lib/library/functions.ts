//
// isNull()
//
export function isNull(o: any) {
  return o === null;
}

//
// isUndefined()
//
export function isUndefined(o: any) {
  return o === undefined;
}

//
// isNullOrUndefined()
//
export function isNullOrUndefined(o: any) {
  return isNull(o) || isUndefined(o);
}

/**
 * isDefined()
 * @param o
 * @returns {boolean}
 */
export function isDefined(o: any) {
  return !isNullOrUndefined(o);
}

//
// isObject()
//
export function isObject(o: any) {
  if (isDefined(o)) return typeof o === 'object';
  return false;
}

//
// isFunction()
//
export function isFunction(f: any) {
  return isDefined(f) && typeof f === 'function';
}

//
// isNumber()
//
export function isNumber(o: any) {
  return !isNaN(parseFloat(o)) && isFinite(o);
}

///
// isDecimal()
//
export function isDecimal(o: string | number) {
  if (isDefined(o)) {
    const decimalRegex = /^-?\d*\.?\d+$/;
    return decimalRegex.test(o.toString());
  }

  return false;
}

//
// isString()
//
export function isString(o: any) {
  return isDefined(o) && typeof o === 'string';
}

//
// isDate()
//
export function isDate(o: any) {
  return !isNullOrUndefined(o) && o instanceof Date && !isNaN(Number(o));
}

//
// isEmpty()
//
export function isEmpty(o: any) {
  if (isString(o)) {
    return o === '';
  } else if (isObject(o)) {
    if (Array.isArray(o)) {
      return o.length === 0;
    } else if (isDate(o)) {
      return isNullOrUndefined(o);
    } else {
      return Object.getOwnPropertyNames(o).length === 0;
    }
  }

  return false;
}

//
// isEmptyObject
//
export function isEmptyObject(o: object | undefined | null) {
  return isObject(o) && Object.getOwnPropertyNames(o).length === 0;
}

//
// startsWith()
//
export function startsWith(text: string, sb: string) {
  return new RegExp(`^${sb}`, 'gim').test(text);
}

//
// startsWithWord()
//
export function startsWithWord(text: string, sb: string, pos: number = 0) {
  return isString(sb) && text.startsWith(sb, pos);
}

//
// exactMatch()
//
export function exactMatch(
  text: string,
  sb: string,
  caseInsensitive: boolean = true
) {
  if (isStringWithLength(sb)) {
    let regex = '\\b';
    regex += sb.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
    regex += '\\b';
    return caseInsensitive
      ? new RegExp(regex, 'i').test(text)
      : new RegExp(regex).test(text);
  }

  return false;
}

//
// endsWith()
//
export function endsWith(
  text: string,
  sb: string,
  caseInsensitive: boolean = true
) {
  if (isStringWithLength(sb)) {
    return new RegExp(`${sb}$`, `${caseInsensitive ? 'gim' : 'gm'}`).test(text);
  }

  return false;
}

//
// exact()
//
export function exact(
  text: string,
  exp: string,
  caseInsensitive: boolean = true
) {
  if (isStringWithLength(exp)) {
    return new RegExp(`^${exp}$`, `${caseInsensitive ? 'gi' : 'g'}`).test(text);
  }
  return false;
}

//
// contains()
//
export function contains(
  text: string,
  exp: string,
  caseInsensitive: boolean = true
) {
  if (isStringWithLength(exp)) {
    return new RegExp(`${exp}`, `${caseInsensitive ? 'i' : ''}`).test(text);
  }
  return false;
}

//
// camelCase()
//
export function camelCase(o: any) {
  if (isStringWithLength(o)) {
    return o
      .replace(/\s(.)/g, (c: string) => {
        return c.toUpperCase();
      })
      .replace(/\s/g, '')
      .replace(/^(.)/, (c: string) => {
        return c.toLowerCase();
      });
  }

  return o;
}

//
// isStringWithLength()
//
export function isStringWithLength(o: any) {
  return isString(o) && o.length > 0;
}

//
// isArray()
//
export function isArray(o: any) {
  return isDefined(o) && Array.isArray(o);
}

//
// isArrayWithLength()
//
export function isArrayWithLength(o: any) {
  return isArray(o) && o.length > 0;
}

//
// isTrue()
//
export function isTrue(o: any) {
  return isDefined(o) && typeof o === 'boolean' && o === true;
}

//
// isFalse()
//
export function isFalse(o: any) {
  return isDefined(o) && typeof o === 'boolean' && o === false;
}

//
// isBoolean()
//
export function isBoolean(o: any) {
  return isTrue(o) || isFalse(o);
}

//
// hasOwnProperty()
//
export function hasOwnProperty(o: object, prop: string) {
  return isDefined(o) && o.hasOwnProperty(prop);
}

//
// getProperty()
//
export function getProperty<T>(o: T, key: string): any {
  type ObjectKey = keyof typeof o;
  const index = key as ObjectKey;

  return o[index];
}

//
// CreateInstance
//
export function createInstance<T>(
  ctor: new (...args: any[]) => T,
  ...args: any[]
): T {
  return new ctor(...args);
}

//
// init()
//
export function init(
  options: Object | undefined | null,
  prop: string,
  defaultValue?: any
) {
  if (options) {
    if (hasOwnProperty(options, prop)) {
      const val = getProperty(options, prop);
      return isDefined(val) ? val : defaultValue;
    }
  }

  return defaultValue;
}

//
// Pads a string value with leading zeroes(0) until length is reached
// For example: pad(5, 2) => "05"
//
export function pad(value: number, power: number = 0) {
  const placementValue = (value: number) => {
    if (isDefined(value)) {
      const str = value.toString();
      const index = str.indexOf('.');
      return index === -1 ? str.length : index;
    }

    return 0;
  };

  if (value && power >= 0) {
    const place = Math.pow(10, power);
    const valueLength: number = placementValue(value);
    const placeLength: number = placementValue(place);
    const diff = placeLength - valueLength + 1;

    return `${value}`.padStart(diff, '0');
  }

  return `${value}`;
}
//
// findItem()
//
export function findItem(items: any[], obj: Object, prop = 'id') {
  if (isArrayWithLength(items)) {
    let nIndex = -1;

    if (isObject(obj)) {
      nIndex = items.findIndex(i => {
        return i[prop] === getProperty(obj, prop);
      });
    } else if (isStringWithLength(obj) || isNumber(obj)) {
      nIndex = items.findIndex(i => {
        return i[prop] === obj;
      });
    }

    if (nIndex > -1) {
      return items[nIndex];
    }
  }
}

//
// wordCount()
//
export function wordCount(s: string) {
  return isStringWithLength(s) ? s.split(/\b\W+\b/).length : 0;
}

//
// isSafariBrowser()
//
export function isSafariBrowser() {
  return (
    /Safari/.test(navigator.userAgent) &&
    /Apple Computer/.test(navigator.vendor)
  );
}

//
// isPowerof2()
//
export function isPowerOf2(n: number) {
  if (n % 2 !== 0 && n !== 1) {
    return false;
  }

  return Math.ceil(Math.log2(n)) === Math.floor(Math.log2(n));
}

export function toBinary(n: number) {
  return (n >>> 0).toString(2);
}

export function parseObject(obj: any, path: string, delimiter: string = '.') {
  if (isDefined(obj)) {
    let item = Object.assign({}, obj);
    let protoItem = Object.create(obj, {});
    if (isStringWithLength(path)) {
      const props = path.split(delimiter);
      if (isArrayWithLength(props)) {
        for (let i = 0; i < props.length; i++) {
          if (hasOwnProperty(item, props[i]) || props[i] in item) {
            item = item[props[i]];
            if (isFunction(item)) {
              item = item();
            }
          } else if (props[i] in protoItem) {
            item = protoItem[props[i]];
            if (isFunction(item)) {
              item = item();
            }
          } else {
            return;
          }
        }

        return item;
      }
    }
  }

  return;
}

export default {
  camelCase,
  contains,
  endsWith,
  exact,
  exactMatch,
  findItem,
  getProperty,
  hasOwnProperty,
  init,
  isArray,
  isArrayWithLength,
  isBoolean,
  isDate,
  isDecimal,
  isDefined,
  isEmpty,
  isEmptyObject,
  isFalse,
  isFunction,
  isNull,
  isNullOrUndefined,
  isNumber,
  isObject,
  isPowerOf2,
  isString,
  isStringWithLength,
  isTrue,
  isUndefined,
  pad,
  parseObject,
  startsWith,
  toBinary,
  wordCount,
};
