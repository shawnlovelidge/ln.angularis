import * as Library from '../functions';
import {
  daysInMonth,
  firstDayOfMonth,
  previousMonth,
  nextMonth,
} from '../datetime/datetime';
//
// Weeks displayed on calendar
//
export const CalendarWeeks = 6;
//
// WeekDayHashMap
//
export const WeekDayHashMap = {
  Sunday: 'Sun',
  Monday: 'Mon',
  Tuesday: 'Tue',
  Wednesday: 'Wed',
  Thursday: 'Thu',
  Friday: 'Fri',
  Saturday: 'Sat',
};

//
// CalendarMonthHashMap: Hashmap of month within a year
//
export const CalendarMonthHashMap = {
  January: 'Jan',
  February: 'Feb',
  March: 'Mar',
  April: 'Apr',
  May: 'May',
  June: 'Jun',
  July: 'Jul',
  August: 'Aug',
  September: 'Sep',
  October: 'Oct',
  November: 'Nov',
  December: 'Dec',
};
//
// buildCalendar()
//
export function buildCalendar(
  month = +new Date().getMonth() + 1,
  year = +new Date().getFullYear()
) {
  const monthDays = daysInMonth(month, year);
  const monthFirstDay = firstDayOfMonth(month, year);

  // Get number of days to be displayed from previous and next months
  // These ensure a total of 42 days (6 weeks) displayed on the calendar

  const daysFromPrevMonth = monthFirstDay - 1;
  const daysFromNextMonth = CalendarWeeks * 7 - (daysFromPrevMonth + monthDays);
  //
  // Get the previous and next months and years
  //
  const { month: prevMonth, year: prevMonthYear } = previousMonth(month, year);
  const { month: nxtMonth, year: nextMonthYear } = nextMonth(month, year);
  //
  // Get number of days in previous month
  //
  const prevMonthDays = daysInMonth(prevMonth, prevMonthYear);
  //
  // Build previous month dates
  //
  const prevMonthDates = [...new Array(daysFromPrevMonth)].map((_, index) => {
    const day = index + 1 + (prevMonthDays - daysFromPrevMonth);
    return [prevMonthYear, Library.pad(prevMonth, 2), Library.pad(day, 2)];
  });
  //
  // Build current month dates
  //
  const thisMonthDates = [...new Array(monthDays)].map((_, index) => {
    const day = index + 1;
    return [year, Library.pad(month, 2), Library.pad(day, 2)];
  });
  //
  // Build next month dates
  //
  const nextMonthDates = [...new Array(daysFromNextMonth)].map((_, index) => {
    const day = index + 1;
    return [nextMonthYear, Library.pad(nxtMonth, 2), Library.pad(day, 2)];
  });
  //
  // join dates
  //
  return [...prevMonthDates, ...thisMonthDates, ...nextMonthDates];
}
//
// Export Default Functions
//
export default {
  CalendarMonthHashMap,
  WeekDayHashMap,
  buildCalendar,
  CalendarWeeks,
};
