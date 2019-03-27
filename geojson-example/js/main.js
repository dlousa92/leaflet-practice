const mymap = L.map('mapid').setView([39.743, -104.99], 13)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGxvdXNhOTIiLCJhIjoiY2p0cmQyMTVkMG90NjN6bzNpY2ppdW0zeSJ9.bIlClbOREYuQ2H0br8cC8A'
}).addTo(mymap)

// geoJSON data types
const geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
}

const geojsonLineString = [{
    "type": "LineString",
    "coordinates": [[-105, 39.75], [-105.10, 39.8], [-105, 39.81]]
}, {
    "type": "LineString",
    "coordinates": [[-105, 39.74], [-105.05, 39.702], [-105.05, 39.65]]
}]

// styling
const myStyle = {
    "color": "#dbf210",
    "weight": 10,
    "opacity": 1
}

// adding layers to the map
const myLayer = L.geoJSON().addTo(mymap)
myLayer.addData(geojsonFeature)

L.geoJSON(geojsonLineString, {
    style: myStyle
}).addTo(mymap)
