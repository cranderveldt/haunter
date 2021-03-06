var LD = {};
jQuery(document).ready(function($) {
  LD.initialize = function(){
    var cookie = $.cookie('current_view');
    if (cookie !== undefined) {
      $('#view-' + cookie).show().siblings().hide();
    } else {
      $('#view-1').show().siblings().hide();
    }
    $('.status-dark').show();
    $('#loader').hide();
  };
  LD.startGame = function() {
    $('#title').hide();
  };
  $('#game').imagesLoaded(function() {
    LD.initialize();
  });
  $('#start-game').on('click', LD.startGame);
});

var Main = function ($scope) {
  $scope.views = [
    {
      id: 1
      , status: [
        'dark'
        , 'light'
      ]
      , audio: [
        {
          id: '1'
          , src: "/audio/sound-1.ogg"
        }
      ]
      , nav: {
        up: 6
        , right: 0
        , down: 0
        , left: 2
      }
      , elms: [
        {
          top: '20px'
          , left: '93px'
          , width: '268px'
          , height: '195px'
          , type: 'message'
          , message: 'It\'s a serene painting of mist coming off the mountains in Japan.'
          , status: 'light'
          , audio: '1'
        }
      ]
    }
    , {
      id: 2
      , status: [
        'dark'
      ]
      , audio: [

      ]
      , nav: {
        up: 0
        , right: 1
        , down: 0
        , left: 3
      }
      , elms: [

      ]
    }
    , {
      id: 3
      , status: [
        'dark'
      ]
      , audio: [

      ]
      , nav: {
        up: 0
        , right: 2
        , down: 0
        , left: 4
      }
      , elms: [

      ]
    }
    , {
      id: 4
      , status: [
        'dark'
      ]
      , audio: [

      ]
      , nav: {
        up: 0
        , right: 3
        , down: 0
        , left: 0
      }
      , elms: [

      ]
    }
    , {
      id: 5
      , status: [
        'dark'
      ]
      , audio: [

      ]
      , nav: {
        up: 0
        , right: 0
        , down: 0
        , left: 6
      }
      , elms: [

      ]
    }
    , {
      id: 6
      , status: [
        'dark'
      ]
      , audio: [

      ]
      , nav: {
        up: 0
        , right: 5
        , down: 0
        , left: 1
      }
      , elms: [

      ]
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
          $('#message').text('');
          $('#view-' + attrs.ldChangeScreen).show().siblings().hide();
          $.cookie('current_view', attrs.ldChangeScreen, { expires: 30, path: '/' });
        }
      });
    }
  };
});
app.directive('ldElement', function () {
  return {
    replace: false,
    transclude: false,
    restrict: 'A',
    scope: false,
    link: function (scope, element, attrs) {
      element.on('click', function(e) {
        e.preventDefault();
        var data = attrs.$$element.context.dataset;
        if (data.message !== '') {
          $('#message').text(data.message);
        }
        if (data.status !== '') {
          element.parent().parent().find('.status-' + data.status).show().siblings().hide();
        }
        if (data.audio !== '') {
          var sound = element.parent().parent().find('.sound-' + data.audio)[0].play();
        }
      });
    }
  };
});


/*


open bathroom {
  turn on water
  turn on lights
  turn on blender
  turn on music {
    // human comes out
    turn off lights/music {
      reveal yourself to people
    }
    go in room {
      find and destroy spirit tether
    }
    start microwave {
      // human comes to kitchen
      turn on outside light
      knock on outside door {
        escape out the back door
      }
    }
  }
}






*/

