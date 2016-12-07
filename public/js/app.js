var app = angular.module("soundscape");




//CONTROLLERS
app.controller('getController', function($scope, plStore){
	
	//contoller stuff 

	$scope.savePlaylist = function(playlist){
	var savedPlaylist = $scope.soundscape;
	// console.log(savedPlaylist);
	plStore.savePl(savedPlaylist);
	};

});	

app.controller('setController', function($scope, plStore){
 	$scope.masterArray = plStore.fetchPl();
 	
 	// var savedPlaylist = plStore.fetchPl();
 	// testArray.push(savedPlaylist);
 	// console.log(testArray);
 	// plStore.clearPl();
}); 

// var app = angular.module('soundscape', []);

app.controller('data', function($scope,$http, plStore){
	$scope.trackInfo = [];
	$scope.search = "hellow";
	$scope.findTracks = findTracks;
	console.log($scope.search);

	$scope.newArray = [];
	function findTracks(){
		$http
		.get("https://api.spotify.com/v1/search?q="+ encodeURIComponent($scope.search) +"&type=track")
		.then(function find(response){

			for(i=0;i<10;i++){

				var songData=response.data.tracks.items[i];

				if(songData!=null){

					$scope.image=songData.album.images[0].url;
					$scope.albumName=songData.album.name;
					$scope.artist=songData.album.artists[0].name;
					$scope.trackId=songData.id;
					$scope.newObject = {"image":$scope.image, "albumName":$scope.albumName, "artist":$scope.artist,
					"trackId":$scope.trackId};
					$scope.trackInfo.push($scope.newObject);
				} else {

					$scope.denied="'No results available'"}

				}

	console.log($scope.trackInfo);
});

	};
	$scope.findOneObject = function(object){
			// console.log(object);
			$scope.trackInfo=[];
			$scope.trackInfo.push(object);
			// $scope.soundscape.trackData = info;
			$scope.soundscape.trackData = object;
			// console.log($scope.soundscape);
			plStore.savePl($scope.soundscape);
		};
});


//FACTORY
app.factory("plStore", function(){

var savedPlaylist = {};
var masterArray = [];

return {
	savePl: function(pl){
		savedPlaylist = pl;
		masterArray.push(pl);
		console.log(masterArray);
		// console.log(savedPlaylist);
	},
	fetchPl: function() {
		// return savedPlaylist;
		// console.log ('fetchPl');
		// console.log(masterArray)
		return masterArray;
	}
	

};

});

app.directive('ssSoundscape', function(){
	console.log('directive test')
	return {
		restrict: 'E',
		// template:'<p>it works!</p>'
		templateUrl: 'templates/soundscape.html'
	};
});