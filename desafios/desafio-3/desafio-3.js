const quadrado = document.querySelector(".quadrado");

quadrado.addEventListener('click', () => {
    const corAzul = quadrado.classList.contains('azul');

    if (corAzul) {
        quadrado.classList.remove("azul");
    } else {
        quadrado.classList.add("azul");
    }
});