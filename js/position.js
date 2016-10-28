var map;
var marker;
var styleArray;
var previousPosition = null;
var directionDisplay;
var directionsService;
var mode;
var panel;
var service;
var infowindow;

//affichage de la map
function initialize() {
   var styleArray = [
  {
    featureType: "all",
    stylers: [
    { saturation: -50 }
    ]
  },{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
    { hue: "#085408" },
    { saturation: 20 }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
    { visibility: "off" }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
    { hue : "#ff3399" },
    { saturation: 20 }
    ]
  },{
    featureType: "landscape",
    stylers: [
    { hue: "#ff3300" },
    { saturation: 93 }
    ]
  },{
    featureType: "Poi.park",
    elementType: "labels",
    stylers: [
    { hue:  "#77ff00" },
    { saturation: 93 }
    ]
  },{
    featureType: "landscape",
    stylers: [
    { hue: "#ffff00" },
    { saturation: -20 }
    ]
  },{
    featureType: "water",
    stylers: [
    { hue: "#FFD2D2" },
    { saturation: 20 }
    ]
  },{
    featureType: "administrative.country",
    elementType: "labels.text.stroke",
    stylers: [
    { color:  "#cc3399" },
    { hue: "#cc3399" },
    { saturation: 20 }
    ]
  },{
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
    { Color:  "#ad8080" },
    { hue: "#ad8080" },
    { saturation: 20 }
    ]
  }
  ];
  map = new google.maps.Map(document.getElementById("map_canvas"), {
    zoom: 19,
    styles: styleArray,
    center: new google.maps.LatLng(48.858565, 2.347198),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  directionsDisplay = new google.maps.DirectionsRenderer({
    map : map,
    panel : panel,
    draggable : true
  });
  directionsDisplay.setMap(map);
  geocoder = new google.maps.Geocoder();
var request = {
    radius: '20',
    types: ['bar']
  };
var service = new google.maps.places.PlacesService(map);
  function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}
function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}


//autocomplete

 var autocomplete = new google.maps.places.Autocomplete(origin);
  var autocomplete = new google.maps.places.Autocomplete(destination);

}

//geolocalisation du navigateur
if (navigator.geolocation)
  var watchId = navigator.geolocation.watchPosition(successCallback,
    null,
    {enableHighAccuracy:true});
else
  alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");

//ligne trajet
function successCallback(position){
  map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude), 
    map: map
  });
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
  if (previousPosition){
    var newLineCoordinates =
    [
    new google.maps.LatLng(previousPosition.coords.latitude, previousPosition.coords.longitude),
    new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
    ];

    var newLine = new google.maps.Polyline({
      path: newLineCoordinates,        
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    newLine.setMap(map);
  }
  previousPosition = position;
}

//itineraire
function calculate() {
  mode = document.getElementById('mode').value;
  origin = document.getElementById('origin').value;
  destination = document.getElementById('destination').value;
  if(origin && destination){
   var request = {
    origin:origin,
    destination:destination,
    travelMode: mode
  }
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
     directionsDisplay.setDirections(result);
     directionsDisplay.setPanel(document.getElementById("panel"));
    }
    });
  }
}