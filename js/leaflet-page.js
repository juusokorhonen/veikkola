(() => {
  // leaflet-page.js
  var create_leaflet_map = function(map_elem, lat, lon, zoom, maptype) {
    var mymap = L.map(map_elem.attr("id")).setView([lat, lon], zoom);
    if (maptype == "stamen-toner") {
      L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}", {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: "abcd",
        minZoom: 0,
        maxZoom: 20,
        ext: "png"
      }).addTo(mymap);
    } else if (maptype == "opentopomap") {
      L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
        maxZoom: 17,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
      }).addTo(mymap);
    } else if (maptype == "esri-worldimagery") {
      L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
        attribution: "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      }).addTo(mymap);
    } else {
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mymap);
    }
    return mymap;
  };
  var add_marker_to_map = function(mymap, lat, lon, label) {
    var marker = L.marker([lat, lon]).addTo(mymap);
    marker.bindPopup(label);
    return marker;
  };
  var add_polygon_to_map = function(mymap, polygon_coords) {
    var polygon = L.polygon(polygon_coords, {
      color: "rgb(117, 112, 179)",
      opacity: 0.7,
      fill: "rgb(109, 109, 109)"
    }).addTo(mymap);
    return polygon;
  };
  $(function() {
    let map_elem = $("#mapid");
    if (map_elem) {
      let lat = $("#mapid").attr("data-lat");
      let lon = $("#mapid").attr("data-lon");
      let zoom = $("#mapid").attr("data-zoom");
      let maptype = $("#mapid").attr("data-maptype");
      let label = $("#mapid").attr("data-label");
      let mymap = create_leaflet_map(map_elem, lat, lon, zoom, maptype);
      add_marker_to_map(mymap, lat, lon, label);
      let polygon_coords = $("#mapid").attr("data-polygon");
      if (polygon_coords) {
        polygon_coords = Array(JSON.parse(polygon_coords.replace(/ /g, ", ")))[0];
        polygon_coords = polygon_coords.map((x) => [x[1], x[0]]);
        var polygon = add_polygon_to_map(mymap, polygon_coords);
      }
    }
  });
})();
