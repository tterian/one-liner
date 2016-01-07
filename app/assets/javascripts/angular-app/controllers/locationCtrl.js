function LocationsController($scope, $location, $mdDialog) {

  $scope.addLocation = function(location) {
    $scope.post.location = location.name;
    $mdDialog.hide();
  };
  
};