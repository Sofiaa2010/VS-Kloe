//01-
const foto = document.getElementById('foto');
//foto.alt = "Foto da Sabrina Carpenter"
console.log("Alt: " + foto.alt)
console.log("Autor: " + foto.autor)
// O autor não é um atributo padrão do HTML, por isso aparece como undefined.

//02- 
console.log("Autor getAttribute: " + foto.getAttribute("autor"))

//03-
foto.setAttribute("src", "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Primavera2025_%28161_of_182%29_%2854575723635%29_%28cropped%29.jpg/500px-Primavera2025_%28161_of_182%29_%2854575723635%29_%28cropped%29.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail")
foto.setAttribute("title", "Foto da Sabrina Carpenter")

//04-
console.log("Tem atributo 'alt': " + foto.hasAttribute("alt"))
if(foto.hasAttribute("alt")) {
    foto.removeAttribute("alt")
}
console.log("Alt: " + foto.alt)

//05-
for(atributo of foto.attributes) {
    console.log(atributo.name + ": " + atributo.value)
}
