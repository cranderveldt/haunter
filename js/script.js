jQuery(document).ready(function($) {
  $('#game').imagesLoaded(function() {
    var cookie = $.cookie('current_view');
    if (cookie !== undefined) {
      $('#view-' + cookie).show().siblings().hide();
    } else {
      $('#view-1').show().siblings().hide();
    }
    $('#loader').hide();
  });
});

var Main = function ($scope) {
  $scope.views = [
    {
      id: 1
      , nav: {
        up: 6
        , right: 0
        , down: 0
        , left: 2
      }
    }
    , {
      id: 2
      , nav: {
        up: 0
        , right: 1
        , down: 0
        , left: 3
      }
    }
    , {
      id: 3
      , nav: {
        up: 0
        , right: 2
        , down: 0
        , left: 4
      }
    }
    , {
      id: 4
      , nav: {
        up: 0
        , right: 3
        , down: 0
        , left: 0
      }
    }
    , {
      id: 5
      , nav: {
        up: 0
        , right: 0
        , down: 0
        , left: 6
      }
    }
    , {
      id: 6
      , nav: {
        up: 0
        , right: 5
        , down: 0
        , left: 1
      }
    }
  ];
};
var app = angular.module('mini-ld', []);
app.controller('Main',['$scope','$http', Main]);
app.directive('ldChangeScreen', function () {
  return {
    replace: false,
    transclude: false,
    restrict: 'A',
    scope: false,
    link: function (scope, element, attrs) {
      element.on('click', function(e) {
        e.preventDefault();
        if (attrs.ldChangeScreen > 0 && attrs.ldChangeScreen <= scope.views.length) {
          $('#view-' + attrs.ldChangeScreen).show().siblings().hide();
          $.cookie('current_view', attrs.ldChangeScreen, { expires: 30, path: '/' });
        }
      });
    }
  };
});

