import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { manualSetup, makeList, mockFindAll } from 'ember-data-factory-guy';

moduleForComponent('comp-with-find-all', 'Integration | Component | comp with find all', {
  integration: true,

  beforeEach() {
    manualSetup(this.container);
  },
});

test('it renders', function(assert) {
  mockFindAll('user').returns({ models: makeList('user', 2) });

  this.render(hbs`{{comp-find-all}}`);

  assert.ok(true);
});
