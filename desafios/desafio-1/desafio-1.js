
const botaoTrocarCor = document.getElementById("trocar-de-cor");

const quadradoAzul = document.querySelector(".azul");
const quadradoVermelho = document.querySelector(".vermelho");

botaoTrocarCor.addEventListener("click", trocarCor);

function trocarCor() {
  quadradoAzul.classList.remove("azul");
  quadradoVermelho.classList.remove("vermelho");
  quadradoAzul.classList.add("roxo");
  quadradoVermelho.classList.add("verde");
}