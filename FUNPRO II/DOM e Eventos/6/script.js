const avisos = document.getElementById("avisos");
const temporario = document.querySelectorAll(".temporario");

//01-
//temporario.forEach(function(elemento) {
  //  elemento.remove();
//})

//02-
temporario.forEach(function(elemento) {
    avisos.removeChild(elemento);
})

//03-
const eu = document.getElementById("eu");
setTimeout(function() {
    eu.remove();
}, 3000)