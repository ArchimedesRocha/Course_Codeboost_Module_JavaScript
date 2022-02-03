// Aula 21 - setTimOut e setInterval
//------------------------------------------------------------------------------
setTimout(() => {
  console.log("Executar setTimeOut");
}, 3000);
//Só vai executar após 3segundos

//------------------------------------------------------------------------------
const count = document.getElementById("number");
setInterval(() => {
  count.textContent = Number(count.textContent) + 1;
}, 1000);
