//
// parseClassList
import { Library } from '@angularis/core';

//
// parseClassList
//
export const parseHTMLElementClassList = (element: HTMLElement, hostClass: string = ''): string => {
  //
  // Get the classList
  //
  const list: string[] = Array.from(element.classList);
  //
  // Check if the list has length
  //
  if (Library.isArrayWithLength(list)) {
    if (Library.isStringWithLength(hostClass)) {
      list.unshift(hostClass);
    }

    return list.join(' ');
  }

  return Library.isStringWithLength(hostClass) ? hostClass : '';
};


//
// Export the functions
//
export default {
  parseHTMLElementClassList,
};