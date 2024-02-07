// Array de provérbios
var provérbios = [
    "Provérbio 1",
    "Provérbio 2",
    "Provérbio 3",
    // Adicione mais provérbios conforme necessário
];

// Seleciona um provérbio aleatório
var provérbioDoDia = provérbios[Math.floor(Math.random() * provérbios.length)];

// Função para atualizar o provérbio na página HTML
function atualizarProverbioNaPagina(proverbio) {
    var proverbioElement = document.getElementById("proverbio");
    proverbioElement.innerHTML = "<h2 class='proverbio-titulo'>Provérbio do Dia</h2>" +
                                  "<p class='proverbio-texto'>" + provérbio + "</p>" +
                                  "<p class='proverbio-fonte'>Fonte: Bíblia Sagrada</p>";
}

// Chamada inicial para exibir o provérbio do dia
atualizarProverbioNaPagina(provérbioDoDia);
