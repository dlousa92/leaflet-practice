console.log(statesData)

// Mapbox Setup
const mapboxAccessToken = 'pk.eyJ1IjoiZGxvdXNhOTIiLCJhIjoiY2p0cmQyMTVkMG90NjN6bzNpY2ppdW0zeSJ9.bIlClbOREYuQ2H0br8cC8A'
const map = L.map('mapid').setView([37.8, -96], 4)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
    id: 'mapbox.light',
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>' 
}).addTo(map)

L.geoJson(statesData).addTo(map)

// Function to determine color to be added to state dependent on density
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

console.log(getColor(545))






