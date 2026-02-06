/***Add Map Div***/

require([
      "esri/Map",
      "esri/views/MapView"
    ], function (Map, MapView) {

      // Create the map (NOT a WebMap)
      const map = new Map({
        basemap: "streets-vector" // or "topo-vector", "gray-vector", etc.
      });

      // Create the 2D view
      const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-118.805, 34.027], // [longitude, latitude]
        zoom: 13
      });

});