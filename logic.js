// Mapbox API
var mapbox = 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?' + "access_token=pk.eyJ1IjoiZHRhbmcyOSIsImEiOiJjamlkc3lwamIwZjNzM3FzMGVyczk2em10In0." +
"u1XytyVIuwRPXEr-emzdfg";

// Creating map object
var myMap = L.map("map", {
  center: [45.5122, -122.6587],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer(mapbox).addTo(myMap);

// Building API query URL
var url = "https://raw.githubusercontent.com/lyzidiamond/learn-geojson/master/geojson/pdxplaces.geojson";

// Grabbing the data with d3..
d3.json(url, function(response) {

    console.log(response);
  // Creating a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through our data...
  for (var i = 0; i < response.features.length; i++) {
    console.log(response.features);
    // set the data location property to a variable
    var location = response[i].coordinates;

    // If the data has a location property...
    if (location) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
        .bindPopup(response[i].Name));
    }

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});
