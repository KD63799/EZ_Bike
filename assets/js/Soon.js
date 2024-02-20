var launchDate = new Date(2024, 8, 1, 12, 0, 0); // 1er avril 2024 à 12h00

// Fonction pour mettre à jour le compte à rebours
function updateCountdown() {
  var currentDate = new Date();
  var difference = launchDate - currentDate;

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days + 'd';
  document.getElementById('hours').innerHTML = hours + 'h';
  document.getElementById('minutes').innerHTML = minutes + 'm';
  document.getElementById('seconds').innerHTML = seconds + 's';

  // Si la date de lancement est dépassée, afficher un message différent
  if (difference < 0) {
    document.getElementById('days').innerHTML = "0d";
    document.getElementById('hours').innerHTML = "0h";
    document.getElementById('minutes').innerHTML = "0m";
    document.getElementById('seconds').innerHTML = "0s";
  }
}

// Appeler la fonction pour la première fois dès que la page est chargée
window.onload = function() {
  updateCountdown();
  // Mettre à jour le compte à rebours toutes les secondes
  setInterval(updateCountdown, 1000);
};