let date = "Date()"
function mostraData(){
    document.getElementById("data").innerText = Date()
}

const botaoB = document.getElementById("b")
botaoB.onclick = mostraData
botaoB.onclick = function() {
    console.log("segundo");
}

const botaoC = document.getElementById("c");
botaoC.addEventListener("click", mostraData);
botaoC.addEventListener("click", function() {
    console.log("segundo");
})

// No onclick, a segunda atribuição substitui a primeira,
// fazendo com que apenas a segunda função seja executada.
// No addEventListener, as duas funções são registradas,
// então ambas são executadas quando o botão é clicado.
// Na forma 1, os parênteses aparecem porque estamos chamando
// a função diretamente pelo HTML.
// Nas formas 2 e 3, não usamos parênteses porque estamos
// passando a referência da função, para que ela seja executada
// somente quando o evento de clique acontecer.
