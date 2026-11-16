//01.
const paragrafoNegrito = document.getElementById("negrito");
console.log("1. getElementById:", paragrafoNegrito);

const paragrafol1 = document.getElementsByTagName('l1');
console.log("2. getElementsByTagName:", paragrafol1);

const elementosCentralizados = document.getElementsByClassName("centralizado");
console.log("3. getElementsByClassName:", elementosCentralizados);

const linkFortaleza = document.querySelector("p a");
console.log("4. querySelector:", linkFortaleza);


const itensLista = document.querySelectorAll("li.item");
console.log("5. querySelectorAll:", itensLista);

document.getElementById("negrito").style.color = "yellow"

//document.getElementsByClassName("centralizado italico")[0].style.color = "yellow"

//document.getElementsByTagName('p')[0].style.color = "yellow";

//Retorna um elemento: getElementById; Retorna uma coleção: getElementsByClassName e getElementsByTagName; Ocorre um erro e a cor não é aplicada.

//02.
//no CONSOLE: 01- $0.innerText="VS-KLOE"; 02- $$('a').length; 03- document.querySelector("body > h1").style.display = 'none'

//03.
let cont= "<strong>Olá, Universo</strong>"
function fInnerHtml(){
    const saida = document.getElementById("saida")
    saida.innerHTML = cont
}

let texto= "<strong>Olá, Universo</strong>"
function fInnerText(){
    const saida = document.getElementById("saida")
    saida.innerText = texto
}
// O innerHTML interpreta o que está escrito, o innerText trata tudo como se fosse apenas um texto.
