window.onload = function () {
    montData(data)
    window.localStorage.setItem("teste", "jhonata")
}


function montData(data) {
    console.log(data)
    //href="./Materia.html"
    const lista = data.categorias["tecnologia"].map(item => `
        <div class="card" id="card">
            <a onclick="saveContentOnStorage${item.id}()" href="./Materia.html" id="hrefcard">
                <img src="${item.img}" class="card-img-top" id="img-background" alt="...">
                <div class="card-body" id="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                </div>
            </a>
        </div>
  `).join('')
    document.getElementById('news').innerHTML = lista
    
}

function saveContentOnStoragetec1() {
    let materia = data.categorias.tecnologia[0]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragetec2() {
    let materia = data.categorias.tecnologia[1]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragetec3() {
    let materia = data.categorias.tecnologia[2]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragetec4() {
    let materia = data.categorias.tecnologia[3]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragetec5() {
    let materia = data.categorias.tecnologia[4]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragetec6() {
    let materia = data.categorias.tecnologia[5]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragetec7() {
    let materia = data.categorias.tecnologia[6]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragetec8() {
    let materia = data.categorias.tecnologia[7]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragetec9() {
    let materia = data.categorias.tecnologia[8]
    localStorage.setItem("materia", JSON.stringify(materia))
}

const data = {
    categorias: {
        tecnologia: [
            {
                id: "tec1",
                title: "NVIDIA promete revolucionar conceito de metaverso com avatares tecnol??gicos",
                description: "A corrida pelo desenvolvimento no novo mundo digital come??ou",
                font: "canaltech",
                link: "https://canaltech.com.br/inovacao/nvidia-promete-revolucionar-conceito-de-metaverso-com-avatares-tecnologicos-201269/",
                img: "/src/img/Nvidiateste.jpg",
                content: "A NVIDIA anunciou nesta ter??a-feira (9) o lan??amento da sua plataforma tecnol??gica para cria????o de avatares interativos baseados em intelig??ncia artificial. O Omniverse Avatar pretende entregar personagens altamente detalhados com gr??ficos 3D e Ray Tracing que poder??o ver, falar, conversar e interagir com pessoas de forma natural."

            },
            {
                id: "tec2",
                title: "Microsoft anuncia Windows 11 SE, focado no mercado educacional",
                description: "Sistema operacional voltado para o mercado educacional",
                font: "tecmundo",
                link: "https://www.tecmundo.com.br/software/228405-microsoft-anuncia-windows-11-focado-mercado-educacional.htm",
                img: "/src/img/Win_teste1.jpg",
                content: "A Microsoft anunciou nesta ter??a-feira (9) o lan??amento do Windows 11 SE, sistema operacional voltado para o mercado educacional. Focado especialmente para estudantes do ensino fundamental e m??dio, Windows 11 SE deve ser mais intuitivo e f??cil de mexer. Segundo a empresa, o SO foi projetado para atender ??s observa????es de professores e profissionais de TI das escolas."

            },
            {
                id: "tec3",
                title: "5 sites que oferecem cursos gratuitos de tecnologia",
                description: "Conhe??a 5 sites que oferecem cursos gratuitos de tecnologia",
                font: "tecnoblog",
                link: "https://tecnoblog.net/529961/5-sites-que-oferecem-cursos-gratuitos-de-tecnologia/",
                img: "/src/img/curso_teste1.jpg",
                content: "Com o mercado de trabalho sempre exigindo curr??culos cada vez mais completos, cabe ?? pessoa se desenvolver e se aprimorar diariamente. Dessa forma, ?? interessante conhecer sites que oferecem cursos gratuitos de tecnologia para garantir o ganho de conhecimento constante. Tudo fica ainda mais interessante se podem ser realizados no conforto de seu lar. Nesta lista, separei cinco op????es variadas. Confira!"

            },
            {
                id: "tec4",
                title: "Professor da UnB recebe pr??mio de inova????o",
                description: "Nanotecnologia na agricultura",
                font: "g1",
                link: "https://g1.globo.com/df/distrito-federal/noticia/2021/11/08/professor-da-unb-recebe-premio-de-inovacao-por-biofertilizante-que-usa-nanotecnologia-na-agricultura.ghtml",
                img: "/src/img/Nano_teste1.jpg",
                content: "Brenno, de 43 anos, explica que o produto que leva o nome da UnB ?? posi????o de destaque no evento nacional usa nanotecnologia ??? part??culas pequenas que n??o s??o vis??veis a olho nu ??? aplicada ?? agricultura. Formado em qu??mica, o pesquisador ?? p??s-doutor em biotecnologia molecular e celular."

            },
            {
                id: "tec5",
                title: "Bitcoin bate seu pre??o hist??rico e alcan??a US$ 68 mil",
                description: "Bitcons finalmente alcan??ou uma nova alta hist??rica",
                font: "tecmundo",
                link: "https://www.tecmundo.com.br/mercado/228361-bitcoin-bate-preco-historico-alcanca-us-68-mil.htm",
                img: "/src/img/bit_teste1.jpg",
                content: "Em forte movimento de alta, o Bitcoin (BTC) retornou ao patamar dos US$ 66 mil por unidade no come??o da semana e finalmente alcan??ou uma nova alta hist??rica, chegando em US$ 68 mil nesta ter??a-feira. A repentina valoriza????o, que come??ou ainda na segunda-feira (8), tamb??m impulsionou algumas das principais criptomoedas alternativas, ou altcoins, como a Cardano (ADA) e Ether (ETH), o token nativo da rede Ethereum, que j?? est?? valendo US$ 4,8 mil."

            },
            {
                id: "tec6",
                title: "O que ?? blockchain? ",
                description: "Conhe??a a tecnologia que torna as transa????es com criptos poss??veis",
                font: "infomoney",
                link: "https://www.infomoney.com.br/guias/blockchain/",
                img: "/src/img/Block_teste1.jpg",
                content: "A blockchain nasceu com o Bitcoin (BTC) e continua sendo um dos pilares da primeira criptomoeda do mundo. Com o tempo, no entanto, tamb??m tomou vida pr??pria e come??ou a andar sozinha, explorando outros mercados."

            },
            {
                id: "tec7",
                title: "Brasil est?? entre os dez pa??ses com maior quantidade de cibercrimes no mundo",
                description: "Crime digital ?? uma amea??a da nova era",
                font: "tudocelular",
                link: "https://www.tudocelular.com/seguranca/noticias/n181432/brasil-maior-quantidade-cibercrimes-mundo.html",
                img: "/src/img/crime_teste1.jpg",
                content: "Um relat??rio da empresa de seguran??a digital NSFOCUS colocou o Brasil em nono lugar na lista das dez na????es mais atuantes em cibercrimes no mundo. Os dados revelam que o pa??s saltou da 15?? posi????o em 2019 para figurar entre os l??deres de ataques hacker, na frente do Reino Unido e atr??s da Alemanha."

            },
            {
                id: "tec8",
                title: "Nubank libera cadastro do NuS??cios",
                description: "O Nubank come??ou a permitir o cadastro de milh??es de clientes selecionados no programa NuS??cios",
                font: "tecnoblog",
                link: "https://tecnoblog.net/530687/nubank-libera-cadastro-do-nusocios-para-receber-acao-de-graca-apos-ipo/",
                img: "/src/img/Nu_teste1.jpg",
                content: "A partir desta ter??a-feira (9), clientes do Nubank j?? podem se cadastrar para receber seu ???pedacinho??? da fintech de gra??a. O programa NuS??cios foi lan??ado hoje pelo banco digital para oferecer um BDR, t??tulo equivalente a uma fra????o de a????o negociada na Bolsa de Valores, a milh??es de usu??rios selecionados. Se voc?? ?? uma dessas pessoas, um grande banner vai aparecer no topo da tela inicial do aplicativo do Nubank."

            },
            {
                id: "tec9",
                title: "Clientes do Banco Inter reclamam de erro",
                description: "Banco Inter prometeu cart??o Black a quem cumprisse todas as miss??es de sua Inter Week de investimentos",
                font: "tecnoblog",
                link: "https://tecnoblog.net/530194/clientes-do-banco-inter-reclamam-de-erro-em-promocao-que-dava-cartao-black/",
                img: "/src/img/inter_teste1.jpg",
                content: "O Banco Inter faz anualmente um evento chamado Inter Week, uma semana com uma s??rie de lives sobre investimentos. O maior chamariz, por??m, ?? a promo????o que d?? cashback em compras ou um upgrade de cart??o de cr??dito. Para ganhar, o cliente precisa aplicar seu dinheiro em produtos distribu??dos pela empresa ??? cada opera????o gera pontos, e o pr??mio depende do placar final. S?? que muita gente est?? reclamado que a companhia n??o computou corretamente sua participa????o."

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