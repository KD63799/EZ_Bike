const bikesApi =
  "https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/station_status.json?key=MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2";
const informationApi =
  "https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/station_information.json?key=MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2";

  let bikeIcon = L.Icon.extend({
  options: {
      iconSize:     [20, 20],
      iconAnchor:   [22, 24],
      popupAnchor:  [-13, -28]
  }
});
  let greenIcon = new bikeIcon({iconUrl: 'assets/svg/bike-green.svg'}),
  redIcon = new bikeIcon({iconUrl: 'assets/svg/bike-red.svg'}),
  orangeIcon = new bikeIcon({iconUrl: 'assets/svg/bike-orange.svg'});

fetch(bikesApi)
  .then((response) => response.json())
  .then((stations) => {
    return fetch(informationApi)
      .then((response) => response.json())
      .then((information) => {
        createMap(stations, information);
      });
  })
  .catch((error) => console.error("Error fetching stations:", error));

function createMap(stations, information) {
  const map = L.map("map").setView([43.2965, 5.3698], 12);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

  stations.data.stations.forEach((station) => {
    const coord = information.data.stations.find(
      (info) => info.station_id === station.station_id
    );
    const statusClass = station.num_bikes_available;
    console.log(statusClass)
    let icon
    if (statusClass > 3) {
      icon = greenIcon;
    } else if (statusClass > 0) {
      icon = orangeIcon;
    } else {
      icon = redIcon;
    }
    var marker = L.marker([coord.lat, coord.lon], {
      icon: icon
    }).addTo(map);
    marker.bindPopup(`<strong>Station ${coord.name}</strong><br>Bikes available: ${station.num_bikes_available}`).openPopup();
  });
}