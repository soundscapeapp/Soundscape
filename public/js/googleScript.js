var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var labelIndex = 0;  

function initMap() {
      var uluru = {
          lat: 42.3359668
          , lng: -83.0511163
      };
      var uluru2 = {
          lat: 42.335592
          , lng: -82.989999
      };
      var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12
          , center: uluru
      });


      var marker = new google.maps.Marker({
          map: map
          , position: uluru
          , draggable: true
          , animation: google.maps.Animation.DROP
      });
      var marker2 = new google.maps.Marker({
          map: map
          , position: uluru2
          , draggable: true
          , animation: google.maps.Animation.DROP
      });
      marker.addListener('rightclick', function() {
          infowindow.open(marker, marker2);
        });
       map.addListener('rightclick', function(e) {
          placeMarkerAndPanTo(e.latLng, map);
        });
        
    
      // To add the marker to the map, call setMap();
marker.setMap(map);
 
      // We add a DOM event here to show an alert if the DIV containing the
      // map is clicked.
      google.maps.event.addDomListener(marker, 'dblclick', function () {

//          window.location.pathname = "/scapes.html"
          document.location = "http://localhost:8080/#/scapes"

      });
      google.maps.event.addDomListener(marker2, 'dblclick', function () {
          //          window.alert('This will be a modal');
           document.location = "http://localhost:8080/#/scapes"


      });
      
      }//END OF SET MARKER FUNCTION




     function placeMarkerAndPanTo(latLng, map) {
        var marker = new google.maps.Marker({
          position: latLng,
          map: map,
          label: labels[labelIndex++ % labels.length],
           
        });
          marker.addListener('rightclick', function() {
          infowindow.open(map, marker);
        });
          
         google.maps.event.addDomListener(marker, 'dblclick', function () {
          //          window.alert('This will be a modal');
           document.location = "http://localhost:8080/#/scapes"


      });
         
          var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Check out this Soundscape</h1>'+
            '<div id="bodyContent">'+
             '<p id="create-scape"><b>Create</b>, a <b>Soundscape</b>, for the world to see and hear ' + '</p>' +
            '<p id="scape-description">Soundscape Description: This was the first place I took my parents in detroit, nothing brings these memories back like the beatles'+
  
            ' (last visited November 24, 1984).</p> '+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString,
           
        });

         
         
        map.panTo(latLng);
      }//END OF ADD MARKER FUNCTION
      