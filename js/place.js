
var request = {
    radius: '500',
    types: ['store']
  };

  // Create the PlaceService and send the request.
  // Handle the callback with an anonymous function.
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, function(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        // If the request succeeds, draw the place location on
        // the map as a marker, and register an event to handle a
        // click on the marker.
    /*    var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });*/
      }
    }
  });

// Run the initialize function when the window has finished loading.
google.maps.event.addDomListener(window, 'load', initialize);