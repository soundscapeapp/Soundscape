var app = angular.module("soundscape");

var testArray = [
 	{
 		artist: "Led Zeppelin",
 		song: "Dazed and Confused",
 		playlist: "Classic Rock"
 	}
 	];


//CONTROLLERS
app.controller('getController', function($scope, plStore){
	
//	image upload

//function(){
//	 	$(":file").change(function () {
//	         if (this.files && this.files[0]) {
//	             var reader = new FileReader();
//	             reader.onload = imageIsLoaded;
//	             reader.readAsDataURL(this.files[0]);
//	         }
//	    
//	
//
//	 function imageIsLoaded(e) {
//	     $('#myImg').attr('src', e.target.result);
//	 };
//
//	 });
});




	//contoller stuff 

	$scope.savePlaylist = function(playlist){
	var savedPlaylist = $scope.source;
	// console.log(savedPlaylist);
	plStore.savePl(savedPlaylist);
	};

	

app.controller('setController', function($scope, plStore){
 	var savedPlaylist = plStore.fetchPl();
 	testArray.push(savedPlaylist);
 	console.log(testArray);
 	plStore.clearPl();
});


//FACTORY
app.factory("plStore", function(){

var savedPlaylist = {};

return {
	savePl: function(pl){
		savedPlaylist = pl;
		console.log(savedPlaylist);
	},
	fetchPl: function() {
		return savedPlaylist;
		// console.log ('fetchPl');
	},
	clearPl: function(){
		savedPlaylist = null;
	}

};

});