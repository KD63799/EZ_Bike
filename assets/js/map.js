// Initialisation de la carte avec vue centrée et zoom
var map = L.map("map").setView([43.3, 5.4], 13);

// Ajout d'une couche de tuiles OpenStreetMap à la carte
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19, // Zoom maximal autorisé
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>', // Attribution
}).addTo(map);

// Ajout d'un marqueur à la position spécifiée
var marker = L.marker([43.3, 5.4]).addTo(map);

// Ajout d'un cercle avec certaines propriétés à la position spécifiée
var circle = L.circle([43.3, 5.4], {
  color: "red", // Couleur de la bordure
  fillColor: "#f03", // Couleur de remplissage
  fillOpacity: 0.5, // Opacité de remplissage
  radius: 500, // Rayon en mètres
}).addTo(map);

// Ajout d'un polygone avec des points spécifiés
var polygon = L.polygon([
  [43.3, 5.4],
  [43.3, 5.4],
  [43.3, 5.4],
]).addTo(map);

// Association de popups à chaque élément (marqueur, cercle, polygone)
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup(); // Popup du marqueur
circle.bindPopup("I am a circle."); // Popup du cercle
polygon.bindPopup("I am a polygon."); // Popup du polygone

// Création et ouverture d'un popup à une position spécifiée
var popup = L.popup()
  .setLatLng([43.3, 5.4]) // Position du popup
  .setContent("Je suis un pop-up.") // Contenu du popup
  .openOn(map); // Ouverture du popup sur la carte

// Fonction déclenchée lorsqu'un clic est effectué sur la carte
function onMapClick(e) {
  alert("You clicked the map at " + e.latlng); // Affichage d'une alerte avec les coordonnées du clic
}

// Associer la fonction de clic à l'événement de clic sur la carte
map.on("click", onMapClick);

// Récupération des informations sur les stations à partir de l'API
fetch(
  "https://api.omega.fifteen.eu/gbfs/2.2/marseille/en/station_information.json?&key=MjE0ZDNmMGEtNGFkZS00M2FlLWFmMWItZGNhOTZhMWQyYzM2"
)
  .then((response) => response.json()) // Conversion de la réponse en JSON
  .then((data) => {
    const stations = data.data.stations; // Extraction des données des stations
    console.log(stations); // Affichage des données des stations dans la console

    // Pour chaque station, ajouter un marqueur à sa position et associer un popup avec son nom et son adresse
    stations.forEach((station) => {
      const latitude = station.lat; // Latitude de la station
      const longitude = station.lon; // Longitude de la station

      // Ajout d'un marqueur à la position de la station avec un popup contenant son nom et son adresse
      L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup(`<b>${station.name}</b><br>${station.address}`);
    });
  })
  .catch((error) => {
    console.error("Erreur", error); // Gestion des erreurs de la requête
  });
