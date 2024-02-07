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
        var proverbioElement = document.getElementById("proverbio");
        var novoProverbio = selecionarProverbioAleatorio();

        proverbioElement.innerHTML = "<h2 class='proverbio-titulo'>Provérbio do Dia</h2><p class='proverbio-texto'>" + novoProverbio + "</p>";
    }
}

// Atualizar o provérbio do dia inicialmente
atualizarProverbioDoDia();

// Atualizar o provérbio a cada hora para verificar se é meia-noite
setInterval(atualizarProverbioDoDia, 3600000); // 3600000 milissegundos = 1 hora
