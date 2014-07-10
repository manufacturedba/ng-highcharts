module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
        'app/bower_components/angular/angular.js',
      	'app/bower_components/angular-route/angular-route.js',
      	'app/bower_components/angular-mocks/angular-mocks.js',
	  	'app/bower_components/angular/angular.js',
		'app/bower_components/chai/chai.js',
		'app/bower_components/highcharts/adapters/standalone-framework.js',
		'app/bower_components/highcharts/highcharts.src.js',
      	'app/js/**/*.js',
      	'test/unit/**/*.js'
    ],

    frameworks: ['jasmine'],

    browsers : ['Chrome'],
	autoWatch: true,
    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
