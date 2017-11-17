import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { manualSetup, make, mockFindRecord } from 'ember-data-factory-guy';

moduleForComponent('comp-with-find-record', 'Integration | Component | comp with find record', {
  integration: true,

  beforeEach() {
    manualSetup(this.container);
  },
});

test('it renders', function(assert) {
  mockFindRecord('user').returns({ model: make('user') });

  this.render(hbs`{{comp-find-record}}`);

  assert.ok(true);
});
