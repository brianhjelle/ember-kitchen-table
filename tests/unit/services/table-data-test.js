import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | table-data', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('filter: test lower case, cols defined', function(assert) {
    const data = [
      {
        id: 1,
        name: 'Brian'
      }, {
        id: 2,
        name: 'Alan'
      }
    ];
    const cols = [
      {
        field: 'id',
        displayName: 'ID'
      }, {
        field: 'name',
        displayName: 'Name'
      }
    ];
    let service = this.owner.lookup('service:table-data');
    assert.ok(service);

    service.setData(data, cols);
    const results = service.filter('bri');
    assert.equal(results.length, 1);
    assert.equal(results[0].name, 'Brian');
  });

  test('filter: test cols unedfined', function(assert) {
    const data = [
      {
        id: 1,
        name: 'Brian'
      }, {
        id: 2,
        name: 'Alan'
      }
    ];
    let service = this.owner.lookup('service:table-data');
  
    service.setData(data);
    const results = service.filter('bri');
    assert.equal(results.length, 1);
    assert.equal(results[0].name, 'Brian');
  });

  test('filter: no results found', function(assert) {
    const data = [
      {
        id: 1,
        name: 'Brian'
      }, {
        id: 2,
        name: 'Alan'
      }
    ];
    let service = this.owner.lookup('service:table-data');
  
    service.setData(data);
    const results = service.filter('brian2');
    assert.equal(results.length, 0);
  });

  // test('sort: ', function(assert) {
  //   const data = [
  //     {
  //       id: 1,
  //       name: 'Brian'
  //     }, {
  //       id: 2,
  //       name: 'Alan'
  //     }
  //   ];
  //   let service = this.owner.lookup('service:table-data');
  
  //   service.setData(data);
  //   const results = service.sort('name');
  //   assert.equal(results[0].name, 'Alan');
  //   assert.equal(results[1].name, 'Brian');
  // });
});
