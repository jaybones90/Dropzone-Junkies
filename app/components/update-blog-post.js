import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogPost: false,
  actions: {
    showUpdateBlogPostForm: function() {
      this.set('updateBlogPost', true);
    }
    
  }
});
