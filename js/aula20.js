// Aula 20 - Modal ou PopUp

//------------------------------------------------------------------------------
const btnModal = document.querySelector(".js-open-modal");
const btnCloseModal = document.querySelector(".js-close-modal");
const modal = document.getElementById("js-modal");

function openModal() {
  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
}

btnModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
