import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | kitchen-thead', function(hooks) {
  setupRenderingTest(hooks);

  test('isSticky controls sticky-header class', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    

    await render(hbs`{{kitchen-thead}}`);
    assert.equal(this.element.textContent.trim(), '');

    //Template block usage
    this.set('isSticky', true);
    await render(hbs`
      {{#kitchen-thead isSticky=isSticky}}
        template block text
      {{/kitchen-thead}}
    `);
    assert.dom(this.element.querySelector('thead')).hasClass('sticky-header');

    this.set('isSticky', false);
    await render(hbs`
      {{#kitchen-thead isSticky=isSticky}}
        template block text
      {{/kitchen-thead}}
    `);
    assert.dom(this.element.querySelector('thead')).doesNotHaveClass('sticky-header');
  });
});
