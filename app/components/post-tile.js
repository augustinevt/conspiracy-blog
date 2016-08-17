import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post, params){
      console.log('update 2');
      this.sendAction('update', post, params);
    },
  }
});
