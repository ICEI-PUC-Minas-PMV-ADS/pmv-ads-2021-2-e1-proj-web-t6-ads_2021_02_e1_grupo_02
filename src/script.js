
function saveContentOnStoragetec() {
    let materia = data.categorias.tecnologia[0]
    console.log("materia >>>>>>> ", materia)
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragetec1() {
    let materia = data.categorias.tecnologia[1]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragecie() {
    let materia = data.categorias.ciencia[0]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragecie1() {
    let materia = data.categorias.ciencia[1]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragecie2() {
    let materia = data.categorias.ciencia[2]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragecie3() {
    let materia = data.categorias.ciencia[3]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragegeek() {
    let materia = data.categorias.geek[0]
    localStorage.setItem("materia", JSON.stringify(materia))
}
function saveContentOnStoragegeek1() {
    let materia = data.categorias.geek[1]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragegeek2() {
    let materia = data.categorias.geek[2]
    localStorage.setItem("materia", JSON.stringify(materia))
}


const data = {
    categorias: {
        tecnologia: [
            {
                id: "tec8",
                title: "Nubank libera cadastro do NuSócios",
                description: "O Nubank começou a permitir o cadastro de milhões de clientes selecionados no programa NuSócios",
                font: "tecnoblog",
                link: "https://tecnoblog.net/530687/nubank-libera-cadastro-do-nusocios-para-receber-acao-de-graca-apos-ipo/",
                img: "/src/img/NU_teste1.jpg",
                content: "A partir desta terça-feira (9), clientes do Nubank já podem se cadastrar para receber seu “pedacinho” da fintech de graça. O programa NuSócios foi lançado hoje pelo banco digital para oferecer um BDR, título equivalente a uma fração de ação negociada na Bolsa de Valores, a milhões de usuários selecionados. Se você é uma dessas pessoas, um grande banner vai aparecer no topo da tela inicial do aplicativo do Nubank."

            },
            {
                id: "tec1",
                title: "NVIDIA promete revolucionar conceito de metaverso com avatares tecnológicos",
                description: "A corrida pelo desenvolvimento no novo mundo digital começou",
                font: "canaltech",
                link: "https://canaltech.com.br/inovacao/nvidia-promete-revolucionar-conceito-de-metaverso-com-avatares-tecnologicos-201269/",
                img: "",
                content: "A NVIDIA anunciou nesta terça-feira (9) o lançamento da sua plataforma tecnológica para criação de avatares interativos baseados em inteligência artificial. O Omniverse Avatar pretende entregar personagens altamente detalhados com gráficos 3D e Ray Tracing que poderão ver, falar, conversar e interagir com pessoas de forma natural."

            },

        ],
        ciencia: [
            {
                id: "cc9",
                title: "Tudo sobre como se termina uma pandemia",
                description: "Como pandemias chegam ao fim, segundo a ciência",
                font: "gizmodo.uol",
                link: "https://gizmodo.uol.com.br/como-pandemias-chegam-ao-fim-segundo-a-ciencia/",
                img: "/src/img/Covid_teste1.jpg",
                content: "Nas últimas semanas, algumas cidades brasileiras têm apresentado avanços na contenção dos casos de Covid-19 – graças à vacinação. E, ainda que a notícia seja animadora e você esteja pensando no ‘fim da pandemia’, alguns especialistas apontam que o momento é de cautela."
        
            },
            {
                id: "cc2",
                title: "Teoria de Eisten Calibra GPS",
                description: "Como teoria da relatividade de Einstein calibra GPS e traduz o Universo...",
                font: "https://www.uol.com.br/",
                link: "https://www.uol.com.br/tilt/noticias/redacao/2021/11/14/e--mc2-teoria-da-relatividade-calibra-gps-e-traduz-o-universo.htm",
                img: "",
                content: "A gente sabe bem que Einstein foi importantíssimo e que a sua teoria da relatividade, aquela do E = mc2, é fundamental para muita coisa. Mas explicar exatamente o que significa isso já complica um pouco. Pois é essa teoria aí, publicada há mais de 117 anos, que calibra o GPS e faz com que os motoristas não se percam por aí.... - Veja mais em https://www.uol.com.br/tilt/noticias/redacao/2021/11/14/e--mc2-teoria-da-relatividade-calibra-gps-e-traduz-o-universo.htm?cmpid=copiaecola"

            },
            {
                id: "cc3",
                title: "Objeto estranho próximo à ISS",
                description: "Astronautas da SpaceX Crew-3 viram objeto estranho próximo à ISS",
                font: "olhardigital",
                link: "https://olhardigital.com.br/2021/11/12/ciencia-e-espaco/astronautas-da-spacex-crew-3-viram-objeto-estranho-proximo-a-iss/",
                img: "/src/img/spacex_teste2.jpg",
                content: "Enquanto se aproximavam da Estação Espacial Internacional (ISS), os astronautas da missão SpaceX Crew-3, que foi lançada pela Nasa na última quarta-feira (10), avistaram um estranho objeto flutuando no espaço."

            },
            {
                id: "cc8",
                title: "Pesquisa de moscas de frutas na ONU",
                description: "Conheça a cientista baiana que pesquisa moscas de fruta na ONU",
                font: "correio24horas",
                link: "https://www.correio24horas.com.br/noticia/nid/conheca-a-cientista-baiana-que-pesquisa-moscas-de-fruta-na-onu/",
                img: "/src/img/mosca_teste2.jpg",
                content: "A bióloga e pesquisadora baiana Vanessa Dias, 36 anos, sempre soube que não poderia desperdiçar oportunidades. Foi assim quando decidiu trabalhar no McDonald’s, ainda no final do Ensino Médio, para conseguir pagar o cursinho pré-vestibular e quando se tornou bolsista de iniciação científica na Universidade Federal da Bahia (Ufba)."

            },

        ],
        geek: [
            {
                id: "geek2",
                title: "Marvel revela primeiro teaser de She-Hulk, a série da Mulher-Hulk",
                description: "Prévia mostra Jennifer Walters aprendendo a controlar poderes com ajuda de Bruce Banner",
                font: "jovemnerd",
                link: "https://jovemnerd.com.br/nerdbunker/she-hulk-marvel-primeiro-teaser-serie-mulher-hulk/",
                img: "/src/img/SheHulk_teste1.jpg",
                content: "Divulgada durante uma prévia das futuras produções do Disney+, a prévia mostra Jennifer Walters (Tatiana Maslany) equilibrando a vida de advogada e heroína. Para controlar a transformação em monstro ela conta com a ajuda do primo Bruce Banner (Mark Ruffalo), o Hulk."
        
            },
            {
                id: "geek9",
                title: "Arcane já e a série original da Netflix mais bem avaliada do IMDB",
                description: "Com a nota 9.4 e mais de 13 mil avaliações dos usuários",
                font: "https://jovemnerd.com.br/",
                link: "https://jovemnerd.com.br/nerdbunker/arcane-ja-e-a-serie-original-da-netflix-mais-bem-avaliada-do-imdb/",
                img: "",
                content: "Faz poucos dias desde que Arcane estreou, mas já está arrancando elogios de fãs de League of Legends e até de quem não conhece o jogo. E, mesmo com apenas três episódios, a produção já se tornou a série original da Netflix mais bem avaliada do IMDB. As informações são da Forbes."
            },
            {
                id: "geek1",
                title: "Harry Potter vai ganhar exibição especial em 3D nos cinemas brasileiros",
                description: "Lançamento em data única vai celebrar aniversário de 20 anos de A Pedra Filosofal",
                font: "jovemnerd",
                link: "https://jovemnerd.com.br/nerdbunker/harry-potter-exibicao-especial-3d-cinemas-brasileiros/",
                img: "/src/img/HP_teste2.jpg",
                content: "Para celebrar os 20 anos de Harry Potter e a Pedra Filosofal, o filme vai voltar aos cinemas brasileiros. Resultado de uma parceria entre a Warner Bros em parceria e o HBO Max, a comemoração será acompanhada de uma novidade: o filme será exibido em uma edição especial em 3D."
            }
        ]
    }
}