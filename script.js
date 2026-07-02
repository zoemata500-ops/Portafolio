 // 1. Agarramos todos los links del navbar y todas las secciones
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// 2. IntersectionObserver: le "avisa" al navegador cuándo una sección
//    entra o sale de la pantalla. Es más eficiente que escuchar el
//    evento "scroll" a mano.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // isIntersecting = true cuando la sección está visible en pantalla
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');

      // quitamos "active" de todos los links...
      navLinks.forEach(link => link.classList.remove('active'));

      // ...y se lo ponemos solo al link que apunta a esta sección
      const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, {
  threshold: 0.50  //se activa cuando el 50% de la sección es visible
});

// 3. Le decimos al observer que vigile cada sección
sections.forEach(section => observer.observe(section));
