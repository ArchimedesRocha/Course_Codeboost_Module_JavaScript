// Aula 18 - Accordion

//------------------------------------------------------------------------------
const accordion = document.querySelectorAll(".js-accordion");

accordion.forEach((acc) => {
  acc.addEventListener("click", () => {
    accordion.forEach((item) => {
      item.parentElement.classList.remove("active");
    });

    acc.parentElement.classList.add("active");
  });
});
