const mymap = L.map('mapid').setView([39.743, -104.99], 13)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGxvdXNhOTIiLCJhIjoiY2p0cmQyMTVkMG90NjN6bzNpY2ppdW0zeSJ9.bIlClbOREYuQ2H0br8cC8A'
}).addTo(mymap)

// geoJSON data types
const geojsonFeature = [{
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
}, {
    "type": "Feature",
    "properties": {
        "name": "Busch Field",
        "show_on_map": false,
        "popupContent": "This is where the Rockies used to play"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.98404, 39.74621]
    }
}]
// Binding a pop up on features
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature,
    filter: function(feature, layer) {
        return feature.properties.show_on_map
    }
}).addTo(mymap)

const geojsonLineString = [{
    "type": "LineString",
    "coordinates": [[-105, 39.75], [-105.10, 39.8], [-105, 39.81]]
}, {
    "type": "LineString",
    "coordinates": [[-105, 39.74], [-105.05, 39.702], [-105.05, 39.65]]
}]

const states = [{
    "type": "Feature",
    "properties": {"party": "Republican"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-104.05, 48.99],
            [-97.22,  48.98],
            [-96.58,  45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"party": "Democrat"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
}];

// styling
const myStyle = {
    "color": "#dbf210",
    "weight": 10,
    "opacity": 1
}

// adding layers to the map
const myLayer = L.geoJSON().addTo(mymap)
myLayer.addData(geojsonFeature)

// Styling while adding to the layer
L.geoJSON(geojsonLineString, {
    style: myStyle
}).addTo(mymap)

L.geoJSON(states, {
    style: function(feature) {
        switch (feature.properties.party) {
            case 'Democrat':
                return {
                    color: '#023382',
                    fillColor: '#023382',
                    fillOpacity: .05,
                    dashArray: 10
                }
            case 'Republican':
                return {
                    color: '#ad1a1a',
                    fillColor: '#ad1a1a',
                    fillOpacity: .05,
                    dashArray: 10
                }         
        }
    }
}).addTo(mymap)

// pointToLayer
// const geojsonMarkerOptions = {
//     radius: 8,
//     fillColor: "#ff7800",
//     color: "#000",
//     weight: 1,
//     opacity: 1,
//     fillOpacity: 0.8
// }

// L.geoJSON(someGeojsonFeature, {
//     pointToLayer: function (feature, latlng) {
//         return L.circleMarker(latlng, geojsonMarkerOptions);
//     }
// }).addTo(map)