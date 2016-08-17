import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    new(){
      console.log(this.get('title'));
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        image: this.get('image'),
        category: this.get('category'),
        author: this.get('author'),
        timestamp: this.get('timestamp'),
      };
      console.log(params);
      this.sendAction('save1', params);
    }
  }
});
