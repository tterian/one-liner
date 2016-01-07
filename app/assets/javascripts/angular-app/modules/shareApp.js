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
    'angularMoment',
    /*File upload*/
    'angular-filepicker'
    ])
  .config(routeProvider)
  .config(filepickerProvider)
  .factory('User', User)
  .factory('Account', Account)
  .factory('Post', Post)
  .factory('Relationship', Relationship)
  .factory('Rating', Rating)
  .factory('Conversation', Conversation)
  .factory('Message', Message)
  .factory('Notification', Notification)
  .controller('MainController', MainController)
  .controller('ProfilesController', ProfilesController)
  .controller('PostsController', PostsController)
  .controller('LocationsController', LocationsController)
  .controller('SettingsController', SettingsController)
  .controller('MessagesController', MessagesController)
  .controller('NotificationsController', NotificationsController)
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
    .when('/messages', {
      controller: 'MessagesController',
      templateUrl: 'assets/angular-app/templates/message/main.html.erb'      
    })
    .when('/notifications', {
      controller: 'NotificationsController',
      templateUrl: 'assets/angular-app/templates/notification/main.html.erb'      
    })
    .otherwise({
      redirectTo: '/'
    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
};


function filepickerProvider(filepickerProvider) {
    filepickerProvider.setKey('ACmNE3o9NQWWF6DsEiHMuz');
};