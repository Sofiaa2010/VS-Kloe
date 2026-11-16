const botaoMaisUm = document.getElementById("+1");
const botaoPausar = document.getElementById("pausar");
const botaoRetomar = document.getElementById("retomar");
let contador = document.getElementById("contador");

botaoMaisUm.addEventListener("click", function() {
    contador.innerText = parseInt(contador.innerText) + 1;
});

botaoPausar.addEventListener("click", function() {
    botaoMaisUm.disabled = true;
    botaoPausar.disabled = true;
    botaoRetomar.disabled = false;
}); 

botaoRetomar.addEventListener("click", function() {
    botaoMaisUm.disabled = false;
    botaoPausar.disabled = false;
    botaoRetomar.disabled = true;
})

