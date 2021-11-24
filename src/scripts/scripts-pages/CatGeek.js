window.onload = function () {
    montData(data)
}


function montData(data) {
    console.log(data)
    const lista = data.categorias["geek"].map(item => `
        <div class="card" id="card">
            <a href="#" target="_blank" id="hrefcard">
                <img src="https://source.unsplash.com/random/690x500?x=1" class="card-img-top" id="img-background" alt="...">
                <div class="card-body" id="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                </div>
            </a>
        </div>
  `).join('')
    document.getElementById('news').innerHTML = lista
    
}

const data = {
    categorias: {
        tecnologia: [
            {
                id: "tec1",
                title: "NVIDIA promete revolucionar conceito de metaverso com avatares tecnológicos",
                description: "A corrida pelo desenvolvimento no novo mundo digital começou",
                font: "https://canaltech.com.br/",
                link: "https://canaltech.com.br/inovacao/nvidia-promete-revolucionar-conceito-de-metaverso-com-avatares-tecnologicos-201269/",
                img: "",
                content: "A NVIDIA anunciou nesta terça-feira (9) o lançamento da sua plataforma tecnológica para criação de avatares interativos baseados em inteligência artificial. O Omniverse Avatar pretende entregar personagens altamente detalhados com gráficos 3D e Ray Tracing que poderão ver, falar, conversar e interagir com pessoas de forma natural."

            },
            {
                id: "tec2",
                title: "Microsoft anuncia Windows 11 SE, focado no mercado educacional",
                description: "Sistema operacional voltado para o mercado educacional",
                font: "https://www.tecmundo.com.br/",
                link: "https://www.tecmundo.com.br/software/228405-microsoft-anuncia-windows-11-focado-mercado-educacional.htm",
                img: "",
                content: "A Microsoft anunciou nesta terça-feira (9) o lançamento do Windows 11 SE, sistema operacional voltado para o mercado educacional. Focado especialmente para estudantes do ensino fundamental e médio, Windows 11 SE deve ser mais intuitivo e fácil de mexer. Segundo a empresa, o SO foi projetado para atender às observações de professores e profissionais de TI das escolas."

            },
            {
                id: "tec3",
                title: "5 sites que oferecem cursos gratuitos de tecnologia",
                description: "Conheça 5 sites que oferecem cursos gratuitos de tecnologia",
                font: "https://tecnoblog.net/",
                link: "https://tecnoblog.net/529961/5-sites-que-oferecem-cursos-gratuitos-de-tecnologia/",
                img: "",
                content: "Com o mercado de trabalho sempre exigindo currículos cada vez mais completos, cabe à pessoa se desenvolver e se aprimorar diariamente. Dessa forma, é interessante conhecer sites que oferecem cursos gratuitos de tecnologia para garantir o ganho de conhecimento constante. Tudo fica ainda mais interessante se podem ser realizados no conforto de seu lar. Nesta lista, separei cinco opções variadas. Confira!"

            },
            {
                id: "tec4",
                title: "Professor da UnB recebe prêmio de inovação",
                description: "Nanotecnologia na agricultura",
                font: "https://g1.globo.com/",
                link: "https://g1.globo.com/df/distrito-federal/noticia/2021/11/08/professor-da-unb-recebe-premio-de-inovacao-por-biofertilizante-que-usa-nanotecnologia-na-agricultura.ghtml",
                img: "",
                content: "Brenno, de 43 anos, explica que o produto que leva o nome da UnB à posição de destaque no evento nacional usa nanotecnologia – partículas pequenas que não são visíveis a olho nu – aplicada à agricultura. Formado em química, o pesquisador é pós-doutor em biotecnologia molecular e celular."

            },
            {
                id: "tec5",
                title: "Bitcoin bate seu preço histórico e alcança US$ 68 mil",
                description: "Bitcons finalmente alcançou uma nova alta histórica",
                font: "https://www.tecmundo.com.br/",
                link: "https://www.tecmundo.com.br/mercado/228361-bitcoin-bate-preco-historico-alcanca-us-68-mil.htm",
                img: "",
                content: "Em forte movimento de alta, o Bitcoin (BTC) retornou ao patamar dos US$ 66 mil por unidade no começo da semana e finalmente alcançou uma nova alta histórica, chegando em US$ 68 mil nesta terça-feira. A repentina valorização, que começou ainda na segunda-feira (8), também impulsionou algumas das principais criptomoedas alternativas, ou altcoins, como a Cardano (ADA) e Ether (ETH), o token nativo da rede Ethereum, que já está valendo US$ 4,8 mil."

            },
            {
                id: "tec6",
                title: "O que é blockchain? ",
                description: "Conheça a tecnologia que torna as transações com criptos possíveis",
                font: "https://www.infomoney.com.br/",
                link: "https://www.infomoney.com.br/guias/blockchain/",
                img: "",
                content: "A blockchain nasceu com o Bitcoin (BTC) e continua sendo um dos pilares da primeira criptomoeda do mundo. Com o tempo, no entanto, também tomou vida própria e começou a andar sozinha, explorando outros mercados."

            },
            {
                id: "tec7",
                title: "Brasil está entre os dez países com maior quantidade de cibercrimes no mundo",
                description: "Crime digital é uma ameaça da nova era",
                font: "https://www.tudocelular.com/",
                link: "https://www.tudocelular.com/seguranca/noticias/n181432/brasil-maior-quantidade-cibercrimes-mundo.html",
                img: "",
                content: "Um relatório da empresa de segurança digital NSFOCUS colocou o Brasil em nono lugar na lista das dez nações mais atuantes em cibercrimes no mundo. Os dados revelam que o país saltou da 15ª posição em 2019 para figurar entre os líderes de ataques hacker, na frente do Reino Unido e atrás da Alemanha."

            },
            {
                id: "tec8",
                title: "Nubank libera cadastro do NuSócios",
                description: "O Nubank começou a permitir o cadastro de milhões de clientes selecionados no programa NuSócios",
                font: "https://tecnoblog.net/",
                link: "https://tecnoblog.net/530687/nubank-libera-cadastro-do-nusocios-para-receber-acao-de-graca-apos-ipo/",
                img: "",
                content: "A partir desta terça-feira (9), clientes do Nubank já podem se cadastrar para receber seu “pedacinho” da fintech de graça. O programa NuSócios foi lançado hoje pelo banco digital para oferecer um BDR, título equivalente a uma fração de ação negociada na Bolsa de Valores, a milhões de usuários selecionados. Se você é uma dessas pessoas, um grande banner vai aparecer no topo da tela inicial do aplicativo do Nubank."

            },
            {
                id: "tec9",
                title: "Clientes do Banco Inter reclamam de erro",
                description: "Banco Inter prometeu cartão Black a quem cumprisse todas as missões de sua Inter Week de investimentos",
                font: "https://tecnoblog.net/",
                link: "https://tecnoblog.net/530194/clientes-do-banco-inter-reclamam-de-erro-em-promocao-que-dava-cartao-black/",
                img: "",
                content: "O Banco Inter faz anualmente um evento chamado Inter Week, uma semana com uma série de lives sobre investimentos. O maior chamariz, porém, é a promoção que dá cashback em compras ou um upgrade de cartão de crédito. Para ganhar, o cliente precisa aplicar seu dinheiro em produtos distribuídos pela empresa — cada operação gera pontos, e o prêmio depende do placar final. Só que muita gente está reclamado que a companhia não computou corretamente sua participação."

            },
          

        ],
        ciencia: [
            {
                id: "cc1",
                title: "",
                description: "",
                font: "",
                img: "",
                content: ""

            },
            {
                id: "cc2",
                title: "",
                description: "",
                font: "",
                img: "",
                content: ""

            },

        ],
        geek: [
            {
                id: "tc1",
                title: "",
                description: "",
                font: "",
                img: "",
                content: ""

            },
            {
                id: "tc2",
                title: "",
                description: "",
                font: "",
                img: "",
                content: ""

            },
        ],
        // podcast: [
        //     {
        //         id: "pd1",
        //         title: "",
        //         description: "",
        //         font: "",
        //         img: "",
        //         content: ""

        //     },
        //     {
        //         id: "pd2",
        //         title: "",
        //         description: "",
        //         font: "",
        //         img: "",
        //         content: ""

        //     },
        // ]
    }
}