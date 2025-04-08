
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname.split("/").pop().toLowerCase(); 

    links.forEach(link => {
      const linkHref = link.getAttribute("href").toLowerCase();
      if (linkHref.includes(currentPage)) {
        link.classList.add("active");
      }
    });
});

function changeImage(event) {
  const clickedThumbnail = event.target;
  const gallery = clickedThumbnail.closest('.image-gallery');
  const mainImage = gallery.querySelector('.main-image');

  if (mainImage) {
    mainImage.src = clickedThumbnail.src;

    const thumbnails = gallery.querySelectorAll('.thumbnail');
    thumbnails.forEach(img => img.classList.remove('active'));

    clickedThumbnail.classList.add('active');
  } else {
    console.error('No se encontró la imagen principal en esta galería.');
  }
}

