import Component from '@ember/component';
import layout from '../templates/components/kitchen-tbody';
import { tagName } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';

@tagName('tbody')
export default class KitchenTbodyComponent extends Component {
  layout = layout;

  @service tableData

  @computed('tableData.cols')
  get cols() {
    return this.tableData.getCols();
  }

  @computed('tableData.rows')
  get rows() {
    return this.tableData.getRows();
  }
}
