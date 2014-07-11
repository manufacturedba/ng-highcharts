'use strict';

/* Controllers */

angular.module('demoApp.controllers', [])
  .controller('demoCtrl', ['$scope', function($scope) {
      $scope.test = {
          title: {
              text: "Hi friend"
          },
          series: [
              {
                name: 'hi',
                data: [1,2,3]
              },
              {
                data: [3,2,1]
              }
          ]
      }
      $scope.removeSeries = function(){
          $scope.test.series.pop();
      }
      $scope.addSeries = function(){
        $scope.test.series.push({'name': 'shuddup', data:[5,4,3]})
      }
      $scope.changeSeries = function(){
          $scope.test.series[0].data[0] = Math.ceil(Math.random()*100);
      }
  }]);
