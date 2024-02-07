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
