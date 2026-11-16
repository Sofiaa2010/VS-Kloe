const disciplinas = [
    'Algoritmos',
    'Banco de Dados',
    'Engenharia de Software',
    'Redes'
];

const titulo = document.createElement("h1");
titulo.innerText = "Minhas disciplinas";
document.body.appendChild(titulo);

const lista = document.createElement("ul");

//desafio:
//const itens = []
//for (const disciplina of disciplinas) {
  //  const item = document.createElement("li");
    //item.innerText = disciplina;
    //itens.push(item);
//}
//lista.append(...itens);


for (const disciplina of disciplinas) {
    const item = document.createElement("li");
    item.innerText = disciplina;
    lista.appendChild(item);
}
document.body.appendChild(lista);