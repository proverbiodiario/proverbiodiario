// Array de provérbios
var provérbios = [
    "Provérbios de Salomão, filho de Davi, rei de Israel:",
    "Para se conhecer a sabedoria e a instrução; para se entenderem as palavras de entendimento;",
    "Para se receber a instrução do entendimento, a justiça, o juízo, e a equidade;",
    "Para dar aos simples, prudência, e aos moços, conhecimento e bom siso;",
    "O sábio ouvirá e crescerá em conhecimento, e o entendido adquirirá sábios conselhos;",
    "Para entender os provérbios e sua interpretação; as palavras dos sábios e suas proposições.",
    "O temor do Senhor é o princípio do conhecimento, mas os loucos desprezam a sabedoria e a instrução.",
    "Filho meu, ouve a instrução de teu pai, e não deixes o ensinamento de tua mãe;",
    "Porque serão como diadema gracioso em tua cabeça, e colares ao teu pescoço.",
    "Filho meu, se os pecadores procurarem te atrair, não consintas.",
    "Se disserem: Vem conosco; embosquemo-nos para derramar sangue, espreitemos sem motivo o inocente;",
    "Traguemo-los vivos, como a sepultura, e inteiros, como os que descem à cova;",
    "Acharemos toda a sorte de bens preciosos, encheremos as nossas casas de despojos;",
    "Lança a tua sorte conosco; teremos todos uma só bolsa!",
    "Filho meu, não te ponhas a caminho com eles; desvia o teu pé das suas veredas.",
    "Porque os pés deles correm para o mal, e se apressam a derramar sangue.",
    "Sem razão se estende a rede diante de todo o olho que há nas asas;",
    "Ora, estes se põem à espreita de sangue, armam ciladas contra a sua própria vida.",
    "Assim são as veredas de todo aquele que usa de cobiça; ela põe a perder a alma dos que a possuem."
];
// Seleciona o provérbio do dia
var provérbioDoDia = proverbios[Math.floor(Math.random() * proverbios.length)];

// Função para atualizar o provérbio apenas à meia-noite
function atualizarProverbioDoDia() {
    var dataAtual = new Date();
    var horaAtual = dataAtual.getHours();

    // Se for meia-noite, atualize o provérbio
    if (horaAtual === 0) {
        // Seleciona um novo provérbio para o próximo dia
        provérbioDoDia = proverbios[Math.floor(Math.random() * proverbios.length)];
        atualizarProverbioNaPagina(provérbioDoDia);
    }
}

// Função para atualizar o provérbio na página HTML
function atualizarProverbioNaPagina(proverbio) {
    var proverbioElement = document.getElementById("proverbio");
    proverbioElement.innerHTML = "<h2 class='proverbio-titulo'>Provérbio do Dia</h2>" +
                                  "<p class='proverbio-texto'>" + provérbio + "</p>" +
                                  "<p class='proverbio-fonte'>Fonte: Bíblia Sagrada</p>";
}

// Chamada inicial para exibir o provérbio do dia
atualizarProverbioNaPagina(provérbioDoDia);

// Verifica se é meia-noite para atualizar o provérbio
setInterval(atualizarProverbioDoDia, 3600000); // Verifica a cada hora (3600000 milissegundos)
