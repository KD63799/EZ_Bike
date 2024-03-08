// --------------------- Carte -----------------
const map = L.map("map").setView([43.2965, 5.3698], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// recup les api
const bikesApi =
  "https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/station_status.json?key=MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2";
const informationApi =
  "https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/station_information.json?key=MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2";

  // creation des differents icons
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

// on recup l'input
let input = document.getElementById("station")

// fonction pour fetch
async function getData(){
  const url1 = 'https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/station_status.json?&key=MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2'
  const url2 = `https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/station_information.json?&key=MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2`

  const responses = await Promise.all([fetch(url1), fetch(url2)])

  const stations = await responses[0].json()
  const information = await responses[1].json()

    const combineData = stations.data.stations.map(
      (station) => {
        const info = information.data.stations.find(
          (info) => info.station_id === station.station_id
        );
        return {
          ...station, ...info
        }
      })
      createMap(combineData)
      localStorage.setItem('data',JSON.stringify(combineData))

     
}

// fonction affichage map et station
async function createMap(combineData) {

  combineData.forEach((station) => {
    // recup des coordonnés
    const coord = combineData.find(
      (info) => info.station_id === station.station_id
    );
    // recup nombre de velo dispo
    const statusClass = station.num_bikes_available;
    let icon
    // verif nombre de velo dispo
    if (statusClass > 3) {
      icon = greenIcon;
    } else if (statusClass > 0) {
      icon = orangeIcon;
    } else {
      icon = redIcon;
    }
    // affichage sur la carte de la station
    var marker = L.marker([coord.lat, coord.lon], {
      icon: icon
    }).addTo(map);
    marker.bindPopup(`<strong>Station ${coord.name}</strong><br>Bikes available: ${station.num_bikes_available}`).openPopup();
  });
}

// -------------------Recherche ---------------- 

input.addEventListener("input",function filter(event){
  const combineData = JSON.parse(localStorage.getItem("data"))
  let result = event.target.value.toLowerCase()
  // filtrage des stations
  const tabfiltred = combineData.filter(station => station.name.toLowerCase().includes(result))
  // reset de la carte
  map.eachLayer((layer) => layer instanceof L.Marker && map.removeLayer(layer));
  // affichage de la carte avec les stations filtrées
  createMap(tabfiltred)
})


  getData()