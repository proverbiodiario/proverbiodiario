// Função para selecionar um provérbio aleatório e exibi-lo na página
function exibirProverbio() {
                var proverbioElement = document.getElementById("proverbio");
                var novoProverbio = selecionarProverbioAleatorio();
                proverbioElement.textContent = novoProverbio;
}

// Chamada inicial para exibir um provérbio quando a página é carregada
exibirProverbio();
