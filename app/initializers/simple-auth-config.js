// initializers/simple-auth-config.js
export default {
  name: 'simple-auth-config',
  before: 'simple-auth',
  initialize: function() {
    window.ENV = window.ENV || {};
    window.ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: "http://path.com/to/your/access_token/end_point",
      serverTokenRevokationEndpoint: "http://path.com/to/your/token_revocation/end_point",
      refreshAccessTokens: true
    }
  }
};
