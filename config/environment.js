/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dubtrack-ui',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self' http://localhost:3000",
      'img-src': "'self' data:",
      'media-src': "'self'"
    },

    featureFlags: { // ember-feature-flags
    },

    metricsAdapters: [] // ember-metrics
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.LOG_FEATURE_FLAG_MISS = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.API_SERVER = 'http://localhost:3000';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    const disableFeatures = [];
    disableFeatures.forEach(function (key) {
      ENV.featureFlags[key] = false;
    });
  }

  return ENV;
};
