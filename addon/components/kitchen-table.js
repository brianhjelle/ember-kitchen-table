import Component from '@ember/component';
import layout from '../templates/components/kitchen-table';
import { tagName } from '@ember-decorators/component';

@tagName('table')
export default class KitchenTableComponent extends Component {
  layout = layout;
}
