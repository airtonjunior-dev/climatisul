// Adicione scripts JavaScript aqui se necessário
console.log("Página Climatisul carregada.");
/* Area atuação */
let currentSlide = 0;

function moveCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const totalItems = carousel.children.length;
  currentSlide = (currentSlide + direction + totalItems) % totalItems;
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

/* Area atuação Fim */
