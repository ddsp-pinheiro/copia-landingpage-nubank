let cpf = document.querySelector('#cpf')
let alert = document.querySelector('#alert')
let alerti = document.querySelector('#alerti')
let cpfOk = false

function validaCpf() {
    let txtCpf = document.querySelector('#txtCpf')
    if (cpf.value.length < 11 || cpf.value.length >= 12) {
        txtCpf.innerHTML = 'Precisamos de um CPF válido.'
        txtCpf.style.color = 'red'
    } else {
        txtCpf.innerHTML = ' '
        txtNome.style.color = 'white'
        cpfOk = true
    }
}

function aparece(){
    alert.style.display= 'block'

}

function some(){
    alert.style.display= 'none'
}


