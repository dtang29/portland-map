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

d3.json(url, function(data) {
  console.log(data);

  // Creating a new choropleth layer
    L.geoJson.css(data, {

    style: function(feature) {
      return {
        "color": "#CC0000",
				"weight": 2,
				"fill-opacity": 0.6,
				"opacity": 1,
        "dashArray": "3, 5"
      };
    },

    
    //Bind pop up to each feature
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.Name + " " + "<hr>Reason this is a cool place: " + feature.properties.Reason);
    }
  }).addTo(myMap);
});