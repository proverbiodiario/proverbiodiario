import { selecionarProverbioAleatorio } from './proverbio.js';

// Função para atualizar o provérbio do dia
function atualizarProverbioDoDia() {
    var dataAtual = new Date();
    var horaAtual = dataAtual.getHours();

    // Se for meia-noite, atualize o provérbio
    if (horaAtual === 0) {
        var provérbioElement = document.getElementById("proverbio-texto");
        var novoProverbio = selecionarProverbioAleatorio();

        provérbioElement.textContent = novoProverbio;
    }
}

// Chamada inicial para exibir o provérbio do dia
atualizarProverbioDoDia();

// Atualizar o provérbio a cada hora para verificar se é meia-noite
setInterval(atualizarProverbioDoDia, 3600000); // 3600000 milissegundos = 1 hora
