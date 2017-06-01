import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('blogPost', params.blogPost_id);
  },
  actions: {
    update(blogPost, params) {
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined) {
          blogPost.set(key, params[key]);
        }
      });
      blogPost.save();
      this.transitionTo('index');
    },
    deleteBlogPost(blogPost) {
      blogPost.destroyRecord();
      this.transitionTo('index');
    }
  }
});
