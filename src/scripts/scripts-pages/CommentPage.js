window.onload = function () {
    let content = JSON.parse(localStorage.getItem('materia'))
    montData(content)
}

function montData(data) {
    console.log(">>>>>>>>>>>>.",data)
    document.getElementById('title').innerHTML = data.title
 
}