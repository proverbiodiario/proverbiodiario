// Array de provérbios
var provérbios = [
    "Provérbio 1",
    "Provérbio 2",
    "Provérbio 3",
    // Adicione mais provérbios conforme necessário
];

// Seleciona um provérbio aleatório
function selecionarProverbioAleatorio() {
    var indice = Math.floor(Math.random() * provérbios.length);
    return provérbios[indice];
}

// Exporta a função para uso externo
export { selecionarProverbioAleatorio };
