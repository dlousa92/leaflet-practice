const mymap = L.map('mapid').setView([51.505, -0.09], 13)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGxvdXNhOTIiLCJhIjoiY2p0cmQyMTVkMG90NjN6bzNpY2ppdW0zeSJ9.bIlClbOREYuQ2H0br8cC8A'
}).addTo(mymap)


// Markers, Circles and Polygons
const marker = L.marker([51.5, -0.09]).addTo(mymap)

const circle = L.circle([51.508, -0.11], {
    color: 'blue',
    fillColor: '#06a7cc',
    radius: 300
}).addTo(mymap)

const polygon = L.polygon([
    [51.525, -0.15],
    [51.503, -0.06],
    [51.52, -0.023],
]).addTo(mymap)

// popups
marker.bindPopup('<p>I am a pop up.</p><p>It\'s nice to meet you.</p>').openPopup()
circle.bindPopup('<p>This is a pop up on the circle</p>')
polygon.bindPopup('<h2>This is where the zombie outbreak is happening</h2>')