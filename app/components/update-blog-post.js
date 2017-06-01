import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogPost: false,
  actions: {
    showUpdateBlogPostForm: function() {
      this.set('updateBlogPost', true);
    },
    update(blogPost) {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        author: this.get('author'),
        image: this.get('image')
      };
    this.set('updateBlogPost', false);
    this.sendAction('update', blogPost, params);
    }
  }
});
