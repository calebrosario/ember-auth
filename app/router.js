import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberAuthENV.locationType
});

Router.map(function() {
  this.route('login');
});

export default Router;
