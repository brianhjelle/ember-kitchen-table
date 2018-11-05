import Component from '@ember/component';
import layout from '../templates/components/kitchen-filter-bar';
import { action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';

export default class KitchenFilterBarComponent extends Component {
  layout = layout;

  @service tableData

  @action
  filterTextChanged(val) {
    this.tableData.filter(val);
  }
}
