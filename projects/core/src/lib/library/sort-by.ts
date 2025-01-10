function ascending(a: any, b: any) {
  return a - b;
}

function descending(a: any, b: any) {
  return b - a;
}

function nameAscending(a: any, b: any) {
  return a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0;
}

function nameDescending(a: any, b: any) {
  return a.name !== b.name ? (a.name < b.name ? 1 : -1) : 0;
}

function idAscending(a: any, b: any) {
  return a.id !== b.id ? (a.id < b.id ? -1 : 1) : 0;
}

function idDescending(a: any, b: any) {
  return a.id !== b.id ? (a.id < b.id ? 1 : -1) : 0;
}

function emailAscending(a: any, b: any) {
  return a.email !== b.email ? (a.email < b.email ? -1 : 1) : 0;
}

function emailDescending(a: any, b: any) {
  return a.email !== b.email ? (a.email < b.email ? 1 : -1) : 0;
}

export default {
  ascending,
  descending,
  nameAscending,
  nameDescending,
  idAscending,
  idDescending,
  emailAscending,
  emailDescending,
};
