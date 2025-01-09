import * as Library from '../functions';

//
// isOn()
//
export function isOn(n: number, mask: number = 0): boolean | undefined {
  if (mask === 0) return undefined;

  if (Library.isNumber(n) && Library.isNumber(mask)) {
    return (n & mask) !== 0;
  }

  return false;
}

//
// isOff()
//
export function isOff(n: number, mask: number = 0): boolean | undefined {
  if (mask === 0) return undefined;

  if (Library.isNumber(n) && Library.isNumber(mask)) {
    return (n & mask) === 0;
  }

  return false;
}

//
// setOn()
//
export function setOn(n: number, mask: number = 0) {
  if (Library.isNumber(n) && Library.isNumber(mask)) {
    return n ^ mask;
  }
  return n;
}
//
// toggle()
//
export function toggle(n: number, mask: number = 0) {
  if (Library.isNumber(n) && Library.isNumber(mask)) {
    return n ^ mask;
  }
  return n;
}

//
// default exports
//
export default {
  isOn,
  isOff,
  setOn,
  toggle,
};
