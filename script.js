const tarefas = [
    { 
        nome: "Revisar HTML e CSS da Aula 1", 
        prioridade: "Alta", 
        concluida: false 
    },
    { 
        nome: "Estudar Variáveis e Eventos do JS", 
        prioridade: "Alta", 
        concluida: true
    },
    { 
        nome: "Refatorar o loop 'for' para 'forEach'", 
        prioridade: "Média", 
        concluida: false 
    },
    { 
        nome: "Planejar o almoço de hoje", 
        prioridade: "Baixa", 
        concluida: false 
    }
];

document.addEventListener('DOMContentLoaded', function() {

    const listaContainer = document.getElementById('listaDeTarefas');
    const botaoCarregar = document.getElementById('carregarBtn');

    if (!listaContainer || !botaoCarregar) {
        console.error("Erro: Um erro...");
        return; 
    }

    function gerarLista() {

        listaContainer.innerHTML = ''; 

        tarefas.forEach(function(tarefa) { 
            const statusClasse = tarefa.concluida ? 'tarefa-concluida' : 'tarefa-pendente';
            
            const novoElemento = `
                <li class="${statusClasse}">
                    <strong>${tarefa.nome}</strong> 
                    <span class="prioridade-${tarefa.prioridade.toLowerCase()}">
                        [Prioridade: ${tarefa.prioridade}]
                    </span>
                </li>
            `; 

            listaContainer.innerHTML += novoElemento;

            console.log(`Tarefa '${tarefa.nome}' gerada via forEach!`);
        });
    }

    function carregarDadosSimulado() {
        
        botaoCarregar.innerHTML = "Carregando dados...";
        botaoCarregar.disabled = true; 

        setTimeout(function() {
            
            gerarLista(); 
            botaoCarregar.innerHTML = "Lista Carregada!";

        }, 2000); // Atraso de 2 segundos
    }
botaoCarregar.addEventListener('click', carregarDadosSimulado); 

}); 