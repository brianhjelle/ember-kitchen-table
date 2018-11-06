import Component from '@ember/component';
import layout from '../templates/components/kitchen-thead';
import { className, tagName } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';

@tagName('thead')
export default class KitchenTheadComponent extends Component {
  layout = layout;

  @className('sticky-header')
  isSticky = this.isSticky || false;

  @service tableData

  @computed('tableData.getCols')
  get cols() {
    return this.tableData.getCols();
  }
}
