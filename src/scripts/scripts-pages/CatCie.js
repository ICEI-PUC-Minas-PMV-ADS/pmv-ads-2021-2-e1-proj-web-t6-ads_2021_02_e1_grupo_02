window.onload = function () {
    montData(data)
}


function montData(data) {
    console.log(data)    
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

function saveContentOnStoragecc1() {
    let materia = data[0]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragecc2() {
    let materia = data[1]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragecc3() {
    let materia = data[2]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragecc4() {
    let materia = data[3]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragecc5() {
    let materia = data[4]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragecc6() {
    let materia = data[5]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragecc7() {
    let materia = data[6]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragecc8() {
    let materia = data[7]
    localStorage.setItem("materia", JSON.stringify(materia))
}

function saveContentOnStoragecc9() {
    let materia = data[8]
    localStorage.setItem("materia", JSON.stringify(materia))
}

const data =  [
    {
        id: "cc1",
        title: "O céu não é o limite",
        description: "Eclipse lunar vem aí, tem asteroide por perto e mais!",
        font: "canaltech",
        link: "https://canaltech.com.br/ciencia/o-ceu-nao-e-o-limite-eclipse-lunar-vem-ai-tem-asteroide-por-perto-e-mais-201705/",
        img: "/src/img/Ecplipe_teste1.jpg",
        content: "O mais longo eclipse lunar deste século vai acontecer na próxima semana, mas já estamos nos preparando para as observações — e já você pode conferir os detalhes sobre o evento nas próximas linhas. Além disso, receberemos uma visitinha de um asteroide que passará perto da Terra em breve."

    },
    {
        id: "cc2",
        title: "Teoria de Einsten Calibra GPS",
        description: "Como teoria da relatividade de Einstein calibra GPS e traduz o Universo...",
        font: "uol",
        link: "https://www.uol.com.br/tilt/noticias/redacao/2021/11/14/e--mc2-teoria-da-relatividade-calibra-gps-e-traduz-o-universo.htm",
        img: "/src/img/albert_teste.jpg",
        content: "A gente sabe bem que Einstein foi importantíssimo e que a sua teoria da relatividade, aquela do E = mc2, é fundamental para muita coisa. Mas explicar exatamente o que significa isso já complica um pouco. Pois é essa teoria aí, publicada há mais de 117 anos, que calibra o GPS e faz com que os motoristas não se percam por aí.... - Veja mais em https://www.uol.com.br/tilt/noticias/redacao/2021/11/14/e--mc2-teoria-da-relatividade-calibra-gps-e-traduz-o-universo.htm?cmpid=copiaecola"

    },
    {
        id: "cc3",
        title: "Objeto estranho próximo à ISS",
        description: "Astronautas da SpaceX Crew-3 viram objeto estranho próximo à ISS",
        font: "olhardigital",
        link: "https://olhardigital.com.br/2021/11/12/ciencia-e-espaco/astronautas-da-spacex-crew-3-viram-objeto-estranho-proximo-a-iss/",
        img: "/src/img/spacex_teste1.jpg",
        content: "Enquanto se aproximavam da Estação Espacial Internacional (ISS), os astronautas da missão SpaceX Crew-3, que foi lançada pela Nasa na última quarta-feira (10), avistaram um estranho objeto flutuando no espaço."

    },
    {
        id: "cc4",
        title: "Robô da NASA faz descoberta inédita",
        description: "Descoberta incrível ao investigar rochas em Marte",
        font: "br-financas-yahoo",
        link: "https://br.financas.yahoo.com/noticias/robo-da-nasa-faz-descoberta-inedita-ao-investigar-rochas-em-marte-173251992.html",
        img: "/src/img/Robo_teste1.jpg",
        content: "O Perseverance está investigando as rochas da região sul de Marte desde 25 de outubro, local de interesse da equipe de cientistas. O robô tem um mecanismo no braço robótico que permite raspar camada do material, de forma a enxergar o que há dentro de sua solidez."

    },
    {
        id: "cc5",
        title: "Espécie de dinossauro com nariz exótico é descoberta na Inglaterra",
        description: "Animal viveu na Terra há 125 milhões de anos, tinha 8 metros de comprimento e pesava aproximadamente 600 kg",
        font: "noticias.r7",
        link: "https://noticias.r7.com/tecnologia-e-ciencia/especie-de-dinossauro-com-nariz-exotico-e-descoberta-na-inglaterra-11112021",
        img: "/src/img/Dinossauro_teste1.jpg",
        content: "Um cientista que faz parte do programa de doutorado da Universidade de Portsmouth, localizada em Londres, no Reino Unido, descobriu uma espécie de dinossauro com uma característica um tanto quanto diferente: um focinho extremamente grande."

    },
    {
        id: "cc6",
        title: "Tudo sobre Aurora Boreal",
        description: "O que é aurora boreal e onde ver o fenômeno no céu?",
        font: "canaltech",
        link: "https://canaltech.com.br/espaco/o-que-e-aurora-boreal-201584/",
        img: "/src/img/Aurora_teste1.jpg",
        content: "A aurora boreal é um fenômeno bastante impressionante, proporcionando um verdadeiro espetáculo de luzes coloridas no céu. Vistas da superfície as auroras já deixam qualquer observador boquiaberto e, quando vistas do espaço, são ainda mais espetaculares. Mas, afinal, o que é aurora boreal? Como se forma uma aurora boreal? E onde tem aurora boreal acontecendo em nosso planeta? É o que você descobre nesta matéria!"

    },
    {
        id: "cc7",
        title: "Covid psicológico",
        description: "Doença psicológica pode causar sintomas persistentes, diz estudo.",
        font: "uol",
        link: "https://www.uol.com.br/vivabem/noticias/rfi/2021/11/13/covid-psicologico-poderia-causar-sintomas-persistentes-diz-estudo.htm",
        img: "/src/img/Mascara_teste1.jpg",
        content: "A covid persistente seria principalmente de ordem psicológica? A sugestão feita por um estudo recente em um hospital de Paris indignou pacientes e recebeu inúmeras críticas científicas pela metodologia utilizada, destacando os inúmeros mistérios que ainda cercam esta doença."

    },
    {
        id: "cc8",
        title: "Pesquisa de moscas de frutas na ONU",
        description: "Conheça a cientista baiana que pesquisa moscas de fruta na ONU",
        font: "correio24horas",
        link: "https://www.correio24horas.com.br/noticia/nid/conheca-a-cientista-baiana-que-pesquisa-moscas-de-fruta-na-onu/",
        img: "/src/img/Cientista_mosca_teste1.jpg",
        content: "A bióloga e pesquisadora baiana Vanessa Dias, 36 anos, sempre soube que não poderia desperdiçar oportunidades. Foi assim quando decidiu trabalhar no McDonald’s, ainda no final do Ensino Médio, para conseguir pagar o cursinho pré-vestibular e quando se tornou bolsista de iniciação científica na Universidade Federal da Bahia (Ufba)."

    },
    {
        id: "cc9",
        title: "Tudo sobre como se termina uma pandemia",
        description: "Como pandemias chegam ao fim, segundo a ciência",
        font: "gizmodo.uol",
        link: "https://gizmodo.uol.com.br/como-pandemias-chegam-ao-fim-segundo-a-ciencia/",
        img: "/src/img/Covid_teste1.jpg",
        content: "Nas últimas semanas, algumas cidades brasileiras têm apresentado avanços na contenção dos casos de Covid-19 – graças à vacinação. E, ainda que a notícia seja animadora e você esteja pensando no ‘fim da pandemia’, alguns especialistas apontam que o momento é de cautela."

    },

]