const inputTarefa = document.getElementById('nova-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const btnAdicionar = document.getElementById('adicionar');
const btnExcluirtodos = document.getElementById('excluir-todos');
const contador = document.getElementById('valorContador');
let totalTarefas = 0;

btnAdicionar.addEventListener('click', function() {
    contadorTarefa();
    obterTextoTarefa();
});
btnExcluirtodos.addEventListener('click', excluirTodos);

inputTarefa.addEventListener('keydown', function(event){
    if (event.key === 'Enter')
    {
        obterTextoTarefa();
        contadorTarefa();
        event.preventDefault();
    }
});

window.addEventListener('DOMContentLoaded', function() { //espera o HTML carregar totalmente para dispara o evento
    let tarefas= JSON.parse(localStorage.getItem("tarefas") || "[]"); //getItem = busca
    tarefas.forEach(function(tarefa) {
        criarTarefa(tarefa);
        totalTarefas++;
    });

    contador.textContent = totalTarefas;
})

function obterTextoTarefa() {
    const txtDigitado = inputTarefa.value.trim();
    
    if (txtDigitado) {
        criarTarefa(txtDigitado);

        //GUARDA LOCALSTORAGE
        let tarefas= JSON.parse(localStorage.getItem("tarefas") || "[]"); //pega a string JSON que esta salva em tarefas  e converte para array, se não existir ele cria
        tarefas.push(txtDigitado); //insere o valor digitado no final da array
        localStorage.setItem("tarefas", JSON.stringify(tarefas)); //transforma o array atualizado em string JSON e salva no localstorage

        inputTarefa.value = ''; // limpa o campo
    } else {
        alert('Digite uma tarefa antes de adicionar!');
        contadorExcluirTarefa()
    }
}

function criarTarefa(txtDigitado){
    const li = document.createElement('li');
    li.textContent = txtDigitado;
    li.classList.add("li");

    const liBtnRemover = document.createElement('button');
    liBtnRemover.classList.add("button");
    liBtnRemover.innerHTML = '<img src="https://img.icons8.com/?&id=17145&format=png&color=000000" alt="icone-remover" class="icone-btn">';
    
    liBtnRemover.addEventListener('click', function() {
        listaTarefas.removeChild(li);
        contadorExcluirTarefa()

        let tarefas = JSON.parse(localStorage.getItem("tarefas") || "[]");
        tarefas = tarefas.filter(t => t !== txtDigitado); //percorre cada item do array, e mantem no array somente as tarefas diferentes do txtDigitado
        localStorage.setItem("tarefas", JSON.stringify(tarefas)); //converte o array atualizado para uma string
    });

    const liBntConcluir = document.createElement('button');
    liBntConcluir.classList.add("button");
    liBntConcluir.innerHTML = '<img src="https://img.icons8.com/?&id=11695&format=png&color=000000" alt="icone-concluido" class="icone-btn">';
    liBntConcluir.addEventListener('click', function() {
        const concluidaAgora = li.classList.toggle('concluida'); // guarda o valor dentro de uma constante, caso o usuario clique em concluir, o valor é true
        
        if(concluidaAgora){ //Valida se o valor é true
            contadorExcluirTarefa();
        } else {
            contadorTarefa();
        }
    });

    li.append(liBtnRemover, liBntConcluir); 
    listaTarefas.appendChild(li);  
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

    if (totalTarefas > 0)
    {
        totalTarefas--;
        contador.textContent = totalTarefas;
    }
}

    

