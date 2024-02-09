// Carregar os provérbios do arquivo proverbio.js
import { proverbios } from './proverbio.js';

// Função para escolher um provérbio aleatório
function escolherProverbioAleatorio() {
    var indiceAleatorio = Math.floor(Math.random() * proverbios.length);
    return proverbios[indiceAleatorio];
}

// Função para exibir o provérbio do dia
function exibirProverbioDoDia() {
    var provérbioDiaElement = document.getElementById('proverbioDia');
    var provérbioArmazenado = localStorage.getItem('proverbio');

    // Verificar se há um provérbio armazenado localmente
    if (!provérbioArmazenado) {
        // Escolher um novo provérbio aleatório
        var novoProverbio = escolherProverbioAleatorio();
        // Armazenar o novo provérbio localmente
        localStorage.setItem('proverbio', novoProverbio);
        provérbioDiaElement.innerText = novoProverbio;
    } else {
        // Exibir o provérbio armazenado localmente
        provérbioDiaElement.innerText = provérbioArmazenado;
    }
}

// Exibir o provérbio do dia ao carregar a página
window.onload = function() {
    exibirProverbioDoDia();
};
