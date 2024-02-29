var map = L.map("map").setView([43.3, 5.4], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([43.3, 5.4]).addTo(map);

var circle = L.circle([43.3, 5.4], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

var polygon = L.polygon([
  [43.3, 5.4],
  [43.3, 5.4],
  [43.3, 5.4],
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
  .setLatLng([43.3, 5.4])
  .setContent("Je suis un pop-up.")
  .openOn(map);

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

map.on("click", onMapClick);


fetch("https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/station_information.json?&key=MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2")
  .then(response => response.json()) 
  .then(data => {

    const stations = data.data.stations;
    console.log(stations);

    stations.forEach(station => {

      const latitude = station.lat;
      const longitude = station.lon;
      console.log(latitude, longitude);

      L.marker([latitude, longitude]).addTo(map)
        .bindPopup(`<b>${station.name}</b><br>${station.address}`);
    });
  })
  .catch(error => {
    console.error('Erreur', error);
  });
