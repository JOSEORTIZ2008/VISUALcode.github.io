 // Selecciona el menú y el encabezado del html y Style.css
 const menu = document.querySelector("nav");
 const header = document.querySelector("#mi-encabezado");

 // Obtén la altura del encabezado
 const headerHeight = header.offsetHeight;

 // Función que cambia el color de fondo del menú cuando se desplaza
 window.addEventListener("scroll", () => {
     if (window.scrollY > headerHeight) {
         menu.style.backgroundColor = "rgb(50,43,150)"; // Cambia el color de fondo a azul
     } else {
         menu.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Vuelve al fondo transparente
     }
 });