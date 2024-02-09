// Importe os provérbios do arquivo proverbios.js
import { proverbios } from './proverbios.js';

// Função para atualizar o provérbio
function atualizarProverbio() {
    var dataAtual = new Date();
    var diaDoAno = Math.floor(dataAtual.getTime() / (1000 * 60 * 60 * 24));
    var proverbioDoDia = proverbios[diaDoAno % proverbios.length];
    localStorage.setItem('proverbio', proverbioDoDia);

    var proverbioElement = document.getElementById('proverbio');
    proverbioElement.innerText = proverbioDoDia;
}

// Calcule o tempo restante até as 6 da manhã
var agora = new Date();
var seisDaManha = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate(), 6, 0, 0, 0);
if (agora > seisDaManha) {
    seisDaManha.setDate(seisDaManha.getDate() + 1);
}
var tempoRestante = seisDaManha - agora;

// Inicie o setInterval no horário desejado
setTimeout(function() {
    atualizarProverbio();
    setInterval(atualizarProverbio, 24 * 60 * 60 * 1000);
}, tempoRestante);
