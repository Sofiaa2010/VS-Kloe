//1-
const coordenadas = document.getElementById("coordenadas");

document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    coordenadas.textContent = `Coordenadas do mouse: X: ${x}, Y: ${y}`;
})

//2-
const lista = document.getElementById("lista");

lista.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.style.textDecoration = "line-through";
    }
});
// O listener está na lista (pai), mas consegue identificar
// qual item (filho) foi clicado porque o evento se propaga
// dos filhos para o pai. O event.target identifica esse item.

//3-
document.addEventListener("mouseout", (event) => {
    if (event.target.tagName === "LI") {
        event.target.style.color = "white";
    }})

document.addEventListener("mouseover", (event) => {
    if (event.target.tagName === "LI") {
        event.target.style.color = "red";
    }
}); 

//4-
window.addEventListener("load", (event) => {
    alert("Página carregada!");
})

window.addEventListener("resize", (event) => {
    console.log("Largura: " + window.innerWidth, "Altura: " + window.innerHeight);
})