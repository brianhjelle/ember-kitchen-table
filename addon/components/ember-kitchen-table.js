import Component from '@ember/component';
import layout from '../templates/components/ember-kitchen-table';
import { service } from '@ember-decorators/service';

export default class EmberKitchenTableComponent extends Component {
  layout = layout;

  @service tableData

  didReceiveAttrs() {
    this._super(...arguments);
    this.tableData.setData(this.data, this.cols);
  }
}
