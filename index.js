var Direita = window.document.getElementById("direita")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var Esquerda = window.document.getElementById("esquerda")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    Direita.style = "display:none"
    Esquerda.style = "display:flex; margin-top:70px"
}

function RolarParaEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    Direita.style = "display:flex"
    Esquerda.style = "display:none"
}