'use strict';

/* Directives */

var directiveController = ['$scope', function(scope){

}];

angular.module('demoApp.directives', []).
  directive('highchart', [function() {
    if(window.Highcharts){
                return {
                        restrict: 'E',
                        scope: {
                            options: '=options'
                        },
                        controller: directiveController,
                        link: function(scope, elem){
                            if(typeof(scope.options) === 'object'){
                                scope.options.chart = {
                                    renderTo: elem[0]
                                };
                            } else {
                                scope.options = {
                                    chart: {
                                        renderTo: elem[0]
                                    }
                                };
                            }
                            scope.chart = new Highcharts.Chart(scope.options);
                        }
                }
        } else {
            return {
                restrict: 'E',
                template: '<h3>Highcharts required</h3>'
            }
        }
  }]);
