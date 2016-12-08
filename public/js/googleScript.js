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
      
       map.addListener('click', function(e) {
          placeMarkerAndPanTo(e.latLng, map);
        });
      
    
      // To add the marker to the map, call setMap();
marker.setMap(map);
 
      // We add a DOM event here to show an alert if the DIV containing the
      // map is clicked.
//      google.maps.event.addDomListener(marker, 'click', function () {
//          window.location = "https://accounts.spotify.com/en/authorize?response_type=code&client_id=8a72f2cc750a45f1830d340437537e02&scope=user-read-private%20user-read-email&redirect_uri=http:%2F%2Flocalhost:8888%2Fcallback&state=H8CWJgTbP8D9Z2yT";
//
//      });
//      google.maps.event.addDomListener(marker2, 'click', function () {
//          //          window.alert('This will be a modal');
//          window.location = "https://accounts.spotify.com/en/authorize?response_type=code&client_id=8a72f2cc750a45f1830d340437537e02&scope=user-read-private%20user-read-email&redirect_uri=http:%2F%2Flocalhost:8888%2Fcallback&state=H8CWJgTbP8D9Z2yT";
//
//
//      });
      
      }
     function placeMarkerAndPanTo(latLng, map) {
        var marker = new google.maps.Marker({
          position: latLng,
          map: map,
          label: labels[labelIndex++ % labels.length],
           
        });
          marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
          var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Check out this Soundscape</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Create</b>, a <b>Soundscape</b>, for the world to see and hear ' + '</p>' +
            '<p>Soundscape Description: This was the first place I took my parents in detroit, nothing brings these memories back like the beatles'+
            ' <img src="imgs/belle.jpg"> '+
            ' (last visited November 24, 1984).</p> '+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString,
           
        });

         
         
        map.panTo(latLng);
      }
      