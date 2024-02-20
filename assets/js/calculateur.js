let form = document.querySelector("form")
let popUp_txt = document.getElementById("popUp_txt")
const conso = 0.12 // 0.12 kg de co2/km
// Get the button that opens the modal
var btn = document.getElementById("form_btn");

btn.addEventListener("click", function(event) {
    event.preventDefault()
    let dist = document.getElementById("dist_input").value
    let day = document.getElementById("input_day").value
    let result = ((dist * day) * conso) * 4
    result = result.toFixed(2)
    console.log(result);
    popUp_txt.innerHTML = `Les émissions de CO2 pour les trajets domicile / travail en voiture sont de <strong>${result}</strong> kg par mois`
})



var modal = document.getElementById("popUp");
var span = document.getElementsByClassName("close")[0];
// Ouvrir et fermer le pop up 
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
// Fermer le pop up si click en dehors du pop up
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}