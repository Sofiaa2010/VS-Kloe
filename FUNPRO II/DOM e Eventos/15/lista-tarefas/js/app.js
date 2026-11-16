document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('nova-tarefa');
    const btnAdicionar = document.getElementById('adicionar');
    const lista = document.getElementById('lista');
    const contador = document.getElementById('contador');

    function atualizarContador() {
        const totalPendentes = lista.querySelectorAll('li:not(.concluida)').length;
        contador.textContent = `${totalPendentes} tarefa(s) pendente(s)`;
    }

    function adicionarTarefa() {
        const texto = input.value.trim();
    
        if (texto === "") return;

        const li = document.createElement('li');
        li.textContent = texto;

        
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'x';
        btnRemover.classList.add('remover');
        
        li.appendChild(btnRemover);
        lista.appendChild(li);

        
        input.value = "";
        input.focus();

        atualizarContador();
    }

    
    btnAdicionar.addEventListener('click', adicionarTarefa);
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            adicionarTarefa();
        }
    });

    
    lista.addEventListener('click', (event) => {
        const alvo = event.target;

        if (alvo.classList.contains('remover')) {
            const li = alvo.parentElement;
            li.remove();
            atualizarContador();
            return;
        }

        if (alvo.tagName === 'LI') {
            alvo.classList.toggle('concluida');
            atualizarContador();
        }
    });
});