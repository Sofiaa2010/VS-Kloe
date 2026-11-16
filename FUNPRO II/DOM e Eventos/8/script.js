const caixa = document.getElementById("caixa");

caixa.style.backgroundColor = "lightblue";
caixa.style.padding = "20px";
caixa.style.border = "3px dashed black";
caixa.style.fontSize = "18px";

//02-
setTimeout(function() {
    caixa.style.backgroundColor = "";
    caixa.classList.add("destaque");

}, 3000)
setTimeout(function() {
    caixa.classList.remove("destaque");
}, 6000)
setTimeout(function() {
    caixa.classList.toggle("escuro");
}, 9000)
setTimeout(function() {
    console.log("Tem classe 'escuro': " + caixa.classList.contains("escuro"))
}, 12000)

//03- Style é melhor para alterar diretamente um elemente CSS,
//já classList é melhor para adicionar, remover ou verificar classes CSS.