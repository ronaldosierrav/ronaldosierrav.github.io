
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

