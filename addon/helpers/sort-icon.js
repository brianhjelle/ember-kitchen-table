import { helper } from '@ember/component/helper';

export function sortIcon(params) {
  switch(params[0]) {
    case 'asc':
      return 'sort-up';
    case 'desc':
      return 'sort-down';
    default:
      return 'sort';
  }
}

export default helper(sortIcon);
