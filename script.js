// Função para selecionar um provérbio aleatório
function selecionarProverbioAleatorio() {
    var indice = Math.floor(Math.random() * provérbios.length);
    return provérbios[indice];
}

// Função para atualizar o provérbio do dia
function atualizarProverbioDoDia() {
    var dataAtual = new Date();
    var horaAtual = dataAtual.getUTCHours(); // Obtém a hora em UTC
    var horaBrasilia = (horaAtual - 3 + 24) % 24; // Ajusta para o horário de Brasília (UTC-3)

    // Se for meia-noite em Brasília, atualize o provérbio
    if (horaBrasilia === 0) {
        var novoProverbio = selecionarProverbioAleatorio();
        var proverbioElement = document.getElementById("proverbio");
        proverbioElement.innerHTML = "<h2 class='proverbio-titulo'>Provérbio do Dia</h2><p>" + novoProverbio + "</p>";
    }
}

// Atualizar o provérbio do dia inicialmente
atualizarProverbioDoDia();

// Calcular o tempo restante até a próxima meia-noite em Brasília e atualizar o provérbio nesse momento
var dataAtual = new Date();
var horaAtual = dataAtual.getUTCHours(); // Obtém a hora em UTC
var minutosRestantes = (24 - horaAtual - 3) * 60; // Calcula os minutos restantes até a próxima meia-noite em Brasília
var milissegundosRestantes = minutosRestantes * 60000; // Converte minutos em milissegundos
setTimeout(function() {
    setInterval(atualizarProverbioDoDia, 86400000); // 86400000 milissegundos = 24 horas
}, milissegundosRestantes);
