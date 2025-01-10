import * as Library from '../functions';

//
// currentYear()
//
export function currentYear(): number {
  return +new Date().getFullYear();
}

//
// currentMonth()
//
export function currentMonth(): number {
  return +new Date().getMonth() + 1;
}

//
// isDate()
//
export function isDate(o: any): boolean {
  const isDate = Object.prototype.toString.call(o) === '[object Date]';
  const isValidDate = o && !Number.isNaN(o.valueOf());

  return isDate && isValidDate;
}

//
// localeTime()
//
export function localeTime(o: any, local = 'en-US') {
  if (Library.isDate(o)) {
    return o.toLocaleTimeString(local);
  }
}

//
// isDateObject()
//
export function isDateObject(o: any) {
  if (Library.isObject(o)) {
    return (
      Library.hasOwnProperty(o, 'year') &&
      Library.hasOwnProperty(o, 'month') &&
      Library.hasOwnProperty(o, 'dayOfMonth') &&
      Library.hasOwnProperty(o, 'hourOfDay') &&
      Library.hasOwnProperty(o, 'minute') &&
      Library.hasOwnProperty(o, 'second')
    );
  }

  return false;
}

//
// isWithin24Hours()
//
export function isWithin24Hours(o: any) {
  if (isDate(o)) {
    const differenceInDates = Math.abs(
      Math.ceil((new Date().getTime() - o.getTime()) / (1000 * 3600 * 24))
    );
    return differenceInDates === 0 || differenceInDates === 1;
  } else {
    return false;
  }
}

//
// toDate()
//
export function toDate(o: any) {
  if (isDateObject(o)) {
    return new Date(
      parseInt(o['year'].toString(), 10),
      parseInt(o['month'].toString(), 10),
      parseInt(o['dayOfMonth'].toString(), 10),
      parseInt(o['hourOfDay'].toString(), 10),
      parseInt(o['minute'].toString(), 10),
      parseInt(o['second'].toString(), 10)
    );
  }
  return undefined;
}

//
// parseDate()
//
export function parseDate(o: any) {
  if (Library.isDefined(o) && isDate(o)) {
    return new Date(o);
  }
  return null;
}

//
// daysInMonth()
//
export function daysInMonth(
  month = +new Date().getMonth() + 1,
  year = +new Date().getFullYear()
): number {
  const months30 = [4, 6, 9, 11];
  const leapYear = year % 4 === 0;
  return month === 2
    ? leapYear
      ? 29
      : 28
    : months30.includes(month)
      ? 30
      : 31;
}

//
// firstDayOfMonth()
//
export function firstDayOfMonth(
  month = +new Date().getMonth() + 1,
  year = +new Date().getFullYear()
) {
  return +new Date(`${year}-${Library.pad(month, 2)}-01`).getDay() + 1;
}

//
// inMonth()
//
export const inMonth = (date: any, defaultDate = new Date()) => {
  if (!isDate(date)) return false;

  const defaultMonth = +defaultDate.getMonth() + 1;
  const defaultYear = defaultDate.getFullYear();

  const month = +date.getMonth() + 1;
  const year = date.getFullYear();
  return +defaultMonth === +month && +defaultYear === +year;
};

//
// inDay()
//
export const inDay = (date: any, defaultDate = new Date()) => {
  if (!isDate(date)) return false;

  const defaultDay = defaultDate.getDate();
  const defaultMonth = +defaultDate.getMonth() + 1;
  const defaultYear = defaultDate.getFullYear();

  const day = date.getDate();
  const month = +date.getMonth() + 1;
  const year = date.getFullYear();
  return (
    +defaultDay === +day && +defaultMonth === +month && +defaultYear === +year
  );
};

//
// isoDate()
//
export const isoDate = (date = new Date()) => {
  if (!isDate(date)) return null;
  return [
    date.getFullYear(),
    Library.pad(+date.getMonth() + 1, 2),
    Library.pad(+date.getDate(), 2),
  ].join('-');
};

//
// previousMonth()
//
export function previousMonth(
  m: number,
  y: number
): { month: number; year: number } {
  const month = m > 1 ? m - 1 : 12;
  const year = m > 1 ? y : y - 1;
  return { month, year };
}

//
// nextMonth()
//
export function nextMonth(
  m: number,
  y: number
): { month: number; year: number } {
  const month = m < 12 ? m + 1 : 1;
  const year = m < 12 ? y : y + 1;
  return { month, year };
}

export default {
  currentMonth,
  currentYear,
  daysInMonth,
  firstDayOfMonth,
  inDay,
  inMonth,
  isDate,
  isDateObject,
  isWithin24Hours,
  isoDate,
  localeTime,
  nextMonth,
  parseDate,
  previousMonth,
  toDate,
};
