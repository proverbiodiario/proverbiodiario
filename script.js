const { selecionarProverbioAleatorio } = require('./proverbios.js');

// Função para selecionar um provérbio aleatório
function selecionarProverbioAleatorio() {
    var indice = Math.floor(Math.random() * provérbios.length);
    return provérbios[indice];
}

// Função para atualizar o provérbio do dia
function atualizarProverbioDoDia() {
    var dataAtual = new Date();
    var horaAtual = dataAtual.getHours();

    // Se for meia-noite, atualize o provérbio
    if (horaAtual === 0) {
        var provérbioElement = document.getElementById("proverbio");
        var novoProverbio = selecionarProverbioAleatorio();

        provérbioElement.innerHTML = "<h2 class='proverbio-titulo'>Provérbio do Dia</h2>" +
                                     "<p class='proverbio-texto'>" + novoProverbio + "</p>" +
                                     "<p class='proverbio-fonte'>Fonte: Bíblia Sagrada</p>";
    }
}

// Chamada inicial para exibir o provérbio do dia
atualizarProverbioDoDia();

// Atualizar o provérbio a cada hora para verificar se é meia-noite
setInterval(atualizarProverbioDoDia, 3600000); // 3600000 milissegundos = 1 hora
