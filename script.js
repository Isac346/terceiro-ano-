/* =====================================================================
   1) SEUS DADOS – edite apenas esta parte
   CUIDADO: nunca apague as aspas " " ou as crases ` ` que cercam cada texto.
   Dentro de um texto, não use aspas duplas " nem crase ` (troque por ' ou “ ”).
   Textos entre crases ` ` podem ter várias linhas; textos entre aspas " " não.
   ===================================================================== */

const CONFIG = {
  nome: "Isac Rocha Valezi",
  formatura: "2026-12-12T20:00:00",   // TROQUE pela data e hora da sua formatura (AAAA-MM-DDTHH:MM:SS)
  frases: ["um formando de 17 anos", "quem enfiou letrinha de EVA no nariz", "quem jogava Uno com a psicóloga"]
};

/* Memórias: cada item é uma estação da trilha. Fotos ficam em assets/img/memorias/
   Preencha os [COLCHETES]: período, escola e legendas das fotos. */
const MEMORIAS = [
  { icone: "🍼", rotulo: "Creche", etapa: "Creche", periodo: "[ANO] a [ANO]", escola: "[NOME DA CRECHE]",
    texto: `Da creche eu não me lembro de nenhuma história. Tudo o que eu sei vem da minha mãe, e a versão dela é bem direta: eu apanhava muito por lá. Então a minha vida escolar começou com bastante emoção, só que eu não estava prestando atenção.`,
    causos: ["Não lembro de nada, só do que a minha mãe conta.", "Segundo a minha mãe, eu apanhava muito na creche."],
    desafio: "Sobreviver aos primeiros anos de escola.",
    fotos: [{ src: "assets/img/memorias/creche-1.jpg", legenda: "[Legenda da foto]" }] },
  { icone: "🔤", rotulo: "Pré-escola", etapa: "Pré-escola", periodo: "[ANO] a [ANO]", escola: "[NOME DA ESCOLA]",
    texto: `Foi na pré-escola que eu comecei a aprender a ler. A professora usava letras de EVA para nos ensinar, e eu achei que elas tinham outra utilidade. Um dia, quando ela saiu da sala, eu enfiei as letrinhas no nariz. Quando a professora voltou e viu a cena, ficou desesperada.`,
    causos: ["Aprendi a ler com letras de EVA (e usei do jeito errado).", "A professora ficou desesperada com as letrinhas no meu nariz."],
    desafio: "Aprender a ler.",
    fotos: [{ src: "assets/img/memorias/pre-escola-1.jpg", legenda: "[Legenda da foto]" }] },
  { icone: "🎒", rotulo: "1º ao 3º ano", etapa: "1º ao 3º ano", periodo: "[ANO] a [ANO]", escola: "[NOME DA ESCOLA]",
    texto: `Nessa fase eu troquei de escola e fui estudar numa escola onde a minha mãe trabalhava. Ou seja: eu tinha uma fiscal oficial dentro do prédio. O que eu mais lembro é de um professor que, quando eu não fazia as atividades, ameaçava contar para a minha mãe.`,
    causos: ["Estudei na escola onde a minha mãe trabalhava.", "Tinha um professor que ameaçava contar para a minha mãe quando eu não fazia as atividades."],
    desafio: "Mudar de escola e me adaptar a um lugar novo.",
    fotos: [{ src: "assets/img/memorias/fund1-1.jpg", legenda: "[Legenda da foto]" }] },
  { icone: "🎲", rotulo: "4º e 5º ano", etapa: "4º e 5º ano", periodo: "[ANO] a [ANO]", escola: "[NOME DA ESCOLA]",
    texto: `Nessa fase a escola me mandou para a psicóloga, porque eu não fazia as atividades. E o que eu mais lembro é que eu gostava de ir! Eu e ela passávamos o tempo jogando vários jogos, como Uno, truco, dominó e outros. No final, ela disse que eu não tinha nada.`,
    causos: ["Fui mandado para a psicóloga por não fazer as atividades.", "Nas sessões a gente jogava Uno, truco, dominó e outros jogos.", "Resultado final: a psicóloga disse que eu não tinha nada."],
    desafio: "Ir à psicóloga da escola e descobrir que estava tudo bem.",
    fotos: [{ src: "assets/img/memorias/fund1-2.jpg", legenda: "[Legenda da foto]" }] },
  { icone: "💻", rotulo: "6º ao 9º ano", etapa: "6º ao 9º ano", periodo: "[ANO] a [ANO]", escola: "[NOME DA ESCOLA]",
    texto: `Do 6º ao 9º ano eu praticamente nem tive aula normal: foram as aulas online, e na maioria delas eu dormia ou jogava. Depois, finalmente, chegou a volta às aulas presenciais, mas só em rodízios.`,
    causos: ["Nas aulas online, eu dormia ou jogava.", "A volta presencial finalmente chegou, mas só em rodízios."],
    desafio: "Estudar de casa e depois me readaptar às aulas presenciais.",
    fotos: [{ src: "assets/img/memorias/fund2-1.jpg", legenda: "[Legenda da foto]" }] },
  { icone: "🎓", rotulo: "Ensino Médio", etapa: "Ensino Médio", periodo: "[ANO] a 2026", escola: "[NOME DA ESCOLA]",
    texto: `No Ensino Médio tem muita história, coisa demais para caber em um parágrafo. Foi aqui que eu conheci os meus amigos e aconteceu muita coisa. [Escreva aqui os causos que você mais quer lembrar.]`,
    causos: ["Foi no Ensino Médio que eu conheci os meus amigos.", "[Escreva um causo marcante]"],
    desafio: "[Escreva um desafio que você superou no Ensino Médio]",
    fotos: [{ src: "assets/img/memorias/em-1.jpg", legenda: "[Legenda da foto]" }] }
];

/* 17 redações: [título, tema, série (opcional), texto]. Parágrafos separados por uma linha em branco.
   Para mostrar a série (ex.: "2º ano"), escreva-a no terceiro campo, entre aspas. */
const REDACOES = [
  ["Quando a seca encontra a enchente: impactos sociais e econômicos das mudanças no ciclo hidrológico", "Meio ambiente", "", `A natureza sempre esteve em constante mudança e a responsabilidade de acompanhar isso sempre será nossa, mas estamos sofrendo exatamente por bater de frente com o meio ambiente. O desequilíbrio no ciclo hidrológico faz com que regiões inteiras enfrentem secas severas enquanto outras sofrem com enchentes históricas, gerando grandes prejuízos sociais e econômicos.

Isso ocorre principalmente pela ganância humana e pelo desmatamento desenfreado, já que preservar a floresta exige manejo e cuidado, o que não traz lucro rápido. Como as matas são responsáveis pelos chamados rios voadores que mantêm o regime de chuvas, derrubar as árvores interfere diretamente na temperatura e na distribuição da água, causando tanto a falta de chuva para a agricultura quanto tempestades violentas nas cidades.

Com isso, a sociedade acaba sendo afetada em vários pontos, desde o aumento no preço dos alimentos pela quebra de safras até a destruição de casas e perda de vidas nas áreas urbanas alagadas, como visto nas tragédias recentes no Sul do país e nas secas da Amazônia. Para resolver esse problema, o governo federal precisa aumentar a fiscalização ambiental e punir o desmatamento ilegal, enquanto a sociedade deve cobrar políticas de preservação para não prejudicar ainda mais o ciclo da água.`],
  ["A estética como imperativo: riscos e implicações do uso indiscriminado de canetas emagrecedoras", "Saúde e estética", "", `As canetas emagrecedoras são remédios criados para o tratamento de pessoas com diabetes tipo 2, porém vêm sendo fortemente usadas apenas para fins estéticos de emagrecimento rápido. Embora a Anvisa permita o uso desses medicamentos para tratar a obesidade com acompanhamento médico, a venda e o consumo sem receita viraram um problema de saúde pública.

Esses remédios acabaram marcando a volta da magreza extrema como o padrão de beleza ideal, algo reforçado constantemente nas passarelas, na mídia e principalmente nas redes sociais, onde influenciadores vendem a ideia de um corpo perfeito a qualquer custo. De acordo com a psicóloga Sylvia Flores, o culto à estética perfeita gera uma pressão social enorme para alcançar esse padrão, levando muitas pessoas a buscarem atalhos perigosos sem pensar nas consequências.

Por falta de conhecimento sobre os riscos à saúde, muita gente se automedica sem acompanhamento especializado, sofrendo com efeitos colaterais graves como náuseas, vômitos, problemas no pâncreas e efeito sanfona. Como não dá para mudar totalmente a forma como a sociedade enxerga a beleza, o Ministério da Saúde precisa lançar campanhas de conscientização sobre os perigos da automedicação e aumentar a fiscalização nas farmácias para exigir a retenção de receita.`],
  ["O uso da Inteligência Artificial e as deepfakes: o que é real e o que é fictício na vida online?", "Tecnologia", "", `O avanço da Inteligência Artificial trouxe muitas facilidades, mas as deepfakes talvez sejam um dos maiores perigos dessa popularização, pois permitem criar vídeos e áudios falsos extremamente realistas. A problematização dessa tecnologia ocorre principalmente pelo uso na divulgação de desinformação e na violação da imagem das pessoas na internet.

A principal forma de utilizar essa ferramenta para enganar a população é no âmbito político, com a criação de conteúdos falsos para prejudicar candidatos e manipular eleições, como ocorreu no caso do candidato a presidente da Eslováquia, em que vazaram um áudio falso dele às vésperas da votação, afetando a escolha dos eleitores. Além disso, muitas pessoas usam deepfakes para alterar fotos e criar montagens ofensivas contra mulheres e cidadãos comuns, destruindo reputações em segundos.

O grande problema por trás disso é a fraca fiscalização e a demora das leis em acompanhar a tecnologia. Para resolver essa situação, o poder público precisa criar leis mais rígidas com punições severas para quem produz e espalha conteúdos falsos, enquanto o Ministério da Educação deve ensinar os jovens nas escolas a checar informações e identificar o que é real ou manipulado na internet.`],
  ["Da diversão ao endividamento: efeitos socioeconômicos das bets na vida de jovens brasileiros", "Economia e juventude", "", `As casas de apostas online, conhecidas como bets, cresceram muito no Brasil e se tornaram uma febre entre os jovens por conta das propagandas constantes nos esportes e nas redes sociais. O que começa como uma simples diversão e promessa de dinheiro fácil acaba se transformando em um sério problema financeiro e psicológico.

Muitos jovens, influenciados por celebridades e influenciadores digitais que ostentam ganhos irreais, acreditam que podem enriquecer rápido apostando no celular. No entanto, os algoritmos dessas plataformas são feitos para manter o usuário apostando até perder tudo, o que gera vício em jogos e compromete a renda de estudantes e trabalhadores que muitas vezes usam o dinheiro de contas básicas ou até auxílios sociais para jogar.

Esse cenário gera um endividamento em massa da juventude, além de causar ansiedade, depressão e conflitos familiares quando as dívidas saem do controle. Para resolver esse problema, o governo federal precisa regulamentar de forma rígida a publicidade das apostas, proibindo propagandas enganosas, e o Ministério da Educação deve incluir a educação financeira nas escolas para alertar os jovens sobre os riscos das apostas.`],
  ["Inclusão digital no Brasil: caminhos e desafios na sociedade contemporânea", "Inclusão digital", "", `Vivemos em um mundo cada vez mais conectado, onde a internet se tornou essencial para estudar, trabalhar e ter acesso a serviços básicos. Porém, no Brasil, a inclusão digital ainda é muito desigual, deixando milhões de pessoas à margem da sociedade contemporânea por falta de acesso à rede e aos equipamentos necessários.

Esse problema fica evidente quando observamos a diferença entre as regiões do país e entre as classes sociais, já que moradores de periferias e zonas rurais muitas vezes não têm internet de qualidade ou dependem apenas de um celular simples com dados móveis limitados. Durante a pandemia, essa desigualdade ficou ainda mais clara, pois milhares de alunos da rede pública não conseguiram acompanhar as aulas online, aumentando o atraso escolar.

Além da falta de internet, existe o analfabetismo digital, onde muitas pessoas, principalmente os mais velhos, não sabem usar as ferramentas tecnológicas e acabam virando alvos fáceis de golpes virtuais. Para mudar essa realidade, o governo precisa investir na expansão de internet gratuita em áreas carentes e nas escolas públicas, além de oferecer cursos gratuitos de capacitação tecnológica para a população.`],
  ["Cultura fitness: bem-estar ou busca por estética inatingível", "Saúde e redes sociais", "", `A prática de exercícios físicos e a busca por uma alimentação saudável ganharam muito espaço nos últimos anos, o que traz benefícios reais para a saúde. Entretanto, a chamada cultura fitness acabou se distorcendo nas redes sociais, deixando de focar no bem-estar para se tornar uma obsessão por uma estética inatingível.

Nas plataformas digitais, perfis fitness exibem corpos extremamente definidos e rotinas irreais, muitas vezes conquistados com o uso de anabolizantes, cirurgias plásticas e edições de imagem, mas vendidos como resultado apenas de força de vontade. Isso faz com que muitos jovens se sintam insatisfeitos com o próprio corpo, desenvolvendo transtornos alimentares, vigorexia e problemas psicológicos pela comparação constante.

Essa busca desesperada pelo corpo perfeito leva muitas pessoas a seguirem dietas malucas e treinos excessivos sem orientação de profissionais, colocando a saúde em risco em nome da aparência. Para resolver esse problema, é necessário que os conselhos de saúde e as redes sociais combatam a divulgação de métodos perigosos sem respaldo médico, enquanto as escolas devem promover debates sobre saúde mental e aceitação corporal.`],
  ["Caminhos para combater a intolerância religiosa no Brasil", "Direitos humanos", "", `O Brasil é um país formado por diversas culturas e crenças, e a Constituição garante a liberdade religiosa para todos os cidadãos. Mesmo assim, a intolerância religiosa continua sendo uma realidade grave, atingindo principalmente as religiões de matriz africana, como o Candomblé e a Umbanda.

Esse preconceito tem raízes históricas desde o período da escravidão, quando a cultura e as crenças dos povos africanos eram demonizadas e reprimidas, algo que infelizmente permanece até hoje na mentalidade de parte da sociedade. Isso se reflete no aumento de casos de ataques a terreiros, agressões verbais e físicas contra praticantes e discursos de ódio espalhados na internet por pessoas que não respeitam o que é diferente da sua própria fé.

A falta de punição efetiva faz com que os agressores sintam que podem cometer esses crimes sem consequências, gerando medo e silenciamento nas vítimas. Para combater a intolerância religiosa, o Ministério Público e a polícia precisam investigar e punir com rigor os crimes de ódio religioso, e o Ministério da Educação deve garantir o ensino da história e cultura afro-brasileira nas escolas para construir o respeito desde cedo.`],
  ["Povos originários e direitos constitucionais: desafios para a efetivação da cidadania indígena no Brasil", "Povos originários", "", `A Constituição de 1988 garantiu aos povos indígenas o direito às suas terras tradicionais, à preservação de suas culturas e à cidadania plena. No entanto, na prática, esses direitos são constantemente desrespeitados no Brasil, fazendo com que os povos originários enfrentem grandes desafios para sobreviver com dignidade.

O principal obstáculo é a demora na demarcação das terras indígenas e a invasão desses territórios por garimpeiros, madeireiros e grileiros em busca de lucro fácil. Como vimos na crise humanitária do povo Yanomami, a invasão do garimpo ilegal contamina os rios com mercúrio, destrói a floresta e traz doenças e desnutrição, tirando dos indígenas o direito básico à vida e à saúde.

Além disso, a falta de políticas públicas eficientes na saúde e na educação indígena faz com que esses povos continuem marginalizados e sem voz nas decisões políticas do país. Para efetivar a cidadania indígena, o governo federal precisa acelerar a demarcação de terras, expulsar os invasores com apoio das forças de segurança e fortalecer os órgãos de proteção e saúde voltados para as comunidades originárias.`],
  ["Consumo, mídia e cultura: como referências mediadas por algoritmos influenciam os modos de vida na sociedade contemporânea", "Consumo e mídia", "", `Na sociedade contemporânea, o que vestimos, ouvimos e compramos é fortemente influenciado pelas redes sociais e pelos algoritmos que controlam o que aparece nas nossas telas. Esses sistemas estudam nosso comportamento para mostrar exatamente o que prende nossa atenção, moldando nossos gostos e incentivando o consumo exagerado.

O problema é que os algoritmos criam bolhas digitais e transformam produtos e estilos de vida em necessidades urgentes, fazendo com que as pessoas comprem coisas que não precisam apenas para pertencer a um grupo ou seguir uma tendência passageira. Como dizia o filósofo Zygmunt Bauman sobre a sociedade líquida, as relações e os desejos se tornaram descartáveis, e o valor de uma pessoa passa a ser medido pelo que ela consome e exibe na internet.

Com isso, perdemos nossa identidade própria e passamos a viver em função de padrões impostos pela mídia, o que gera endividamento, ansiedade e aumento do lixo no planeta. Para resolver esse problema, precisamos desenvolver o pensamento crítico desde a escola para que os jovens saibam identificar as estratégias de manipulação da mídia e façam escolhas mais conscientes.`],
  ["Os desafios para a preservação dos monumentos históricos no Brasil contemporâneo", "Cultura e patrimônio", "", `Os monumentos históricos são parte fundamental da memória e da identidade de um povo, pois contam a nossa história através da arquitetura e da arte. Porém, no Brasil contemporâneo, preservar esse patrimônio é um grande desafio devido ao descaso do poder público e à falta de conscientização da própria população.

Muitos prédios históricos, museus e estátuas sofrem com a falta de manutenção, o que já causou tragédias irreparáveis, como o incêndio do Museu Nacional no Rio de Janeiro, onde se perdeu grande parte da história científica e cultural do país. Isso acontece porque os governos costumam cortar verbas da cultura e da preservação por acharem que esses espaços não dão retorno financeiro imediato.

Além da negligência estatal, o vandalismo e a falta de pertencimento fazem com que muitos cidadãos não valorizem os monumentos de suas cidades, deixando-os abandonados ou pichados. Para mudar esse cenário, o Ministério da Cultura e as prefeituras devem destinar verbas fixas para a manutenção do patrimônio histórico, enquanto as escolas precisam promover visitas e projetos educativos para que a população aprenda a valorizar sua própria história.`],
  ["Exploração espacial no século XXI: desafios para a conciliação entre avanço científico e responsabilidade social", "Ciência e sociedade", "", `No século XXI, a corrida espacial ganhou um novo ritmo com o avanço da tecnologia e a entrada de empresas bilionárias investindo em foguetes e turismo fora da Terra. Embora a exploração espacial traga descobertas científicas importantes, surge o desafio de equilibrar esses gastos bilionários com a responsabilidade social aqui no nosso planeta.

O desenvolvimento espacial já trouxe benefícios usados no nosso dia a dia, como satélites de comunicação, previsão do tempo e avanços na medicina. Porém, quando vemos bilionários gastando fortunas para fazer viagens espaciais de lazer enquanto milhões de pessoas ainda passam fome, moram nas ruas e sofrem com as mudanças climáticas, fica claro que há uma inversão de prioridades.

Além disso, o lançamento constante de satélites e foguetes está gerando toneladas de lixo espacial ao redor da Terra, o que pode causar acidentes graves no futuro. Para conciliar o avanço científico com a responsabilidade social, os governos e agências espaciais devem criar leis internacionais para controlar o lixo espacial e direcionar as pesquisas espaciais para tecnologias que ajudem a resolver problemas urgentes na Terra, como o monitoramento ambiental e a melhoria das comunicações.`],
  ["Espécies em extinção e equilíbrio ecológico: desafios para a conservação da fauna brasileira", "Meio ambiente", "", `O Brasil possui uma das maiores biodiversidades do mundo, mas dezenas de espécies da nossa fauna estão ameaçadas de extinção por causa da ação humana. A perda desses animais não é apenas uma tristeza ambiental, mas uma ameaça direta ao equilíbrio ecológico que sustenta a vida no planeta.

A destruição de biomas como a Amazônia, o Cerrado e o Pantanal pelas queimadas e pelo avanço ilegal da agropecuária acaba com o habitat natural de animais como a onça-pintada, o lobo-guará e a arara-azul. Somado a isso, o tráfico de animais silvestres retira milhões de bichos da natureza todos os anos para serem vendidos ilegalmente, causando a morte da maioria deles no transporte.

Quando uma espécie desaparece, toda a cadeia alimentar é afetada, o que provoca o aumento de pragas, prejudica a polinização das plantas e afeta até a produção de alimentos humanos. Para conservar a fauna brasileira, o governo precisa fortalecer órgãos como o Ibama, aumentar as penas para o tráfico de animais e criar corredores ecológicos que protejam as áreas de reprodução das espécies ameaçadas.`],
  ["Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente", "Agronegócio e sustentabilidade", "", `O agronegócio é um dos principais motores da economia brasileira, sendo responsável por gerar empregos e alimentar milhões de pessoas no Brasil e no mundo. No entanto, para garantir um futuro sustentável, o país precisa encontrar o equilíbrio entre aumentar a produção de alimentos e preservar o meio ambiente.

Grande parte do problema atual ocorre porque muitos produtores ainda utilizam métodos predatórios, como o desmatamento ilegal para abrir pastos e o uso exagerado de agrotóxicos que contaminam o solo e os rios. Esse modelo de produção sem cuidado ambiental acaba prejudicando o próprio campo, pois destrói a biodiversidade e altera o regime de chuvas, causando secas que geram prejuízos nas colheitas.

É totalmente possível produzir com força sem destruir a natureza, utilizando tecnologias de agricultura sustentável e recuperando áreas já degradadas em vez de derrubar novas florestas. Para alcançar esse equilíbrio respeitando os direitos humanos e ambientais, o governo deve oferecer incentivos fiscais e crédito mais barato apenas para os produtores que seguirem as leis ambientais, além de fiscalizar com rigor quem desmata ilegalmente ou explora trabalhadores no campo.`],
  ["Obsolescência tecnológica e descarte de resíduos eletrônicos: desafios para a sustentabilidade no Brasil", "Sustentabilidade", "", `A tecnologia evolui cada vez mais rápido e todos os anos surgem novos modelos de celulares, computadores e eletrodomésticos, fazendo com que os aparelhos antigos pareçam ultrapassados em pouco tempo. Esse fenômeno, ligado à obsolescência programada, gera uma montanha de lixo eletrônico que representa um grande desafio para a sustentabilidade no Brasil.

Muitas empresas fabricam produtos feitos para durar pouco ou param de enviar atualizações de software de propósito para obrigar o consumidor a comprar um aparelho novo. O grande problema é que a maioria da população não sabe onde descartar celulares, pilhas e baterias velhas, acabando por jogá-los no lixo comum, onde liberam metais pesados como chumbo e mercúrio que contaminam o solo e a água.

Além dos danos à natureza e à saúde das pessoas que vivem perto de lixões, o Brasil desperdiça materiais valiosos que poderiam ser reciclados e reaproveitados na indústria. Para resolver esse problema, o governo precisa fiscalizar o cumprimento da Política Nacional de Resíduos Sólidos, obrigando as fabricantes a criarem pontos de coleta acessíveis em todas as cidades e promovendo campanhas educativas sobre o descarte correto.`],
  ["Migração e acolhimento: desafios da convivência em contextos globais", "Migração", "", `Guerras, crises econômicas e desastres climáticos têm forçado milhões de pessoas a deixarem seus países de origem em busca de segurança e condições dignas de vida. No entanto, ao chegarem a novos destinos, os imigrantes e refugiados enfrentam grandes desafios de acolhimento e convivência na sociedade.

Muitas vezes, os estrangeiros são recebidos com preconceito e xenofobia por parte da população local, que os enxerga erroneamente como uma ameaça aos empregos ou como culpados pelos problemas sociais do país. Além da barreira do idioma, a dificuldade para validar diplomas e conseguir documentos faz com que muitos imigrantes acabem aceitando trabalhos informais e mal remunerados, vivendo em situações precárias.

Tratar seres humanos com rejeição fere os princípios básicos dos direitos humanos e impede que esses trabalhadores contribuam para o desenvolvimento do país que os recebe. Para melhorar a convivência e garantir um acolhimento digno, o governo precisa agilizar a regularização documental dos imigrantes e oferecer cursos gratuitos de língua portuguesa e qualificação profissional, enquanto as escolas devem trabalhar o respeito à diversidade cultural.`],
  ["El Niño e mudanças climáticas: desafios para a preparação da sociedade diante de eventos extremos", "Clima", "", `O fenômeno natural El Niño, que aquece as águas do Oceano Pacífico e altera o clima no mundo todo, sempre existiu, mas seus efeitos estão se tornando muito mais destrutivos por causa das mudanças climáticas causadas pelo ser humano. Diante de eventos extremos cada vez mais frequentes, o grande desafio da sociedade é se preparar para evitar tragédias.

No Brasil, a combinação do El Niño com o aquecimento global provoca ondas de calor insuportáveis, secas severas no Norte e Nordeste e chuvas torrenciais no Sul do país. O problema é que nossas cidades não têm infraestrutura preparada para aguentar esses extremos, sofrendo com falta de drenagem urbana, ocupação desordenada em áreas de risco e falta de sistemas eficientes de alerta para a população.

Quando o poder público age apenas depois que o desastre já aconteceu, o resultado são milhares de pessoas desabrigadas, mortes evitáveis e prejuízos bilionários para a economia. Para enfrentar esse desafio, os governos federal, estaduais e municipais precisam investir em prevenção, realizando obras de infraestrutura, retirando famílias de áreas de risco com moradia digna e fortalecendo a Defesa Civil para agir rápido antes das tempestades e secas.`],
  ["O respeito às diferenças como caminho para a superação dos conflitos sociais na sociedade contemporânea", "Convivência social", "", `De acordo com o filósofo Kant, o respeito é um subproduto da moral humana, fundamental para que possamos viver em comunidade sem destruir uns aos outros. No entanto, na sociedade contemporânea, o respeito às diferenças parece estar cada vez mais distante, sendo substituído pela polarização, pelo preconceito e pelos conflitos sociais.

Assim como no filme Sky High, onde a sociedade é dividida em grupos e quem é diferente acaba sendo marginalizado e maltratado pelo grupo dominante, na vida real as pessoas costumam se fechar em bolhas sociais e atacar quem pensa, se veste ou vive de forma diferente. As redes sociais amplificam esse comportamento, incentivando discursos de ódio contra minorias e transformando qualquer divergência de opinião em uma guerra verbal ou até física.

A falta de respeito gera exclusão, violência e sérios problemas psicológicos em quem é alvo constante de discriminação e intolerância. Para superar esses conflitos sociais, precisamos ensinar o pensamento crítico e a empatia às pessoas principalmente na fase escolar, para que os jovens aprendam a dialogar, respeitar a diversidade e fazer suas próprias escolhas sem serem influenciados pelo ódio de grupos sociais.`]
].map(([titulo, tema, serie, texto]) => ({ titulo, tema, serie, texto }));

/* Quiz "Você me conhece?": p = pergunta, o = opções, c = número da opção certa (0 = primeira) */
const QUIZ = [
  { p: "Onde eu enfiei as letrinhas de EVA na pré-escola?", o: ["Na mochila", "No nariz", "Na boca"], c: 1 },
  { p: "Quais jogos eu jogava com a psicóloga da escola?", o: ["Xadrez e damas", "Só videogame", "Uno, truco e dominó"], c: 2 },
  { p: "Do 1º ao 3º ano, quem trabalhava na minha escola?", o: ["A minha mãe", "O meu pai", "A minha avó"], c: 0 },
  { p: "O que eu fazia na maioria das aulas online?", o: ["Anotava tudo", "Dormia ou jogava", "Ajudava a turma"], c: 1 }
];

/* =====================================================================
   2) COMPORTAMENTO – não precisa mexer daqui para baixo
   ===================================================================== */

const $ = (s) => document.querySelector(s);
const criar = (tag, classe, texto) => {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto) e.textContent = texto;
  return e;
};
const paragrafos = (t) => t.trim().split(/\n\s*\n/).map((p) => criar("p", "", p.trim()));
const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
const ler = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
const gravar = (k, v) => { try { localStorage.setItem(k, v); } catch {} };

/* ---- Confete ---- */
function confete(n = 80) {
  if (reduz) return;
  const cores = ["#FFC83D", "#FF7A9C", "#3A5BFF", "#6EE7B7", "#ffffff"];
  for (let k = 0; k < n; k++) {
    const p = criar("i", "confete");
    p.style.cssText = `left:${Math.random() * 100}vw;background:${cores[k % 5]}`;
    document.body.append(p);
    p.animate(
      [{ transform: "translateY(-10vh) rotate(0)" },
       { transform: `translate(${Math.random() * 200 - 100}px,105vh) rotate(${Math.random() * 900}deg)` }],
      { duration: 1800 + Math.random() * 1800, delay: Math.random() * 300, easing: "cubic-bezier(.2,.6,.4,1)" }
    ).onfinish = () => p.remove();
  }
}

/* ---- Hero: nome, frases digitadas, contagem, figurinhas ---- */
function hero() {
  const h = $("#nome");
  h.textContent = "";
  let i = 0;
  CONFIG.nome.split(" ").forEach((palavra, k, todas) => {
    const w = criar("span", "palavra");
    [...palavra].forEach((c) => { const l = criar("span", "letra", c); l.style.setProperty("--i", i++); w.append(l); });
    h.append(w);
    if (k < todas.length - 1) h.append(" ");
  });
  document.title = `${CONFIG.nome} – Memórias e Redações`;

  const el = $("#digita");
  let f = 0, j = 0, apaga = false;
  if (reduz) el.textContent = CONFIG.frases[0];
  else (function passo() {
    const frase = CONFIG.frases[f];
    el.textContent = frase.slice(0, j);
    if (!apaga && j === frase.length) { apaga = true; return setTimeout(passo, 1600); }
    if (apaga && j === 0) { apaga = false; f = (f + 1) % CONFIG.frases.length; }
    j += apaga ? -1 : 1;
    setTimeout(passo, apaga ? 30 : 70);
  })();

  const box = $("#contagem"), alvo = new Date(CONFIG.formatura);
  const tic = () => {
    const ms = alvo - Date.now();
    if (ms <= 0) { box.textContent = "Já somos formados! 🎓"; return; }
    const s = Math.floor(ms / 1000);
    box.replaceChildren(...[["dias", Math.floor(s / 86400)], ["horas", Math.floor(s % 86400 / 3600)],
      ["min", Math.floor(s % 3600 / 60)], ["seg", s % 60]].map(([r, n]) => {
      const d = criar("div"); d.append(criar("b", "", String(n).padStart(2, "0")), criar("small", "", r)); return d;
    }));
  };
  tic(); setInterval(tic, 1000);

  $("#festa").addEventListener("click", () => confete(120));

  document.querySelectorAll(".fig").forEach((fig) => {
    fig.addEventListener("pointerdown", (e) => {
      fig.setPointerCapture(e.pointerId);
      fig.classList.add("pega");
      const sx = e.clientX - fig.offsetLeft, sy = e.clientY - fig.offsetTop;
      const mover = (ev) => { fig.style.left = ev.clientX - sx + "px"; fig.style.top = ev.clientY - sy + "px"; };
      const soltar = () => { fig.classList.remove("pega"); fig.removeEventListener("pointermove", mover); fig.removeEventListener("pointerup", soltar); };
      fig.addEventListener("pointermove", mover);
      fig.addEventListener("pointerup", soltar);
    });
  });
}

/* ---- Trilha de memórias ---- */
function trilha() {
  const nav = $("#estacoes"), painel = $("#painel");
  nav.style.setProperty("--n", MEMORIAS.length);
  MEMORIAS.forEach((m, i) => {
    const b = criar("button", "estacao");
    b.type = "button";
    b.append(criar("span", "ico", m.icone), criar("small", "", m.rotulo));
    b.addEventListener("click", () => mostrar(i));
    nav.append(b);
  });

  function polaroid(x) {
    const fig = criar("figure", "polaroid");
    const img = new Image();
    img.src = x.src; img.alt = x.legenda; img.loading = "lazy";
    img.onerror = () => { fig.classList.add("sem-foto"); fig.append(criar("span", "", `Adicione a foto em ${x.src}`)); };
    fig.append(img, criar("figcaption", "", x.legenda));
    fig.addEventListener("click", () => {
      if (fig.classList.contains("sem-foto")) return;
      $("#foto-img").src = x.src; $("#foto-img").alt = x.legenda;
      $("#foto-leg").textContent = x.legenda;
      $("#foto").showModal();
    });
    return fig;
  }

  function mostrar(i) {
    const m = MEMORIAS[i];
    nav.querySelectorAll(".estacao").forEach((b, k) => {
      b.classList.toggle("ativa", k === i);
      b.classList.toggle("feita", k < i);
      b.setAttribute("aria-pressed", k === i);
    });
    nav.style.setProperty("--p", i / (MEMORIAS.length - 1));
    const c = criar("div", "conteudo");
    c.append(criar("h3", "", m.etapa), criar("p", "quando", `${m.periodo} – ${m.escola}`), ...paragrafos(m.texto));
    const notas = criar("div", "notas");
    m.causos.forEach((t) => notas.append(criar("p", "nota", t)));
    const med = criar("p", "medalha");
    med.append(criar("b", "", "🏅 Desafio superado: "), m.desafio);
    const fotos = criar("div", "polaroids");
    m.fotos.forEach((x) => fotos.append(polaroid(x)));
    c.append(criar("h4", "", "Causos e curiosidades"), notas, med, fotos);
    painel.replaceChildren(c);
  }
  mostrar(0);
}

/* ---- Redações ---- */
const favoritas = new Set(JSON.parse(ler("favoritas") || "[]"));
const leitor = $("#leitor");
let atual = 0, tamanho = 1.1;

function listar(filtro = "") {
  const grade = $("#grade");
  const q = filtro.trim().toLowerCase();
  const cartoes = [];
  REDACOES.forEach((r, i) => {
    if (q && !`${r.titulo} ${r.tema}`.toLowerCase().includes(q)) return;
    const b = criar("button", "cartao");
    b.type = "button";
    b.append(criar("span", "num", `Redação ${String(i + 1).padStart(2, "0")}`), criar("strong", "", r.titulo), criar("small", "", r.tema));
    if (favoritas.has(i)) b.append(criar("span", "coracao", "♥"));
    b.addEventListener("click", () => abrir(i));
    cartoes.push(b);
  });
  grade.replaceChildren(...(cartoes.length ? cartoes : [criar("p", "vazio", "Nenhuma redação encontrada. Tente outra palavra.")]));
}

function abrir(i) {
  atual = i;
  const r = REDACOES[i];
  const minutos = Math.max(1, Math.round(r.texto.split(/\s+/).length / 180));
  $("#leitor-titulo").textContent = r.titulo;
  $("#leitor-meta").textContent = [r.serie, `Tema: ${r.tema}`, `leitura de ${minutos} min`].filter(Boolean).join(" – ");
  const corpo = $("#leitor-texto");
  corpo.replaceChildren(...paragrafos(r.texto));
  corpo.style.setProperty("--fs", tamanho + "rem");
  corpo.scrollTop = 0;
  $("#posicao").textContent = `${i + 1} de ${REDACOES.length}`;
  $("#anterior").disabled = i === 0;
  $("#proxima").disabled = i === REDACOES.length - 1;
  const fav = favoritas.has(i);
  $("#fav").setAttribute("aria-pressed", fav);
  $("#fav").textContent = fav ? "♥ Favorita" : "♡ Favoritar";
  if (!leitor.open) leitor.showModal();
}

function redacoes() {
  listar();
  $("#busca").addEventListener("input", (e) => listar(e.target.value));
  $("#sorteio").addEventListener("click", () => abrir(Math.floor(Math.random() * REDACOES.length)));
  $("#anterior").addEventListener("click", () => atual > 0 && abrir(atual - 1));
  $("#proxima").addEventListener("click", () => atual < REDACOES.length - 1 && abrir(atual + 1));
  $("#menos").addEventListener("click", () => { tamanho = Math.max(0.9, tamanho - 0.15); abrir(atual); });
  $("#mais").addEventListener("click", () => { tamanho = Math.min(1.8, tamanho + 0.15); abrir(atual); });
  $("#fav").addEventListener("click", () => {
    favoritas.has(atual) ? favoritas.delete(atual) : favoritas.add(atual);
    gravar("favoritas", JSON.stringify([...favoritas]));
    abrir(atual); listar($("#busca").value);
  });
  document.addEventListener("keydown", (e) => {
    if (!leitor.open) return;
    if (e.key === "ArrowLeft" && atual > 0) abrir(atual - 1);
    if (e.key === "ArrowRight" && atual < REDACOES.length - 1) abrir(atual + 1);
  });
}

/* ---- Quiz ---- */
function quiz() {
  const box = $("#quiz");
  let q = 0, pontos = 0;
  (function tela() {
    box.replaceChildren();
    if (q >= QUIZ.length) {
      const ganhou = pontos === QUIZ.length;
      const b = criar("button", "btn", "Jogar de novo");
      b.addEventListener("click", () => { q = 0; pontos = 0; tela(); });
      box.append(criar("h3", "", `Você acertou ${pontos} de ${QUIZ.length}!`),
                 criar("p", "", ganhou ? "Você me conhece de verdade! 🎉" : "Quase lá. Que tal tentar de novo?"), b);
      if (ganhou) confete(140);
      return;
    }
    const item = QUIZ[q];
    const opcoes = criar("div", "opcoes");
    item.o.forEach((texto, k) => {
      const b = criar("button", "opcao", texto);
      b.type = "button";
      b.addEventListener("click", () => {
        opcoes.querySelectorAll("button").forEach((x, n) => { x.disabled = true; if (n === item.c) x.classList.add("certa"); });
        if (k === item.c) pontos++; else b.classList.add("errada");
        setTimeout(() => { q++; tela(); }, 1100);
      });
      opcoes.append(b);
    });
    box.append(criar("p", "qn", `Pergunta ${q + 1} de ${QUIZ.length}`), criar("h3", "", item.p), opcoes);
  })();
}

/* ---- Geral ---- */
document.querySelectorAll("dialog").forEach((d) => {
  d.addEventListener("click", (e) => { if (e.target === d || e.target.hasAttribute("data-fechar")) d.close(); });
});
addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  $("#lapis").style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
}, { passive: true });

hero();
trilha();
redacoes();
quiz();
