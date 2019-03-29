console.log(statesData)
// Mapbox Setup
let geojson = {}
const mapboxAccessToken = 'pk.eyJ1IjoiZGxvdXNhOTIiLCJhIjoiY2p0cmQyMTVkMG90NjN6bzNpY2ppdW0zeSJ9.bIlClbOREYuQ2H0br8cC8A'
const map = L.map('mapid').setView([37.8, -96], 4)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
    id: 'mapbox.light',
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>' 
}).addTo(map)

// Highlight feature function
function highlightFeature (e) {

    e.target.setStyle({
        weight: 5,
        color: '#fff7f8',   
    })
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        e.target.bringToFront()
    }
}

// Function to reset style back to default when leaving the layer
function resetStyle (e) {
    geojson.resetStyle(e.target)
}

// Add event listeners to each feature
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetStyle
    })
}

geojson = L.geoJson(statesData, {
    style: setColor,
    onEachFeature: onEachFeature
}).addTo(map)

// This function to determine color to be added to state dependent on density
function getColor (density) {

    return density > 1000 ? '#000000':
           density > 500 ?  '#241e20':
           density > 200 ?  '#44373b':
           density > 100 ?  '#655157':
           density > 50 ?   '#896d75':
           density > 25 ?   '#af8a95':
           density > 10 ?   '#d6a8b6':
                            '#ffc7d8'  
}
// This function sets the color and style for each polygon
function setColor(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        fillOpacity: .8,
        color: 'white',
        dashArray: 3,
        weight: 1.5
    }
}






