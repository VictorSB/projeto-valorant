const botaoAlterarTema = document.getElementById("botao-alterar-tema")
const body = document.querySelector("body")
const imagemBotaoTrocaDeTema = document.querySelector(".image-button")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscutoEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if (modoEscutoEstaAtivo) {      

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/sun.png")
    } else {
        
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/moon.png")
    }
})



