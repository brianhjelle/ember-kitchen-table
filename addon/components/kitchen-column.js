import Component from '@ember/component';
import layout from '../templates/components/kitchen-column';
import { action, computed } from 'ember-decorators/object';
import { tagName } from 'ember-decorators/component';

const changeState = (state) => {
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

@tagName('th')
export default class KitchenColumnComponent extends Component {
  layout = layout;

  state = 'both';

  @action
  sort() {
    if (this.fieldToSort !== undefined) {
      this.set('state', changeState(this.state));
      if (this.sort !== undefined) {
        this.sort(this.fieldToSort, this.state);
      }
    }
  }

  @computed('fieldToSort')
  get canSort() {
    return !!this.fieldToSort;
  }
}
