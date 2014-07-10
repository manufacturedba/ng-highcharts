'use strict';

/* Jasmine specs for Highchart directive */

describe('Highcharts directive', function() {
	var expect = chai.expect;
	var html, compiled, elem, scope;
	
	beforeEach(module('demoApp.directives'));
	beforeEach(function(){
		html = '<highchart options="{}"></highchart>';
		inject(function($compile, $rootScope){
			scope = $rootScope.$new();
			elem = angular.element(html);
			compiled = $compile(elem);
			compiled(scope);
			scope.$digest();
		});
	});
	
	it('should have Highcharts library', function(){
		expect(Highcharts).to.not.be.undefined;
	});
	
	it('should exist', function(){
		expect(elem.text()).to.not.equal('Highcharts required');
	});
	
	it('should have a chart', function(){
		expect(elem.scope().$$childTail.chart).to.not.be.undefined;
	});
  	
});
