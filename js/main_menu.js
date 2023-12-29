// Función para mostrar un menú
function showMenu(menuId) {
  const menu = document.getElementById(menuId);
  menu.style.display = "block";
}

// Función para ocultar un menú
function hideMenu(menuId) {
  const menu = document.getElementById(menuId);
  menu.style.display = "none";
}

/* function showmenuH(menuId) {
  const menu = document.getElementById(menuId);
  menu.style.display = "block";
}

function hidemenuH(menuId) {
  const menu = document.getElementById(menuId);
  menu.style.display = "none";
} */

document.addEventListener("DOMContentLoaded", function () {
  const toggleMenuButton = document.getElementById("toggleMenuButton");
  const menuH = document.getElementById("menuH");

  // Función para verificar y ocultar el menú si el botón de hamburguesa está oculto
  function checkAndHideMenu() {
    if (window.getComputedStyle(toggleMenuButton).display === "none") {
      hideMenu("menuH");
    }
    // Ocultar el menú al cargar la página si el botón de hamburguesa está visible
    window.addEventListener("load", function () {
      hideMenu("menuH");
    });
  }

  // Verificar y ocultar el menú al cargar la página
  checkAndHideMenu();

  // Agregar evento click al botón de hamburguesa
  toggleMenuButton.addEventListener("click", function () {
    if (menuH.style.display === "none" || menuH.style.display === "") {
      // Si el menú está oculto o no tiene una propiedad display definida, muéstralo
      showMenu("menuH");
    } else {
      // Si el menú está visible, ocúltalo
      hideMenu("menuH");
    }
  });

  // Agregar evento resize para manejar cambios en el tamaño de la ventana
  window.addEventListener("resize", function () {
    checkAndHideMenu();

    // Ocultar el menú si el botón de hamburguesa está visible después de un cambio en el tamaño
    if (
      window.getComputedStyle(toggleMenuButton).display !== "none" &&
      menuH.style.display !== "none"
    ) {
      hideMenu("menuH");
    }
  });
});

// Agregar eventos mouseover y mouseout a los botones y menús
/* document.getElementById("buttonNosotros").addEventListener("mouseover", () => {
  showMenu("menuNosotros");
});

document.getElementById("buttonNosotros").addEventListener("mouseout", () => {
  hideMenu("menuNosotros");
});*/

document.getElementById("menuNosotros").addEventListener("mouseover", () => {
  showMenu("menuNosotros");
});

document.getElementById("menuNosotros").addEventListener("mouseout", () => {
  hideMenu("menuNosotros");
});

document.getElementById("buttonServicios").addEventListener("mouseover", () => {
  showMenu("menuServicios");
});

document.getElementById("buttonServicios").addEventListener("mouseout", () => {
  hideMenu("menuServicios");
});

document.getElementById("menuServicios").addEventListener("mouseover", () => {
  showMenu("menuServicios");
});

document.getElementById("menuServicios").addEventListener("mouseout", () => {
  hideMenu("menuServicios");
});

document.getElementById("buttonAliados").addEventListener("mouseover", () => {
  showMenu("menuAliados");
});

document.getElementById("buttonAliados").addEventListener("mouseout", () => {
  hideMenu("menuAliados");
});

document.getElementById("menuAliados").addEventListener("mouseover", () => {
  showMenu("menuAliados");
});

document.getElementById("menuAliados").addEventListener("mouseout", () => {
  hideMenu("menuAliados");
});

document.getElementById("buttonOtros").addEventListener("mouseover", () => {
  showMenu("menuOtros");
});

document.getElementById("buttonOtros").addEventListener("mouseout", () => {
  hideMenu("menuOtros");
});

document.getElementById("menuOtros").addEventListener("mouseover", () => {
  showMenu("menuOtros");
});

document.getElementById("menuOtros").addEventListener("mouseout", () => {
  hideMenu("menuOtros");
});

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function mostrarMenu(event) {
  var botonNosotros = document.getElementById("buttonNosotros");
  var menuNosotros = document.getElementById("menuNosotros");

  // Obtener la posición del botón
  var rect = botonNosotros.getBoundingClientRect();
  var top = rect.bottom + window.scrollY - 30;
  var left = rect.left + window.scrollX;

  // Ajustar la posición del menú
  menuNosotros.style.top = top + "px";
  menuNosotros.style.left = left + "px";

  // Mostrar el menú
  menuNosotros.classList.remove("hidden");

  // Ocultar el menú cuando el ratón se mueve fuera del botón
  botonNosotros.addEventListener("mouseout", function () {
    menuNosotros.classList.add("hidden");
  });
}

// Ocultar el menú cuando el ratón sale del menú
document
  .getElementById("menuNosotros")
  .addEventListener("mouseout", function () {
    this.classList.add("hidden");
  });
