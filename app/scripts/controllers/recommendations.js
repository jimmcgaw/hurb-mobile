'use strict';

angular.module('hurbApp')
  .controller('RecommendationsCtrl', function ($scope) {

    $scope.closeAlert = function(){
      $('#uialertview').modal('hide');
      showContent();
    };

    $scope.refresh = function(){
      loadAlert();
    };

    var showContent = function(){
      $('#hiddencontent').show();
    };

    var loadAlert = function(){
      $('#uialertview').modal({
        show : true,
        backdrop : false
      });
    };

    $scope.refresh();

  });
