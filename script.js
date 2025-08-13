const inputTarefa = document.getElementById('nova-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const btnAdicionar = document.getElementById('adicionar');
const btnExcluirtodos = document.getElementById('excluir-todos');
const contador = document.getElementById('valorContador');
let totalTarefas = 0;

btnAdicionar.addEventListener('click', function() {
    contadorTarefa();
    novaTarefa();
});

btnExcluirtodos.addEventListener('click', excluirTodos);

inputTarefa.addEventListener('keydown', function(event){
    if (event.key === 'Enter')
    {
        novaTarefa();
        event.preventDefault();
    }
});

//FUNCTIONS
function obterTextoTarefa() {
    const txtDigitado = inputTarefa.value.trim();
    if (txtDigitado) {
    criarTarefa(txtDigitado);
    inputTarefa.value = ''; // limpa o campo
    } else {
        alert('Digite uma tarefa antes de adicionar!');
        totalTarefas = 0;     
        contador.textContent = totalTarefas;
    }
}

function criarTarefa(txtDigitado){
    const li = document.createElement('li');
    li.textContent = txtDigitado; //atribui o texto ao elemento

    const btnRemover = document.createElement('button');
    btnRemover.innerHTML = '<img src="https://img.icons8.com/?&id=17145&format=png&color=000000" alt="icone-remover" class="icone-btn">';
    btnRemover.addEventListener('click', function() {
        listaTarefas.removeChild(li);
        contadorExcluirTarefa()
    });

    const bntConcluir = document.createElement('button');
    bntConcluir.type = 'button';
    bntConcluir.innerHTML = '<img src="https://img.icons8.com/?&id=11695&format=png&color=000000" alt="icone-concluido" class="icone-btn">';
    bntConcluir.addEventListener('click', function() {
        li.classList.toggle('concluida');
    });

    li.append(btnRemover, bntConcluir); //adiciona os botos no container pai
    listaTarefas.appendChild(li); //insere o item da tarefa na lista de tarefas 
    ul.classList.add('custom-ul');
}

function novaTarefa() {
    obterTextoTarefa();
}

function excluirTodos(){
    const resposta = confirm("Deseja realmente excluir todas as tarefas?")
    if (resposta) {
        listaTarefas.innerHTML = '';
        totalTarefas = 0;     
        contador.textContent = totalTarefas;
    }
    else{
        return;
    }
}

function contadorTarefa(){
    totalTarefas++;
    contador.textContent = totalTarefas;
}

function contadorExcluirTarefa(){
    totalTarefas--;
    contador.textContent = totalTarefas;
}

    

