// Karma configuration
// Generated on Mon Dec 08 2014 10:34:28 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../client/bower_components/angular/angular.js',
      '../client/bower_components/angular-route/angular-route.js',
      '../client/bower_components/angular-mocks/angular-mocks.js',
      '../client/bower_components/angular-ui-router/release/angular-ui-router.js',
      '../client/bower_components/angular-payments/lib/angular-payments.js',
      'https://js.stripe.com/v2/',
      '../client/bower_components/jquery/dist/jquery.js',

      '../client/app/**/*.js',

      '../node_modules/expect.js/index.js',
      '../specs/client/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      'karma.conf.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,

    //If a browser doesn't capture in a given time (ms), kill it.
    captureTimeout: 5000,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    

    plugins: [
          'karma-jasmine',
          'karma-phantomjs-launcher'
        ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
