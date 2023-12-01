// Capturar los botones de navegación
const navButtons = document.querySelectorAll('.nav-bullet');

// Añadir un evento de clic a cada botón
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Obtener el ID de la sección objetivo desde el atributo "data-target"
    const targetSectionId = button.getAttribute('data-target');

    // Obtener la sección objetivo utilizando el ID
    const targetSection = document.getElementById(targetSectionId);

    // Desplazarse suavemente a la sección objetivo
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Remover la clase "current" de todos los botones
    navButtons.forEach(btn => {
      btn.classList.remove('current');
      btn.style.backgroundColor = '#ccf381';
      btn.style.border = '2px solid #ccf381';
    });

    // Agregar la clase "current" al botón seleccionado
    button.classList.add('current');
    button.style.backgroundColor = 'transparent';

    // Cambiar el color de los botones en la sección 2 y 4 a morado y fondo transparente
    if (targetSectionId === 'section2' || targetSectionId === 'section4' || targetSectionId === 'section1') {
      navButtons.forEach(btn => {
        btn.style.backgroundColor = '#8B5CF6';
        btn.style.border = '2px solid #8B5CF6';
      });
      button.style.backgroundColor = 'transparent';
      button.style.border = '2px solid #8B5CF6';

      // Cambiar el color de las barras en la sección 1, 2 y 4
      const bars = document.querySelectorAll('.navbar-toggle .bar1, .navbar-toggle .bar2, .navbar-toggle .bar3');
      bars.forEach(bar => {
        if (targetSectionId === 'section1' && window.innerWidth <= 767) {
          bar.style.backgroundColor = '#ccf381'; // Cambia a tu color deseado para la sección 1 en dispositivos móviles
        } else {
          bar.style.backgroundColor = '#4831D4'; // Cambiar el color a #4831D4
        }
      });
    } else {
      // Restablecer el color a su valor predeterminado en otras secciones
      navButtons.forEach(btn => {
        btn.style.backgroundColor = '#ccf381';
        btn.style.border = '2px solid #ccf381';
      });
      button.style.backgroundColor = 'transparent';
      button.style.border = '2px solid #ccf381';

      // Restablecer el color de los spans en otras secciones
      const spans = document.querySelectorAll('.navbar-toggle span');
      spans.forEach(span => {
        span.style.backgroundColor = '#ccf381'; // Cambiar al color predeterminado
      });

      // Restablecer el color de las barras en otras secciones
      const bars = document.querySelectorAll('.navbar-toggle .bar1, .navbar-toggle .bar2, .navbar-toggle .bar3');
      bars.forEach(bar => {
        bar.style.backgroundColor = '#ccf381'; // Cambiar al color predeterminado
      });
    }
  });
});



// Desplazamiento con teclado
document.addEventListener('keydown', event => {
  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    event.preventDefault();
    const currentSection = document.querySelector('.current');
    const currentIndex = Array.from(navButtons).indexOf(currentSection);

    if (event.key === 'ArrowUp' && currentIndex > 0) {
      navButtons[currentIndex - 1].click();
    } else if (event.key === 'ArrowDown' && currentIndex < navButtons.length - 1) {
      navButtons[currentIndex + 1].click();
    }
  }
});

// Desplazamiento con rueda del ratón
document.addEventListener('wheel', event => {
  event.preventDefault();
  const delta = event.deltaY;
  const currentSection = document.querySelector('.current');
  const currentIndex = Array.from(navButtons).indexOf(currentSection);

  if (delta < 0 && currentIndex > 0) {
    navButtons[currentIndex - 1].click();
  } else if (delta > 0 && currentIndex < navButtons.length - 1) {
    navButtons[currentIndex + 1].click();
  }
});

// Desplazarse automáticamente al primer section al cargar la página
window.addEventListener('load', function() {
  document.getElementById('section1').scrollIntoView();

  // Agregar la clase "current" al botón del Section 1 por defecto y simular clic
  navButtons[0].classList.add('current');
  navButtons[0].style.backgroundColor = 'transparent';
  navButtons[0].click();
});


// Capturar elementos del navbar
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

// Agregar evento de clic al toggle del navbar
navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');

  // Aplicar animación de cierre o apertura después de un breve retraso
  if (!navbarMenu.classList.contains('active')) {
    setTimeout(() => {
      navbarMenu.classList.remove('open');
      navbarMenu.classList.add('closing');
    }, 200);
  } else {
    navbarMenu.classList.remove('closing');
    navbarMenu.classList.add('open');

    // Aplicar animación de apertura al navbar
    setTimeout(() => {
      navbarMenu.classList.remove('open');
    }, 2500);
  }
});





