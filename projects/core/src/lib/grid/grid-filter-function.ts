import { Library } from '../library';
import { Equality } from '../constant';

function _number(value: any, token: any) {
  let result = true;
  switch (token.equality) {
    case Equality.GreaterThanOrEqual:
      result = Math.trunc(value) >= token.value;
      break;
    case Equality.LessthanOrEqual:
      result = Math.trunc(value) < token.value;
      break;
    case Equality.Equal:
      result = Math.trunc(value) === Math.trunc(token.value);
      break;
    case Equality.Not:
      result = !(Math.trunc(value) === Math.trunc(token.value));
      break;
  }
  return result;
}

function _float(value: any, token: any) {
  let result = true;
  switch (token.equality) {
    case Equality.GreaterThanOrEqual:
      result = value >= token.value;
      break;
    case Equality.LessthanOrEqual:
      result = value < token.value;
      break;
    case Equality.Equal:
      result = value === token.value;
      break;
    case Equality.Not:
      result = !(value === token.value);
      break;
  }
  return result;
}

/**
 * startsWith()
 * @param o
 * @returns {boolean}
 */
export function standard(value: any, column: any) {
  const filter = column.filter;
  const criteria = column.filterCriteria.toLowerCase();
  const operator = column.filterOperator.toLowerCase();
  const evaluations: any[] = [];

  if (filter.hasTokens()) {
    for (const token of filter.tokens) {
      let result = true;

      switch (filter.dataType) {
        case 'float':
          result = _float(value, token);
          break;
        case 'number':
          result = _number(value, token);
          break;
        case 'boolean':
          switch (filter.equality) {
            case Equality.Not:
              result = !value === token.value;
              break;
            default:
              result = value === token.value;
              break;
          }
          break;
        default:
          switch (criteria) {
            case 'startswith':
              switch (column.filter.equality) {
                case Equality.Not:
                  result = !Library.startsWith(token.value, value);
                  break;
                default:
                  result = Library.startsWith(token.value, value);
                  break;
              }
              break;
            case 'exactmatch':
              switch (column.filter.equality) {
                case Equality.Not:
                  result = !Library.exactMatch(token.value, value);
                  break;
                default:
                  result = Library.exactMatch(token.value, value);
                  break;
              }
              break;

            case 'exact':
              switch (column.filter.equality) {
                case Equality.Not:
                  result = !Library.exact(token.value, value);
                  break;
                default:
                  result = Library.exact(token.value, value);
                  break;
              }
              break;
            case 'contains':
              switch (column.filter.equality) {
                case Equality.Not:
                  result = !Library.contains(token.value, value);
                  break;
                default:
                  result = Library.contains(token.value, value);
                  break;
              }
              break;
          }
          break;
      }

      evaluations.push(result);
    }
  }

  switch (operator) {
    case 'and':
      return !evaluations.includes(false);
    case 'or':
      return evaluations.includes(true);
  }

  return null;
}

export default {
  standard,
};
