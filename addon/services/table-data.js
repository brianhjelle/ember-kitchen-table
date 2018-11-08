import Service from '@ember/service';
import { sort } from '@ember/object/computed';

// sortState
// [ fieldA: 'asc', someOtherField: 'desc', anotherField: 'both' ]

const changeSortState = (state) => {
  switch(state) {
    case 'both':
      return 'asc';
    case 'asc':
      return 'desc';
    case 'desc':
      return 'asc';
    default:
      return 'both';
  }
};

export default class TableDataService extends Service {
  rows = null;
  cols = null;
  originalData = null;
  filterString = '';

  constructor() {
    super(...arguments);
    this.set('rows', []);
    this.set('cols', []);
    this.set('originalData', []);
    this.set('sortState', {});
  }

  setData(data = [], cols = []) {
    this.set('originalData', data);
    this.set('rows', data);
    this.set('cols', cols);
  }

  getRows() {
    return this.rows;
  }

  getCols() {
    return this.cols;
  }

  _sort(sortState, data) {
    // const sortTermKey = Object.keys(sortState)[0];
    // const sortTermString = sortTermKey + ':' + sortState[sortTermKey];
    // const sortTerm = Object.freeze([sortTermString]);
    // return sort(data, sortTerm);
    return data;
  }

  sort(fieldToSort) {
    // Update sort state
    const field = Object.keys(this.sortState);
    const newSortState = (field === fieldToSort) ? 
      changeSortState(this.sortState[field]) : changeSortState('both');
    this.set('sortState', { [fieldToSort]: newSortState });
    // Sort
    this.set('rows', this._sort(this.sortState, this.rows));
    return this.rows;
  }

  _getDataSetToFilterThrough(oldFilterString, filterString) {
    // If newFilterString is a subset of oldFilterString
    // Then we only need to comb through the current rows
    // Else we need to comb through the originalData
    const newFilterString = filterString.toLowerCase().trim();
    const oldLength = oldFilterString.length;
    const newLength = newFilterString.length;
    if (newLength > oldLength && newFilterString.substr(0, oldLength) === oldFilterString) {
      return this.rows;
    }
    return this.originalData;
  }

  filter(newFilter) {
    const newFilterString = newFilter.toString().toLowerCase();
    const rows = this._getDataSetToFilterThrough(this.filterString, newFilterString);
    this.set('filterString', newFilterString);
    // For each row, check if there are any cell values that match the newFilterString
    const filterResults = rows.filter(row => {
      let result;
      // If cols is defined comb through those fields
      // Otherwise, comb through every field that exists
      if (this.cols.length > 0) {
        result = this.cols.find(col => {
          return row[col.field].toString().toLowerCase().includes(newFilterString);
        });
      } else {
        const cols = Object.keys(row);
        result = cols.find(col => {
          return row[col].toString().toLowerCase().includes(newFilterString);
        });
      }
      return result !== undefined;
    });
    const sortedResults = this._sort(this.sortState, filterResults);
    this.set('rows', sortedResults);
    return sortedResults;
  }
}
