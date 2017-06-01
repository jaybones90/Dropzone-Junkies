import Ember from 'ember';

export default Ember.Component.extend({
  isBlogPostFormShowing: false,
  actions: {
    showNewBlogPostForm: function() {
      this.set('isBlogPostFormShowing', true);
    },
    saveBlogPost: function() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        body: this.get('body') ? this.get('body') : "",
        author: this.get('author') ? this.get('author') : "",
        image: this.get('image') ? this.get('image') : ""
      };
      this.set('isBlogPostFormShowing', false);
      this.sendAction('saveBlogPost', params);
    }
  }
});
