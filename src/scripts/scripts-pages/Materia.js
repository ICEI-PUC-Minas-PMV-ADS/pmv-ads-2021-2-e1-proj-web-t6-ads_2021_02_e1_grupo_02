window.onload = function () {
    let content = JSON.parse(localStorage.getItem('materia'))
    montData(content)
}


function montData(data) {
    let avatar = data.font.substr(0,1).toUpperCase()

    window.history.replaceState('object or string', 'Title', `?${data.title}`)
    document.getElementById('title').innerHTML = data.title
    document.getElementById('description').innerHTML = data.description
    document.getElementById('font').innerHTML = `<a target="_blank" class="font-link">Fonte: ${data.font}</a>`
    document.getElementById('materia').innerHTML = data.content
    document.getElementById('leiamais').innerHTML = `<a style="color: #031738;" href="${data.link}"><p style="text-align: center; font-size: 25px; font-weight: bolder;">Leia Mais</p></a>`
    document.getElementById('logoAvatar').innerHTML = avatar
    
}