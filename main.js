/// ---- CARRUSEL DE FOTOS  ----
function setupCarrusel(carruselClass, prevClass, nextClass) {
  const images = document.querySelectorAll('.' + carruselClass);
  const nextBtn = document.querySelector('.' + nextClass);
  const prevBtn = document.querySelector('.' + prevClass);
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length;
    showImage(current);
  });

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  showImage(current);
}

/// ---- AGRANDADO DE IMAGEN  ----
  const modal = document.getElementById("imagen-modal");
  const modalImg = document.getElementById("img-ampliada");
  const cerrar = document.querySelector(".cerrar");

  // ABRIR MODAL 
  document.querySelectorAll('.menu-carillas img').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      document.body.classList.add("modal-open");
    });
  });

  // SALIR DEL MODAL DESDE EL BOTON CERRAR
  cerrar.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }

  // SALIR DEL MODAL TOCANDO FUERA DE LA IMAGEN
  modal.onclick = function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  };

// ---- HERO CARRUSEL (foto inicial) ----
  (function setupHeroCarrusel() {
    const heroImgs = document.querySelectorAll('.hero-carrusel-img');
    const prevBtn = document.querySelector('.hero-carrusel-prev');
    const nextBtn = document.querySelector('.hero-carrusel-next');
    if (!heroImgs.length) return;
    let heroIndex = 0;
    let intervalId = null;

    function showHeroImg(idx) {
      heroImgs.forEach((img, i) => {
        img.classList.toggle('active', i === idx);
      });
    }

    function nextImg() {
      heroIndex = (heroIndex + 1) % heroImgs.length;
      showHeroImg(heroIndex);
    }

    function prevImg() {
      heroIndex = (heroIndex - 1 + heroImgs.length) % heroImgs.length;
      showHeroImg(heroIndex);
    }

    function startAutoSlide() {
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(nextImg, 3000);
    }

    // Botones (si existen)
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        prevImg();
        startAutoSlide(); // reinicia el timer
      });
      nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        nextImg();
        startAutoSlide(); // reinicia el timer
      });
    }

    showHeroImg(heroIndex);
    startAutoSlide();
  })();

// Carrusel About Us
setupCarrusel('carrusel-img', 'prev', 'next');