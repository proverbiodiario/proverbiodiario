// Array de provérbios
var proverbios = [
      "Provérbio 1",
      "Provérbio 2",
      "Provérbio 3",
      // Adicione mais provérbios conforme necessário
  ];

// Seleciona um provérbio aleatório
function selecionarProverbioAleatorio() {
      var indice = Math.floor(Math.random() * proverbios.length);
      return proverbios[indice];
}

// Função para atualizar o provérbio na página
function atualizarProverbio() {
      var proverbioElement = document.getElementById("proverbio");
      var novoProverbio = selecionarProverbioAleatorio();
      proverbioElement.textContent = novoProverbio;
}

// Chamada inicial para exibir um provérbio quando a página é carregada
atualizarProverbio();
