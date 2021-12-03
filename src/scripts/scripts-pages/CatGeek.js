window.onload = function () {
    montData(data)
}


function montData(data) {
    const lista = data.map(item => `
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

function saveContentOnStoragegeek1() {
    let materia = data[0]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragegeek2() {
    let materia = data[1]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragegeek3() {
    let materia = data[2]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragegeek4() {
    let materia = data[3]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragegeek5() {
    let materia = data[4]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragegeek6() {
    let materia = data[5]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragegeek7() {
    let materia = data[6]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragegeek18() {
    let materia = data[7]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragegeek9() {
    let materia = data[8]
    localStorage.setItem("materia", JSON.stringify(materia))
}

const data = [
    {
        id: "geek1",
        title: "Harry Potter vai ganhar exibição especial em 3D nos cinemas brasileiros",
        description: "Lançamento em data única vai celebrar aniversário de 20 anos de A Pedra Filosofal",
        font: "jovemnerd",
        link: "https://jovemnerd.com.br/nerdbunker/harry-potter-exibicao-especial-3d-cinemas-brasileiros/",
        img: "/src/img/HP_teste2.jpg",
        content: "Para celebrar os 20 anos de Harry Potter e a Pedra Filosofal, o filme vai voltar aos cinemas brasileiros. Resultado de uma parceria entre a Warner Bros em parceria e o HBO Max, a comemoração será acompanhada de uma novidade: o filme será exibido em uma edição especial em 3D."
    },
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
        id: "geek3",
        title: "Mauricio de Sousa, o pai da Turma da Mônica, vai ganhar cinebiografia",
        description: "Filme sobre a vida do quadrinista será uma parceria entre MSP e Disney",
        font: "jovemnerd",
        link: "https://jovemnerd.com.br/nerdbunker/mauricio-de-sousa-turma-da-monica-vai-ganhar-filme/",
        img: "/src/img/MauricioSousa_teste1.jpg",
        content: "O filme vai se chamar Mauricio de Sousa – O Realizador de Sonhos e será uma produção da Disney em parceria com a Mauricio de Sousa Produções. O longa terá direção de Pedro Vasconcellos e tem estreia prevista para 2023."

    },
    {
        id: "geek4",
        title: "League of Legends lança criador de avatar com visual inspirado no jogo",
        description: "Saiba como criar o seu!",
        font: "jovemnerd",
        link: "https://jovemnerd.com.br/nerdbunker/league-of-legends-lanca-criador-de-avatar/",
        img: "/src/img/lol_teste1.jpg",
        content: "A Riot Games anunciou nesta sexta-feira (12) que o site oficial de League of Legends lançou um criador de avatar. Agora, os jogadores podem criar um avatar com um estilo visual inspirado no universo do jogo, escolhendo traços faciais, penteados, roupas, planos de fundo e outros elementos."
    },
    {
        id: "geek5",
        title: "My Hero Academia: World Heroes’ Mission ganha pôster desenhado por artista da Marvel",
        description: "Ilustração de Ryan Stegman mostra Midoriya lutando contra Flect Turn",
        font: "jovemnerd",
        link: "https://jovemnerd.com.br/nerdbunker/my-hero-academia-world-heroes-misson-poster-artista-da-marvel/",
        img: "/src/img/Mha_teste1.jpg",
        content: "O novo filme de My Hero Academia ganhou um pôster inédito com arte de Ryan Stegman, artista da Marvel conhecido por desenhar HQs de Venom, Homem de Ferro e mais."
    },
    {
        id: "geek6",
        title: "Transformers: O Despertar das Feras é adiado em um ano",
        description: "",
        font: "jovemnerd",
        link: "Paramount também mudou data de novo filme de Star Trek",
        img: "/src/img/Transformers_teste1.jpg",
        content: "A Paramount anunciou algumas mudanças em seu calendário de estreias. Segundo o Deadline, o estúdio adiou o lançamento de Transformers: O Despertar das Feras de 24 de junho de 2022 para 9 de junho de 2023."

    },
    {
        id: "geek7",
        title: "Animação dos X-Men dos anos 90 vai ganhar continuação no Disney Plus",
        description: "Novo desenho tem estreia marcada para 2023",
        font: "jovemnerd",
        link: "https://jovemnerd.com.br/nerdbunker/x-men-desenho-animado-anos-90-vai-ganhar-continuacao-disney-plus/",
        img: "/src/img/xmen_teste1.jpg",
        content: "A nova produção vai se chamar X-Men ‘97 e vai continuar a história dos mutantes de onde a série da Marvel no canal Fox Kids havia parado. A previsão de lançamento no Disney+ é 2023."
    },
    {
        id: "geek8",
        title: "Brasileiro cria versão jogável de Resident Evil 4 para PS1",
        description: "Gratuita para quem quiser testar!",
        font: "jovemnerd",
        link: "https://jovemnerd.com.br/nerdbunker/brasileiro-cria-versao-jogavel-de-resident-evil-4-para-ps1/",
        img: "/src/img/resident_teste1.jpg",
        content: "Na descrição do vídeo mais recente do canal, o criador avisa que a versão ainda é inicial e, por isso, contém bugs. Ele pede que todo bug encontrado seja reportado nos comentários."
    },
    {
        id: "geek9",
        title: "Arcane já e a série original da Netflix mais bem avaliada do IMDB",
        description: "Com a nota 9.4 e mais de 13 mil avaliações dos usuários",
        font: "jovemnerd",
        link: "https://jovemnerd.com.br/nerdbunker/arcane-ja-e-a-serie-original-da-netflix-mais-bem-avaliada-do-imdb/",
        img: "/src/img/Arcane_teste2.jpg",
        content: "Faz poucos dias desde que Arcane estreou, mas já está arrancando elogios de fãs de League of Legends e até de quem não conhece o jogo. E, mesmo com apenas três episódios, a produção já se tornou a série original da Netflix mais bem avaliada do IMDB. As informações são da Forbes."
    },
]