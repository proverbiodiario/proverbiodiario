// Importa o array de provérbios do arquivo proverbio.js
import { provérbios } from '/proverbio.js';

// Seleciona um provérbio aleatório
function selecionarProverbioAleatorio() {
        var indice = Math.floor(Math.random() * provérbios.length);
        return provérbios[indice];
}

// Função para atualizar o provérbio na página HTML
function atualizarProverbioNaPagina(proverbio) {
        var proverbioElement = document.getElementById("proverbio");
        proverbioElement.innerHTML = "<h2 class='proverbio-titulo'>Provérbio do Dia</h2>" +
                                              "<p class='proverbio-texto'>" + provérbio + "</p>" +
                                              "<p class='proverbio-fonte'>Fonte: Bíblia Sagrada</p>";
}

// Chamada inicial para exibir o provérbio do dia
var provérbioDoDia = selecionarProverbioAleatorio();
atualizarProverbioNaPagina(provérbioDoDia);

// Verifica se é meia-noite para atualizar o provérbio
setInterval(function() {
        var dataAtual = new Date();
        var horaAtual = dataAtual.getHours();

                // Se for meia-noite, atualize o provérbio
                if (horaAtual === 0) {
                            var novoProverbio = selecionarProverbioAleatorio();
                            atualizarProverbioNaPagina(novoProverbio);
                }
}, 3600000); // 3600000 milissegundos = 1 hora
