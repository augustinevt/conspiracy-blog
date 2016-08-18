import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post){
      console.log("update 1");
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        image: this.get('image'),
        category: this.get('category'),
        author: this.get('author'),
        timestamp: this.get('timestamp')
      };
      this.sendAction('update', post, params);
      this.set('updatePostForm', false);
    }
  }
});
