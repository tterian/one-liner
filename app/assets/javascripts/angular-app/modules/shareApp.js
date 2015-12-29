angular
  .module('shareApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    /* Material framework */
    'ngMaterial',
    'ngMdIcons',
    'ngAria',
    /* Authetication */
    'ng-token-auth',
    /* Time ago and more */
    'angularMoment'
    ])
  .config(routeProvider)
  .factory('User', User)
  .factory('Account', Account)
  .factory('Post', Post)
  .controller('MainController', MainController)
  .controller('ProfilesController', ProfilesController)
  .controller('PostsController', PostsController)
  .controller('SettingsController', SettingsController)
  .controller('UsersController', UsersController);

//Config routes
function routeProvider($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: 'assets/angular-app/templates/main.html.erb'
    })
    .when('/profile/:id', {
      controller: 'ProfilesController',
      templateUrl: 'assets/angular-app/templates/user/profile.html.erb'      
    })
    .when('/settings/account', {
      controller: 'SettingsController',
      templateUrl: 'assets/angular-app/templates/user/setting.html.erb'      
    })
    .otherwise({
      redirectTo: '/'
    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
};