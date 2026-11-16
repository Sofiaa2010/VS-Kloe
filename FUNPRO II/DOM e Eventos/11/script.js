function getRandom(min, max) {
 return Math.floor(Math.random() * max) + min;
}

const jogarDado = document.getElementById("jogarDado");
let resultado = document.getElementById("resultado");
let ladosDado = document.getElementById("ladosDado");

const historico = document.getElementById("historico");

ladosDado.addEventListener("input", function() {
    max = parseInt(ladosDado.value);
   });

jogarDado.addEventListener("click", function() {
    let result = getRandom(1, max);
    resultado.innerText = result;

    const item = document.createElement("li");
    item.innerText = result;
    
    historico.prepend(item);
     if (historico.children.length > 5) {
        historico.removeChild(historico.lastChild);
    }
});
console.log(historico)

//03- O change é disparado quando o usuário muda o valor do input e depois tira o foco do input.
//  O input é disparado sempre que o usuário muda o valor do input, mesmo que ele ainda esteja com o foco no input.
