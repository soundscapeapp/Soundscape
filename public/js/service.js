var app = angular.module("soundscape");

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