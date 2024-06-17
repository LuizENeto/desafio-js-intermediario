const inputTexto = document.querySelectorAll(".texto");
inputTexto.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.add("preenchido")
        } else {
            input.classList.remove("preenchido")
        }
    });
});