var app = angular.module("soundscape");

//CONTROLLERS

//activates when routing to scapes page 
app.controller('modalController', function($scope, ssStore, $sce){
 	$scope.masterArray = ssStore.fetchMasterArray();
 	
 	//iframe magic
 	var fetchedSs = ssStore.fetchSs();
 	$scope.trackId = fetchedSs.trackData.trackId;
 	$scope.url = "https://embed.spotify.com/?uri=spotify%3Atrack%3A" + $scope.trackId
 	$scope.test = $sce.trustAsResourceUrl($scope.url);

}); 

//grabs from spotify API
app.controller('spotifyData', function($scope, $http, ssStore){
	
	$scope.search = " ";
	$scope.findTracks = findTracks;
	console.log($scope.search);

	$scope.newArray = [];
	function findTracks(){
		$scope.trackInfo = [];
		$http
		.get("https://api.spotify.com/v1/search?q="+ encodeURIComponent($scope.search) +"&type=track")
		.then(function find(response){

			for(i=0;i<10;i++){

				var songData=response.data.tracks.items[i];

				if(songData!=null){

					$scope.denied=""
					$scope.image=songData.album.images[0].url;
					$scope.albumName=songData.album.name;
					$scope.artist=songData.album.artists[0].name;
					$scope.trackId=songData.id;
					$scope.newObject = {"image":$scope.image, "albumName":$scope.albumName, "artist":$scope.artist,
					"trackId":$scope.trackId};
					$scope.trackInfo.push($scope.newObject);
				} else {

					$scope.denied="No results available"}

				}

	console.log($scope.trackInfo);
});

	};
	
//activates when clicking on song from song list
	$scope.getOneSong = function(object){
			
			$scope.trackInfo=[];
			$scope.trackInfo.push(object);
			
			$scope.soundscape.trackData = object;
			
			
		};
});

//user input information (title, description) -stores - pushes to master array
app.controller('addScapeController', function($scope, ssStore){
	

	$scope.saveSoundscape = function(soundscape){
	var savedSoundscape = $scope.soundscape;
	
	ssStore.saveSs(savedSoundscape);
	};

});	


//FACTORY
//stores and returns information
app.factory("ssStore", function(){

var soundscape = {};
var masterArray = [];

return {
	saveSs: function(ss){
		soundscape = ss;
		masterArray.push(ss);
		console.log(masterArray);
		
	},
	fetchMasterArray: function() {
		
		return masterArray;
	},
	fetchSs: function() {
		return soundscape;
	}
	
};

});

//soundscape directive, causes ng-repeat and prints soundscape
app.directive('ssSoundscape', function(){
	console.log('directive test')
	return {
		restrict: 'E',
		templateUrl: 'templates/soundscape.html'
	};
});