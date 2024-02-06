// Função para selecionar um provérbio aleatório
function selecionarProverbioAleatorio() {
          var indice = Math.floor(Math.random() * provérbios.length);
          return provérbios[indice];
}

// Função para atualizar o provérbio do dia
function atualizarProverbioDoDia() {
          var dataAtual = new Date();
          var horaAtual = dataAtual.getUTCHours(); // Horário UTC
    var novoProverbio = selecionarProverbioAleatorio();

    // Se for meia-noite ou meio-dia, atualize o provérbio
    if (horaAtual === 0 || horaAtual === 12) {
                  var proverbioElement = document.getElementById("proverbio");
                  proverbioElement.innerHTML = "<p>" + novoProverbio + "</p>";
    }
}

// Atualizar o provérbio do dia inicialmente
atualizarProverbioDoDia();

// Atualizar o provérbio a cada hora para verificar se é meia-noite ou meio-dia
setInterval(atualizarProverbioDoDia, 3600000); // 3600000 milissegundos = 1 hora
