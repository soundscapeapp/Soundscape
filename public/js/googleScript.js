  function initMap() {
        var uluru = {lat: 42.3359668, lng: -83.0511163};
        var uluru2 = {lat: 42.335592, lng: -82.989999};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluru
        });
        
          
          var marker = new google.maps.Marker({
          map: map,
          position: uluru,
          draggable: true,
          animation: google.maps.Animation.DROP
        });
          var marker2 = new google.maps.Marker({
           map: map,
           position: uluru2,
           draggable: true,
           animation: google.maps.Animation.DROP      
        });
       // We add a DOM event here to show an alert if the DIV containing the
        // map is clicked.
        google.maps.event.addDomListener(marker, 'click', function() {
          window.alert('This will be a modal');
            
            });
          google.maps.event.addDomListener(marker2, 'click', function() {
//          window.alert('This will be a modal');
               window.location = "http://www.spotify.com/"; 
            
            
        });
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
      }

        