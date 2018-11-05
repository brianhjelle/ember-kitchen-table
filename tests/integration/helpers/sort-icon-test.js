import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | sort-icon', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it translates sort state into an icon name', async function(assert) {
    this.set('inputValue', 'both');
    await render(hbs`{{sort-icon inputValue}}`);
    assert.equal(this.element.textContent.trim(), 'sort');

    this.set('inputValue', 'asc');
    await render(hbs`{{sort-icon inputValue}}`);
    assert.equal(this.element.textContent.trim(), 'sort-up');

    this.set('inputValue', 'desc');
    await render(hbs`{{sort-icon inputValue}}`);
    assert.equal(this.element.textContent.trim(), 'sort-down');
  });
});
