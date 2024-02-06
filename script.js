document.addEventListener('DOMContentLoaded', function() {
      // Função para selecionar um provérbio aleatório
                              function selecionarProverbioAleatorio() {
                                        // Lista de provérbios
          var provérbios = [
                        "Provérbio 1",
                        "Provérbio 2",
                        "Provérbio 3",
                        "Provérbio 4",
                        "Provérbio 5",
                        "Provérbio 6",
                        "Provérbio 7",
                        "Provérbio 8",
                        "Provérbio 9",
                        "Provérbio 10",
                        "Provérbio 11",
                        "Provérbio 12",
                        "Provérbio 13",
                        "Provérbio 14",
                        "Provérbio 15",
                        "Provérbio 16",
                        "Provérbio 17",
                        "Provérbio 18",
                        "Provérbio 19"
                    ];

          // Selecionar um provérbio aleatório
          var indice = Math.floor(Math.random() * provérbios.length);
                                        return provérbios[indice];
                              }

                              // Função para atualizar o provérbio do dia
                              function atualizarProverbio() {
                                        var proverbioElement = document.getElementById("proverbio");
                                        var proverbio = selecionarProverbioAleatorio();

          // Exibir o provérbio na página
          proverbioElement.textContent = proverbio;
                              }

                              // Chamar a função para atualizar o provérbio ao carregar a página
                              atualizarProverbio();
});
