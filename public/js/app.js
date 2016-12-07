var app = angular.module("soundscape");




//CONTROLLERS
app.controller('getController', function($scope, plStore){
	
	//contoller stuff 

	$scope.savePlaylist = function(playlist){
	var savedPlaylist = $scope.source;
	// console.log(savedPlaylist);
	plStore.savePl(savedPlaylist);
	};

});	

app.controller('setController', function($scope, plStore){
 	var savedPlaylist = plStore.fetchPl();
 	testArray.push(savedPlaylist);
 	console.log(testArray);
 	plStore.clearPl();
});


//FACTORY
app.factory("plStore", function(){

var savedPlaylist = {};

var soundScapeArray = [];


return {
	savePl: function(pl){
		savedPlaylist = pl;
		soundScapeArray.push()
		console.log(savedPlaylist);
	},
	fetchPl: function() {
		return savedPlaylist;
		// console.log ('fetchPl');
	},
	clearPl: function(){
		savedPlaylist = null;
	},
	// saveSoundscape: function(element){
	// 	testArray = element;

	// }

};

});