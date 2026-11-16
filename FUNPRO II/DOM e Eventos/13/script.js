const bloco = document.getElementById("bloco");
const teclaPressionada = document.getElementById("teclaPressionada");

//bloco.style.backgroundColor = "lightblue";
bloco.style.padding = "20px";
bloco.style.position = "absolute";
bloco.style.fontSize = "18px";
bloco.style.width = "50px";
bloco.style.height = "50px";

let tecla = "";
document.addEventListener("keydown", (event) => {
    

    if (event.key === "ArrowUp") {
        bloco.style.top = parseInt(bloco.style.top || 0) - 10 + "px";
        tecla = "Para cima";
        bloco.style.backgroundColor = "lightblue";
    }
    if (event.key === "ArrowDown") {
        bloco.style.top = parseInt(bloco.style.top || 0) + 10 + "px";
        tecla = "Para baixo";
        bloco.style.backgroundColor = "lightgreen";
    }
    if (event.key === "ArrowLeft") {
        bloco.style.left = parseInt(bloco.style.left || 0) - 10 + "px";
        tecla = "Para a esquerda";
        bloco.style.backgroundColor = "lightpink";
    }
    if (event.key === "ArrowRight") {
        bloco.style.left = parseInt(bloco.style.left || 0) + 10 + "px";
        tecla = "Para a direita";
        bloco.style.backgroundColor = "lightcoral";
    }
    teclaPressionada.textContent = "Tecla pressionada: " + tecla;
})

document.addEventListener("keyup", (event) => {
    bloco.style.backgroundColor = "lightyellow";
    teclaPressionada.textContent = "Tecla pressionada: Nenhuma";
})