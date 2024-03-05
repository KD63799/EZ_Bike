var map = L.map("map").setView([43.3, 5.4], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);



async function getData(){
  const url1 = 'https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/station_status.json?&key=MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2'
  const url2 = `https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/station_information.json?&key=MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2`

  const responses = await Promise.all([fetch(url1), fetch(url2)])

  const dataQttVelo = await responses[0].json()
  const dataPosVelo = await responses[1].json()

  console.log(dataQttVelo);
  console.log(dataPosVelo);

  const stations = dataPosVelo.data.stations;
  const qttVelo = dataQttVelo.data.stations

  stations.forEach(element => {
      const latitude = element.lat;
      const longitude = element.lon;
      const stationID = element.station_id           

      let found = qttVelo.find((element) => element.station_id === stationID);
      let qtt = found.num_bikes_available

      L.marker([latitude, longitude]).addTo(map)
      .bindPopup(`<b>${element.name}</b><br>Bike available: ${qtt} `);

  });


}

getData()
