const textarea = document.getElementById('comentario');
const contador = document.getElementById('contador');
const textoContador = document.getElementById('texto-contador');
const formulario = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

textarea.addEventListener('input', function() {
        const digitados = textarea.value.length;
        contador.textContent = digitados;

        if (digitados >= 140) {
            contador.style.color = "red";
            contador.style.fontWeight = "bold";
            textoContador.style.color = "red";

        }else{
            contador.style.color = "white";
            contador.style.fontWeight = "normal";
            textoContador.style.color = "white";
        }
    });

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    if (textarea.value.trim() === "" || 
        formulario.nome.value.trim() === "" ||
        formulario.email.value.trim() === ""
    ) {
        mensagem.innerText = "Um dos campos não foi preenchido!";
        return;
    }else{
        mensagem.innerText = "Cadastro de nome realizado!";
    }

    formulario.reset();
    contador.textContent = 0;
});

