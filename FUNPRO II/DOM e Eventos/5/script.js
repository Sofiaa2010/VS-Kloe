const lista = document.getElementById("fila");
const maria = document.getElementById("primeiro");
const joao = document.getElementById("segundo");

const ana = document.createElement("li");
ana.innerText = "Ana";

const carlos = document.createElement("li");
carlos.innerText = "Carlos";

const beatriz = document.createElement("li");
beatriz.innerText = "Beatriz";

lista.prepend(ana)
joao.before(maria)
maria.after(carlos)
//maria.after("carlos")
lista.append(beatriz)

const fim = document.createElement("li");
fim.innerText = "Fim da fila";
const p = document.getElementById("paragrafo");
p.append(fim)
