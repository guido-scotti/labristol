/// ---- CARRUSEL DE FOTOS ----
const images = document.querySelectorAll('.carrusel-img');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
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