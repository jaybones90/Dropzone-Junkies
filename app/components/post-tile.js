import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    showImage: function() {
      this.set('isImageShowing', true);
    },
    hideImage: function() {
      this.set('isImageShowing', false);
    },
    delete(blogPost) {
      if(confirm('Are You Extremely Super Duper Incredibly Sure You Want To Delete This Blog Post?')) {
        this.sendAction('deleteBlogPost', blogPost);
      }
    }
  }
});
