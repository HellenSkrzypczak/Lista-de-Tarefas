const inputTarefa = document.getElementById('nova-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const btnAdicionar = document.getElementById('adicionar');

btnAdicionar.addEventListener('click', function() {
    const txtDigitado = inputTarefa.value.trim();

    if(!txtDigitado){
        alert("Digite uma tarefa!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = txtDigitado; //atribui o texto ao elemento

    const btnRemover = document.createElement('button');
    btnRemover.textContent = '❌';
    btnRemover.addEventListener('click', function() {
        listaTarefas.removeChild(li);
    });
    li.appendChild(btnRemover);

    listaTarefas.appendChild(li);

    inputTarefa.value = '';
    
})