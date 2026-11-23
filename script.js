const botao = document.getElementById("botao-sobre");
const texto = document.getElementById("texto-extra");

botao.addEventListener("click", function() {

    if (texto.style.display === "none") {
        texto.style.display = "block";
        botao.textContent = "Mostrar menos";
    } else {
        texto.style.display = "none";
        botao.textContent = "Mostrar mais";
    }

});