// Karma configuration
// Generated on Sun May 07 2017 10:42:16 GMT+1000 (AEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
        'karma-typescript',
        'mocha',
        'chai'
    ],

    // list of files / patterns to load in the browser
    files: [
      'src/**/*.ts',
      'src/**/*.spec.ts'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'src/**/*.(!.spec)ts': ['karma-typescript', 'coverage'],
        'src/**/*.(!.spec)tsx': ['karma-typescript', 'coverage'],
        'src/**/*.spec.ts': ['karma-typescript'],
        'src/**/*.spec.tsx': ['karma-typescript']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'karma-typescript', 'coverage'],

    coverageReporter: {
        type: 'html',
        dir: '.coverage/'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeCanaryHeadless'],

    customLaunchers: {
        ChromeCanaryHeadless: {
            base: 'ChromeCanary',
            flags: [
                '--no-sandbox',
                '--headless',
                '--disable-gpu',
                '--remote-debugging-port=19222'
            ]
        }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
