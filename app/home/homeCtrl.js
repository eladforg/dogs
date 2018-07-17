dogApp.controller('homeCtrl', function($scope, $location){

    $scope.goToGallery = function(){

        $location.path('/gallery');
    }
});