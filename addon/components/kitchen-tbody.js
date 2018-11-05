import Component from '@ember/component';
import layout from '../templates/components/kitchen-tbody';
import { tagName } from '@ember-decorators/component';

@tagName('tbody')
export default class KitchenTbodyComponent extends Component {
  layout = layout;
}
