'use strict';

/* Directives */

var directiveController = ['$scope', function(scope){
    // Watch title
    scope.$watch(function(){
            return scope.options.title;
        }, function(value, oldValue){
            if(!angular.equals(value, oldValue)){
                scope.chart.setTitle(value);
            }
        }, true);
    
}];

angular.module('demoApp.directives', []).
  directive('highchart', [function() {
    if(window.Highcharts){
                return {
                        restrict: 'E',
                        scope: {
                            options: '=options'
                        },
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

                            // Create IDs
                            var series = [];
                            var id = 0;
                            angular.forEach(scope.options.series, function(set){
                                if(set.id === undefined){
                                    set.id = id;
                                    series.push(set.id);
                                    id++;
                                } else {
                                    series.push(set.id);
                                }
                            });
                            
                            scope.chart = new Highcharts.Chart(scope.options);
                            
                            scope.$watch(function(){
                                return scope.options.series;
                            }, function(value, oldValue){
                                for(var i = 0;i < value.length;i++){
                                    if(!angular.equals(value[i].data, oldValue[i].data)){
                                        scope.chart.get(value[i].id).setData(value[i].data);
                                    }
                                }
                            }, true);

                            // Series Add/Remove
                            scope.$watchCollection(function(){
                                return scope.options.series;
                            }, function(values, oldValues){
                                // Remove
                                if(values.length < oldValues.length){
                                    console.log('hi mum');
                                    var checkSeries = [];
                                    angular.forEach(values, function(set){
                                        checkSeries.push(set.id);
                                    });
                                    angular.forEach(series, function(id){
                                        if(checkSeries.indexOf(id) < 0){
                                            scope.chart.get(id).remove(false);
                                            series.splice(series.indexOf(id), 1);
                                        }
                                    });
                                } else if(values.length > oldValues.length){
                                    angular.forEach(values, function(set){
                                        if(set.id === undefined){
                                            set.id = id;
                                            id++;
                                        }
                                        if(series.indexOf(set.id) < 0){
                                            scope.chart.addSeries(set)
                                            series.push(set.id);
                                        }
                                    });
                                } else if(!angular.equals(values, oldValues)){
                                    console.log('hi');
                                    scope.chart.setData(values, false);
                                }
                                scope.chart.redraw();
                            });
                            window.chart = scope.chart;
                        },
                        controller: directiveController
                }
        } else {
            return {
                restrict: 'E',
                template: '<h3>Highcharts required</h3>'
            }
        }
  }]);
