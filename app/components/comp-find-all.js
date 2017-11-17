import Ember from 'ember';

const {
  get,
  inject: {
    service,
  },
} = Ember;

export default Ember.Component.extend({
  store: service(),

  async didReceiveAttrs(...args) {
    this._super(args);

    await get(this, 'store').findAll('user');
  },
});
