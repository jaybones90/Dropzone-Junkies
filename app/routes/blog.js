import Ember from 'ember';



export default Ember.Route.extend({
  model() {
    return this.store.findAll('blogPost');
  },
  actions: {
    saveBlogPost(params) {
      var newBlogPost = this.store.createRecord('blogPost', params);
      newBlogPost.save();
      this.transitionTo('index');
    },
  }
});
