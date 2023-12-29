/* CONTROLES PARA EL CARRUCEL, PARA QUE NO HAGA EFECTOS POR DEFECTO */
// Función para cambiar el carrousel
function changeCarousel(current, target) {
  document.getElementById(`itemCarrousel-${current}`).style.display = "none";
  document.getElementById(`itemCarrousel-${target}`).style.display = "block";
}

// Agregar eventos de clic a los enlaces
document
  .getElementById("arrow-1-left")
  .addEventListener("click", function (event) {
    event.preventDefault(); //evita que se haga auto scroll, deteniendo esos autoeventos por default
    changeCarousel(1, 3);
  });

document
  .getElementById("arrow-1-right")
  .addEventListener("click", function (event) {
    event.preventDefault();
    changeCarousel(1, 2);
  });

document
  .getElementById("arrow-2-left")
  .addEventListener("click", function (event) {
    event.preventDefault();
    changeCarousel(2, 1);
  });

document
  .getElementById("arrow-2-right")
  .addEventListener("click", function (event) {
    event.preventDefault();
    changeCarousel(2, 3);
  });

document
  .getElementById("arrow-3-left")
  .addEventListener("click", function (event) {
    event.preventDefault();
    changeCarousel(3, 2);
  });

document
  .getElementById("arrow-3-right")
  .addEventListener("click", function (event) {
    event.preventDefault();
    changeCarousel(3, 1);
  });

document.addEventListener("DOMContentLoaded", function () {
  var itemCarrousel1 = document.getElementById("itemCarrousel-1");
  itemCarrousel1.addEventListener("click", function (event) {
    var target = event.target;
    // Verifica si el clic fue en  el banner o una flecha
    if (target.tagName === "A" || target.parentElement.tagName === "A") {
      // Si el clic fue en un enlace o una flecha, la navegación por defecto ocurrirá automáticamente.
      return;
    }

    // Si el clic no fue en un enlace ni una flecha, redirigir manualmente.
    window.open("https://www.google.com/", "_blank"); //para abrir nueva pestaña
    //window.location.href = "https://www.google.com/"; //  para abrirse en el mismo iframe
  });
});
