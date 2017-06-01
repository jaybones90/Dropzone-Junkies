import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    delete(blogPost) {
      if(confirm('Are You Extremely Super Duper Incredibly Sure You Want To Delete This Blog Post?')) {
        this.sendAction('deleteBlogPost', blogPost);
      }
    },
    update(blogPost, params) {
      this.sendAction('update', blogPost, params)
    }
  }
});
