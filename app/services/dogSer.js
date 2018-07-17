//creating a service of dog constructor:
dogApp.factory('dogSer', function($http, $q, $location){

    var dogsArray=[];
    // var dogPicsArray=[];
    //creating a dog constructor:

    var Dog = function(dogName,dogImage){
        //console.log(dogName);
        this.dogBreedName=dogName; //message
        this.dogBreedImage=dogImage;

}

    // creating a load gallery function with $q:
    var load =function(){

        dogsArray.splice(0,dogsArray.length);

        var async = $q.defer();

        $http.get("https://dog.ceo/api/breeds/list").then(function(response){
            //onsuccess:
            console.log(response);
            for(var i=0; i<90; i++){
                let dogName = response.data.message[i];
                //console.log(dogName);
                // dogsArray.push(new Dog(response.data.message[i]));
                $http.get("https://dog.ceo/api/breed/"+dogName+"/images/random").then(function(response2){
                    //on success:
                    var dogImage = response2.data.message;
                    //console.log(dogName);
                    dogsArray.push(new Dog(dogName,dogImage));
            
        
                },//onfail
                function(response2){
                    console.log("error");
                });
                
            }
            
            //dogsArray.push(new Dog(response.message));
            async.resolve();
        },
            // onfail:
        function(response){
            console.log("error");
            async.reject();
        }
    );
        return async.promise;   
    };

   

    //creating a load function for pics of chosen breed:
    var loadBreedPics =function(breedNameParsed){

        // let breedNameParsed = breedNameParsed;
        dogsArray.splice(0,dogsArray.length);

        var async = $q.defer();

        $http.get("https://dog.ceo/api/breed/" +breedNameParsed+"/images").then(function(response3){
            // console.log(breedNameParsed);
            //onsuccess:
            for(var j=0; j<response3.data.message.length; j++){
                
                // dogsArray.push(new Dog("breed",response3.data.message[j]));
                dogsArray.push(response3.data.message[j]);                               
            }
            
            //dogsArray.push(new Dog(response.message));
            async.resolve();
        },
            // onfail:
        function(response){
            console.log("error");
            async.reject();
        }
    );
        return async.promise;   
    };


    return{
        dogsArray:dogsArray,
        Dog:Dog,
        load:load,
        loadBreedPics:loadBreedPics
    };
});