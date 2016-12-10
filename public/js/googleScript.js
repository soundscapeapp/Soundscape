
//THESE VARIABLES ALLOW EACH MARKER TO RECIEVE A NEW LETTER ON THE MAP
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

//THIS FUNCTION IS FOR SET SET MARKERS
function initMap() {
    
    //SET MARKER COORDINATES
    var uluru = {
        lat: 42.3359668
        , lng: -83.0511163
    };

    //MAP DATA
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12
        , center: uluru
    });

//SET MARKER DATA
    var marker = new google.maps.Marker({
        map: map
        , position: uluru
        , draggable: true
        , animation: google.maps.Animation.DROP

    });
  
    //PLACE MARKER ON MAP ON RIGHT CLICK
    map.addListener('rightclick', function (e) {
        placeMarkerAndPanTo(e.latLng, map);
    });

    google.maps.event.addDomListener(marker, 'dblclick', function () {

        //          window.location.pathname = "/scapes.html"
        document.location = "http://localhost:8080/#/scapes"

    });

     //EVENT LISTENER THAT RETURNS THE POP UP WINDOW ON RIGHT CLICK
    marker.addListener('rightclick', function () {
        infowindow.open(map, marker);
    });

    
         //IN THIS VARIABLE YOU WILL FIND THE DATA INSIDE THE INFO WINDOW
    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Check out this Soundscape</h1>' +
        '<div id="bodyContent">' +
        '<p id="create-scape"><b>Create</b>, a <b>Soundscape</b>, for the world to see and hear ' + '</p>' +
        '<p id="scape-description">Soundscape Description: This was the first place I took my parents in detroit, nothing brings these memories back like the beatles' +

        ' (last visited November 24, 1984).</p> ' +
        '</div>' +
        '</div>';

        
//THIS VARIABLE HAS AN OBJECT CALLED CONTENTSTRING WHICH IS PART OF DATA INSIDE INFOWINDOW
    var infowindow = new google.maps.InfoWindow({
        content: contentString,

    });


};//END OF SET MARKER FUNCTION



    //THIS FUNCTION ALLOWS USER TO CREATE NEW PINS ON MAP
function placeMarkerAndPanTo(latLng, map) {
    
    
    
    
    var marker = new google.maps.Marker({
        position: latLng
        , map: map
        , label: labels[labelIndex++ % labels.length],

    });
   
     
    
    //EVENT LISTENER THAT RETURNS THE POP UP WINDOW ON RIGHT CLICK
    marker.addListener('rightclick', function () {
        infowindow.open(map, marker);
    });

    
    
    
    //EVENT LISTENER THAT REDIRECTS USER TO SCAPES PAGE WINDOW ON DOUBLE CLICK
    google.maps.event.addDomListener(marker, 'dblclick', function () {
        //          window.alert('This will be a modal');
        document.location = "http://localhost:8080/#/scapes"


    });

    
        //IN THIS VARIABLE YOU WILL FIND THE DATA INSIDE THE INFO WINDOW
    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Check out this Soundscape</h1>' +
        '<div id="bodyContent">' +
        '<p id="create-scape"><b>Create</b>, a <b>Soundscape</b>, for the world to see and hear ' + '</p>' +
        '<p id="scape-description">Soundscape Description: This was the first place I took my parents in detroit, nothing brings these memories back like the beatles' +

        ' (last visited November 24, 1984).</p> ' +
        '</div>' +
        '</div>';

        
//THIS VARIABLE HAS AN OBJECT CALLED CONTENTSTRING WHICH IS PART OF DATA INSIDE INFOWINDOW
    var infowindow = new google.maps.InfoWindow({
        content: contentString,

    });


//CENTER MAP WHEN YOU ADD A NEW MARKER
//    map.panTo(latLng);
    
    
    
    
    
    
} //END OF ADD MARKER FUNCTION