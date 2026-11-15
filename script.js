// 1. Buscamos en el HTML el botón y el menú por su id
const botonMenu = document.getElementById('boton-menu');
const menu = document.getElementById('menu');

// 2. Al hacer clic en el botón, ponemos o quitamos la clase "abierto"
//    (el CSS usa esa clase para mostrar u ocultar el menú en celular)
botonMenu.addEventListener('click', () => {
  menu.classList.toggle('abierto');
});

// 3. Al hacer clic en un enlace del menú, cerramos el menú
menu.querySelectorAll('a').forEach(enlace => {
  enlace.addEventListener('click', () => {
    menu.classList.remove('abierto');
  });
});
