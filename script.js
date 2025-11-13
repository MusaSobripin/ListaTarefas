const tarefas = [
{
    nome: "Revisar HTML e CSS da Aula 1",
    prioridade: "Alta",
    concluida: false
},
{
    nome: "Estudar Variáveis e Eventos no JS",
    prioridade: "Alta",
    concluida: true
}
];

const listaContainer = document.getElementById('listaDeTarefas');
const botaoContainer = document.getElementById('carregarBtn');

function gerarLista(){
    listaContainer.innerHTML = '';
    tarefas.forEach(function(tarefa){
        const statusClasse = tarefa.concluida ? 'tarefa-concluida' : 'tarefa-pendente';

        const novoElemento = `
            <li class="${statusClasse}">
                <strong>${tarefa.nome}</strong>
                <span class="prioridade-${tarefa.prioridade.toLowerCase()}">
                    [Prioridade: ${tarefa.prioridade}]
                </span>
            </li>
        `
    })
}