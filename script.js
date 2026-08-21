// ================================
// TROCA DE TEMA
// ================================

const botaoTema = document.querySelector("#botao-tema");

botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("tema-escuro");

    const temaEscuro =
        document.body.classList.contains("tema-escuro");

    if (temaEscuro) {
        botaoTema.textContent = "☀️";
        botaoTema.setAttribute(
            "aria-label",
            "Ativar tema claro"
        );
    } else {
        botaoTema.textContent = "🌙";
        botaoTema.setAttribute(
            "aria-label",
            "Ativar tema escuro"
        );
    }
});


// ================================
// BOTÃO DE MENSAGEM
// ================================

const botaoMensagem =
    document.querySelector("#botao-mensagem");

botaoMensagem.addEventListener("click", () => {

    alert(
        "Parabéns! Você adicionou uma interação com JavaScript à sua interface."
    );

});