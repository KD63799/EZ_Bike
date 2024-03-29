var launchDate = new Date(2024, 8, 1, 0, 0, 0); 


function updateCountdown() {
  var currentDate = new Date();
  var difference = launchDate - currentDate;

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days + ' jours';
  document.getElementById('hours').innerHTML = hours + ' heure';
  document.getElementById('minutes').innerHTML = minutes + ' minute';
  document.getElementById('seconds').innerHTML = seconds + ' seconde';

  if (difference < 0) {
    document.getElementById('days').innerHTML = "0d";
    document.getElementById('hours').innerHTML = "0h";
    document.getElementById('minutes').innerHTML = "0m";
    document.getElementById('seconds').innerHTML = "0s";
  }
}
updateCountdown();

setInterval(updateCountdown, 1000);