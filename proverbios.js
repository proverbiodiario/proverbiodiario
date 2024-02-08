// Array de provérbios
var proverbios = [
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
"Assim são as veredas de todo aquele que usa de cobiça; ela põe a perder a alma dos que a possuem.", 
"A sabedoria clama lá fora; pelas ruas levanta a sua voz.",
"Nas esquinas movimentadas ela brada; nas entradas das portas da cidade profere as suas palavras:",
"Até quando vocês, inexperientes, irão contentar-se com a sua inexperiência? E vocês, zombadores, até quando terão prazer na zombaria? E vocês, tolos, até quando desprezarão o conhecimento?",
"Vocês que são simples, procurem a sabedoria! Vocês que são tolos, tenham bom senso!",
"Escutem! Pois tenho coisas importantes para dizer; o que digo é verdadeiro.",
"Seus dias de ignorância e rebeldia lhes trarão desgraça; Eu rirei quando vierem os seus temores.",
"Quando vierem os seus medos como uma tempestade, quando a calamidade chegar como uma ventania, quando a angústia e a dor os sobrevierem, então me chamarão, mas eu não responderei.",
"Pois eles odiaram o conhecimento e preferiram não temer o Senhor.",
"Não aceitaram o meu conselho e desprezaram a minha repreensão.",
"Portanto, comerão do fruto da sua conduta e se fartarão de suas próprias tramas.",
"Pois a apostasia dos inexperientes os matará, e a tranquilidade dos tolos os destruirá.",
"Mas o que me der ouvidos habitará em segurança, estará em paz, sem temer nenhum mal."
"Meu filho, se aceitares as minhas palavras, e esconderes contigo os meus mandamentos,",
"Para fazeres o teu ouvido atento à sabedoria; e inclinares o teu coração ao entendimento;",
"Se clamares por conhecimento, e por inteligência alçares a tua voz,",
"Se como a prata a buscares e como a tesouros escondidos a procurares,",
"Então entenderás o temor do Senhor, e acharás o conhecimento de Deus.",
"Porque o Senhor dá a sabedoria; da sua boca é que vem o conhecimento e o entendimento.",
"Ele reserva a verdadeira sabedoria para os retos; escudo é para os que caminham na sinceridade,",
"Para que guardem as veredas do juízo, e conservem o caminho dos santos.",
"Então entenderás a justiça, e o juízo, e a equidade, sim, todas as boas veredas.",
"Porquanto a sabedoria entrará no teu coração, e o conhecimento será agradável à tua alma.",
"O bom siso te guardará e a inteligência te conservará;",
"Para te livrar do mau caminho, e do homem que diz coisas perversas;",
"Dos que deixam as veredas da retidão, para andarem pelos caminhos escusos;",
"Que se alegram de fazer mal, e folgam com as perversidades dos maus;",
"Cujas veredas são tortuosas, e são eles astutos nas suas veredas.",
"Para te livrar da mulher estranha, da estranha que lisonjeia com suas palavras;",
"Que abandona o guia da sua mocidade, e se esquece do concerto do seu Deus.",
"Porque a sua casa se inclina para a morte, e as suas veredas, para os mortos.",
"Todos os que se dirigem a ela não voltarão e não atinarão com as veredas da vida.",
"Para que andes pelo caminho dos bons e guardes as veredas dos justos.",
"Porque os retos habitarão a terra, e os íntegros permanecerão nela.",
"Mas os ímpios serão arrancados da terra, e os aleivosos serão dela exterminados."
"Meu filho, se aceitares as minhas palavras, e esconderes contigo os meus mandamentos,",
"Para fazeres o teu ouvido atento à sabedoria; e inclinares o teu coração ao entendimento;",
"Se clamares por conhecimento, e por inteligência alçares a tua voz,",
"Se como a prata a buscares e como a tesouros escondidos a procurares,",
"Então entenderás o temor do Senhor, e acharás o conhecimento de Deus.",
"Porque o Senhor dá a sabedoria; da sua boca é que vem o conhecimento e o entendimento.",
"Ele reserva a verdadeira sabedoria para os retos; escudo é para os que caminham na sinceridade,",
"Para que guardem as veredas do juízo, e conservem o caminho dos santos.",
"Então entenderás a justiça, e o juízo, e a equidade, sim, todas as boas veredas.",
"Porquanto a sabedoria entrará no teu coração, e o conhecimento será agradável à tua alma.",
"O bom siso te guardará e a inteligência te conservará;",
"Para te livrar do mau caminho, e do homem que diz coisas perversas;",
"Dos que deixam as veredas da retidão, para andarem pelos caminhos escusos;",
"Que se alegram de fazer mal, e folgam com as perversidades dos maus;",
"Cujas veredas são tortuosas, e são eles astutos nas suas veredas.",
"Para te livrar da mulher estranha, da estranha que lisonjeia com suas palavras;",
"Que abandona o guia da sua mocidade, e se esquece do concerto do seu Deus.",
"Porque a sua casa se inclina para a morte, e as suas veredas, para os mortos.",
"Todos os que se dirigem a ela não voltarão e não atinarão com as veredas da vida.",
"Para que andes pelo caminho dos bons e guardes as veredas dos justos.",
"Porque os retos habitarão a terra, e os íntegros permanecerão nela.",
"Mas os ímpios serão arrancados da terra, e os aleivosos serão dela exterminados."
"Filho meu, não te esqueças da minha lei, e o teu coração guarde os meus mandamentos;",
"Porque eles aumentarão os teus dias e te acrescentarão anos de vida e paz.",
"Não te desamparem a benignidade e a fidelidade; ata-as ao teu pescoço; escreve-as na tábua do teu coração;",
"E acharás graça e bom entendimento aos olhos de Deus e dos homens.",
"Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento.",
"Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.",
"Não sejas sábio a teus próprios olhos; teme ao Senhor e aparta-te do mal;",
"Isto será saúde para o teu âmago, e medula para os teus ossos.",
"Honra ao Senhor com a tua fazenda, e com as primícias de toda a tua renda;",
"E se encherão os teus celeiros abundantemente, e trasbordarão de mosto os teus lagares.",
"Filho meu, não rejeites a correção do Senhor, nem te enojes da sua repreensão.",
"Porque o Senhor repreende aquele a quem ama, assim como o pai ao filho a quem quer bem.",
"Bem-aventurado o homem que acha sabedoria, e o homem que adquire conhecimento;",
"Porque melhor é a sua mercadoria do que a mercadoria de prata, e a sua renda do que o ouro mais fino.",
"Mais preciosa é do que os rubis, e tudo o que mais possas desejar não se pode comparar a ela.",
"Na sua mão direita há riquezas e honra; e na sua esquerda, riquezas e honra.",
"Os seus caminhos são caminhos de delícias, e todas as suas veredas são paz.",
"Ela é árvore de vida para os que dela tomam, e são bem-aventurados todos os que a retêm.",
"O Senhor, com sabedoria fundou a terra; com entendimento preparou os céus.",
"Pelo seu conhecimento se fenderam os abismos, e as nuvens destilam o orvalho.",
"Filho meu, não se apartem estas coisas dos teus olhos; guarda a lei e o conselho,",
"E serão vida para a tua alma, e graça para o teu pescoço.",
"Então andarás seguro pelo teu caminho, e o teu pé não tropeçará.",
"Se te deitares, não temerás; deitar-te-ás, e o teu sono será suave.",
"Não temas o pavor repentino, nem a arremetida dos perversos quando vier.",
"Porque o Senhor será a tua confiança, e guardará os teus pés de serem presos."
"Filho meu, não retires dela os teus olhos; guarda a lei e o conselho;",
"E serão vida para a tua alma, e graça para o teu pescoço.",
"Então andarás seguro pelo teu caminho, e o teu pé não tropeçará.",
"Se te deitares, não temerás; deitar-te-ás, e o teu sono será suave.",
"Não temas o pavor repentino, nem a arremetida dos perversos quando vier.",
"Porque o Senhor será a tua confiança, e guardará os teus pés de serem presos.",
"Não detenhas o bem a quem o merece, estando na tua mão o poder de fazê-lo.",
"Não digas ao teu próximo: Vai, e volta amanhã; então to darei; tendo-o tu contigo.",
"Não maquines o mal contra o teu próximo, pois habita contigo confiadamente.",
"Não contendas com alguém sem motivo, se não te fez nenhum mal.",
"Não tenhas inveja do homem violento, nem escolhas nenhum dos seus caminhos.",
"Porque o perverso é abominável para o Senhor, mas com os sinceros ele tem intimidade.",
"A maldição do Senhor habita na casa do perverso, mas aos justos ele abençoa.",
"Certamente ele escarnecerá dos escarnecedores, mas dará graça aos mansos.",
"Os sábios herdarão honra, mas os loucos tomam sobre si confusão."
// Adicione mais provérbios conforme necessário
          ];

// Seleciona um provérbio aleatório
function selecionarProverbioAleatorio() {
              var indice = Math.floor(Math.random() * proverbios.length);
              return proverbios[indice];
}
