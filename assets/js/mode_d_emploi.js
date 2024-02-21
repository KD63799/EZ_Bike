const carouselItems = document.querySelectorAll(".card");
let currentIndex = 0;

function showSlide(index) {
  // Cache toutes les cartes du carousel
  carouselItems.forEach((item) => {
    item.style.display = "none";
  });

  // Affiche la carte à l'index spécifié
  carouselItems[index].style.display = "block";
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

// Afficher la première carte
showSlide(currentIndex);

// Met en place les écouteurs d'événements pour les boutons précédent et suivant
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", previousSlide);
