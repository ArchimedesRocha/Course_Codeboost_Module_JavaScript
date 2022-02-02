// Aula 19 - Navegação suave links internos

//------------------------------------------------------------------------------
const links = document.querySelectorAll(".js-nav li a");

function scrollSection(event) {
  event.preventDefault();

  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  const topSection = section.offsetTop;

  window.scrollTo({
    top: topSection - 80,
    behavior: "smooth",
  });
}

links.forEach((link) => {
  link.addEventListener("click", scrollSection);
});
