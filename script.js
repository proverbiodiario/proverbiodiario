// Função para selecionar um provérbio aleatório
function selecionarProverbioAleatorio() {
            var indice = Math.floor(Math.random() * provérbios.length);
            return provérbios[indice];
}

// Função para atualizar o provérbio na página HTML
function atualizarProverbioNaPagina() {
            var proverbioElement = document.querySelector(".proverbio-texto");
            var novoProverbio = selecionarProverbioAleatorio();

    proverbioElement.textContent = novoProverbio;
}

// Chamada inicial para exibir o provérbio do dia
atualizarProverbioNaPagina();
