// Verifica se há um provérbio armazenado localmente
var provérbioArmazenado = localStorage.getItem('proverbio');

// Se não houver um provérbio armazenado, escolha um aleatoriamente e armazene-o
if (!provérbioArmazenado) {
    var indiceAleatorio = Math.floor(Math.random() * provérbios.length);
    provérbioArmazenado = provérbios[indiceAleatorio];
    localStorage.setItem('proverbio', provérbioArmazenado);
}

// Exibe o provérbio armazenado na página
var provérbioElement = document.getElementById('proverbio');
provérbioElement.innerText = provérbioArmazenado;
