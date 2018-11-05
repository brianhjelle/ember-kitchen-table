import Component from '@ember/component';
import layout from '../templates/components/kitchen-column';
import { action, computed } from '@ember-decorators/object';
import { tagName } from '@ember-decorators/component';

@tagName('th')
export default class KitchenColumnComponent extends Component {
  layout = layout;

  @action
  sortInternal() {
    if (this.fieldToSort !== undefined && this.sort !== undefined) {
      this.sort(this.fieldToSort);
    }
  }

  @computed('fieldToSort')
  get canSort() {
    return !!this.fieldToSort;
  }
}
