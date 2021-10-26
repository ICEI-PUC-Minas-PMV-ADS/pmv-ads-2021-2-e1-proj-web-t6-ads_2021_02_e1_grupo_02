function getUserData() {
    let email = document.getElementById('exampleInputEmail1').value
    let password = document.getElementById('exampleInputPassword1').value
    let userData = {
        email,
        password
    }
    if(email && password) {
        alert('CADASTRADO COM SUCESSO!!!')
        console.log(userData)
    } else {
        alert('PREENCHA TODOS OS CAMPOS!!!')
    }
}

window.onload = function () {
var div = document.getElementById('exampleCheck1')
    div.addEventListener('click', function () {
        var senha = document.getElementById("exampleInputPassword1")
        if(senha && senha.type === "password") {
            senha.type = "text"
        } else {
            senha.type = "password"
        }
    }, false)
}