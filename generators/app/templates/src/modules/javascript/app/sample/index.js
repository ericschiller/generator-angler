'use strict';

module.exports =
  angular.module('<%= appname %>.sample', [
    //load your sample submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('sample', {
      url: '',
      templateUrl: 'app/sample/layout.html',
      controller: 'sampleController'
    });
  })
  .config(function (<% if (includeUIRouter) { %>$stateProvider<% } else { %>$routeProvider<% } %>) {
    <% if (includeUIRouter) { %>$stateProvider
    .state('sample', {
      url: '',
      templateUrl: 'app/sample/layout.html',
      controller: 'sampleController'
    });<% } else { %>$routeProvider
    .when('/', {
      templateUrl: 'app/sample/layout.html',
      controller: 'sampleController'
    });<% } %>
  })
  .controller('sampleController', require('./sampleController'));
