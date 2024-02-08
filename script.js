// Importe os provérbios do arquivo proverbios.js
import { proverbios } from './proverbios.js';

// Verifica se há um provérbio armazenado localmente
var provérbioArmazenado = localStorage.getItem('proverbio');

// Se não houver um provérbio armazenado, escolha um aleatoriamente e armazene-o
if (!provérbioArmazenado) {
    var indiceAleatorio = Math.floor(Math.random() * proverbios.length);
    provérbioArmazenado = proverbios[indiceAleatorio];
    localStorage.setItem('proverbio', provérbioArmazenado);
}

// Exibe o provérbio armazenado na página
var provérbioElement = document.getElementById('proverbio');
provérbioElement.innerText = provérbioArmazenado;

<script>
    window.onload = function() {
        var dataAtual = new Date();
        var diaDoAno = Math.floor(dataAtual.getTime() / (1000 * 60 * 60 * 24));
        var proverbioDoDia = proverbios[diaDoAno % proverbios.length];
        document.getElementById('proverbio').innerText = proverbioDoDia;
    }
</script>

