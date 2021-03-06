// Karma configuration
// Generated on Wed Sep 14 2016 19:45:04 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      '../../node_modules/angular/angular.js',
      '../../node_modules/angular-mocks/angular-mocks.js',
      '../../node_modules/angular-route/angular-route.js',
      '../../node_modules/angular-sanitize/angular-sanitize.js',
      '../../node_modules/moment/moment.js',
      '../../node_modules/ui-select/dist/select.js',
      '../../node_modules/jquery/dist/jquery.js',
      'dist/js/*.js',
      'index.js',
      'controllers/*.js',
      'directives/*.js',
      'filters/*.js',
      'services/*.js',
      '../test/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
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


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    hostname: process.env.IP,
    port: process.env.PORT,
    runnerPort: 0,


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
