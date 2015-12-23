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
	.controller('MainController', MainController)
	.controller('UsersController', UsersController);

//Config routes
function routeProvider($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainController',
			templateUrl: 'assets/angular-app/templates/main.html.erb'
		})
		.otherwise({
			redirectTo: '/'
		});

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
};