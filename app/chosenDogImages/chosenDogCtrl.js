dogApp.controller('chosenDogCtrl', function($scope, dogSer, $routeParams){

    $scope.dogsArray=[];
    //parsing the breed neame from the URL to Ctrl:
    $scope.breedName1 = $routeParams.breedName;
    
    // calling the function of uploading pics of specific breed:
    dogSer.loadBreedPics($scope.breedName1).then(function(){
        $scope.dogsArray=dogSer.dogsArray;
    });



     // opening a new window for a clicked image:
    $scope.largePic="";
   
    $scope.clickedPic = function (parsedPicUrl){
    // console.log(parsedPicUrl);
    $scope.largePic=parsedPicUrl;
    // console.log("1"+$scope.largePic);
    }

    //2nd version for:
    // opening a new window for a clicked image:
    // no no need to used ng-click, just to add {{dogItem}} to ng-href.
    
});