import Ember from 'ember';

const {
  get,
  inject: {
    service,
  },
} = Ember;

export default Ember.Component.extend({
  store: service(),

  didReceiveAttrs(...args) {
    this._super(args);

    get(this, 'store').findRecord('user', 1);
  },
});
