module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            //angular lib here

            'bower/angular/angular.js',
            'bower/angular-local-storage/dist/angular-local-storage.js',
            'bower/angular-bootstrap/ui-bootstrap-tpls.js',
            'bower/angular-mocks/angular-mocks.js',
            'bower/jasmine_fake_window/index.js',

            //application lib here
            'js/app.js',
            'js/controllers/grizzlist.js',
            'js/controllers/columns.js',
            'js/filters/slice.js',
            'test/unit/*Spec.js'
        ],

        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'js/controllers/*.js': 'coverage'
        },

        // optionally, configure the reporter
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8000,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
