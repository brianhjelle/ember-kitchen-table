import Component from '@ember/component';
import layout from '../templates/components/kitchen-thead';
import { className, tagName } from '@ember-decorators/component';

@tagName('thead')
export default class KitchenTheadComponent extends Component {
  layout = layout;

  @className('sticky-header')
  isSticky = this.isSticky || false;
}
