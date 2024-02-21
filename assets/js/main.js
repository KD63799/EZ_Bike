// Display the header on every page

(function displayHeader() {
  console.log("displayHeader");
  const header = document.createElement("header");
  header.innerHTML = `
    <header>
    <div class="nav-link">
      <a>
        <img id="logo" src="assets/jpg/ez-bike_logo.jpg" alt="ez-bike_logo" />
      </a>
      <nav class="side-nav">
        <a href="/index.html">Acceuil</a>
        <a href="/mode_d_emploi.html">Mode d'emploi</a>
        <a href="/map.html">Trouver un vélib</a>
        <a href="/calculateur.html">Calculateur</a>
        <a href="/contact.html">Contact</a>
      </nav>
    </div>
    <div class="btn-menu">
      <div class="btn-menu__bar btn-menu__bar--bar1"></div>
      <div class="btn-menu__bar btn-menu__bar--bar2"></div>
      <div class="btn-menu__bar btn-menu__bar--bar3"></div>
    </div>
    </header>
    `;
  document.body.prepend(header);
})()

// Display the footer on every page
function displayFooter() {
  console.log("displayFooter");
  const footer = document.createElement("footer");
  footer.innerHTML = `
  <footer>
  <hr />
  <div class="footernav">
    <div class="trademark">
      <h3>© 2023 EZ-BIKE</h3>
    </div>

    <div class="links">
      <a href="/index.html">Acceuil</a>
      <a href="/mode_d_emploi.html">Mode d'emploi</a>
      <a href="/map.html">Trouver un vélib</a>
      <a href="/calculateur.html">Calculateur</a>
      <a href="/contact.html">Contact</a>
    </div>
  </div>
</footer>
    `;
  document.body.append(footer);
}

displayFooter()


// Top NavBar Animation

let action = document.querySelector(".btn-menu");
let nav = document.querySelector(".side-nav");
let buttonAnim = Array.from(document.getElementsByClassName("btn-menu__bar"));

let openNav = action.addEventListener("click", () => {
  nav.classList.toggle("open");
  for (let i = 0; i < buttonAnim.length; i++) {
    buttonAnim[i].classList.toggle("change");
  }
});


import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "8c550cd5-d905-4493-9a7b-4b71c92948fb"
  }
}

