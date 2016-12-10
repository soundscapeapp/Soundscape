
//THESE VARIABLES ALLOW EACH MARKER TO RECIEVE A NEW LETTER ON THE MAP
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
var labelIndex = 0;

//THIS FUNCTION IS FOR SET SET MARKERS
function initMap() {
    
    //SET MARKER COORDINATES
    var uluru = {
        lat: 42.3359668
        , lng: -83.0511163
         };
    
    
    
    

    //MAP AUSTOM PROPERTIES AND STYLES
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12
        , center: uluru
        ,styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
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
    var contentString = '<div id="gc-content">' +
        '<h1 id="firstHeading" class="firstHeading">Grand Circus Soundscape</h1>' +
        '<div id="bodyContent">' +
        '<p id="create-scape">A personalized <b>Soundscape</b> for Grand Circus Detroit' + '</p>' +
        '<p id="scape-description">This is the official unofficial playlist to the Grand Circus bootcmap in Detroit.' +

        ' (last visited December 16, 2016).</p> ' +
        '</div>' +
        '</div>';


    
        
//THIS VARIABLE HAS AN OBJECT CALLED CONTENTSTRING WHICH IS PART OF DATA INSIDE INFOWINDOW
    var infowindow = new google.maps.InfoWindow({
        content: contentString,

    });
    
    
    
    


};//END OF SET MARKER FUNCTION



    //THIS FUNCTION ALLOWS USER TO CREATE NEW PINS ON MAP
function placeMarkerAndPanTo(latLng, map) {
    
    //CUSTOM ICON IMAGE
    var image = "/imgs/vinyl-icon.png";
    
    //CUSTOM MARKER PROPERTIES
    var marker = new google.maps.Marker({
        position: latLng
        , map: map
        , label: labels[labelIndex++ % labels.length],
         icon: image

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