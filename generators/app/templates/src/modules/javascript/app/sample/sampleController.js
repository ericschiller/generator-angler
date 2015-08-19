'use strict';

module.exports = /*@ngInject*/
  function sampleController($scope) {

    $scope.createGreeting = function(){
      $scope.greeting = "Hello";
    };

    $scope.doingMath = function(number1, number2){
      return number1 * number2;
    };

    $scope.mathResult = $scope.doingMath(3,4);
  };

