// Importe os provérbios do arquivo proverbios.js
import { proverbios } from './proverbio.js';

// Função para atualizar o provérbio
function atualizarProverbio() {
    var dataAtual = new Date();
    // Ajuste para o fuso horário de Brasília
    var offsetBrasilia = -3; // Brasília é GMT-3
    var diaDoAno = Math.floor((dataAtual.getTime() + offsetBrasilia * 60 * 60 * 1000) / (1000 * 60 * 60 * 24));
    var proverbioDoDia = proverbios[diaDoAno % proverbios.length];
    localStorage.setItem('proverbio', proverbioDoDia);

    var proverbioElement = document.getElementById('proverbio');
    proverbioElement.innerText = proverbioDoDia;
}

// Calcule o tempo restante até a meia-noite no fuso horário de Brasília
var agora = new Date();
var meiaNoite = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate() + 1, 0, 0, 0);
var offsetBrasilia = -3; // Brasília é GMT-3
var tempoRestante = meiaNoite - agora + offsetBrasilia * 60 * 60 * 1000;

// Inicie o setInterval no horário desejado
setTimeout(function() {
    atualizarProverbio();
    setInterval(atualizarProverbio, 24 * 60 * 60 * 1000);
}, tempoRestante);

// Limpe o cache toda vez que a página for carregada
window.onload = function() {
    if (window.performance) {
        if (performance.navigation.type == 1) {
            window.location.reload(true);
        }
    }
    // Atualize o provérbio ao carregar a página
    atualizarProverbio();
}
